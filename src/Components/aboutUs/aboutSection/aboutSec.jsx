import React from 'react'

import './aboutSec.css'

import AB_1 from '../aboutAssets/img1.png'
import img2 from '../aboutAssets/img2.jpg'
import img3 from '../aboutAssets/img3.png'

function AboutSection(){
    return(
        <div className='container'>
            <div className="section_padding">
                <div className="row w-100 m-0 col_reverse">

                <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <div className='AboutInfo_box'>
                            <span className='span_Titles' >Work With The Professionals</span>
                            <div className="bar mt-2 rounded"></div>
                            <h2 className='main_heading titleFont_style UpperCase_title py-3'>Our Story</h2>
                            <p className='text text_color pt-2'>What started out as a single desk space with a single employee Elite Techlogix has worked
                                his way to become an enterprise which provides BPO solutions to all of its clients keeping the Quality along with the Quantity
                                as its main priority.
                            </p>
                            <p className='text text_color'>We Started out with the lead generation services with hitting high record of low bounce back late which
                                was the basis of us getting the confidence of our clients in our services. We added Call Center & Web Design & Development department 
                                not so long after. We amalgamate with our clientele in order to define a broad spectrum to attain significant targets for fruitful 
                                business outcomes for both like increased revenue, better client satisfaction, higher employee engagement, amplified market share 
                                and enhanced productivity. Elite Techlogix is now equipted with sufficent skilled man power to take on any task which is provided 
                                by any of our clients.
                            </p>
                        </div>
                        
                    </div>

                    <div className="col-lg-6 col-md-12 position-relative d-flex flex-column align-items-center justify-content-center">
                        <div className='ColSide_imgBox aboutSide_img'> 
                            <img src={AB_1} className='w-100 rounded ColSide_img rounded ' alt=""  /> 
                        </div>
                        <div className='flip_Box_img1 ColSide_img rounded'><img src={img2} alt="" className='w-100 rounded' /></div>
                        <div className='flip_Box_img2 ColSide_img rounded'><img src={img3} alt="" className='w-100 rounded' /></div>
                    </div>

                   

                </div>
            </div>
        </div>
    )
}

export default AboutSection;