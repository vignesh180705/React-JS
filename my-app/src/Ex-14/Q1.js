import React from "react"
import img2 from '../Images/logo512.png';
export default function Q1(){
    return(
        <div style={{textAlign: "center"}}>
            <h1 align="center">Question-1</h1>
            <h4>public/Images:</h4>
            <img src={'/Images/logo192.png'} alt="logo" width="200px" height="200px" align="center"/>
            <br/>
            <h4>src/Images:</h4>
            <img src={img2} alt="logo" width="200px" height="200px" align="center"/>
        </div>
    )
}