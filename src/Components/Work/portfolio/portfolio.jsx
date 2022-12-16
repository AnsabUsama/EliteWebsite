import React from "react";
import './portfolio.css'

function Portfolio(){
    return(
        <div className="section_padding">   
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <span className='span_Titles' ><b>We Develop That Convert</b></span>
                <div className="bar mt-2 rounded"></div>
                <h2 className='main_heading titleFont_style pt-2'>Our Portfolio</h2>
                <p className="text py-3">We help our customers grow with state-of-the-art technology, state-of-the-art designs, and innovative<br/> software solutions.</p>
                <div className="footer_navigation ">
                        <ul className="all_type_list d-flex flex-wrap justify-content-center align-items-center">
                            <li className="mx-3 text" ><a  className="nav-link text-dark" href=""> All </a></li>
                            <li className="mx-3 text" ><a  className="nav-link text-dark" href=""> Websites </a></li>
                        </ul>
                    </div>
            </div>



            <div className="container">
                <div className="row p-4 g-4">

                    {/* Box-1 */}
                    <div className="col-lg-4">
                        <div className="servicesBox portfolioBox portfolioBox-1 rounded-4 ">
                            <div className="portFolio_overLay rounded d-flex flex-column justify-content-center align-items-center px-3">
                                <h2 className='small_titles titleFont_style text-light'>ASPIRE ADVENTURES</h2>                       
                            </div>
                        </div>
                    </div>

                    {/* Box-2 */}
                    <div className="col-lg-4">
                        <div className="servicesBox portfolioBox portfolioBox-2 rounded-4 ">
                            <div className="portFolio_overLay rounded d-flex flex-column justify-content-center align-items-center px-3">
                                <h2 className='small_titles titleFont_style text-light'>SATSANG ADVENTURES</h2>                       
                            </div>
                        </div>
                    </div>

                    {/* Box-3 */}
                    <div className="col-lg-4">
                        <div className="servicesBox portfolioBox portfolioBox-3 rounded-4 ">
                            <div className="portFolio_overLay rounded d-flex flex-column justify-content-center align-items-center px-3">
                                <h2 className='small_titles titleFont_style text-light'>DINO KIGDOM RETURNS</h2>                       
                            </div>
                        </div>
                    </div>

                </div>
            </div>





        </div>
    )
}

export default Portfolio