import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from 'material-ui/Chip';
import AutoComplete from 'material-ui/AutoComplete'
import { IState } from '../../interfaces';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './Chips.css';

interface IChipsState {
    chipsData: IChips[];
}
interface IChips {
    key: number;
    value: string;
}

interface IChipsProps {
    label: string;
    hintText: string;
}

export class Chips extends React.Component<IChipsProps, IChipsState> {
    constructor(props: any) {
        super(props);
        this.state = { chipsData: [{ key: 1, value: 'One' }, { key: 2, value: 'Two' }] }
    }

    renderChips() {
        return (
            this.state.chipsData.map(item => {
                return (
                    <div className="chip-row">
                        <Chip
                            key={item.key}
                            style={chipStyle}
                        >{item.value}
                            <span style={crossButton} >&times;</span>
                        </Chip>
                    </div>
                )
            })
        )
    }
    handleNewRequest = () => {
        alert()
    }


    render() {
        return (
            <div>
                <p className="line"></p>
                <div className="Chips">
                    <MuiThemeProvider >
                        <div className="">
                            <div className="AutoComplete">
                                <div className="label">
                                    <p className="label">{this.props.label}:</p>
                                </div>
                                <AutoComplete
                                    hintText={this.props.hintText}
                                    hintStyle={hintStyle}
                                    onNewRequest={this.handleNewRequest}
                                    dataSource={['Harish', 'Soni']}
                                    underlineShow={false}
                                    style={inputStyle}
                                    inputStyle={textStyle}
                                    menuStyle={menuStyle}
                                />
                            </div>
                            <div className="chipStyle">
                                {this.renderChips()}
                            </div>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        )

    }
}
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
}

const chipStyle = {
    borderRadius: '4px',
    height: '26px',
    fontSize: '14px',
    margin: '10px 10px 10px 0px'
}

const menuStyle = {
    color: '#000000',
    height: '33px',
    width: '525px',
    border: '19px',
    padding: '0px',
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
