export default class Popup {
  constructor({ popupSelector }) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  _handleEscapeClose(event) {
    event.preventDefault();
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (event) => {
      if (
        !event.target.closest(".popup__content") ||
        event.target.classList.contains("popup__close-button")
      ) {
        this.close();
      }
    });
  }
}
