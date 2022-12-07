class Utils {
  constructor(dispatch, actions) {
    this.dispatch = dispatch;
    this.actions = actions;
  }

  // Methods

  // Toggle hamburger menu
  toggleNavHandler(evt) {
    evt.preventDefault();
    this.dispatch(this.actions.toggleNav());
  }
}

export default Utils;
