import { IState } from '../../src/interfaces';
import { search } from './helperFunctions';

let INITIAL_STATE = [{ value: 'One' }, { value: 'Two' }];

export function chipsData(state: { value: string }[] = INITIAL_STATE, action: { type: string, value: string }) {

    switch (action.type) {
        case 'ADDCHIPITEM':
            let newList = [...state, { value: action.value }]
            return newList;
        case 'REMOVECHIPITEM':
            let list = state.filter(item => item.value !== action.value)
            return list
        case 'SEARCHINLIST':
            let filteredList = search(action.value)
            return filteredList;
        default:
            return state;

    }
}