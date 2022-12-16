import React from "react";
import './leaderShip.css'

import CEO_img from '../aboutAssets/CEO.png'

function LeaderShip(){
    return(
        <div className="container section_padding text-center">
            <div className='AboutInfo_box d-flex flex-column align-items-center justify-content-center'>
                <span className='span_Titles' >CEO</span>
                <div className="bar mt-2 rounded"></div>
                <h2 className='main_heading titleFont_style UpperCase_title py-3'>Meet Our Leadership</h2>
            </div>

                <div className="leaderShip_box m-auto rounded p-2">
                    <div className="leaderImg_box m-auto w-100" ><img src={CEO_img} className='w-100 rounded' alt="" /></div>
                        <div className="p-3">
                            <h2 className="sub_titles titleFont_style">Shahid Zaman Malik</h2>
                            <p className="text Blue_Span">Founder & Business Manager</p>
                        </div>
                </div>


        </div>
    )
}

export default LeaderShip;