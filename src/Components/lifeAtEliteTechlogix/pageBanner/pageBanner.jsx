import React from "react";
import './pageBanner.css'

function PageBanner(){
    return(
        <div>
            <div className="pageBanner lifeAtELite_banner">
                <div className="bannerCover d-flex  flex-column justify-content-center align-items-center text-center">
                <span className='span_Titles text-light'><b>Life At Elite Techlogix</b></span>
                <div className="bar mt-2 rounded bg-light"></div>
                    <h2 className='main_heading titleFont_style text-light pt-4 text-capitalize'>Join A Team That Inspires You.</h2>
                </div>
            </div>
        </div>
    )
}

export default PageBanner;