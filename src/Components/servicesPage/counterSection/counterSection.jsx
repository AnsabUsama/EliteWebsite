import React from "react";
import CounterBox from "../counterSection/counterBox/counterBox";
import './counterSection.css'

function CounterSection(){
    return(
        <div className="section_padding">
            <div className="counter-bar text-center bg-light text-dark d-flex flex-column align-items-center justify-content-center boxShadow_none border-0">

            <div className="d-flex flex-column justify-content-center align-items-center">
                <span className='span_Titles' ><b>Design. Development. Consultancy.</b></span>
                <div className="bar mt-2 rounded"></div>
                <h2 className='main_heading titleFont_style py-2'>We Got You Covered</h2>
                <p className="text pt-3">
                    We bring you award-winning products, advanced UI / UX, and world-class web talent and mobile <br/>
                    platforms that bridge the gap between the creative world and technology. At Elite Techlogix, our <br/>
                    solutions become the kind of technology that others are promoting.
                </p>
                <div className="d-flex align-items-center  my-3">
                    <div className="thumb_bar" ></div>
                    <i class="fa-regular fa-thumbs-up px-3 iconSize"></i>
                    <div className="thumb_bar" ></div>
                </div>
            </div>

            <CounterBox />

            </div>
        </div>
    )
}

export default CounterSection;