import React from "react";
import "./Footer.css";

const Footer = ()=> {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 fine">
                        <h3>Fine ingredients</h3>
                        <p>Lambda's new and expanded Chelsea location represents a truly authentic Greek patisserie,
                            featuring breakfasts of fresh croissants and steaming bowls of café. Lamda the best
                            restaurant in town</p>
                    </div>
                    <div className="col-12 col-lg-4 fine">
                        <h3>Appetisers</h3>
                        <p>Mon-Thu: 7:00am-8:00pm <br/>Fri-Sun: 7:00am-10:00pm</p>
                        <div className="row justify-content-center">

                            <div className="logo one"></div>
                            <div className="logo two"></div>
                            <div className="logo three"></div>
                            <div className="logo four"></div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-4 fine">
                        <h3>Fine ingredients</h3>
                        <p>19th Paradise Street Sitia 128 <br/>Meserole Avenue</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;