import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit, resetOnClose }) {
    super({ popupSelector });

    this._resetOnClose = resetOnClose;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => (formValues[input.name] = input.value));
    return formValues;
  }

  open() {
    if (this._resetOnClose) {
      this._popupForm.reset();
    }
    super.open();
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();

      this._handleFormSubmit(this._getInputValues());

      this.close();
      this._popupForm.reset();
    });
    super.setEventListeners();
  }
}
