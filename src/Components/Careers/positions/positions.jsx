import React from "react";

function Positions(){
    return(
        <div className="section_padding">
            <div className="d-flex flex-column justify-content-center align-items-center text-center pb-5">
                <span className='span_Titles' ><b>Careers</b></span>
                <div className="bar mt-2 rounded"></div>
                <h2 className='main_heading titleFont_style pt-2'>Join Us And Be A Part Of Elite Squad</h2>
                <i class="fa-solid fa-arrow-down iconBlueClr main_heading"></i>
            </div>

            <div className="position_box container p-5 rounded-4">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <h2 className="small_titles">Mern Stack Developer</h2>
                            <p className="text py-3">1 Position <br/>Lahore office</p>    
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, 
                                pulvinar dapibus leo.ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper 
                                mattis, pulvinar dapibus leo.
                            </p>
                            <div className="d-flex justify-content-end">   <button className="btn rounded mx-1 blue_btn ">Apply Now <i class="fa-solid fa-arrow-right ms-2"></i> </button>  </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="position_box container p-5 rounded-4 my-4">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <h2 className="small_titles">Full Stack Developer</h2>
                            <p className="text py-3">1 Position <br/>Lahore office</p>    
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, 
                                pulvinar dapibus leo.ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper 
                                mattis, pulvinar dapibus leo.
                            </p>
                            <div className="d-flex justify-content-end">   <button className="btn rounded mx-1 blue_btn ">Apply Now <i class="fa-solid fa-arrow-right ms-2"></i> </button>  </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Positions;