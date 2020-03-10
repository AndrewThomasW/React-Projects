import { FETCH_POSTS, NEW_POST } from '../actions/types';

export const fetchPosts = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch({
                type:FETCH_POSTS,
                payload:json
            }));
}

export const createPost = (postdata) => dispatch => {
    console.log('create fetchy method invoked');

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(postdata)
    }).then(response => response.json())
    .then(json => dispatch({
        type:NEW_POST,
        payload:json //single post
    }));
}