import React from "react";
import './address.css'

function Address(){
    return(
        <div>
            <div className="addresInfo_box">
                <div className="addresInfo_cover d-flex flex-column justify-content-center align-items-center">
                
                    <div className="d-flex flex-column justify-content-center align-items-center text-center">
                            <span className='span_Titles text-light' ><b>Here We Are</b></span>
                            <div className="bar mt-2 bg-light rounded"></div>
                        <h2 className='main_heading titleFont_style text-light pt-2'>Our Office</h2>
                        <span className='span_Titles text-light py-4' ><b>Head Office</b></span>
                        <p className="text fontSize_sm text-light"> <i class="fa-solid fa-location-dot"></i> 19 H2 - Abdul Haque Rd. Phase 2, Johar Town, Lahore, Pakistan</p>
                            <div className="d-flex flex-wrap justify-content-center align-items-center text-center">
                                <span className="text fontSize_sm text-light mx-2"> <i class="fa-solid fa-phone"></i> +92-42-35833800</span>
                                <span className="text fontSize_sm text-light mx-2"> <i class="fa-solid fa-phone"></i> +1-646-740-0279 (USA)</span>
                            </div>
                        <p className="text fontSize_sm text-light pt-3"> <i class="fa-regular fa-envelope"></i> Info@localhost</p>
                     
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Address;