import { GOT_POSTS } from "../actions/feed.actions";

const initialState = {
    posts: [],
    newPost: ''
}

export const feedReducer = (state = initialState, action) => {
    switch(action.type) {
        case GOT_POSTS:
            return {...state, posts: action.posts}
        default:
            return state;
    }
}