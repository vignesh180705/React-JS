
import React, { useState } from "react";

export default function Q12(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <form style={{ textAlign: "center" }} onSubmit={(e) => {
            e.preventDefault();
            console.log("Form Submitted");
            console.log("Name:", name);
            console.log("Email:", email);
        }}>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br/><br/>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <br/><br/>
            <button type="submit">Submit</button>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </form>
    );
};
