import React from "react";
import CustomerFeedBack from "../homePage/customerFeedBack/customerFeedBack";
import Address from "./officeAddress/address";
import Form from "./form/form";
import PageBanner from "./pageBanner/pageBanner";

function Contact(){
    return(
        <div>
            <PageBanner />
            <Form />
            <Address />
            <CustomerFeedBack />
        </div>
    )
}

export default Contact;