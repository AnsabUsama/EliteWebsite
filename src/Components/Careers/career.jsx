import React from "react";
import WhyUs from "./whyUs/whyUs";
import Collage from './careerAssets/collap.jpg'
import Positions from "./positions/positions";
import LeaderShip from "../aboutUs/leaderShip/leaderShip";

function Career(){
    return(
        <div>
           <Positions />

           <div className="collage_img"><img src={Collage} alt="" className="w-100" /></div>

           <WhyUs />
           <div className="background_lightGrey"><LeaderShip /></div>
        </div>
    )
}

export default Career;