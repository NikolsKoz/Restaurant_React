import React from "react";
import "./About.css";
import Block_1 from "./Block_1";
import articles from '../../data/articles.json';

const About = () => {
    return (
        <div className="about box">

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 about__text">
                        <Block_1 title_block_1 = {articles[1][0].title_block_1} text_block_1 = {articles[1][0].text_block_1}/>
                    </div>
                    <div className="d-none d-md-block col-md-6 about__foto"></div>
                </div>
            </div>
        </div>
    )
}



export default About;