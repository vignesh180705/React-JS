import React,{Component} from "react";
export default class Q12 extends Component{
    render(){
        return(
            <>
                <h1 align="center">Question-12</h1>
                <h3 align="center" style={{fontSize:"20px"}}>Hello, {this.props.firstName} {this.props.lastName}!x</h3>
            </>
        )
    }
}