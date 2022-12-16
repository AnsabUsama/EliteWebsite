import React from 'react'
import E1 from '../Assets/e1.jpg'

function Environment(){
    return(
        <div className='container section_padding'>
            
            <div className="row w-100 m-0 col_reverse">
                <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
                    <div className='AboutInfo_box'>
                        <h2 className='main_heading titleFont_style UpperCase_title'>Our Envionment</h2>
                        <div className="bar mt-2 rounded"></div> 
                        <p className='text text_color pt-4'>We strongly believe in making the lives better for our agents, as the saying goes “An employee 
                            who is satisfied with their life is more likely to be satisfied with their work”. We have an open door policy in our company so the 
                            agents have a quick and easy access to their Team Leaders and Management for any problems they are facing work or life at home and 
                            help them out in any way possible.
                        </p>

                        <div className="caseList d-flex flex-wrap pt-2">
                            <ul className="all_type_list me-5 p-0">
                                <li className=" text fontSize_sm py-1"><i class="fa-brands fa-leanpub iconBlueClr"></i> Leadership </li>
                                <li className=" text fontSize_sm py-1"><i class="fa-solid fa-hourglass-half iconBlueClr"></i> Innovation </li>
                                <li className=" text fontSize_sm py-1"><i class="fa-solid fa-handshake iconBlueClr"></i> Responsibility </li>
                            </ul>
                            <ul className="all_type_list p-0 ">
                                <li className=" text fontSize_sm py-1"><i class="fa-solid fa-people-arrows iconBlueClr"></i> Collaboration </li>
                                <li className=" text fontSize_sm py-1"><i class="fa-solid fa-person-dots-from-line iconBlueClr"></i> Connection</li>
                                <li className=" text fontSize_sm py-1"><i class="fa-solid fa-wand-magic-sparkles iconBlueClr"></i> Passion </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center">
                    <div className='ColSide_imgBox'> 
                        <img src={E1} className='w-100 rounded ColSide_img' alt=""  /> 
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Environment;