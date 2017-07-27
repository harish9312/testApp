"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const todoReducer_1 = require("./todoReducer");
const doneReducer_1 = require("./doneReducer");
exports.rootReducer = redux_1.combineReducers({
    todo: todoReducer_1.todo,
    done: doneReducer_1.done
});
//# sourceMappingURL=index.js.map