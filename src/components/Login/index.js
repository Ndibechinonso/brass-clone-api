import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import Button from "../Button";
import "./Login.css";
import { Link } from "react-router-dom";
import {signIn} from '../auth/data'

export default function Login({setToken}) {
    const [values, setValues] = useState({
        username: "",
        password: "",
        type: 'admin'
    });

    // state to monitor email validation warning
    const [error, setError] = useState('')

    // state to monitor first time email input is changed
    const [press, setPress] = useState(false)


    // monitors the email input to give a corresponding error message
    useEffect(() => {
        if (press) {
            !values.username ? setError('Please enter your email address') : setError('')
                // !emailRegex.test(values.email) ? setError('Please enter a valid email') : setError('');
        }
    }, [values.username, press])


    const handleUserNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            username: event.target.value,
        }));
        setPress(true)
    };

    const handleTypeChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            type: event.target.value,
        }));
    };

    const handlePasswordInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password: event.target.value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const token =  await signIn(values.username, values.password, values.type)
       
        console.log(token)
        localStorage.setItem('x-access-token', token)
      }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? true : false);
    };
   
    // regex for password validation
    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{&}~-]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/
    );

    return (
        <div>
            <NavBar button="button" />
            <div className="login-container">
                <div>
                    <h3>Log in to your account</h3>
                </div>
                <div>
                    {" "}
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-details">
                            <p id="emailError">{error}</p>

                            <input
                                type="text"
                                name="username"
                                id="email"
                                className="inputs"
                                placeholder=" Email address"
                                value={values.username}
                                onChange={handleUserNameInputChange}
                            />
                        </div>

                        <div className="form-details password-div">
                            <input
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                id="password"
                                className="inputs"
                                placeholder="Enter Password"
                                value={values.password}
                                onChange={handlePasswordInputChange}
                            />
                            <p
                                className="password-toggle"
                                onClick={() =>
                                    setPasswordShown((passwordShown) => !passwordShown)
                                }
                            >
                                {passwordShown ? "Hide" : "Show"}
                            </p>
                        </div>
                        <div>
                 <select name="type" onChange={handleTypeChange}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

                        {  values.password === '123456' && values.username === 'admin' && values.type === 'admin' ? (
                            <Link to="/home">
                                {" "}
                                <Button className="login-button" primary inputPadding="15px 137px">
                                    Log me in
                </Button>
                            </Link>
                        ) : (
                            <Button
                                primary inputPadding="15px 137px"
                                // disabled={values.password === 123456 || values.username === 'admin' || values.type === 'admin'}
                                className="login-button notAllowed"
                            >
                                Log me in
                            </Button>
                        )}
                        <p className="passwordReset">
                            Forgot your password?<a className="reset">Reset it here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
