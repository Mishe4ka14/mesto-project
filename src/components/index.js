//************************IMPORTS**************************/
import {
  initialCards,
  content,
  container,
  profilePopup,
  profileOpenButton,
  placePopup,
  placeOpenButton,
  imagePopup,
  fullImage,
  fullImageTitle,
  nameInput,
  jobInput,
  profileTitle,
  profileSubtitle,
  cardTemplate,
  placeTitle,
  placeLink,
  closeButtons,
} from './utils.js';

import {openPopup, closePopup} from './modal.js';
import { enableValidation} from './validate.js';
import {addCard} from './card.js';

//**************************FUNCTIONS***************************/

//редактирование имени и информации в профиле
export function handleProfileFormSubmit (evt) {
  evt.preventDefault(); //отмена стандартной отправки формы

  //Вставляем новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  //сбрасываем форму плохим способом!
  nameInput.value = "";
  jobInput.value = "";

  closePopup(profilePopup);
}

//добавляем карточки из массива
initialCards.forEach(function(item) {
  const cardElement = createCard(item)
  container.append(cardElement);
});

//функция создания новой карточки
export function createCard(item) {
  const cardElement = cardTemplate.querySelector('.template__element').cloneNode(true); //создаем клон шаблона, в который будем подставлять значения

  //создаем переменные для картинки и названия
  const imageCard = cardElement.querySelector('.elements__photo');
  const imageCardTitle = cardElement.querySelector('.elements__photo-title');

  //записываем данные значение в переменные
  imageCard.src = item.link;
  imageCard.alt = item.name;
  imageCardTitle.textContent = item.name;

    //добавляем обработчик на кнопку удаления
    cardElement.querySelector('.elements__trash-button').addEventListener('click', function() {
      cardElement.remove();
    });

    //обработчик лайка
    cardElement.querySelector('.elements__like-button').addEventListener('click',function (evt) {
      evt.target.classList.toggle('elements__like-button_active');
    });

    //обработчик полномасштабного изображения
      imageCard.addEventListener('click', function(evt) {
      fullImage.src = evt.target.src;
      fullImage.alt = evt.target.alt;
      fullImageTitle.textContent = evt.target.alt;

      openPopup(imagePopup);
    });

  return cardElement
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__field_error',
  inputErrorType: '.popup__field_type_error',
  errorClass: 'popup__field-error_active'
});

//**************************EVENT LISTENERS*************************/

//универсальный обработчик крестиков
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

profileOpenButton?.addEventListener('click', function() {
  openPopup(profilePopup);
});

placeOpenButton?.addEventListener('click', function() {
  openPopup(placePopup);
});

//обработчик событий для редактирования информации в профиле
profilePopup?.addEventListener('submit', handleProfileFormSubmit);

//обработчик ссобытий для добавления новой карточки
placePopup?.addEventListener('submit', function(e) {
  e.preventDefault();
  addCard(placeTitle, placeLink);
  e.target.reset();
  closePopup(placePopup);

});

//закрытие попапа кликом на esc
content.addEventListener('keydown', function(evt) {
  if(evt.key === "Escape"){
    closePopup(profilePopup);
    closePopup(placePopup);
    closePopup(imagePopup);
  }
});

//закрытие попапов кликом на оверлей
profilePopup.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(profilePopup)
  }
});

placePopup.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(placePopup)
  }
});

imagePopup.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(imagePopup)
  }
});


