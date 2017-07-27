import { done } from '../../src/reducer/doneReducer';
const data = require('../../src/data/todos.json'); 

describe('test cases for done reducer', () => {

    it('should return an empty array object', () => {
        expect(done(undefined, { type: '', id: null })).toEqual([]);
    });

    it('should return a list of done items', () => {
        expect(done([], { type: 'DONE', id: 1 })).toEqual([{ id: 1, todo: 'Eat Breakfast' }]);
    })

    it('should retun the filtered data', () => {
        expect(done([{ id: 1, todo: 'Eat Breakfast' }, { id: 2, todo: 'Go to office' }], {type: 'TOBEDONE', id:1})).toEqual([{ id: 2, todo: 'Go to office' }]);
    })

})