const data = require('../data/todos.json');
import { IState } from '../../src/interfaces';

export function mark(id: number) {
    let moveToDone = data.find((todo:{id: number}) => todo.id === id);
    return moveToDone;
};

export function done(id: number) {
    let todoItem = data.find((c: { id: number }) => c.id === id);
    return todoItem;
}

export function move(type: string, id: number, state: IState[]) {

    let newList = state.filter(item => item.id !== id);
    let pos = state.findIndex((item: { id: number }) => item.id === id);

    if (type === 'MOVEUP') {
        if (pos === 0) {
            return state;
        }
        newList.splice(pos - 1, 0, data[id]);
        return newList;
    } else {
        newList.splice(pos + 1, 0, data[id]);
        return newList;
    }
}
