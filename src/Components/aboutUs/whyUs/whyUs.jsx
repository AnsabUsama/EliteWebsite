import React from "react";

import './whyUs.css'

function WhyUs(){
    return(
        <div className="section_padding background_lightGrey">
            <div className="d-flex flex-column justify-content-center align-items-center pb-5">
                <span className='span_Titles' ><b>Why Us</b></span>
                <div className="bar mt-2 rounded"></div>
                <h2 className='main_heading titleFont_style pt-2'>What Makes Us Different</h2>
            </div>

           <div className="container">
                <div className="row g-4" >

                <div className="col-lg-4">
                    <div className="pricing_card text-center rounded-4 boxWhy d-flex flex-column justify-content-evenly align-items-center">
                        <div className="background_Blue my-4 text-light differBox_icons rounded-circle main_heading" ><i class="fa-solid fa-list-check"></i></div>
                        <h2 className="small_titles titleFont_style py-2 ">Proven Track Record</h2>
                        <p className="text fontSize_sm py-2 ">
                            Our team does more than that to provide complete satisfaction. Your happiness is always important to us.
                        </p>
                    </div>
                </div>

                {/* ====== */}
                <div className="col-lg-4">
                    <div className="pricing_card text-center rounded-4 boxWhy d-flex flex-column justify-content-evenly align-items-center">
                    <div className="background_Blue my-4 text-light differBox_icons rounded-circle main_heading" ><i class="fa-solid fa-users-gear"></i></div>
                    <h2 className="small_titles titleFont_style py-2 ">Skilled Workforce</h2>
                    <p className="text fontSize_sm py-2">
                            Elite Techlogix technology professionals and entrepreneurs offer new ideas, in-depth technology, and a desire to succeed.
                    </p>
                    </div>
                </div>


                {/* ======= */}
                <div className="col-lg-4">  
                    <div className="pricing_card text-center rounded-4 boxWhy d-flex flex-column justify-content-evenly align-items-center">
                        <div className="background_Blue my-4 text-light differBox_icons rounded-circle main_heading" ><i class="fa-solid fa-clock"></i></div>
                        <h2 className="small_titles titleFont_style py-2 ">Precise Delivery</h2>
                        <p className="text fontSize_sm py-2">
                            Our teams never compromised on delivering the complete set of products and services we promised, while we promised.
                        </p>
                    </div>
                </div>
                </div>
           </div>

        </div>
    )
}

export default WhyUs;