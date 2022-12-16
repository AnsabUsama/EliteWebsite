import React from "react";
import '../ServicesInfo/servicesInfo.css'

import djangoLogo from '../servicesPageAsstes/Django-1.png'
import VuJsLogo from '../servicesPageAsstes/VueJs.png'
import reactLogo from '../servicesPageAsstes/React.png'
import nodeJsLogo from '../servicesPageAsstes/NodeJS-1.png'
import phpLogo from '../servicesPageAsstes/React.png'
import laravelLogo from '../servicesPageAsstes/Laravel.png'

import {Link} from 'react-router-dom'


function MobileAppDevelopment(){
    return(
        <div id="Mob-development">
            <div className="row w-100 m-0 ">

                <div className="col-lg-6 p-0 bg-dark">
                    <div className="Col_bg app_Dev"></div>
                </div>

                <div className="col-lg-6 background_lightGrey">
                    <div className="servicesBox_padding">
                        <h1 className="main_heading">02</h1>
                        <div className="bar rounded"></div>
                        <h2 className='main_heading titleFont_style py-2'>Mobile App Development</h2>
                        <p className="text">
                            Designing a mobile app is not easy, but using it should be. Customers expect the best mobile experience and we bring 
                            their needs into the palm of their hand. At every step of the process, our engineers want to apply the best user experience 
                            (UX) of your application. Additionally, we stay on top of mobile trends, use advanced mobile and UX systems, and work to 
                            provide you with a flexible mobile app that exceeds your users’ expectations. Working with us gives you access to some of 
                            the most talented engineers and designers, and our work technology brings your vision and ideas to life in any field (s) you need.
                        </p>
                        <span className='span_Titles text-dark ' ><b>Core Niches</b></span>

                            <div className="caseList d-flex flex-wrap pt-2">
                                <ul className="all_type_list p-0">
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Mobile App Design </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Mobile App Development </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> IOS And Android Apps </li>
                                </ul>
                                <ul className="all_type_list p-0 ">
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Hybrid Mobile Apps </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> Mobile App Optimization </li>
                                    <li className=" py-1"><i class="fa-regular fa-circle-dot iconBlueClr"></i> UX/UI Design </li>
                                </ul>
                            </div>

                            <div className="languages d-flex flex-wrap justify-content-around text-center py-2">
                                <div className="langaugesLogo_box mx-3"><img src={djangoLogo}  className='w-100' alt="" /> <p className="text pt-2">Django</p> </div>
                                <div className="langaugesLogo_box mx-3"><img src={VuJsLogo}  className='w-100' alt="" /> <p className="text pt-2">VueJS</p> </div>
                                <div className="langaugesLogo_box mx-3"><img src={reactLogo}  className='w-100' alt="" /> <p className="text pt-2">React</p> </div>
                                <div className="langaugesLogo_box mx-3"><img src={nodeJsLogo}  className='w-100' alt="" /> <p className="text pt-2">NodeJS</p> </div>
                                <div className="langaugesLogo_box mx-3"><img src={phpLogo}  className='w-100' alt="" /> <p className="text pt-2">PHP</p> </div>
                                <div className="langaugesLogo_box mx-3"><img src={laravelLogo}  className='w-100' alt="" /> <p className="text pt-2">Laravel</p> </div>
                            </div>

                            <Link to='/contact'> <button className="btn blue_btn rounded">DISCUSS YOUR PROJECT <i class="fa-solid fa-arrow-right ms-2"></i> </button> </Link>
                    </div>
                </div>


                
            </div>
        </div>
    )
}

export default MobileAppDevelopment;