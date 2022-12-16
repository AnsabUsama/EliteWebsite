import React from "react";
import '../ourCasesSection.css'
import case_2 from '../../homePageAssets/case2.jpg'

function Case2(){
    return(
        <div>
                <div className="row py-5 w-100 m-0 col_reverse">

                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
                        <div className='AboutInfo_box'>
                            <span className='span_Titles'>Industry</span>
                            <div className="bar mt-2 rounded"></div>
                            <h2 className='sub_titles titleFont_style py-3'>Dino Kingdom Returns</h2>
                            <p className='text text_color py-2 pe-4'>of the leading projects of Elite Techlogix. It is one of the leading multi-purpose Easol 
                            CMS themes that has been developed to increase your conversion with the help of our smart ad spaces and SEO-friendly layout. Improved Earnings.<br/>
                            Dino Kingdom gives you robust ad management which allows you to earn more money in a less period of time. Dino Kingdom essentially is the % of 
                            ads that are clicked per impression.
                            </p>

                            <div className="caseList">
                                <ul className="all_type_list p-0">
                                    <li className="casesList py-2"><i class="fa-solid fa-bezier-curve pe-3 iconSize iconBlueClr"></i> UI/UX Design </li>
                                    <li className="casesList py-2"><i class="fa-solid fa-laptop-code pe-3 iconSize iconBlueClr"></i> Website Development </li>
                                    <li className="casesList py-2"><i class="fa-solid fa-shield-halved pe-3 iconSize iconBlueClr"></i> Quality Assurance </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 position-relative d-flex align-items-center">
                        <div className='ColSide_imgBox'> 
                            <img src={case_2} className='w-100 rounded ColSide_img' alt=""  /> 
                        </div>
                        <div className='Snipo_imgBox'><img src="" alt="" className='Snipo_Img' /></div>
                    </div>

                </div>
        </div>
    )
}

export default Case2;