import React from "react";
import Banner from "./banner/banner";
import AboutSection from "./aboutSection/aboutSec";
import ServicesSection from "./servicesSection/servicesSections";
import CounterSection from "./counterSection/counterSection";
import OurCasesSection from "./ourCasesSection/ourCasesSection";
import ClientSection from "./clientsSection/clientSection";
import CustomerFeedBack from "./customerFeedBack/customerFeedBack";

function Home(){
    return(
        <div>
            <Banner />
            <AboutSection />
            <ServicesSection />
            <CounterSection />
            <OurCasesSection />
            <ClientSection />
            <CustomerFeedBack />
        </div>
    )
}

export default Home;