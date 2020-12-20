import React from 'react';

function People(props){
    console.log(props);

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    const name = props.data.name.toLowerCase();

    return(
            <li className="collection-item avatar">
            <i className="circle"><img style={{maxWidth:"100%",maxHeight:"100%"}} src={props.data.picture_url}/></i>
            <span style={{fontSize:"25px", textTransform:"capitalize"}} className="title">{name}</span>
            <p style={{color:"#757575"}}>{props.data.previous_class}</p>
            </li>
    );
}

export default People;