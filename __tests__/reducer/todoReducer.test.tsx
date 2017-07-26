import { todo } from '../../src/reducer/todoReducer';

describe('test cases for todoReduce', () => {

    it('should return the initial state', () => [
        expect(todo([{ id: 1, todo: 'Nothing' }], { type: '', id: null })).toEqual([{ id: 1, todo: 'Nothing' }])
    ]);

    it('should return the filtered value', () => {
        expect(todo([{ id: 1, todo: 'Nothing' }, { id: 2, todo: 'Do Something' }], { type: 'DONE', id: 1 })).toEqual([{ id: 2, todo: 'Do Something' }]);
    });

    it('should return the new list', () => {
        expect(todo([{ id: 1, todo: 'Nothing' }, { id: 2, todo: 'Go to office' }], { type: 'MOVEUP', id: 2 })).toEqual([{ id: 2, todo: 'Go to office' }, { id: 1, todo: 'Nothing' }]);
    });

    it('should display the new list', () => {
        expect(todo([{ id: 1, todo: 'Eat Breakfast' }, { id: 2, todo: 'Go to office' }], { type: 'MOVEDOWN', id: 1 })).toEqual([{ id: 2, todo: 'Go to office' }, { id: 1, todo: 'Eat Breakfast' }]);
    });

    it('should return the spreaded list', () => {
        expect(todo([], {type: 'TOBEDONE', id:1})).toEqual([{id:1, todo: 'Eat Breakfast'}]);
    })
});