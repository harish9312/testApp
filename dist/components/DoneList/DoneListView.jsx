"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const index_1 = require("../../actions/index");
class DoneListView extends React.Component {
    constructor() {
        super(...arguments);
        this.renderDoneList = () => {
            return (this.props.done.map(item => {
                return (<li key={item.id} className="list-group-item" onClick={() => this.props.toBeDone(item.id)}>{item.todo}
                        <div className="list-item right-button">
                            <i className="fa fa-check-square-o" aria-hidden="true"/>
                        </div>
                    </li>);
            }));
        };
    }
    render() {
        return (<div>
                <h4>Done</h4>
                <ul className="list-group">
                    {this.renderDoneList()}
                </ul>
            </div>);
    }
}
exports.DoneListView = DoneListView;
function mapStateToProps(state) {
    return {
        done: state.done
    };
}
exports.mapStateToProps = mapStateToProps;
let DoneList = react_redux_1.connect(mapStateToProps, { toBeDone: index_1.toBeDone })(DoneListView);
exports.DoneList = DoneList;
//# sourceMappingURL=DoneListView.jsx.map