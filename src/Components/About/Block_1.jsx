import React from "react";
import './About.css';


function Block_1(props) {
    return(
        <>
            <div className="text__content">
                <h2>{props.title_block_1}</h2>
                <p>{props.text_block_1}</p>
            </div>
            <div className="text__foto"></div>
        </>
    )
}

export default Block_1;