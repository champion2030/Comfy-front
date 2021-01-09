import {combineReducers, createStore} from "redux";
import footerReducer from "./footer-reducer";
import mainReducer from "./main-reducer";
import noteReducer from "./noteReducer";

let reducers = combineReducers({
    mainPage: mainReducer,
    notePage: noteReducer,
    footerPage: footerReducer
})

let store = createStore(reducers);

export default store;