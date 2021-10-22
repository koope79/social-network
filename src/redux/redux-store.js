import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import friendsReducer from "./Friends-reducer";
import authReducer from "./Auth-reducer";
import appReducer from "./App-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { compose } from "redux";

let reducersStuff = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
    
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;        // redux Dev Tools
let store = createStore(reducersStuff, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;