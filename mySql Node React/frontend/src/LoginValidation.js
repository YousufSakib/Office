function Validation(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (values.email === "") error.email = "Name should not be empty!";
  else if (!email_pattern.test(values.email))
    error.email = "Enter a valid email address";
  else error.email = "";

  if (values.password === "") error.password = "Password should not be empty!";
  else if (!password_pattern.test(values.password))
    error.password = "Password didn't match";
  else error.password = "";

  return error;
}
export default Validation;

// Has minimum 8 characters in length. Adjust it by modifying {8,}
// At least one uppercase English letter. You can remove this condition by removing (?=.*?[A-Z])
// At least one lowercase English letter.  You can remove this condition by removing (?=.*?[a-z])
// At least one digit. You can remove this condition by removing (?=.*?[0-9])
// At least one special character,  You can remove this condition by removing (?=.*?[#?!@$%^&*-])
