import React from "react";
import CounterSection from "../homePage/counterSection/counterSection";
import CustomerFeedBack from "../homePage/customerFeedBack/customerFeedBack";
import PageBanner from "./pageBanner/pageBanner";
import Portfolio from './portfolio/portfolio'

function Work(){
    return(
        <div>
            <PageBanner />
            <Portfolio />
            <CounterSection />
            <CustomerFeedBack />
            
        </div>
    )
}

export default Work;