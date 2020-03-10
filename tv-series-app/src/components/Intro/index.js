import React from 'react';
import './index.css';

const Intro = (props) =>{
    return (
      <div className = "message">
        <p> {props.message}</p>
      </div>
    );
  }

  export default Intro;