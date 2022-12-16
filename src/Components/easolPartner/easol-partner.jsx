import React from "react";
import AboutSection from "./aboutSection/aboutSec";
import Faqs from "./FAQ's/FAQ's";
import MigrationPackages from "./Packages/migrationPackages";

import PageBanner from "./pageBanner/pageBanner";

function EasolPartner(){
    return(
        <div>
            <PageBanner />
            <AboutSection />
            <MigrationPackages />
            <Faqs />
         
        </div>
    )
}

export default EasolPartner;