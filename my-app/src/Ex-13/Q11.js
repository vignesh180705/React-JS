import React from "react";
export default function Q11() {
    var year=prompt("Enter a year");
    return(
        <>
            <h1 align="center">Question-11</h1>
            <p align="center" style={{fontSize:"20px"}}>{year} is {(year%4===0 && year%100!==0) || (year%400===0)?"a Leap Year":"Not a Leap Year"}</p>
        </>
    )
}