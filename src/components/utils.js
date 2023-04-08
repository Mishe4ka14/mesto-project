import { enableValidation } from "./validate";
//***************************ПЕРЕМЕННЫЕ**********************//
export const content = document.querySelector('.page') //контент на странице
export const container = content.querySelector('.card-container'); //контейнер с карточками
export const popups = document.querySelectorAll('.popup')
//переменные окна редактирования профиля
export const profilePopup = content.querySelector('#popup');
export const profileCloseButton = content.querySelector('#closePopupButton');
export const profileOpenButton = content.querySelector('#openPopupButton');
export const profileAvatar = content.querySelector('.profile__avatar');
export const cards = document.querySelector('.elements');
//перменные окна добавления карточки
export const placePopup = content.querySelector('#place');
export const placeCloseButton = content.querySelector('#closePlaceButton');
export const placeOpenButton = content.querySelector('#openPlaceButton');
export const addButton = content.querySelector('#addButton');
export const trash = content.querySelector('#trash');

//переменные окна полномасштабного изображения
export const imagePopup = content.querySelector('#image');
export const imageCloseButton = content.querySelector('#closeImageButton');
export const fullImage = imagePopup.querySelector('.image__image-full');
export const fullImageTitle = imagePopup.querySelector('.image__title');

// Получаем значение полей jobInput и nameInput из свойства value
export const nameInput = content.querySelector('.popup__field_name');
export const jobInput = content.querySelector('.popup__field_job');

//Выбераем элементы, куда должны быть вставлены значения полей
export const profileTitle = content.querySelector('.profile__title');
export const profileSubtitle = content.querySelector('.profile__subtitle');

//создаем шаблон для новой карточки
export const cardTemplate = document.querySelector('.template')?.content; //создаем переменную для шаблона
export const placeTitle = content.querySelector('#place-title'); //присваиваем параметрам функции название и ссылку из модального окна
export const placeLink = content.querySelector('#place-link');

// находим все крестики проекта по универсальному селектору
export const closeButtons = document.querySelectorAll('.popup__close-button');
export const strelka = document.querySelector('.profile__strelka');
export const AvatarPopup = document.querySelector('#new-avatar');
export const newAvatarLink = document.querySelector('.popup__field_avatar');
export const changeAvatarButton = document.querySelector('.save_avatar');
export const buttons = document.querySelectorAll('.popup__save-button');
export const addAvatarBtn = document.querySelector('#addAvatar');
//находим форму профиля
export const profileForm = content.querySelector('#popup-form');
export const id = '54837afe3652a0dc55e19a1e';
export const config = {
  baseURL: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '8c2802e0-9b5b-4767-b677-ed23ce66f120',
    'Content-Type': 'application/json'
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__field_error',
  inputErrorType: 'popup__field_type_error',
  errorClass: 'popup__field-error_active'
});

