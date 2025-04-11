import React from "react";
function Header(props){
    return(
        <>
            <header>
                <h1>{props.title}</h1>
            </header>
        </>
    )
}
function Main(){
    var arr=["What does a storm cloud wear under his raincoat? Thunderwear.",
        "What do you call an ant who fights crime? A vigilANTe!",
        "How does the ocean say hi? It waves!",
        "What do you call a group of cows playing instruments? A moo-sical band!",
        "What do you call a bear with no socks on? Barefoot!"
    ]
    return(
        <>
            <button onClick={()=>{
                var random=Math.floor(Math.random()*arr.length);
                document.getElementById("joke").innerHTML=arr[random];
            }}>
                Tell me a joke!
            </button>
            <p id="joke" ></p>
        </>
    )
}
function Footer(){
    return(
        <footer>
            <h3>This is the Footer</h3>
        </footer>
    )
}
function App(){
    return (
        <div style={{textAlign:"center"}}>
            <Header title="Joke Teller"/>
            <Main />
            <Footer />
        </div>
    );
}
export default App;