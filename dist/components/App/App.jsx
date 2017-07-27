"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./App.css");
const TODOListView_1 = require("../TODOList/TODOListView");
const DoneListView_1 = require("../DoneList/DoneListView");
require("../../styles/styles.css");
require('bootstrap/dist/css/bootstrap.css');
require("../../styles/font-awesome.min.css");
class App extends React.Component {
    render() {
        return (<div className="App container">
                <h3>TODO List</h3>
                <hr />
                <div className="col-md-6 col-xs-6">
                  <TODOListView_1.TODOList />
                </div>
                <div className="col-md-6 col-xs-6">
                  <DoneListView_1.DoneList />
                </div>
            </div>);
    }
}
exports.default = App;
//# sourceMappingURL=App.jsx.map