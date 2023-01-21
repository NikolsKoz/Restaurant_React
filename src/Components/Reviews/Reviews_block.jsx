import React from "react";
import '../Reviews/Reviews.css';


function Reviews_block (props){
    return(
        <div className="col col-lg-8 col-lx-10 rectangle">
            <h2>{props.title}</h2>
            <h3>{props.content}</h3>
            <p>{props.name}</p>
        </div>
    )
}

export default Reviews_block;