import { SET_POSTS, UPDATE_NEW_POST } from "../actions/feed.actions";

const initialState = {
    newPost: '',
    posts: []
}

export const feedReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POSTS:
            return {...state, posts: action.posts}
        case UPDATE_NEW_POST:
            return {...state, newPost: action.newPost}
        default:
            return state;
    }
}