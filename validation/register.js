const Validator = require("validator");
const isEmpty = require("is-empty");
const isEmail = require("is-email")

const regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

// export the function wich will mak check if the signup form and handel errors
module.exports = function validateInput(data) {
    var errors= {};

    //convert the empty feilds to empty string 
    data.firstName = !isEmpty(data.firstName) ?  data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ?  data.lastName : "";
    data.email = !isEmpty(data.email) ?  data.email : "";
    data.password = !isEmpty(data.password) ?  data.password : "";
    data.confirmPassword = !isEmpty(data.confirmPassword) ?  data.confirmPassword : "";

    // firstName checks
  if (isEmpty(data.firstName)) {
    errors.name = "Name field is required";
  }
// Email checks
  if (isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

// Password checks
    if (isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (isEmpty(data.confirmPassword)) {
        errors.password2 = "Confirm password field is required";
    }
   if (data.password.match(regExp)) {
        errors.password = "Password must be at least 8 characters and contain at least one numeric digit and a special character";
    }
    if (data.password === data.confirmPassword) {
        errors.confirmPassword = "Passwords must match";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
      };
}