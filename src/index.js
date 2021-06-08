import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import './components/style.css';
import { Provider } from "react-redux";
import store from "./redux/configureStore.jsx";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById("root"));
