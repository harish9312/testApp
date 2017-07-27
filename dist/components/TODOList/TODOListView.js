"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const index_1 = require("../../actions/index");
class TODOListView extends React.Component {
    constructor() {
        super(...arguments);
        this.renderTODOList = () => {
            return (this.props.items.map(item => {
                return (React.createElement("li", { key: item.id, className: "list-group-item" },
                    item.todo,
                    React.createElement("div", { className: "list-item left-button" },
                        React.createElement("i", { onClick: () => this.props.moveUp(item.id), className: "fa fa-chevron-up", "aria-hidden": "true" })),
                    "\u00A0",
                    React.createElement("div", { className: "list-item left-button" },
                        React.createElement("i", { onClick: () => this.props.moveDown(item.id), className: "fa fa-chevron-down", "aria-hidden": "true" })),
                    React.createElement("div", { className: "list-item right-button" },
                        React.createElement("i", { onClick: () => this.props.doneTodo(item.id), className: "fa fa-square-o", "aria-hidden": "true" }))));
            }));
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h4", null, "TODO Items"),
            React.createElement("ul", { className: "list-group" }, this.renderTODOList())));
    }
}
exports.TODOListView = TODOListView;
function mapStateToProps(state) {
    return {
        items: state.todo
    };
}
exports.mapStateToProps = mapStateToProps;
let TODOList = react_redux_1.connect(mapStateToProps, { doneTodo: index_1.doneTodo, moveUp: index_1.moveUp, moveDown: index_1.moveDown })(TODOListView);
exports.TODOList = TODOList;
//# sourceMappingURL=TODOListView.js.map