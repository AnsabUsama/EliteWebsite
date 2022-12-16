import React from "react";

import Case1 from "./Casses/case1";
import Case2 from "./Casses/case2";
import Case3 from "./Casses/case3";

import {Link} from 'react-router-dom'

function OurCasesSection(){
    return(
        <div className="container">
            <div className="section_padding">

                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <span className='span_Titles' ><b>Recent Work</b></span>
                    <div className="bar mt-2 rounded"></div>
                    <h2 className='main_heading titleFont_style py-3'>Our Cases</h2>
                    <p className="text ">Learn how we help customers overcome the challenges of their business, across all industries.</p>
                </div>

                <Case1 />
                <Case2 />
                <Case3 />

                <div className="d-flex justify-content-center">
                    <Link to="/work"> <button className="btn blue_btn rounded">View More <i class="fa-solid fa-arrow-right ms-2"></i> </button>  </Link>
                </div>
            </div>
           
        </div>
    )
}

export default OurCasesSection;