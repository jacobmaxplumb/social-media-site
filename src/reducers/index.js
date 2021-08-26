import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { profileReducer } from "./profile.reducer";
import thunk from 'redux-thunk';
import { feedReducer } from "./feed.reducer";

const reducer = combineReducers({
    profile: profileReducer,
    feed: feedReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));