class Validation {
  // Take user fields for validation
  validateInput(regex, value) {
    switch (regex) {
      case "password":
        break;
    }
  }

  // validate password
  validatePassword(email) {
    const regex = /^[a-z-\' ]{1,50}/;
    const result = email.match(regex);
  }
}
