import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";

function Login() {
  const [values, setValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValue((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            onChange={handleInput}
            type="email"
            placeholder="Enter email"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            onChange={handleInput}
            type="password"
            placeholder="Enter Password"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Log in</button>
        <Link to="/signup">Create Account</Link>
      </form>
    </div>
  );
}

export default Login;
