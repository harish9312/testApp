import * as React from 'react';
import App from '../src/components/App/App';
import TODOList from '../src/components/TODOList/TODOList';
import DoneList from '../src/components/DoneList/DoneList';

import { expect } from 'chai';
import { shallow } from 'enzyme';
    
const wrapper = shallow(<App />);
    
describe('Test for App component', () => {
    
    it('contains TODOList', () => {
        expect(wrapper.contains(<TODOList />)).to.equal(true);
        expect(wrapper.find(TODOList)).to.have.length(1);
    });

    it('contains DoneList', () => {
        expect(wrapper.contains(<DoneList />)).to.equal(true);
        expect(wrapper.find(DoneList)).to.have.length(1);
    });
});