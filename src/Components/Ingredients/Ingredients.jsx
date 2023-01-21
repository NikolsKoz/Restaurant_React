import React from "react";
import "./Ingredients.css";
import Block_2 from "./Block_2";
import articles from "../../data/articles.json";

const Ingredients = () => {
    return (
        <div className="ingredients box">
            <div className="container">
                <div className="row">
                    <div className="d-none d-sm-block col-sm-1 col-md-4"></div>
                   <Block_2 title_block_2 = {articles[1][0].title_block_2} text_block_2 = {articles[1][0].text_block_2}/>
                </div>
            </div>
        </div>
    )
}
export default Ingredients;