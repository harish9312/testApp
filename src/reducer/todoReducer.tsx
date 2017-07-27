import { TodoAction } from '../actions';
import { IState } from '../../src/interfaces';
import { move, done } from './helperFunctions';
const data = require('../data/todos.json');

export function todo(state: IState[] = data, action: TodoAction) {

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