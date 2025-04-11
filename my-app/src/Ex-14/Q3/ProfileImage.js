import React from "react";
import img from "./PI.jpg";
export default function ProfileImage(){
    return(
        <div align="center">
            <img src={img} alt="Profile" width={200} height={200}/>
        </div>
    )
}