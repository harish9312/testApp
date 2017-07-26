import * as actions from '../../src/actions/index';

describe('test cases for actions', () => {

    it('should create an action to done TODO', () => {
        const id: number = 1;
        const expectedAction: { type: string, id: number } = {
            type: 'DONE',
            id: 1
        }
        expect(actions.doneTodo(id)).toEqual(expectedAction);
    })

    it('should create an action for move up the item', () => {
        const id: number = 1;
        const expectedAction: { type: string, id: number } = {
            type: 'MOVEUP',
            id: 1
        }
        expect(actions.moveUp(id)).toEqual(expectedAction);
    })

    it('should create an action for move down the item', () => {
        const id: number = 1;
        const expectedAction: {type: string, id: number} = {
            type: 'MOVEDOWN',
            id: 1
        }
        expect(actions.moveDown(id)).toEqual(expectedAction);
    })

    it('should create an action for to be done', () => {
        const id: number = 1;
        const expectedAction: {type: string, id: number} = {
            type: 'TOBEDONE',
            id:1
        }
        expect(actions.toBeDone(id)).toEqual(expectedAction);
    })
})