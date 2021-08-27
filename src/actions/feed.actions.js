import axios from "axios"
import { getProfileAsync } from "./profile.actions";

export const SET_POSTS = 'Set Posts';
export const UPDATE_NEW_POST = 'Update New Post';

export const getPostsAsync = () => dispatch => {
    axios.get('http://localhost:3000/posts').then(result => {
        dispatch(getProfileAsync());
        dispatch(setPosts(result.data));
    })
}

export const addPostAsync = (newPost, usersId) => dispatch => {
    const post = {time: new Date(Date.now()), postBody: newPost, likes: 0, userId: usersId};
    axios.post('http://localhost:3000/posts', post).then(() => {
        dispatch(getPostsAsync());
    })
}

export const addLikeAsync = post => dispatch => {
    axios.put(`http://localhost:3000/posts/${post.id}`, post).then(() => {
        dispatch(getPostsAsync());
    })
}

export const deletePostAsync = postId => dispatch => {
    axios.delete(`http://localhost:3000/posts/${postId}`).then(() => {
        dispatch(getPostsAsync());
    })
}

export const setPosts = posts => {
    return {type: SET_POSTS, posts};
}

export const updateNewPost = newPost => {
    return {type: UPDATE_NEW_POST, newPost}
}