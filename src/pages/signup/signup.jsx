import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Signup() {
    
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [alreadyExists, setAlreadyExists] = useState(false);

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        var { uname, pass, email } = document.forms[0];

        axios.get("http://localhost:8000/api/user/${uname}")
            .then((response) => {
                setAlreadyExists(true);
            })
        
        if (alreadyExists) {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
        else {
            axios.post("http://localhost:8000/api/user/", {
                username: uname,
                password: pass,
                email: email,
            }).then((response) => {
                setIsSubmitted(true);
            })
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
            <div className="input-container">
              <label>Email </label>
              <input type="email" name="email" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );
    
    return  (
        <div className="signup">
            <div className="signup-form">
                <div className="title">Sign Up</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    )
}