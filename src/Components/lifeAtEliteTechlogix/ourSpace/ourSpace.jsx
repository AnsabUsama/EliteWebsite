import React from "react";
import './ourSpace.css'


function OurSpace(){
    return(
        <div className="py-3">

            <div className="d-flex flex-column justify-content-center align-items-center">
                <span className='span_Titles' ><b>How We Work</b></span>
                <div className="bar mt-2 rounded"></div>
                <h2 className='main_heading titleFont_style pt-3'>Our Space</h2>
            </div>

            <div className="container pt-4">
                <div className="row g-2">
                    <div className="col-md-6"><div className="lifeImgs lifeImgs-1"><img src="" alt="" className="w-100" /></div></div>
                    <div className="col-md-6"><div className="lifeImgs lifeImgs-2"><img src=""  alt="" className="w-100" /></div></div>
                    <div className="col-md-6"><div className="lifeImgs lifeImgs-3"><img src=""  alt="" className="w-100" /></div></div>
                    <div className="col-md-6"><div className="lifeImgs lifeImgs-4"><img src=""  alt="" className="w-100" /></div></div>
                    <div className="col-md-6"><div className="lifeImgs lifeImgs-5"><img src=""  alt="" className="w-100" /></div></div>
                    <div className="col-md-6"><div className="lifeImgs lifeImgs-6"><img src=""  alt="" className="w-100" /></div></div>
                </div>
            </div>

        </div>
    )
}

export default OurSpace;