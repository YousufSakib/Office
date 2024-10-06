import React from "react";
import "./login.scss";

function Login() {
  return (
    <div className="loginCon">
      <div className="login">
        <h2>Welcome Back</h2>
        <span>Please enter your details</span>
        <div className="input">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="text" />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <div className="row">
          <div className="input">
            <input type="checkbox" id="rem30days" name="rem30days" />
            <label htmlFor="rem30days"> Remember for 30 days</label>
          </div>
          <a href="#">Forgot password</a>
        </div>
        <button>Sign in</button>
        <span className="DontHave">
          Don't have an account <a href="#"> Sign up</a>
        </span>
      </div>
      <div className="imgDiv">
        <img src="loginImg.jpg" alt="" />
      </div>
    </div>
  );
}

export default Login;
