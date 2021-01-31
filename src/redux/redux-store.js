import {combineReducers, createStore} from "redux";
import mainReducer from "./main-reducer";
import noteReducer from "./noteReducer";
import commentsReducer from "./comments-reducer";

let reducers = combineReducers({
    mainPage: mainReducer,
    notePage: noteReducer,
    commentsPage: commentsReducer
})

let store = createStore(reducers);

window.store = store;

export default store;