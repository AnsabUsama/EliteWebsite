import React from "react";
import '../ServicesInfo/servicesInfo.css'

import {Link} from 'react-router-dom'

function LeadGeneration(){
    return(
        <div id="lead">
            <div className="row w-100 m-0">

                <div className="col-lg-6 p-0 bg-dark">
                    <div className="Col_bg digital_mark"></div>
                </div>

                <div className="col-lg-6 background_lightGrey">
                    <div className="servicesBox_padding">
                        <h1 className="main_heading">06</h1>
                        <div className="bar rounded"></div>
                        <h2 className='main_heading titleFont_style py-2'>Lead Generation</h2>
                        <p className="text">
                            Elite Techlogix is an experienced digital marketing company and has been focusing on lead generation as a service for 
                            over 6 years now. We are most experience in web scraping, data mining, email scraping, lead generation, database creation,
                            web research.
                        </p>
                        <span className='span_Titles text-dark ' ><b>Core Niches</b></span>

                            <div className="caseList d-flex flex-wrap py-2">
                                <ul className="all_type_list p-0">
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Data Entry Service </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Data Conversion Service </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Data Processing Service </li>
                                </ul>
                                <ul className="all_type_list p-0 ">
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Data Verification Service </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Data Analysis Service </li>
                                </ul>
                            </div>


                            <Link to='/contact'> <button className="btn blue_btn rounded">DISCUSS YOUR PROJECT <i class="fa-solid fa-arrow-right ms-2"></i> </button> </Link>
                    </div>
                </div>


                
            </div>
        </div>
    )
}

export default LeadGeneration;