import { combineReducers } from 'redux';
import { todo } from './todoReducer';
import { done } from './doneReducer';

export const rootReducer = combineReducers({
    todo,
    done
});