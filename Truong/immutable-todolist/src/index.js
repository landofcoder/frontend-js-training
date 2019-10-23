import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";
import configureStore, { history } from "./stores";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const store = configureStore(/* provide initial state if any */);
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
