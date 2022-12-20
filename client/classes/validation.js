class Validation {
  // Take user fields for validation
  validateInput(regex, value) {
    switch (regex) {
      case "password":
        this.validatePassword(value);
        break;
    }
  }

  // validate password
  validatePassword(email) {
    const regex = /^[a-z-\' ]{1,50}/;
    const result = email.match(regex);
    console.log(result);
  }
}

export default Validation;
