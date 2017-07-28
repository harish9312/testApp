"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const Chip_1 = require("material-ui/Chip");
const AutoComplete_1 = require("material-ui/AutoComplete");
require("./Chips.css");
class Chips extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chipsData: [{ key: 1, value: 'One' }, { key: 2, value: 'Two' }] };
    }
    renderChips() {
        return (this.state.chipsData.map(item => {
            return (React.createElement("div", { className: "chip-row" },
                React.createElement(Chip_1.default, { key: item.key, style: chipStyle },
                    item.value,
                    React.createElement("span", { style: crossButton }, "\u00D7"))));
        }));
    }
    render() {
        return (React.createElement(MuiThemeProvider_1.default, null,
            React.createElement("div", { className: "" },
                React.createElement("div", { className: "AutoComplete" },
                    React.createElement("div", { className: "label" },
                        React.createElement("p", { className: "label" },
                            this.props.label,
                            ":")),
                    React.createElement("br", null),
                    React.createElement(AutoComplete_1.default, { hintText: this.props.hintText, hintStyle: hintStyle, dataSource: ['Harish', 'Soni'], underlineShow: false, style: inputStyle, inputStyle: textStyle, menuStyle: menuStyle })),
                React.createElement("div", { className: "chipStyle" }, this.renderChips()))));
    }
}
exports.Chips = Chips;
const textStyle = {
    height: '33px',
    margin: '0px 0px 0px 9px',
    width: '525px',
    lineHeight: '2'
};
const crossButton = {
    textAlign: 'right',
    float: 'right',
    fontSize: '19px',
    marginLeft: '28px',
};
const chipStyle = {
    borderRadius: '4px',
    height: '26px',
    fontSize: '14px',
    margin: '10px 10px 10px 0px'
};
const menuStyle = {
    color: '#000000',
    height: '33px',
    width: '525px',
    border: '19px',
    padding: '0px',
    margin: '0px',
};
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
};
const hintStyle = {
    fontSize: '14px',
    margin: '9px'
};
//# sourceMappingURL=Chips.js.map