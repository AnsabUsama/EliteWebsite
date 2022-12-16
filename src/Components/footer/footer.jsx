import React from "react";
import './footer.css'

import FooterLogo from '../assets/logoWhite.png'
import upWorkImg from '../assets/upWork_white.png'

function Footer(){
    return(

     <div>
           <div className="contact_Section section_padding border">
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <span className='span_Titles' ><b>Not Sure Where To Start?</b></span>
                    <div className="bar mt-2 rounded"></div>
                    <h2 className='sub_titles titleFont_style py-4'>7 years of building digital products and we are just<br/> getting started!</h2>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-wrap pt-3">
                    <button className="btn rounded mx-1 blue_btn my-1">REQUEST AN ESTIMATION <i class="fa-solid fa-arrow-right ms-2"></i> </button> 
                    <button className="btn rounded mx-1 white-Btn my-1">SCEDULE A CALL <i class="fa-solid fa-arrow-right ms-2"></i></button>
                </div>
            </div>

            <div>
                <div className="footer-Section text-light px-2">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center">
                        <h2 className="sub_titles text-light pb-4">Head Office</h2>
                        <p className="text fontSize_sm"> <i class="fa-solid fa-location-dot"></i> 19 H2 - Abdul Haque Rd. Phase 2, Johar Town, Lahore, Pakistan</p>
                            <div className="d-flex flex-wrap justify-content-center align-items-center text-center ">
                                <span className="text fontSize_sm mx-2"> <i class="fa-solid fa-phone"></i> +92-42-35833800</span>
                                <span className="text fontSize_sm mx-2"> <i class="fa-solid fa-phone"></i> +1-646-740-0279 (USA)</span>
                            </div>
                        <p className="text fontSize_sm pt-3"> <i class="fa-regular fa-envelope"></i> Info@localhost</p>
                        <div className="thumb_bar footerBar w-50 my-3 " ></div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center pt-3">
                        <div className="footer_Logo LogoBox " ><img src={FooterLogo} className='w-100' alt="" /> </div>
                        <h2 className="main_heading ms-3 pt-3 text-light ">Elite Techlogix</h2>
                    </div> 

                    <div className="footerIcon_box d-flex justify-content-center align-items-center py-5">
                        <a href="https://www.facebook.com/elitetechlogix/"> <i class="fa-brands fa-facebook footerIcons text-light"></i> </a>
                        <a href="https://www.linkedin.com/company/elite-techlogix/mycompany/"><i class="fa-brands fa-linkedin footerIcons text-light px-4"></i></a>
                        <div className="LogoBox"><a href="https://www.upwork.com/o/companies/~019ebaa21af2dd30d7/"><img src={upWorkImg} alt="" className="w-100" /></a></div>
                    </div>

                    <div className="footer_navigation m-auto">
                        <ul className="all_type_list d-flex flex-wrap justify-content-evenly align-items-center p-0">
                            <li className="text m-1" ><a  className="nav-link" href="">Home</a></li>
                            <li className="text m-1" ><a  className="nav-link" href="">Services</a></li>
                            <li className="text m-1" ><a  className="nav-link" href="">Work</a></li>
                            <li className="text m-1" ><a  className="nav-link" href="">About Us</a></li>
                            <li className="text m-1" ><a  className="nav-link" href="">Career</a></li>
                        </ul>
                    </div>
                </div>

                <div className="copyRightBar text-center p-2 bg-light">
                    <p className="text-dark text p-0 m-0">© Copyright 2022 – Elite Techlogix | Privacy Policy | Terms & Conditions</p>
                </div>
           </div>
    
     </div>
    )
}

export default Footer;