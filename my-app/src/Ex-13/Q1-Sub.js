import React,{Component} from 'react'
class Q1_I extends Component{
    render(){
        return(
            React.createElement('h1',{align:'center'},`Hello, React!`)    
        )
    }
}

class Q1_II extends Component{
    render(){
        return(
            <h1 align='center'>Hello, React!</h1>    
        )
    }
}

class Q1_III extends Component{
    render(){
        var msg="Variable Message";
        return(
            <h1 align='center'>{msg}</h1>    
        )
    }
}

export{Q1_I,Q1_II,Q1_III};