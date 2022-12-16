import React from "react";
import LeaderShip from "../aboutUs/leaderShip/leaderShip";
import Environment from "./environment/environment";
import OurSpace from "./ourSpace/ourSpace";

import PageBanner from "./pageBanner/pageBanner";

function LifeAtEliteTechlogix(){
    return(
        <div>
            <PageBanner />
            <Environment />
            <OurSpace />
            <LeaderShip />
        </div>
    )
}

export default LifeAtEliteTechlogix