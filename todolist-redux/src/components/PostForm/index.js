import React, {Component} from 'react';
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import {createPost} from '../../actions/postAction';

class PostForm extends Component{

    state = {
        title:'',
        body:''
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const post = {
            title:this.state.title,
            body:this.state.body
        }

        //call action
        this.props.createPost(post);
    }

    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }
 
    render(){
        return(
            <div>
                <h2>Add post</h2>
            <form onSubmit = {this.onSubmit}>
                <label>Title</label><br></br>
                <input onChange = {this.onChange}type = "text" name ='title' placeholder = "title ..."/><br></br>
                <label>Body</label>
                <br></br>
                <textarea onChange = {this.onChange} name = 'body' placeholder = 'body ...'/>
                <br></br>
                <button type = 'submit'>Submit</button>
            </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: Proptypes.func.isRequired
}



export default connect(null,{createPost})(PostForm);