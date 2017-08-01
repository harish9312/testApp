import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from 'material-ui/Chip';
import AutoComplete from 'material-ui/AutoComplete'
import ListItem from 'material-ui/List/ListItem'
import { IState } from '../../interfaces';
import { removeItem, addChipItem } from '../../actions';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './Chips.css';
import * as injectTapEventPlugin from 'react-tap-event-plugin';


interface IChipsState {
    chipsData: IChips[];
}
interface IChips {
    value: string;
}

interface IChipInputProps {
    handle: string;
    chipsData?: IChips[]
    removeItem?: Function;
    addChipItem?: Function;
}

export class ChipInputForm extends React.Component<IChipInputProps, IChipsState> {

    constructor(props: any) {
        super(props)
        console.log(this.props)
    }

    componentWillMount() {
        ListItem[`defaultProps`].disableTouchRipple = true;
        ListItem[`defaultProps`].disableFocusRipple = true;
    }

    renderChips = () => {
        return (
            this.props.chipsData.map(item => {
                return (
                    <div className="chip-row">
                        <Chip
                            style={chipStyle}
                        >{item.value}
                            <span onClick={() => this.handleDeleteRequest(item.value)} style={crossButton} >&times;</span>
                        </Chip>
                    </div>
                )
            })
        )
    }

    renderNewAutoComplete() {
        const functionName = this.props.handle
        const newFunction = { [functionName]: this.handleNewRequest }
        const { children, ...otherProps } = this.props
        const newChild = React.cloneElement(children as any, newFunction);
        console.log("New Child",newChild)
        return newChild;
    }

    handleDeleteRequest = (value: any) => {
        this.props.removeItem(value);
    }

    handleNewRequest = (value: any) => {
        this.props.addChipItem(value)
    }


    render() {
        return (
            <div>
                <div className="">
                    {this.renderNewAutoComplete()}
                    <div className="chipStyle">
                    {this.renderChips()}
                    </div>
                </div>
            </div>
        )

    }
}

export function mapStateToProps(state: IChipsState) {
    return {
        chipsData: state.chipsData
    }
}
const ChipInput = connect<{}, {}, IChipInputProps>(mapStateToProps, { removeItem, addChipItem })(ChipInputForm)

export { ChipInput }

const textStyle = {
    height: '33px',
    margin: '0px 0px 0px 9px',
    width: '525px',
    lineHeight: '2'
}

const crossButton = {
    textAlign: 'right',
    float: 'right',
    fontSize: '19px',
    marginLeft: '28px',
    cursor: 'pointer',
}

const chipStyle = {
    borderRadius: '4px',
    height: '26px',
    fontSize: '14px',
    margin: '10px 10px 10px 0px'
}

const menuStyle = {
    color: '#000000',
    height: '1px',
    width: '100%',
    border: '19px',
    padding: '0px',
    fontSize: '14px',
    margin: '0px',
}
const inputStyle = {
    width: '525px',
    borderStyle: 'solid',
    lineHeight: '18px',
    fontSize: '14px',
    inputStyle: 'none',
    textAlign: 'left',
    padding: '0px',
    borderColor: '#C2C2C2',
    placeHolder: '',
    borderRadius: '4px',
    borderWidth: '1px',
    height: '33px',
    underlineStyle: '',
    underlineDisabledStyle: 'none'
}
const hintStyle = {
    fontSize: '14px',
    margin: '9px'
}
