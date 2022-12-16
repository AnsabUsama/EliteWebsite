import React from "react";
import PageBanner from "./servicesBanner/pageBanner";
import CounterSection from "./counterSection/counterSection";
import WebDevelopment from "./ServicesInfo/webDevelopment";
import MobileAppDevelopment from "./ServicesInfo/mobileAppDevelopment";
import UIDesign from "./ServicesInfo/UIDesign";
import DigitalMarketing from "./ServicesInfo/digitalMarketing";
import CallCentre from "./ServicesInfo/callCenter";
import LeadGeneration from "./ServicesInfo/leadGeneration";
import CustomerFeedBack from "../homePage/customerFeedBack/customerFeedBack";




function ServicesPage(){
    return(
        <div>
            <PageBanner />
            <CounterSection />
            <WebDevelopment  />
            <MobileAppDevelopment />
            <UIDesign />
            <DigitalMarketing />
            <CallCentre />
            <LeadGeneration />
            <CustomerFeedBack />

        </div>
    )
}


export default ServicesPage;