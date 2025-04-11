function Q2(){
    const fruits=["Apple","Banana","Orange"];
    return(
        <>
            <h1 align="center">Question-2</h1>
            <ul style={{fontSize:"20px"}}>
                {fruits.map((fruit,index)=>(
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </>
        
    )
}

export default Q2