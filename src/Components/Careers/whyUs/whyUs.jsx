import React from "react";

import './whyUs.css'

function WhyUs(){
    return(
        <div className="section_padding ">
            <div className="d-flex flex-column justify-content-center align-items-center text-center pb-5">
                <span className='span_Titles' ><b>What Comes Next?</b></span>
                <div className="bar mt-2 rounded"></div>
                <h2 className='main_heading titleFont_style pt-2'>Our Recruitment Process</h2>
            </div>

           <div className="container">
                <div className="row g-4" >

                <div className="col-lg-4">
                    <div className="pricing_card text-center rounded-4 boxWhy d-flex flex-column justify-content-evenly align-items-center">
                        <div className="background_Blue my-4 text-light differBox_icons rounded-circle main_heading" ><i class="fa-solid fa-file-signature"></i></div>
                        <h2 className="small_titles titleFont_style py-2 ">Application</h2>
                        <p className="text fontSize_sm py-2 ">
                        Scroll through some of the open vacancies we have and apply for positions that suits your Skillset.
                        </p>
                    </div>
                </div>

                {/* ====== */}
                <div className="col-lg-4">
                    <div className="pricing_card text-center rounded-4 boxWhy d-flex flex-column justify-content-evenly align-items-center">
                    <div className="background_Blue my-4 text-light differBox_icons rounded-circle main_heading" ><i class="fa-regular fa-comments"></i></div>
                    <h2 className="small_titles titleFont_style py-2 ">Interviews</h2>
                    <p className="text fontSize_sm py-2">
                    There will be two set of interviews that will be held by our team to familiarize with your skills in the field you applied for.
                    </p>
                    </div>
                </div>


                {/* ======= */}
                <div className="col-lg-4">  
                    <div className="pricing_card text-center rounded-4 boxWhy d-flex flex-column justify-content-evenly align-items-center">
                        <div className="background_Blue my-4 text-light differBox_icons rounded-circle main_heading" ><i class="fa-solid fa-briefcase"></i></div>
                        <h2 className="small_titles titleFont_style py-2 ">Offer</h2>
                        <p className="text fontSize_sm py-2">
                        Congratulation on clearing both interviews. As soon as you sign the agreement we welcome you to our Squard.
                        </p>
                    </div>
                </div>
                </div>
           </div>

        </div>
    )
}

export default WhyUs;