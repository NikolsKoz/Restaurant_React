import React from "react";
import '../Ingredients/Ingredients.css';

function Block_2 (props){
    return(
        <div className="col col-sm-10 col-md-8 rectangle">
            <h1>{props.title_block_2}</h1>
            <p>{props.text_block_2}</p>

            <div className="d-none d-xl-block col ellipse">
                <div className="row">
                    <div className="col ellipse1"></div>
                    <div className="col ellipse2"></div>
                    <div className="col ellipse3"></div>

                </div>
            </div>
        </div>
    )
}

export default Block_2;