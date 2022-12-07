/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */

export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const cardAddButton = document.querySelector("#add-button");

export const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const selectors = {
  cardListElement: ".cards__array",
  cardTemplate: "#card-template",
  previewPopup: "#preview-popup",

  profileNameInput: ".popup__input_type_name",
  profileTitleInput: ".popup__input_type_title",

  profileEditPopup: "#edit-popup",
  cardAddPopup: "#add-popup",
  profileNameElement: ".profile__name",
  profileTitleElement: ".profile__title",
};

/* -------------------------------------------------------------------------- */
/*                                Cards Array                                 */
/* -------------------------------------------------------------------------- */

export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
