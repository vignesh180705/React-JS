import React from "react";
export default function Q10() {
    var random = () => {
        var num = Math.floor(Math.random() * 100) + 1;
        document.getElementById("randomNumber").innerHTML = num;
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Question-10</h1>
            <button  onClick={() => random()}>
                Generate Random number
            </button>
            <p style={{ fontSize: "20px" }} id="randomNumber"></p>
        </div>
    )
}