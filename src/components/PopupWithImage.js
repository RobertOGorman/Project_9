import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  open({ name, link }) {
    this._popup.querySelector(".popup__preview-text").textContent = name;
    this._popup.querySelector(".popup__preview-text").alt = name;
    this._popup.querySelector(".popup__preview-image").src = link;

    super.open();
  }
}
