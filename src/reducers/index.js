import { applyMiddleware, combineReducers, createStore } from "redux";
import { appReducer } from "./app.reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const reducer = combineReducers({
    app: appReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))