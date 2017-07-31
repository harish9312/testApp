import * as React from 'react';
import './App.css';
import AutoComplete from 'material-ui/AutoComplete'
import { TODOList } from '../TODOList/TODOListView';
import { DoneList } from '../DoneList/DoneListView';
import { ChipInput } from '../Chips/ChipInputForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../../styles/styles.css';
import './App.css'
import '../Chips/Chips.css';

require('bootstrap/dist/css/bootstrap.css');
import '../../styles/font-awesome.min.css';
const image = require('./icon_target.png');
import * as injectTapEventPlugin from 'react-tap-event-plugin';

class App extends React.Component<{}, {}> {
     constructor(props: any){
        super(props)
        injectTapEventPlugin();
        console.log(this.props)
    }   
    render() {
        return (
            <div className="form">
                {/* <img src="icon_target.png" alt="" />
                <p className="head-paragraph">You can either specify the attributes you wish accounts in
                your target segment to have in common,
                or you can create a list of specific accounts you wish to include.
                </p>
                <div className="header">
                </div> */}
                <MuiThemeProvider>
                   <div className="AutoComplete">
                                <div className="label">
                                    <p className="label">Label Here</p>
                                </div>
                <ChipInput handle="onNewRequest" >
                      
                                <AutoComplete
                                    hintText="hint Text"
                                    hintStyle={hintStyle}
                                
                                    dataSource={['Harish', 'Soni','Hari','New']}
                                    underlineShow={false}
                                    style={inputStyle}
                                    inputStyle={textStyle}
                                    menuStyle={menuStyle}
                                />
                            
                </ChipInput>
                </div>
                </MuiThemeProvider>
                {/* <ChipsData label='Account Type' hintText='Start typing e.g. Customer, Partner...' chipsData={[{ key: 1, value: 'One' }, { key: 2, value: 'Two' }]} />  */}
            </div>
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