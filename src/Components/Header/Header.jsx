import React from "react";
import './Header.css';
import Title_h1 from "./Title_h1";
import articles from "../../data/articles.json";

const Header = ()=> {
    // const {h1} = props.articles[1][0];
    // console.log({h1})
    
    
    return(
        <header className="box">
            <div className="container">
                <div className="row">
                   <Title_h1 h1 = {articles[1][0].h1}/>
                </div>
                <div className="row">
                    <div className="header__button col">
                        <a href="#" className="header__button-items">book a table</a>
                        <a href="#" className="header__button-items">see the menu</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;