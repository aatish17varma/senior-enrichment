import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import students from "./Student";
import campuses from "./Campus";
import {composeWithDevTools} from "redux-devtools-extension"

const reducer = combineReducers({ //this whole thing is the state
  students, campuses
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware, 
    createLogger()
  ))
);

export default store;

export * from "./Campus";
export * from "./Student";
