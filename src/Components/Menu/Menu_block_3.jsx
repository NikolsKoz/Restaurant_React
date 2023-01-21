import React from "react";
import './Menu.css';

const Menu_block_3 = (props)=> {
    return(
        <div id="box_3" className="col-12 col-lg-6 menu-block">
            <h2>{props.name}</h2>
            <h3>{props.dish_1}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{props.prise_1}</span></h3>

            <h4>{props.time_1}</h4>
            <h3>{props.dish_2}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{props.prise_2}</span></h3>

            <h4>{props.time_2}</h4>
            <h3>{props.dish_3}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{props.prise_3}</span></h3>

            <h4>{props.time_3}</h4>
            <h3>{props.dish_4}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{props.prise_4}</span></h3>

            <h4>{props.time_4}</h4>
        </div>
    )
}
export default Menu_block_3;