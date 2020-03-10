import React, { Component } from 'react';
import Item from '../item';

class PostItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            this.props.posts.map(post => (
               <Item post = {post} key = {post.id}/>
            ))

        );
    }
}

export default PostItem;