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
                return (<li key={item.id} className="list-group-item">
                        {item.todo}
                        <div className="list-item left-button">
                            <i onClick={() => this.props.moveUp(item.id)} className="fa fa-chevron-up" aria-hidden="true"/>

                        </div>
                        &nbsp;
                        <div className="list-item left-button">
                            <i onClick={() => this.props.moveDown(item.id)} className="fa fa-chevron-down" aria-hidden="true"/>
                        </div>
                        <div className="list-item right-button">
                            <i onClick={() => this.props.doneTodo(item.id)} className="fa fa-square-o" aria-hidden="true"/>
                        </div>
                    </li>);
            }));
        };
    }
    render() {
        return (<div>
                <h4>TODO Items</h4>
                <ul className="list-group">
                    {this.renderTODOList()}
                </ul>
            </div>);
    }
}
exports.TODOListView = TODOListView;
function mapStateToProps(state) {
    return {
        items: state.todo
    };
}
let TODOList = react_redux_1.connect(mapStateToProps, { doneTodo: index_1.doneTodo, moveUp: index_1.moveUp, moveDown: index_1.moveDown })(TODOListView);
exports.TODOList = TODOList;
//# sourceMappingURL=TODOListView.jsx.map