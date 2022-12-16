import React from "react";
import DevelopmentPackages from "./developmentPackges";
import './packages.css'

function MigrationPackages(){
    return(
        <div className="container section_padding">
                <div className="d-flex flex-column justify-content-center align-items-center text-center pb-5">
                    <span className='span_Titles' ><b>Our Pricing</b></span>
                    <div className="bar mt-2 rounded"></div>
                    <h2 className='main_heading titleFont_style pt-2'>Migration Packages</h2>
                </div>

            <div className="row pb-5 g-3">

                <div className="col-lg-4 col-md-6">
                    <div className="pricing_card text-center rounded">
                        <div className="title_bar background_Blue text-light px-2 py-4 rounded-top">
                            <h2 className="sub_titles titleFont_style text-light">Starter</h2>
                            <p className="pricingText">Additional Work**: 16.50$ per hour as required</p>
                        </div>

                        <div className="p-4">
                            <h1 className="packagePrice_title  pb-3">200$</h1>
                            <p className="pricingText pb-2 border-bottom p-0">Up To 10 Pages (Experience, Blog, Website Page)</p>
                            <p className="pricingText pb-2 border-bottom p-0">Based On Standard Easol Theme</p>
                            <p className="pricingText pb-2 border-bottom p-0">Content Upload</p>
                            <p className="pricingText pb-2 border-bottom p-0">Content Optimization (Imagery Etc)</p>
                            <p className="pricingText pb-2 border-bottom p-0">Project Management</p>
                            <p className="pricingText pb-2 border-bottom p-0">Quality Assurance</p>
                            <p className="pricingText pb-2 border-bottom p-0">2 Rounds of Revisions</p>
                            <p className="pricingText pb-2 border-bottom p-0">Estimated Time: 2-4 Business Days*</p>

                            <a href="https://easol.com/easol-partners/elitetechlogix/project"  className="btn blue_btn rounded mt-3"> READY TO START </a>
                        </div>
                        

                    </div>
                </div>

                {/* ====== */}
                <div className="col-lg-4 col-md-6">
                    <div className="pricing_card text-center rounded">
                        <div className="title_bar background_Blue text-light px-2 py-4 rounded-top">
                            <h2 className="sub_titles titleFont_style text-light">Regular</h2>
                            <p className="pricingText">Additional Work**: 16.50$ per hour as required</p>
                        </div>

                        <div className="p-4">
                            <h1 className="packagePrice_title  pb-3">400$</h1>
                            <p className="pricingText pb-2 border-bottom p-0">Up To 25 Pages (Experience, Blog, Website Page)</p>
                            <p className="pricingText pb-2 border-bottom p-0">Based On Standard Easol Theme</p>
                            <p className="pricingText pb-2 border-bottom p-0">Content Upload</p>
                            <p className="pricingText pb-2 border-bottom p-0">Content Optimization (Imagery Etc)</p>
                            <p className="pricingText pb-2 border-bottom p-0">Project Management</p>
                            <p className="pricingText pb-2 border-bottom p-0">Quality Assurance</p>
                            <p className="pricingText pb-2 border-bottom p-0">2 Rounds of Revisions</p>
                            <p className="pricingText pb-2 border-bottom p-0">Estimated Time: 5-7 Business Days*</p>

                            <a href="https://easol.com/easol-partners/elitetechlogix/project"  className="btn blue_btn rounded mt-3"> READY TO START </a> 
                        </div>
                        

                    </div>
                </div>


                {/* ======= */}
                <div className="col-lg-4 col-md-6 m-auto">
                    <div className="pricing_card text-center rounded">
                        <div className="title_bar background_Blue text-light px-2 py-4 rounded-top">
                            <h2 className="sub_titles titleFont_style text-light">Enterprise</h2>
                            <p className="pricingText">Additional Work**: 16.50$ per hour as required</p>
                        </div>

                        <div className="p-4">
                            <h1 className="packagePrice_title  pb-3">750$</h1>
                            <p className="pricingText pb-2 border-bottom p-0">Up To 10 Pages (Experience, Blog, Website Page)</p>
                            <p className="pricingText pb-2 border-bottom p-0">Based On Standard Easol Theme</p>
                            <p className="pricingText pb-2 border-bottom p-0">Content Upload</p>
                            <p className="pricingText pb-2 border-bottom p-0">Content Optimization (Imagery Etc)</p>
                            <p className="pricingText pb-2 border-bottom p-0">Project Management</p>
                            <p className="pricingText pb-2 border-bottom p-0">Quality Assurance</p>
                            <p className="pricingText pb-2 border-bottom p-0">2 Rounds of Revisions</p>
                            <p className="pricingText pb-2 border-bottom p-0">Estimated Time: 7-10 Business Days*</p>

                            <a href="https://easol.com/easol-partners/elitetechlogix/project"  className="btn blue_btn rounded mt-3"> READY TO START </a> 
                        </div>
                        

                    </div>
                </div>
            </div>


        <DevelopmentPackages />


        </div>
    )
}

export default MigrationPackages;