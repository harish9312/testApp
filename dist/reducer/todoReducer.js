"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helperFunctions_1 = require("./helperFunctions");
const data = require('../data/todos.json');
function todo(state = data, action) {
    switch (action.type) {
        case 'DONE':
            let list = state.filter(item => item.id !== action.id);
            return list;
        case 'TOBEDONE':
            let doneList = [...state, helperFunctions_1.done(action.id)];
            return doneList;
        case 'MOVEUP':
            let newList = helperFunctions_1.move(action.type, action.id, state);
            return newList;
        case 'MOVEDOWN':
            let downList = helperFunctions_1.move(action.type, action.id, state);
            return downList;
        default:
            return state;
    }
}
exports.todo = todo;
//# sourceMappingURL=todoReducer.js.map