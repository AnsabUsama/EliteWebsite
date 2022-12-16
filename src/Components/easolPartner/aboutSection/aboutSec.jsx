import React from 'react'

import AB_1 from '../easolAssets/easolpro.png'
import Snipo from '../easolAssets/snipo.png'

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

                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start">
                        <div className='AboutInfo_box'>
                            <span className='span_Titles' >Know About Us</span>
                            <div className="bar mt-2 rounded"></div>
                            <h2 className='main_heading titleFont_style UpperCase_title py-3'>Partner With <span className='Blue_Span'>Easol!</span></h2>

                            <p className='text text_color pt-2'>Elite Techlogix is leading and evolving the traditional way organizations used to deal with their consumers. 
                                We are providing such development and Migration services to easol customers. </p>
                            <p className='text text_color'>Now you can use e-commerce specially designed for selling experiences with Elite Techlogix development services.</p>

                            <p className='text text_color'>
                                For the first time ever, you can manage your entire experience business, all in one place. No more broken integrations, pricey custom coding, 
                                third-party booking fees, or manually managing bookings. With experience in commerce, you can work on your business, not in your business.
                            </p>

                            <p className='text text_color pb-3'>
                                if you need such services then just click and let’s start with us!
                            </p>
                        </div>

                         <a href="https://easol.com/easol-partners/elitetechlogix" className="btn blue_btn rounded"> VISIT OUR EASOL PROFILE <i class="fa-solid fa-arrow-right ms-2"></i> </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection;