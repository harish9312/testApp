"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = require('../data/todos.json');
function mark(id) {
    let moveToDone = data.find((todo) => todo.id === id);
    return moveToDone;
}
exports.mark = mark;
;
function done(id) {
    let todoItem = data.find((c) => c.id === id);
    return todoItem;
}
exports.done = done;
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
exports.move = move;
//# sourceMappingURL=helperFunctions.js.map