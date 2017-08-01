import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
const data = require('../../data/todos.json');
import { searchInList } from '../../actions/index';

interface IAutoCompleteProps {
    handle?: string;
    chipsData?: IChips[];
    searchInList?: Function;
}
interface IAutoCompleteStates {
    visible: boolean;
}
interface IChips {
    value: string;
}

export class AutoComplete extends React.Component<IAutoCompleteProps, IAutoCompleteStates> {

    constructor(props: any) {
        super(props)
        //   this.handleInputChange = this.handleInputChange.bind(this);
        this.renderList = this.renderList.bind(this)
        this.state = {
            visible: false
        }
    }
    selectedItem = (item) => {
        alert(item)
    }

    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this.refs.myList))

    }

    renderList() {
        console.log("Sdsad");
        return (
            this.props.chipsData.map(item => {
                return (
                    <div>
                        {item.value}
                    </div>
                )
            })
        )
    }
    handleInputChange = () => {
        this.setState({
            visible: true
        })
    }

    handleBlur = () => {
        this.setState({
            visible: false
        })
    }
    search = (event) => {
        let val = event.target.value
        this.props.searchInList(val)
    }
  

render() {
    console.log("Chips Data", this.props.chipsData)
    return (
        <div>
            <input
                type="text"
                onClick={() => this.handleInputChange()}
                onBlur={() => this.handleBlur()}
                onChange={this.search}
            />
            <div ref="myList">
                {this.state.visible ? this.renderList() : null}
            </div>
        </div>
    )
}
}

export function mapStateToProps(state: { chipsData: string }) {
    console.log("Auto Complete", state);
    return {
        chipsData: state.chipsData
    }
}
export let AutoCompleteList = connect(mapStateToProps, {searchInList})(AutoComplete as any)