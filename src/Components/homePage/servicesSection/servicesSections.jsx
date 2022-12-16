import React from "react";
// import {Button} from 'react-bootstrap'
import './servicesSection.css'
import {Link} from 'react-router-dom'



function ServicesSection(){
    return(
        <div className="container">
            <div className="section_padding text-center">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <span className='span_Titles' ><b>What We’re Offering</b></span>
                        <div className="bar mt-2 rounded"></div>
                        <h2 className='main_heading titleFont_style'>Services We’re Providing</h2>
                    </div>

                <div className="row px-3 py-4 g-3 ">

                    {/* Box-1 */}
                    <div className="col-lg-4">
                        <div className="servicesBox servicesBox-1 rounded ">
                            <div className="cover_Overlay services_overlay rounded d-flex justify-content-center align-items-end d-flex justify-content-center align-items-end">
                                <h2 className='sub_titles titleFont_style text-light'>Web Development</h2>
                            </div>
                            <div className="cover_Overlay servicesInfo_overLay rounded d-flex flex-column justify-content-center align-items-center px-3">
                                <h2 className='sub_titles titleFont_style text-light'>Web Development</h2>
                                <p className="text-light">We are offering professional web design services.No matter what your needs, a personal website or corporate community website ...</p>         
                                <Link to="/servicesPage/#web-development" > <button className="btn quoteBtn servicesBox_btn">Learn More</button> </Link>                          
                            </div>
                        </div>
                    </div>

                    {/* Box-2 */}
                    <div className="col-lg-4">
                    <div className="servicesBox servicesBox-2 rounded ">
                            <div className="cover_Overlay services_overlay rounded d-flex justify-content-center align-items-end">
                                <h2 className='sub_titles titleFont_style  text-light'>Mobile App Development</h2>
                            </div>
                            <div className="cover_Overlay servicesInfo_overLay rounded d-flex flex-column justify-content-center align-items-center px-3">
                                <h2 className='sub_titles titleFont_style text-light'>Mobile App Developmentt</h2>
                                <p className="text-light">Designing a mobile app is not easy, but using it should be. Customers expect the best mobile experience ...</p>
                                <Link to='/servicesPage/#Mob-development'><button className="btn quoteBtn servicesBox_btn">Learn More</button> </Link>                         
                            </div>
                        </div>
                    </div>

                    {/* Box-3 */}
                    <div className="col-lg-4">
                    <div className="servicesBox servicesBox-3 rounded ">
                            <div className="cover_Overlay services_overlay rounded d-flex justify-content-center align-items-end">
                                <h2 className='sub_titles titleFont_style  text-light'>UI/UX Design</h2>
                            </div>
                            <div className="cover_Overlay servicesInfo_overLay rounded d-flex flex-column justify-content-center align-items-center px-3">
                                <h2 className='sub_titles titleFont_style text-light'>UI/UX Design</h2>
                                <p className="text-light">UI/UX Design is the process of visual communication and problem-solving through the use of typography, photography, and illustration...</p>
                                <Link to='/servicesPage/#UI_design'> <button className="btn quoteBtn servicesBox_btn">Learn More</button> </Link>                        
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pb-5 px-3 g-3" >

                    {/* Box-1 */}
                    <div className="col-lg-4">
                        <div className="servicesBox servicesBox-4 rounded ">
                            <div className="cover_Overlay services_overlay rounded d-flex justify-content-center align-items-end">
                                <h2 className='sub_titles titleFont_style  text-light'>Digital Marketing</h2>
                            </div>
                            <div className="cover_Overlay servicesInfo_overLay rounded d-flex flex-column justify-content-center align-items-center px-3">
                                <h2 className='sub_titles titleFont_style text-light'>Digital Marketing</h2>
                                <p className="text-light">We are most famous and popular in pakistan. we place value on our ability to assess, plan, and deliver on our seo and digital marketing promises...</p>       
                                <Link to='/servicesPage/#digi_mark'> <button className="btn quoteBtn servicesBox_btn">Learn More</button> </Link>                    
                            </div>
                        </div>
                    </div>
                    {/* Box-2 */}
                    <div className="col-lg-4">
                    <div className="servicesBox servicesBox-5 rounded ">
                            <div className="cover_Overlay services_overlay rounded d-flex justify-content-center align-items-end">
                                <h2 className='sub_titles titleFont_style  text-light'>Call Center</h2>
                            </div>
                            <div className="cover_Overlay servicesInfo_overLay rounded d-flex flex-column justify-content-center align-items-center px-3">
                                <h2 className='sub_titles titleFont_style text-light'>Call Center</h2>
                                <p className="text-light">A call center is a centralized office used for receiving or transmitting a large volume of inquiries by telephone.</p>
                                <Link to='/servicesPage/#digi_mark'> <button className="btn quoteBtn servicesBox_btn">Learn More</button> </Link>                        
                            </div>
                        </div>
                    </div>

                    {/* Box-3 */}
                    <div className="col-lg-4">
                    <div className="servicesBox servicesBox-6 rounded ">
                            <div className="cover_Overlay services_overlay rounded d-flex justify-content-center align-items-end">
                                <h2 className='sub_titles titleFont_style  text-light'>Lead Generation</h2>
                            </div>
                            <div className="cover_Overlay servicesInfo_overLay rounded d-flex flex-column justify-content-center align-items-center px-3">
                                <h2 className='sub_titles titleFont_style text-light'>Lead Generation</h2>
                                <p className="text-light">The action or process of identifying and cultivating potential customers for a business’s products or services.</p>
                                <Link to='/servicesPage/#lead'> <button className="btn quoteBtn servicesBox_btn">Learn More</button> </Link>                         
                            </div>
                        </div>
                    </div>
                </div>

                <Link to='/servicesPage'> <button className="btn blue_btn rounded"  >View All Services <i class="fa-solid fa-arrow-right ms-2"></i> </button>  </Link>

            </div>
            
        </div>
    )
}

export default ServicesSection;