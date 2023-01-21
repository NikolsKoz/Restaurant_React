import React from "react";
import '../Reservation/Reservation.css';

function Block_3 (props){
    return(
        <div className="row">
            <div className="d-none d-lg-block col-lg-6 foto__appetisers">
                <img id="desert1" alt=""/>
                <img id="desert2" alt="" />
            </div>
            <div className="col-lg-6 col-lx-12 appetisers">
                <h2>{props.title_block_3}</h2>
                <p>{props.text_block_3}</p>
                <form method="post" action="">
                    <p><label htmlFor="">Name <br/><input name="textfield" type="text"
                                                          placeholder="your name" /></label> <label
                        htmlFor="">email <br/><input name="textfield" type="text"
                                                     placeholder="yur email" /></label>
                    </p>
                    <p><label htmlFor="">Date <br/><input name="textfield" type="text"
                                                          placeholder="date" /></label> <label htmlFor="">Party
                        Number <br/><input name="textfield" type="text" placeholder="party number"/>
                    </label></p>
                    <p>
                        <button>Book now!</button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Block_3;