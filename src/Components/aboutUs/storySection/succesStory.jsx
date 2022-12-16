import React from 'react'

import '../aboutSection/aboutSec'

import AB_1 from '../aboutAssets/abtest.jpg'
import Accordian from './accordian';

function SuccessStory(){
    return(
        <div className='container'>
            <div className="section_padding">
                <div className="row w-100 m-0 col_reverse ">

                <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <div className='AboutInfo_box'>
                            <span className='span_Titles' >Success Story</span>
                            <div className="bar mt-2 rounded"></div>
                            <h2 className='main_heading titleFont_style UpperCase_title py-3'>Elite Legacy</h2>
                            <p className='text text_color pt-2'>Elite Techlogix started out as a one desk one man operation and now it has 250+ staff that works with them within their office location in Lahore, Pakistan.
                            </p>
                        </div>

                        <Accordian />
                        
                    </div>

                    <div className="col-lg-6 col-md-12 position-relative d-flex flex-column align-items-center justify-content-center">
                        <div className='ColSide_imgBox '> 
                            <img src={AB_1} className='w-100 rounded ColSide_img rounded' alt=""  /> 
                        </div>
                    </div>

                   

                </div>
            </div>
        </div>
    )
}

export default SuccessStory;