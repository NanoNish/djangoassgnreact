import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
    
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    
    var userData;

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        var { uname, pass } = document.forms[0];

        axios.get("http://localhost:8000/api/user/${uname}")
            .then((response) => {
                userData = response.data;
            })
            .catch((error) => {
                setErrorMessages({ name: "uname", message: errors.uname });
            })
        
        if (userData.password !== pass.value) {
            setErrorMessages({ name: "pass", message: errors.pass });
        }
        else {
            setIsSubmitted(true);
        }
    };
    
    const renderErrorMessage = (name) => {
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    }
    
    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );
    
    return (
        <div className="login">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    )
}