import * as React from 'react';
import './App.css';
import { TODOList } from '../TODOList/TODOListView';
import { DoneList } from '../DoneList/DoneListView';
import { ChipInput } from '../Chips/ChipInputForm';
import { AutoComplete } from '../Chips/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../../styles/styles.css';
import './App.css'
import '../Chips/Chips.css';
const Autocomplete = require('react-autocomplete');

require('bootstrap/dist/css/bootstrap.css');
import '../../styles/font-awesome.min.css';
const image = require('./icon_target.png');
import * as injectTapEventPlugin from 'react-tap-event-plugin';

class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props)
        injectTapEventPlugin();
        console.log(this.props)
    }
    render() {
        return (
           <MuiThemeProvider>
            <div className="form">
           <ChipInput handle="onItemSelected">
             <AutoComplete  options ={[{value:'Apple'},{value:'Ball'}]} />
           </ChipInput>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

const hintStyle = {
    fontSize: '14px',
    margin: '9px'
}

const menuStyle = {
    color: '#000000',
    width: '100%',
    border: '19px',
    fontSize: '14px',
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

const textStyle = {
    height: '33px',
    margin: '0px 0px 0px 9px',
    width: '525px',
    lineHeight: '2'
}

const listStyle = {
}   