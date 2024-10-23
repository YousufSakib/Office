import React, { useState } from "react";
import PhoneNumberValidator from "./PhoneNumberInputBd";
import EmailValidator from "./EmailInput";

const TestInput = () => {
  const anyError = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleEmailChange = (email) => {
    if(email.error)anyError.current = true;
    else
  };

  const handlePhoneSubmit = (phone) => {
    if (validatePhone(phone)) {
      setFormData((prevData) => ({ ...prevData, phone }));
      setPhoneError("");
      return true; // Indicate successful validation
    } else {
      setPhoneError("Invalid phone number format.");
      return false; // Indicate failure
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {console.log('testing rendering')}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <EmailValidator
        onEmailChange={handleEmailChange}
        emailError={emailError}
      />
      <PhoneNumberValidator
        onPhoneSubmit={handlePhoneSubmit}
        phoneError={phoneError}
      />
      <button type="submit">Submit All</button>
    </form>
  );
};

export default TestInput;
