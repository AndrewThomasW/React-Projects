import React from 'react';
import LoaderSrc from '../../assets/sample.gif';


const Loader = (props) => {
    return(
        <img src = {LoaderSrc} alt = "loader" style = {{width:75}}/>
    );
}

export default Loader;

