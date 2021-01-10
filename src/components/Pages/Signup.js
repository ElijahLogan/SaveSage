import React, { useState, Fragment } from "react";
import {
    FormGroup,
    FormControl,
    FormLabel
} from "react-bootstrap";


import { Auth } from "aws-amplify";


const Signup = () => {
    /*
      const [handleFieldChange] = useForm{
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: ""
    });
    */
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmationCode, setConfirmationCode] = useState("")
    const [newUser, setNewUser] = useState(null);

    function validateForm() {
        return (
            email.length > 0 &&
            password.length > 0 &&
            password === confirmPassword
        );
    }

    function validateConfirmationForm() {
        return confirmationCode.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();


        try {
            const newUser = await Auth.signUp({
                username: email,
                password: password
            });
            setNewUser(newUser);
            alert("new user")
        } catch (e) {
            alert(e.message);
        }
    }

    async function handleConfirmationSubmit(event) {
        event.preventDefault();



        try {
            await Auth.confirmSignUp(email, confirmationCode);
            await Auth.signIn(email, password);

            alert('user signed in')
        } catch (e) {
            alert(e.message);
        }
    }

    function renderConfirmationForm() {
        return (

            <div className="login">
                <div>
                    <label for="password">confirmation code</label>
                    <input type="test" name="password" id="password" onChange={x => setConfirmationCode(x.target.value)} />
                </div>


                <div className="actions">
                    <input type="submit" name="login" value="sign up" onClick={handleConfirmationSubmit} />
                    <a href="/forgot">I forgot my password</a>
                </div>
            </div>
        );
    }

    function renderForm() {
        return (
            <Fragment>
                <div className="login" >

                    <div>
                        <label for="username">email</label>
                        <input type="text" name="username" value={email} id="username" onChange={x => setEmail(x.target.value)} />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password" value={password} id="password" onChange={x => setPassword(x.target.value)} />
                    </div>

                    <div>
                        <label for="password">confirm Password</label>
                        <input type="password" name="password" value={confirmPassword} id="password" onChange={x => setConfirmPassword(x.target.value)} />
                    </div>

                    <div className="actions">
                        <input type="submit" name="login" value="Login" onClick={handleSubmit} />
                        <a href="/forgot">I forgot my password</a>
                    </div>
                </div>


                <div className="account">
                    <p>sign into your account <a href="">here</a>.</p>
                </div>

                <div className="contact">
                    <p>If you need any other help, please contact the helpdesk.</p>
                </div>
            </Fragment>


        );
    }

    return (
        <div className="Signup">
            {newUser === null ? renderForm() : renderConfirmationForm()}
        </div>
    );
}

export default Signup