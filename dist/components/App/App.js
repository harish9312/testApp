"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./App.css");
const Chips_1 = require("../Chips/Chips");
require("../../styles/styles.css");
require("./App.css");
require('bootstrap/dist/css/bootstrap.css');
require("../../styles/font-awesome.min.css");
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: "form" },
            React.createElement("p", null,
                React.createElement("img", { src: "icon_target.png", alt: "" }),
                "You can either specify the attributes you wish accounts in your target segment to have in common, or you can create a list of specific accounts you wish to include."),
            React.createElement("div", { className: "header" }),
            React.createElement(Chips_1.Chips, { label: 'New Label', hintText: 'Hint Text' })));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map