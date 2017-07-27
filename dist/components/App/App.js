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
        return (React.createElement("div", { className: "App container" },
            React.createElement("h3", null, "TODO List"),
            React.createElement("hr", null),
            React.createElement("div", { className: "col-md-6 col-xs-6" },
                React.createElement(TODOListView_1.TODOList, null)),
            React.createElement("div", { className: "col-md-6 col-xs-6" },
                React.createElement(DoneListView_1.DoneList, null))));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map