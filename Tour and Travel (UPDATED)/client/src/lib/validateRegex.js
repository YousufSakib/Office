export const isNotValidatedEmail = (email) => {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let status = emailPattern.test(email);
  if (status) return "";
  else return "Email is not valid";
};

export const isNotValidatedPhone = (phone) => {
  const phonePattern = /^(\+8801[2-9]\d{2}-?\d{6}|01[2-9]\d{2}-?\d{6})$/;
  let status = phonePattern.test(phone);
  if (status) return "";
  else return "Phone number is not valid";
};
