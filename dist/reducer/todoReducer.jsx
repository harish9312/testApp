"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = require('../data/todos.json');
function done(id) {
    let todoItem = data.find((c) => c.id === id);
    return todoItem;
}
function move(type, id, state) {
    let newList = state.filter(item => item.id !== id);
    let pos = state.findIndex((item) => item.id === id);
    if (type === 'MOVEUP') {
        if (pos === 0) {
            return state;
        }
        newList.splice(pos - 1, 0, data[id]);
        return newList;
    }
    else {
        newList.splice(pos + 1, 0, data[id]);
        return newList;
    }
}
function todo(state = data, action) {
    switch (action.type) {
        case 'DONE':
            let list = state.filter(item => item.id !== action.id);
            return list;
        case 'TOBEDONE':
            let doneList = [...state, done(action.id)];
            return doneList;
        case 'MOVEUP':
            let newList = move(action.type, action.id, state);
            return newList;
        case 'MOVEDOWN':
            let downList = move(action.type, action.id, state);
            return downList;
        default:
            return state;
    }
}
exports.todo = todo;
//# sourceMappingURL=todoReducer.jsx.map