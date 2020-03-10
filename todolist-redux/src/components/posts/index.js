import React, { Component } from 'react';
import PostItem from '../postItem';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postAction';
import PropTypes from 'prop-types';


class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                <PostItem posts={this.props.posts} />
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired
}

const mapStateToprops = state => ({
    posts: state.posts.items
});
export default connect(mapStateToprops, { fetchPosts })(Posts);