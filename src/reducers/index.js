import { applyMiddleware, combineReducers, createStore } from "redux";
import { appReducer } from "./app.reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { profileReducer } from "./profile.reducer";
import { feedReducer } from "./feed.reducer";

const reducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    feed: feedReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))