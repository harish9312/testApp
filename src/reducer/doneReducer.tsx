import { TodoAction } from '../actions';
import { IState } from '../../src/interfaces';
import { mark } from './helperFunctions';

export function done(state: IState[] = [], action: TodoAction) {

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