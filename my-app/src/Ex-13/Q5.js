import React from 'react'
class Q5 extends React.Component{
    render(){
        return(
            <>
                <h1 align="center">Question-5</h1>
                <p align="center" style={{fontSize:"20px"}}>{this.props.isMorning?"Good Morning":"Good Evening"}</p>
            </>
        )
    }
}
export default Q5