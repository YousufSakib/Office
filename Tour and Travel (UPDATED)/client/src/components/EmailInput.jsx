import React, { useState } from "react";

const EmailInput = ({ onEmailChange }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);

    // if (isClickedOnSubmit) {
    if (validateEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email number format.");
    }
    // }
    onEmailChange({ value: event.target.value, error: emailError }); // Communicate the change to the parent
  };
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={handleChange}
        required
      />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}
    </div>
  );
};

export default EmailInput;
