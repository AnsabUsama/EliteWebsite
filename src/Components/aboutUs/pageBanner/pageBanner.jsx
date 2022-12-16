import React from "react";
import './pageBanner.css'

function PageBanner(){
    return(
        <div>
            <div className="pageBanner about_bg">
                <div className="bannerCover d-flex  flex-column justify-content-center align-items-center text-center">
                    <h2 className='main_heading titleFont_style text-light pt-4 text-capitalize'>About Elite Techlogix</h2>
                    <p className="text text-light py-3 text-width">
                    Established in the year 2014, Elite Techlogix has multiple years of experience in providing services to clients across various 
                    sectors and with varied requirements. This varied experience has helped us to build in expertise and know how to identify solutions 
                    for most of the requirements put forward by our clients. Our BPO and IT 
                    solutions cater to the requirements of  our clients irrespective of geographical location for both domestic as well as international 
                    businesses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PageBanner;