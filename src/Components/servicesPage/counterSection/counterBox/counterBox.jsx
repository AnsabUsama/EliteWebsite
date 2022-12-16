import React from "react";

function CounterBox(){


    function numCounter(tagId,maxCount,speed){
        var initialNumber = 0;
            function counter(){
                document.getElementById(tagId).innerHTML = initialNumber;
                ++initialNumber;
            }
        var counterDelay = setInterval(counter,speed);
            function totalTime(){
                clearInterval(counterDelay);
            }
        var totalPeriod = speed * (maxCount);  
        setTimeout(totalTime, totalPeriod);
    }


        numCounter("Employees",255,10);
        numCounter("Projects",601,20);
        numCounter("Clients",51,20);
        numCounter("UpWork_hours",301,20);
            



    return(
        <div className="w-50">
            <div class="row pt-4">
                <div class="col-lg-3 col-md-6">
                    <div class="">
                        <h3 className="Blue_Span main_heading titleFont_style"><span id="Employees">0</span>+</h3>
                        <p className="text ">Employees</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="">
                        <h3 className="Blue_Span main_heading titleFont_style"><span id="Projects">0</span>+</h3>
                        <p className="text ">Total Clients Served</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="">
                        <h3 className="Blue_Span main_heading titleFont_style"><span id="Clients">0</span>+</h3>
                        <p className="text ">Running Projects</p>
                    </div>
                </div> 
                <div class="col-lg-3 col-md-6">
                    <div class="">
                        <h3 className="Blue_Span main_heading titleFont_style"><span id="UpWork_hours">0</span>+</h3>
                        <p className="text ">Upwork Hours</p>
                    </div>
                </div> 
            </div>

        </div>


    )
}


export default CounterBox;