import React from "react";
export default function Q6(){
    var day=new Date().getDay();
    var dayName="";
    switch(day){
        case 0:
            dayName="Sunday";
            break;
        case 1:
            dayName="Monday";
            break;
        case 2:
            dayName="Tuesday";
            break;
        case 3:
            dayName="Wednesday";
            break;
        case 4:
            dayName="Thursday";
            break;
        case 5:
            dayName="Friday";
            break;
        case 6:
            dayName="Saturday";
            break;
        default:
            dayName="Invalid Day";
            break;
    }
    return(
        <>
            <h1 align="center">Question-6</h1>
            <p align="center" style={{fontSize:"20px"}}>Today is {dayName}</p>
        </>
    )
}