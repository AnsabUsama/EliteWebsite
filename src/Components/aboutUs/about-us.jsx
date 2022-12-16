import React  from "react";
import ClientSection from "../homePage/clientsSection/clientSection";
import CounterSection from "../homePage/counterSection/counterSection";
import AboutSection from "./aboutSection/aboutSec";
import LeaderShip from "./leaderShip/leaderShip";
import PageBanner from "./pageBanner/pageBanner";
import SuccessStory from "./storySection/succesStory";
import WhyUs from "./whyUs/whyUs";
import CustomerFeedBack from "../homePage/customerFeedBack/customerFeedBack";


function AboutUs(){
    return(
        <div>
            <PageBanner />
            <AboutSection />
            <CounterSection />
            <SuccessStory />
            <ClientSection />
            <LeaderShip />
            <WhyUs />
            <CustomerFeedBack />
        </div>
    )
}


export default AboutUs