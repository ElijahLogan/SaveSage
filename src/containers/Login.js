import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { FormGroup, input } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("john.doe@gmail.com")
    const [password, setPassword] = useState("!Password")


    function validateForm() {
        return email > 0 && password > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();


        try {
            await Auth.signIn(email, password);
            alert("logged in")
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <label> email</label>
                    <input
                        autoFocus
                        type="email"
                        value={email}
                        onChange={x => setEmail(x.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <label> password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={x => setPassword(x.target.value)}
                    />
                </FormGroup>
                <input type="submit" value="Submit" onClick={handleSubmit} />

            </form>
        </div>
    );
}