import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";

function Login() {
  const [values, setValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValue((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => navigate("/"))
        .catch((err) => console.log(err));
    }
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
