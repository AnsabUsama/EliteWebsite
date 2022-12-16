import React from "react";
import ClientCarousel from "./clientCarousel";




function ClientSection(){
    return(
        <div className="section_padding boxShadow">

            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <span className='span_Titles' ><b>Recent Work</b></span>
                    <div className="bar mt-2 rounded"></div>
                    <h2 className='main_heading titleFont_style'>Great software requires great relationships</h2>
                </div>

        <ClientCarousel />
            </div>

        </div>
    )
}

export default ClientSection;