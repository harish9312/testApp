import * as React from 'react';
import './App.css';
import { TODOList } from '../TODOList/TODOListView';
import { DoneList } from '../DoneList/DoneListView';
import { Chips } from '../Chips/Chips';
import '../../styles/styles.css';
import './App.css'
require('bootstrap/dist/css/bootstrap.css');
import '../../styles/font-awesome.min.css';
const image = require('./icon_target.png');

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="form">
                <img src="icon_target.png" alt="" />
                <p className="head-paragraph">You can either specify the attributes you wish accounts in
                your target segment to have in common,
                or you can create a list of specific accounts you wish to include.
                </p>
                <div className="header">
                </div>
                
                    <Chips label='Account Type' hintText='Start typing e.g. Customer, Partner...' />
               
                      <Chips label='Account Type' hintText='Start typing e.g. Customer, Partner...' />
            </div>
        );
    }
}

export default App;
