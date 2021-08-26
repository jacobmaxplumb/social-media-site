import axios from "axios"

export const GOT_POSTS = 'Got Posts';

export const getPostsAsync = () => dispatch => {
    axios.get('http://localhost:3000/posts').then(result => {
        dispatch(gotPosts(result.data))
    })
}

export const addPostsAsync = post => dispatch => {
    axios.post('http://localhost:3000/posts', post).then(result => {
        console.log(result);
    })
}

export const updatePostAsync = post => dispatch => {
    axios.put(`http://localhost:3000/posts/${post.id}`, post).then(result => {
        console.log(result);
    })
}

export const gotPosts = posts => {
    return {type: GOT_POSTS, posts};
}

