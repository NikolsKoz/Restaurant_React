import React from "react";
import "./Reviews.css";
import Reviews_block from "./Reviews_block";
import articles from "../../data/articles.json";


const Reviews = () => {
    return (
        <div className="reviews box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-lx-1"></div>
                    <Reviews_block title = {articles[2][1].title} content = {articles[2][1].content} name = {articles[2][1].name} />
                </div>
            </div>
        </div>
    )
}


export default Reviews;