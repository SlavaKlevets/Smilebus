import {applyMiddleware,combineReducers, createStore} from "redux";
import kudaReducer from "../reducers/kudaReducer";
import thunkMiddleware from "redux-thunk";
import userReducer from "../reducers/userReducer";
import {reducer as formReducer} from 'redux-form'

let reducers=combineReducers({
    kuda:kudaReducer,
    users:userReducer,
    form:formReducer
});

let store=createStore(reducers,applyMiddleware(thunkMiddleware));

window.store=store;

export default store;