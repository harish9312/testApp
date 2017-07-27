import * as React from 'react';
import { shallow } from 'enzyme';
import { TODOListView, mapStateToProps } from '../../src/components/TODOList/TODOListView';

const doneTodoMock = jest.fn();
const moveUpMock = jest.fn();
const moveDownMock = jest.fn();

describe('test cases for TODOList component', () => {

    it('should call reducer methods', () => {

        const wrapper = shallow(<TODOListView items={[{ id: 1, todo: 'Nothing' }]}
            doneTodo={doneTodoMock}
            moveUp={moveUpMock}
            moveDown={moveDownMock}
        />);

        wrapper.find('i').at(0).simulate('click');
        expect(moveUpMock).toBeCalled();

        wrapper.find('i').at(1).simulate('click');
        expect(moveDownMock).toBeCalled();

        wrapper.find('i').at(2).simulate('click');
        expect(doneTodoMock).toBeCalled();

    });
});

describe('test cases for connected components', () => {
    
    const emptyState = {
        todo:[{id:null, todo:''}]
    }

    const returnValue = mapStateToProps(emptyState);

    it('should return with null data', () => {
        expect(returnValue.items[0].id).toBe(null);
        expect(returnValue.items[0].todo).toBe('');
    });

    const stateWithData  = {
        todo:[{id:0, todo:'Wake-Up'}]
    }

    const returnWithValue = mapStateToProps(stateWithData);

    it('should return with the passed values', () => {
        expect(returnWithValue.items[0].id).toBe(0);
        expect(returnWithValue.items[0].todo).toBe('Wake-Up');
    })

});