import React from 'react';

const Item = (props) => {
    return (
        <div>
            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p>
        </div>
    );
}

export default Item;