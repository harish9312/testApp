import * as React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import { DoneListView, mapStateToProps, DoneList } from '../../src/components/DoneList/DoneListView';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const toBeDoneMock = jest.fn();
const mapStateToPropsMock = jest.fn()

describe('test cases for DoneListView', () => {

    it('should call reducer functions when action is performed', () => {

        const wrapper = shallow(<DoneListView
            done={[{ id: 1, todo: 'Nothing' }]}
            toBeDone={toBeDoneMock}
        />);

        wrapper.find('li').simulate('click');
        expect(toBeDoneMock).toBeCalled();
    });

});

const mockStore = configureMockStore([thunk]);

describe('test for connected component', () => {
    const emptyState = {
        done: [{ id: null, todo: '' }]
    }

    const returnValue = mapStateToProps(emptyState)

    it('should call mapStateToProps', () => {
        expect(returnValue.done[0].id).toBe(null);
        expect(returnValue.done[0].todo).toBe('');
    });

    const stateWithData = {
        done: [{ id: 0, todo: 'Nothing' }]
    }

    const returnWithValue = mapStateToProps(stateWithData)

    it('should call mapStateToProps and return with values', () => {
        expect(returnWithValue.done[0].id).toBe(0);
        expect(returnWithValue.done[0].todo).toBe('Nothing');
    });


})