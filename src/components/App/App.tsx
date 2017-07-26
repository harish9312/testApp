import * as React from 'react';
import './App.css';
import TODOList from '../TODOList/TODOList';
import DoneList from '../DoneList/DoneList';
import '../../styles/styles.css';
require('bootstrap/dist/css/bootstrap.css');
import '../../styles/font-awesome.min.css';
class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="App container">
                <h3>TODO List</h3>
                <hr />
                <div className="col-md-6 col-xs-6">
                  <TODOList />
                </div>
                <div className="col-md-6 col-xs-6">
                  <DoneList />
                </div>
            </div>
        );
    }
}

export default App;
