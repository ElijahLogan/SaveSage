import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { FormGroup, input } from "react-bootstrap";
import "./Login.css";
import { Fragment } from "react";
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
        <Fragment>
            <h1>Login here</h1>



            <div className="login" >

                <div>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" onChange={x => setEmail(x.target.value)} />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" onChange={x => setPassword(x.target.value)} />
                </div>

                <div className="actions">
                    <input type="submit" name="login" value="Login" onClick={handleSubmit} />
                    <a href="/forgot">I forgot my password</a>
                </div>
            </div>


            <div className="account">
                <p>Create a new account <a href="">here</a>.</p>
            </div>

            <div className="contact">
                <p>If you need any other help, please contact the helpdesk.</p>
            </div>
        </Fragment>
    );
}