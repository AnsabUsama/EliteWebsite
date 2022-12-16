import React from "react";
import '../ServicesInfo/servicesInfo.css'

import {Link} from 'react-router-dom'

function CallCentre(){
    return(
        <div id="call_center">
            <div className="row w-100 m-0 col_reverse">

                <div className="col-lg-6 background_lightGrey">
                    <div className="servicesBox_padding">
                        <h1 className="main_heading">05</h1>
                        <div className="bar rounded"></div>
                        <h2 className='main_heading titleFont_style py-2'>Call Center</h2>
                        <p className="text">
                            <b>Elite Techlogix</b> provisions BPO services across several business verticals.We Provide BPO services that are specific to our clients 
                            needs.We do more than just answer the phone on your behalf; they also monitor and respond to emails, moderate social media accounts, 
                            and offer live web chat services.
                        </p>
                        <span className='span_Titles text-dark ' ><b>Core Niches</b></span>

                            <div className="caseList d-flex py-2 flex-wrap">
                                <ul className="all_type_list p-0">
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Inbound Call Center </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Customer Support </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Technical Support </li>
                                </ul>
                                <ul className="all_type_list p-0 ">
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Outbound Call Center </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> IVR Service </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Order Taking Service </li>
                                </ul>
                            </div>

                            <Link to='/contact'> <button className="btn blue_btn rounded">DISCUSS YOUR PROJECT <i class="fa-solid fa-arrow-right ms-2"></i> </button> </Link>
                    </div>
                </div>


                <div className="col-lg-6 p-0 bg-dark">
                    <div className="Col_bg call_centre"></div>
                </div>
            </div>
        </div>
    )
}

export default CallCentre;