import React from "react";
import Accordian from "./accordian";

function Faqs(){
    return(
        <div className="section_padding background_lightGrey">
            <div className="d-flex flex-column justify-content-center align-items-center pb-5">
                <span className='span_Titles' ><b>Frequently Asked Questions</b></span>
                <div className="bar mt-2 rounded"></div>
                <h2 className='main_heading titleFont_style pt-2'>Helpful Points</h2>
            </div>

           <div className="container">
                <div className="row g-3">
                    <div className="col-md-6"><Accordian /></div>
                    <div className="col-md-6"><Accordian /></div>
                </div>
           </div>
            
       
        </div>
    )

}

export default Faqs;