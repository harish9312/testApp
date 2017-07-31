import { combineReducers } from 'redux';
import { todo } from './todoReducer';
import { done } from './doneReducer';
import { chipsData } from './chipReducer';
export const rootReducer = combineReducers({
    todo,
    done,
    chipsData
});