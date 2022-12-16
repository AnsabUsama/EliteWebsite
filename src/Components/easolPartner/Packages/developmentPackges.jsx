import React from "react";
import './packages.css'

function DevelopmentPackages(){
    return(
        <div className="container">
                <div className="text-center py-5">
                    <h2 className='main_heading titleFont_style pt-2'>Development Packages</h2>
                </div>

            <div className="row">

                <div className="col-lg-4 col-md-8 col-sm-12 m-auto">
                    <div className="pricing_card text-center rounded">
                        <div className="title_bar background_Blue text-light px-2 py-4 rounded-top">
                            <h2 className="sub_titles titleFont_style text-light">Web Design /<br/> Development</h2>
                        </div>

                        <div className="p-4">
                            <h1 className="packagePrice_title  pb-3">30$<span className="pricingText">Per Hour</span></h1>
                            <p className="pricingText pb-2 border-bottom p-0">Logo / Graphic Design</p>
                            <p className="pricingText pb-2 border-bottom p-0">Responsive Web Design</p>
                            <p className="pricingText pb-2 border-bottom p-0">ASP.NET or .NET Core / MS SQL</p>
                            <p className="pricingText pb-2 border-bottom p-0">PHP / MYSQL</p>
                            <p className="pricingText pb-2 border-bottom p-0">Web API</p>
                            <p className="pricingText pb-2 border-bottom p-0">Quality Assurance</p>
                            <p className="pricingText pb-2 border-bottom p-0">2 Rounds of Revisions</p>

                            <a href="https://easol.com/easol-partners/elitetechlogix/project"  className="btn blue_btn rounded mt-3"> READY TO START </a> 
                        </div>
                        

                    </div>
                </div>

                {/* ====== */}

            </div>
        </div>
    )
}

export default DevelopmentPackages;