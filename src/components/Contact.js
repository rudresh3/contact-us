import React, { useState } from "react";
import { db } from "../firebase";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("contacts").add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            alert("Form has been Submitted");
        })
        .catch((error) => {
            alert(error.message);
        });

        setName("")
        setEmail("")
        setMessage("")
    };

    return (
        <div className="container" onSubmit={handleSubmit}>
            <form className="form">
                <h1>Contact Us </h1>
                <div className="holder">
                    <label>Name</label>
                    <input 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e)=> setName(e.target.value)}
                    />
                    
                </div>
                <div className="holder">
                    <label>Email</label>
                    <input 
                    placeholder="Email"
                    value={email} onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className="holder">
                    <label>Message</label>
                    <textarea placeholder="Message"
                    value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact
