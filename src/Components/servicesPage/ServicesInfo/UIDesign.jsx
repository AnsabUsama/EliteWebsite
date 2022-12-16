import React from "react";
import '../ServicesInfo/servicesInfo.css'

import FigmaLogo from '../servicesPageAsstes/Figma.png'
import AdobeLogo from '../servicesPageAsstes/Adobe-XD.png'

import {Link} from 'react-router-dom'


function UIDesign(){
    return(
        <div id="UI_design">
            <div className="row w-100 m-0 col_reverse">

                <div className="col-lg-6 background_lightGrey">
                    <div className="servicesBox_padding">
                        <h1 className="main_heading">03</h1>
                        <div className="bar rounded"></div>
                        <h2 className='main_heading titleFont_style py-2'>UI/UX Design</h2>
                        <p className="text">
                            Promote your business by integrating web-specific and responsive UI / UX designs, adapted to a variety of device 
                            with user experience design services. Without the technical complexity of your web application technology, we will 
                            make its UX design simpler and easier. Our UI / UX designers follow modern UI / UX design principles to design flexible, 
                            easy-to-use, and uncontrollable web applications.
                        </p>
                        <span className='span_Titles text-dark ' ><b>Core Niches</b></span>

                            <div className="caseList d-flex flex-wrap pt-2">
                                <ul className="all_type_list p-0">
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Mobile App UI/UX Design </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Web UI/UX Design </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Banner Design </li>
                                </ul>
                                <ul className="all_type_list p-0 ">
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> UI/UX Brand Identity </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Logo Design </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Branding </li>
                                </ul>
                            </div>

                            <div className="languages d-flex flex-wrap justify-content-around text-center py-2">
                                <div className="langaugesLogo_box mx-3"><img src={FigmaLogo}  className='w-100' alt="" /> <p className="text pt-2">Figma</p> </div>
                                <div className="langaugesLogo_box mx-3"><img src={AdobeLogo}  className='w-100' alt="" /> <p className="text pt-2">Adobe XD</p> </div>
                            </div>

                            <Link to='/contact'> <button className="btn blue_btn rounded">DISCUSS YOUR PROJECT <i class="fa-solid fa-arrow-right ms-2"></i> </button> </Link> 
                    </div>
                </div>


                <div className="col-lg-6 p-0 bg-dark">
                    <div className="Col_bg web_dev"></div>
                </div>
            </div>
        </div>
    )
}

export default UIDesign;