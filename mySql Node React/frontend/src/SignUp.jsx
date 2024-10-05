import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from "axios";

function SignUp() {
  const [values, setValue] = useState({
    name: "",
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
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/signup", { ...values, id: 1 })
        .then((res) => navigate("/"))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>Sign-Up</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleInput}
            type="name"
            name="name"
            placeholder="Enter name"
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleInput}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInput}
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Sign up</button>
        <Link to="/">Login</Link>
      </form>
    </div>
  );
}

export default SignUp;
