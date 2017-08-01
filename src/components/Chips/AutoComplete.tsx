import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { searchInList } from '../../actions/index';

interface IAutoCompleteProps {
    options?: IOptions[];
    placeholder?: string;
    onInputChange?: Function;
    onItemSelected?: Function;
}

interface IAutoCompleteStates {
    optionsVisibility: boolean;
}

interface IOptions {
    key?: string;
    value: string;
}

export class AutoComplete extends React.Component<IAutoCompleteProps, IAutoCompleteStates> {

    constructor(props: any) {
        super(props)
        this.state = {
            optionsVisibility: false
        }

        this.renderList = this.renderList.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

    } searchInList
    selectedItem = (item) => {
        alert(item)
    }

    handleClick = (value) => {
        if (this.props.onItemSelected === undefined) {
            console.log("Selected Value", value)
            this.hideList()
        }
        else {
            this.props.onItemSelected(value);
            this.hideList()
        }
    }

    onInputChange = (event) => {
        let value = event.target.value
        if(this.props.onInputChange === undefined){
            console.log("Input Value", value)
            
        }
        else {
            this.props.onInputChange(value);
            this.hideList();
        }
    }

    showList = () => {
        this.setState({
            optionsVisibility: true
        })
    }

    hideList = () => {
        this.setState({
            optionsVisibility: false
        })
    }

    renderList() {
        return (
            this.props.options.map(item => {
                return (
                    <div onMouseDown={() => this.handleClick(item.value)} className="listStyle">
                        {item.value}
                    </div>
                )
            })
        )
    }

    render() {
        console.log("Chips Data", this.props.options)
        return (
            <div>
                <input
                    type="text"
                    onClick = {this.showList}
                    onBlur={this.hideList}
                    onChange={this.onInputChange}
                    placeholder={this.props.placeholder ? this.props.placeholder : ''}
                />
                <div>
                    {this.state.optionsVisibility ? this.renderList() : null}
                </div>
            </div>
        )
    }
}