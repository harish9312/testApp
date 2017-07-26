import * as React from 'react';
import { shallow } from 'enzyme';
import { DoneListView } from '../../src/components/DoneList/DoneListView';

const toBeDoneMock = jest.fn();

describe('test cases for DoneListView', () => {

    it('should call reducer functions when action is performed', () => {

        const wrapper = shallow(<DoneListView
            done={[{ id: 1, todo: 'Nothing' }]}
            toBeDone={toBeDoneMock}
        />);

        wrapper.find('li').simulate('click');
        expect(toBeDoneMock).toBeCalled();
    });
})