import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


export let renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}

renderTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderTree(state);
});

reportWebVitals();
