import * as React from 'react';
import { connect } from 'react-redux';
import { doneTodo, moveUp, moveDown } from '../../actions/index';

interface ITODOList {
    items: IItems[];
    doneTodo: Function;
    moveUp: Function;
    moveDown: Function;
}

interface IState {
    todo: IItems[];
}
interface IItems {
    id: number;
    todo: string;
}

export class TODOListView extends React.Component<ITODOList, {}> {
   
    renderTODOList = () => {
        return (
            this.props.items.map(item => {
                return (
                    <li
                        key={item.id}
                        className="list-group-item"
                    >
                        {item.todo}
                        <div
                            className="list-item left-button"
                        >
                            <i
                                onClick={() => this.props.moveUp(item.id)}
                                className="fa fa-chevron-up"
                                aria-hidden="true"
                            />

                        </div>
                        &nbsp;
                        <div
                            className="list-item left-button"
                        >
                            <i
                                onClick={() => this.props.moveDown(item.id)}
                                className="fa fa-chevron-down"
                                aria-hidden="true"
                            />
                        </div>
                        <div
                            className="list-item right-button"
                        >
                            <i
                                onClick={() => this.props.doneTodo(item.id)}
                                className="fa fa-square-o"
                                aria-hidden="true"
                            />
                        </div>
                    </li>
                );
            })  
        );
    }

    render() {
        return (
            <div>
                <h4>TODO Items</h4>
                <ul className="list-group">
                    {this.renderTODOList()}
                </ul>
            </div>
        );
    }

}

function mapStateToProps(state: IState) {
    return {
        items: state.todo
    };
}

let TODOList  = connect(mapStateToProps, { doneTodo, moveUp, moveDown })(TODOListView as any);
export  { TODOList };