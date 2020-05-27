import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//root reducer
import rootReducer from './Redux/rootReducer'
//thunk
import thunk from 'redux-thunk'
//redux
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";

const composeEnhancers =
    process.env.NODE_ENV === 'development' &&
        typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        :
        compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

