"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doneTodo(id) {
    return {
        type: 'DONE',
        id
    };
}
exports.doneTodo = doneTodo;
function toBeDone(id) {
    return {
        type: 'TOBEDONE',
        id
    };
}
exports.toBeDone = toBeDone;
function moveUp(id) {
    return {
        type: 'MOVEUP',
        id
    };
}
exports.moveUp = moveUp;
function moveDown(id) {
    return {
        type: 'MOVEDOWN',
        id
    };
}
exports.moveDown = moveDown;
//# sourceMappingURL=index.js.map