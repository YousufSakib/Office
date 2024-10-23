import React, { useState } from 'react';

const PhoneNumberInputBd = ({ onPhoneChange, isClickedOnSubmit }) => {
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const handleChange = (event) => {
      setPhone(event.target.value);

      if(isClickedOnSubmit){
        if (validatePhone(phone)) {
          setPhoneError("");
        } else {
          setPhoneError("Invalid phone number format.");
        }
      }
      onPhoneChange(value); // Communicate the change to the parent
    };
  const validatePhone = (phone) => {
    const phonePattern = /^(?:\+8801[2-9]\d{8}|01[2-9]\d{8})$/;
    return phonePattern.test(phone);
  };
    return (
        <div>
            <label htmlFor="phone">Phone:</label>
            <input
                type="text"
                id="phone"
                value={phone}
                onChange={handleChange}
                required
            />
            {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
        </div>
    );
};

export default PhoneNumberInputBd;
