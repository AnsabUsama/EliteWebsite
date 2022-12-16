import React from "react";
import './customerFeedBack.css'
import customers from '../homePageAssets/customers.png'
import FeedBackSlider from "./slider/slider";


function CustomerFeedBack(){
    return(
       <div className="container">
            <div className="section_padding">

                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <span className='span_Titles' ><b>Our Client Feedbacks</b></span>
                    <div className="bar mt-2 rounded"></div>
                    <h2 className='main_heading titleFont_style'>What Our Customer Say!</h2>
                </div>

                <div className="row w-100 m-0 py-5">
                    <div className="col-lg-6 col-md-12 position-relative d-flex flex-column justify-content-center align-items-center">
                        <div className='ColSide_imgBox'> <img src={customers} className='w-100 rounded customer_img' alt=""  /> </div>
                    </div>

                    <div className="col-lg-6 col-md-12 text-center d-flex flex-column justify-content-center align-items-center">
                        <i class="fa-solid fa-quote-left Quotation_Icon"></i>
                        <FeedBackSlider />
                    </div>

                </div>

            </div>
       </div>
    )
}

export default CustomerFeedBack;