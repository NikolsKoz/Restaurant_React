import React from "react";
import "./Main.css";
import About from "../About/About";
import Ingredients from "../Ingredients/Ingredients";
import Menu from "../Menu/Menu";
import Reviews from "../Reviews/Reviews";
import Reservation from "../Reservation/Reservation";


function Main() {
    return(
        <main>
            <About/>
            <Ingredients/>
            <Menu />
            <Reviews/>
            <Reservation/>
        </main>
    )
}

export default Main;