import {combineReducers, createStore} from "redux";
import mainReducer from "./main-reducer";
import noteReducer from "./noteReducer";
import commentsReducer from "./comments-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    mainPage: mainReducer,
    notePage: noteReducer,
    commentsPage: commentsReducer,
    auth: authReducer
})

let store = createStore(reducers);

window.store = store;

export default store;