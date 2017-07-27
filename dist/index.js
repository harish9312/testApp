"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const App_1 = require("./components/App/App");
const redux_1 = require("redux");
const reducer_1 = require("./reducer");
const react_redux_1 = require("react-redux");
const store = redux_1.createStore(reducer_1.rootReducer);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(App_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map