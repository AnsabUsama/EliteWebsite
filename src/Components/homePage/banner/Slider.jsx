import React from 'react'
import './banner.css'

import upWorkImg from '../homePageAssets/upWork_white.png'


function BannerCarousel ()  {
  
  return (
      <div>
          <div class="banner slide1">
            <div class="banner_cover">
                <h1 className='banner_text text-light titleFont_style'>NOVATIVE SOLUTIONS FOR <br/> <span className='bold_title'>WEB DEVELOPMENT</span> </h1>
                <p className='text text-light py-4'> We offer a complete range of “BPO” solution services which are rooted by our expertise <br/>
                    and subtle knowledge of customer behavior and the business industry.
                </p>
                <button className="btn quoteBtn servicesBox_btn">GET A QUOTE <i class="fa-solid fa-arrow-right ms-2"></i> </button> 

                    {/* <div className='animation_text_box'>
                        <h1 className='anim_title'>
                            <span>NOVATIVE SOLUTIONS FOR</span>
                                <div class="message">
                                    <div class="word1">close</div>
                                    <div class="word2">code</div>
                                    <div class="word3">creating</div>
                                </div>
                        </h1>
                    </div> */}


                <div className="footerIcon bannerIcon_bar text-light_box">
                    <a href="https://www.facebook.com/elitetechlogix/"> <i class="fa-brands fa-facebook footerIcons text-light"></i> </a>
                    <a href="https://www.linkedin.com/company/elite-techlogix/mycompany/"><i class="fa-brands fa-linkedin footerIcons text-light py-4"></i></a>
                    <div className="LogoBox"><a href="https://www.upwork.com/o/companies/~019ebaa21af2dd30d7/"><img src={upWorkImg} alt="" className="w-100" /></a></div>
                </div>
            </div>
        </div>
      </div>
  );
};

export default BannerCarousel