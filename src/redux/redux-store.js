import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import mainReducer from "./main-reducer";
import noteReducer from "./noteReducer";
import commentsReducer from "./comments-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    mainPage: mainReducer,
    notePage: noteReducer,
    commentsPage: commentsReducer,
    auth: authReducer,
})

let store = createStore(reducers,
    compose(applyMiddleware(thunk),
    )
);

window.store = store;

export default store;