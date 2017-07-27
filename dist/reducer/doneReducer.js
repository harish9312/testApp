"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helperFunctions_1 = require("./helperFunctions");
function done(state = [], action) {
    switch (action.type) {
        case 'DONE':
            let list = [...state, helperFunctions_1.mark(action.id)];
            return list;
        case 'TOBEDONE':
            let newList = state.filter(item => item.id !== action.id);
            return newList;
        default:
            return state;
    }
}
exports.done = done;
//# sourceMappingURL=doneReducer.js.map