import React from 'react'

import './aboutSec.css'

import AB_1 from '../homePageAssets/about-us.jpg'
import CEO_img from '../homePageAssets/CEO.png'
import Snipo from '../homePageAssets/snipo.png'

function AboutSection(){
    return(
        <div className='container'>
            <div className="section_padding">
                <div className="row w-100 m-0">

                    <div className="col-lg-6 col-md-12 position-relative d-flex flex-column align-items-center justify-content-center">
                        <div className='ColSide_imgBox'> 
                            <img src={AB_1} className='w-100 rounded ColSide_img' alt=""  /> 
                        </div>
                        <div className='Snipo_imgBox'><img src={Snipo} alt="" className='Snipo_Img' /></div>
                    </div>

                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
                        <div className='AboutInfo_box'>
                            <span className='span_Titles' >Know About Us</span>
                            <div className="bar mt-2 rounded"></div>
                            <h2 className='main_heading titleFont_style UpperCase_title py-3'>About <span className='Blue_Span'>Elite Techlogix</span></h2>
                            <p className='text text_color pt-2'>Elite Techlogix is leading and evolving the traditional way organizations used to deal with their consumers. </p>
                            <p className='text text_color'>Established in the year 2014, Elite Techlogix has multiple years of experience in providing services to clients across various sectors and with varied requirements. This varied experience has helped us to build in expertise and know how to identify solutions for most of the requirements put forward by our clients. Our BPO and IT solutions cater to the requirements of our clients irrespective of geographical location for both domestic as well as international businesses.</p>
                        </div>

                        <div className=" CEO_infoBox d-flex align-items-center pt-3">
                            <div className='CEO_imgBox rounded-circle'> <img src={CEO_img} className='w-100 rounded-circle' alt="" /> </div>
                            <div className='px-4'>
                                <h1 className='CEO_Name'>Shahid Zaman</h1>
                                <span className='text CEO_subtitle'> Founder of Elite Techlogix </span>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection;