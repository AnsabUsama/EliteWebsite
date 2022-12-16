import React from "react";
import '../ServicesInfo/servicesInfo.css'

import {Link} from 'react-router-dom'

function DigitalMarketing(){
    return(
        <div id="digi_mark">
            <div className="row w-100 m-0">

                <div className="col-lg-6 p-0 bg-dark">
                    <div className="Col_bg digital_mark"></div>
                </div>

                <div className="col-lg-6 background_lightGrey">
                    <div className="servicesBox_padding">
                        <h1 className="main_heading">04</h1>
                        <div className="bar rounded"></div>
                        <h2 className='main_heading titleFont_style py-2'>Digital Marketing</h2>
                        <p className="text">
                            Discover and improve business growth. Successful digital marketing takes hard work, firmness, and new related content that creates a 
                            long-term ROI. We know that strategy and diligence are needed to gain a foothold in the world of Digital Marketing and see results. 
                            We understand how to generate measurable results in an ever-changing online environment with the help of proven Digital Marketing 
                            strategies. We build interactions.
                        </p>
                        <span className='span_Titles text-dark ' ><b>Core Niches</b></span>

                            <div className="caseList d-flex flex-wrap py-2">
                                <ul className="all_type_list p-0">
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Search Engine Optimization (SEO) </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Social Media Optimization (SMO) </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Online Reputation Management </li>
                                </ul>
                                <ul className="all_type_list p-0 ">
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Social Media Marketing (SMM) </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> PPC Service </li>
                                </ul>
                            </div>


                            <Link to='/contact'> <button className="btn blue_btn rounded">DISCUSS YOUR PROJECT <i class="fa-solid fa-arrow-right ms-2"></i> </button> </Link>
                    </div>
                </div>


                
            </div>
        </div>
    )
}

export default DigitalMarketing;