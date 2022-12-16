import React from "react";
import '../ServicesInfo/servicesInfo.css'

import HTMLLogo from '../servicesPageAsstes/HTML5.png'
import javascriptLogo from '../servicesPageAsstes/javascript-logo.png'
import phpLogo from '../servicesPageAsstes/PHP.png'

import sqlLogo from '../servicesPageAsstes/Microsoft-SQL-1.png'
import wordpressLogo from '../servicesPageAsstes/Wordpress.png'
import drupalLogo from '../servicesPageAsstes/Drupal.png'

import {Link} from 'react-router-dom'

function WebDevelopment(){
    return(
        <div id="web-development">
            <div className="row w-100 m-0 col_reverse">

                <div className="col-lg-6 background_lightGrey">
                    <div className="servicesBox_padding">
                        <h1 className="main_heading">01</h1>
                        <div className="bar rounded"></div>
                        <h2 className='main_heading titleFont_style py-2'>Web Design & Development</h2>
                        <p className="text">
                            Developing and understanding the solution requirements is the key to any project. First, our team meets with you to 
                            understand your detailed business needs so we can design a solution that meets your specific needs. After that, we 
                            assigned a team of architects, web developers, and web designers who are best qualified to accomplish the task.
                        </p>
                        <span className='span_Titles text-dark ' ><b>Core Niches</b></span>

                            <div className="caseList d-flex flex-wrap pt-2">
                                <ul className="all_type_list p-0">
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Front-End Development </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Back-End Development </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Full Stack Development </li>
                                </ul>
                                <ul className="all_type_list p-0 ">
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Ecommerce Development </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Web CMS Implementation </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> LMS Development </li>
                                </ul>
                            </div>

                            <div className="languages d-flex flex-wrap justify-content-evenly text-center py-2">
                                <div className="langaugesLogo_box mx-3"><img src={HTMLLogo}  className='w-100' alt="" /> <p className="text pt-2">HTML</p> </div>
                                <div className="langaugesLogo_box mx-3"><img src={javascriptLogo}  className='w-100' alt="" /> <p className="text pt-2">Javascript</p> </div>
                                <div className="langaugesLogo_box mx-3"><img src={phpLogo}  className='w-100' alt="" /> <p className="text pt-2">PHP</p> </div>
                                <div className="langaugesLogo_box mx-3"><img src={sqlLogo}  className='w-100' alt="" /> <p className="text pt-2">MySQL</p> </div>
                                <div className="langaugesLogo_box mx-3"><img src={wordpressLogo}  className='w-100' alt="" /> <p className="text pt-2">WordPres</p> </div>
                                <div className="langaugesLogo_box mx-3"><img src={drupalLogo}  className='w-100' alt="" /> <p className="text pt-2">Drupal</p> </div>
                            </div>

                           <Link to='/contact'> <button className="btn blue_btn rounded">DISCUSS YOUR PROJECT <i class="fa-solid fa-arrow-right ms-2"></i> </button> </Link> 
                    </div>
                </div>


                <div className="col-lg-6 p-0 bg-dark">
                    <div className="Col_bg UI_Design"></div>
                </div>
            </div>
        </div>
    )
}

export default WebDevelopment;