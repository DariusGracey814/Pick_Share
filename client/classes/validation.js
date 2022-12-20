class Validation {
  // Take user fields for validation
  validateInput(regex, value) {
    switch (regex) {
      case "password":
        break;
    }
  }

  // validate email
  validateEmail(email) {
    const regex = /^[a-z-\' ]{1,50}/;
    const result = email.match(regex);
  }

  // validate email
  validatePassword(password) {}
}
