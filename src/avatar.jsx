import React from 'react';

export default function Avatar (props){
    return(
        <div 
            className="avatar"
            style={{backgroundImage: "url(" + props.imgUrl + ")"}}
        >
        </div>
    )
}