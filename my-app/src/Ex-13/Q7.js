import React from "react";
export default class Q7 extends React.Component {
    isPrime(x){
        if(x<=1) return false;
        for(let i=2;i<x;i++){
            if(x%i===0) return false;
        }
        return true;
    }
    render() {
        const num = prompt("Enter a number"); // Example number to check
        const result = this.isPrime(parseInt(num)) ? "is a prime number" : "is not a prime number";
        return (
            <>
                <h1 align="center">Question-7</h1>
                <p align="center" style={{ fontSize: "20px" }}>{num} {result}</p>
            </>
        );
    }
}