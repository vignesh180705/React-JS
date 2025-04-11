import React from "react";
export default function Q9(){
    var s=prompt("Enter a string");
    var rs=s.split("").reverse().join("");
    return(
        <>
            <h1 align="center">Question-9</h1>
            <p align="center" style={{fontSize:"20px"}}>Reversed string of {s} is {rs}</p>
            <p align="center" style={{fontSize:"20px"}}>{s} is a {(s.toLowerCase()===rs.toLowerCase())?"Palindrome":"Not a Palindrome"}</p>
        </>
    )
}