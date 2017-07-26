import * as React from 'react';
import App from '../../src/components/App/App';
import { TODOList } from '../../src/components/TODOList/TODOListView';
import { DoneList } from '../../src/components/DoneList/DoneListView';

import { shallow } from 'enzyme';

const wrapper = shallow(<App />);

const doneTodoMock = jest.fn();
const moveUpMock = jest.fn();
const moveDownMock = jest.fn();
const doneMock = jest.fn();

describe('Test for App component', () => {

    it('contains TODOList', () => {
        expect(wrapper.contains(<TODOList />)).toEqual(true);
        expect(wrapper.find(TODOList)).toHaveLength(1);
    });

    it('contains DoneList', () => {
        expect(wrapper.contains(<DoneList />)).toEqual(true);
        expect(wrapper.find(DoneList)).toHaveLength(1);
    });
});