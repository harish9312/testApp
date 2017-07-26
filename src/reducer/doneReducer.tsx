import { TodoAction } from '../actions';

const data = require('../data/todos.json');

interface IState {
    id: number;
    todo: string;
}

function mark(id: number) {
    let moveToDone = data.find((todo:{id: number}) => todo.id === id);
    return moveToDone;
}

export function done(state: IState[] = [], action: TodoAction) {

    switch (action.type) {
        case 'DONE':
        let list = [...state, mark(action.id)];
        return list;

        case 'TOBEDONE':
        list = state.filter(item => item.id !== action.id);
        return list;

        default: 
        return state;
    }
}