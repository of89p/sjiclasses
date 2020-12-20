import React from 'react';
import People from "./people";

function OneClass(props){
    if(props.data.length == 0){
        // No one declared yet
        return(
            <React.Fragment>
                <h1>{props.new_class}</h1>
                <ul className="collection with-header">
                    <li className="collection-header"><h6>No one has declared {props.new_class} as their new class yet. Is {props.new_class} your class? Declare your class <a href="/add">here</a></h6></li>
                </ul>            
            </React.Fragment>
        );
    } else {
        const arrData = props.data;
        return(
            <React.Fragment>
                <h1>{props.new_class}</h1>
                <ul className="collection">
                    {arrData.map(arr => (
                        <People data={arr}/>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default OneClass;