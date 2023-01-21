import React from "react";
import "./Reservation.css";
import Block_3 from "./Block_3";
import articles from "../../data/articles.json";

const Reservation = ()=> {
    return (
        <div className="reservation box">
            <div className="container">
                <Block_3 title_block_3 = {articles[1][0].title_block_3} text_block_3 = {articles[1][0].text_block_3}/>
            </div>
        </div>
    )
}
export default Reservation;