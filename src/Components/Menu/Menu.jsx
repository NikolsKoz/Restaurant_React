import React from "react";
import "./Menu.css";
import Menu_block_1 from "./Menu_block_1";
import Menu_block_2 from "./Menu_block_2";
import Menu_block_3 from "./Menu_block_3";
import Menu_block_4 from "./Menu_block_4";
import articles from "../../data/articles.json"


const data_b_1 = articles[0][0];

const Menu = () => {
    return (
        <div className="menu box">
            <div className="container">
                <div className="row menu-grid">
                    <Menu_block_1 name = {data_b_1.name} dish_1 = {data_b_1.dish_1} prise_1 = {data_b_1.prise_1}  time_1 = {data_b_1.time_1} dish_2 = {data_b_1.dish_2} prise_2 = {data_b_1.prise_2} time_2 = {data_b_1.time_2} dish_3 = {data_b_1.dish_3} prise_3 = {data_b_1.prise_3} time_3 = {data_b_1.time_3} dish_4 = {data_b_1.dish_4} prise_4 = {data_b_1.prise_4} time_4 = {data_b_1.time_4}/>
                    <Menu_block_2 name = {articles[0][1].name} dish_1 = {articles[0][1].dish_1} prise_1 = {articles[0][1].prise_1}  time_1 = {articles[0][1].time_1} dish_2 = {articles[0][1].dish_2} prise_2 = {articles[0][1].prise_2} time_2 = {articles[0][1].time_2} dish_3 = {articles[0][1].dish_3} prise_3 = {articles[0][1].prise_3} time_3 = {articles[0][1].time_3} dish_4 = {articles[0][1].dish_4} prise_4 = {articles[0][1].prise_4} time_4 = {articles[0][1].time_4}/>
                    <Menu_block_3 name = {articles[0][2].name} dish_1 = {articles[0][2].dish_1} prise_1 = {articles[0][2].prise_1}  time_1 = {articles[0][2].time_1} dish_2 = {articles[0][2].dish_2} prise_2 = {articles[0][2].prise_2} time_2 = {articles[0][2].time_2} dish_3 = {articles[0][2].dish_3} prise_3 = {articles[0][2].prise_3} time_3 = {articles[0][2].time_3} dish_4 = {articles[0][2].dish_4} prise_4 = {articles[0][2].prise_4} time_4 = {articles[0][2].time_4}/>
                    <Menu_block_4 name = {articles[0][3].name} dish_1 = {articles[0][3].dish_1} prise_1 = {articles[0][3].prise_1}  time_1 = {articles[0][3].time_1} dish_2 = {articles[0][3].dish_2} prise_2 = {articles[0][3].prise_2} time_2 = {articles[0][3].time_2} dish_3 = {articles[0][3].dish_3} prise_3 = {articles[0][3].prise_3} time_3 = {articles[0][3].time_3} dish_4 = {articles[0][3].dish_4} prise_4 = {articles[0][3].prise_4} time_4 = {articles[0][3].time_4}/>
                </div>
            </div>
        </div>
    )
}
export default Menu;