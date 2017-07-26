import * as React from 'react';
import { shallow } from 'enzyme';
import { TODOListView } from '../../src/components/TODOList/TODOListView';

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
