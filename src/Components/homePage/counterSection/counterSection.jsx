import React from "react";
import CounterBox from "./counterBox/counterBox";
import './counterSection.css'

function CounterSection(){
    return(
        <div>
            <div className="counter-bar section_padding text-center d-flex flex-column align-items-center justify-content-center">

                <p className="text-light text counter_text">Go ahead and be one of the 250+ successful "Elite Customers"<br/> and be ahead to get the best presentation.</p>
                <div className="d-flex align-items-center text-light my-3">
                    <div className="thumb_bar" ></div>
                    <i class="fa-regular fa-thumbs-up px-3 iconSize"></i>
                    <div className="thumb_bar" ></div>
                </div>

                    <CounterBox />
            </div>
        </div>
    )
}

export default CounterSection;