"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = require('../data/todos.json');
function mark(id) {
    let moveToDone = data.find((todo) => todo.id === id);
    return moveToDone;
}
function done(state = [], action) {
    switch (action.type) {
        case 'DONE':
            let list = [...state, mark(action.id)];
            return list;
        case 'TOBEDONE':
            let newList = state.filter(item => item.id !== action.id);
            return newList;
        default:
            return state;
    }
}
exports.done = done;
//# sourceMappingURL=doneReducer.jsx.map