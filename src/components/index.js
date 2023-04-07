//************************IMPORTS**************************/
import {
  profilePopup,
  profileOpenButton,
  placePopup,
  placeOpenButton,
  nameInput,
  jobInput,
  profileTitle,
  profileSubtitle,
  placeTitle,
  placeLink,
  closeButtons,
  addButton,
  likesNumber,
  cards
} from './utils.js';

import {openPopup, closePopup, handleProfileFormSubmit} from './modal.js';
import { enableValidation} from './validate.js';
import {addCard} from './card.js';
import { getCards } from './api.js';
import { createCard } from './card.js';
import { container } from './utils.js';
import add_button from '../images/Add_Button.svg';
import add_button_big from '../images/Add_Button-big.svg';
import avatar from '../images/Avatar.jpg';
import avatar2 from '../images/Avayar2.jpg'
import close_icon from '../images/Close_Icon.svg';
import dombay from '../images/dombay.jpg';
import edit_bytton from '../images/Edit_Button.svg';
import gora_albrus from '../images/gora_Albrus.jpg';
import gora_ushba from '../images/gora-ushba.jpg';
import kara from '../images/karachaevsk.jpg';
import like_black from '../images/like-black.svg';
import logo from '../images/logo.svg';
import red_button from '../images/red_button.svg';
import serdechko from '../images/serdechko.svg';
import svanetia from '../images/svanetia.jpg';
import trash_btn from '../images/trash-btn.svg';
import vector from '../images/Vector.svg';
import vector1 from '../images/Vector1.svg';
import { createCardRequest, setUserInfo } from './api.js';
import '../pages/index.css';
//**************************FUNCTIONS***************************/

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__field_error',
  inputErrorType: 'popup__field_type_error',
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
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(profilePopup);
});

placeOpenButton?.addEventListener('click', function() {
  openPopup(placePopup);
});

//функция изменения данных профиля
const handleSetUserInfo = (evt) => {
  evt.preventDefault();
  setUserInfo(nameInput.value, jobInput.value)
    .then((info) => {
      profileTitle.textContent = info.name;
      profileSubtitle.textContent = info.about;
      closePopup(profilePopup)
    })
}

//обработчик данных профиля
profilePopup?.addEventListener('submit', handleSetUserInfo);

const usersCard = () => {
  return getCards()
  .then(cards => {
    cards.forEach(function(item) {
      const cardElement = createCard(item)
      // console.log(item.owner._id);
      container.append(cardElement);
    })
  })
}
usersCard();

//фнкция добавления новой карточки
const handleSetImage = (evt) => {
  evt.preventDefault();
  createCardRequest(placeTitle.value, placeLink.value)
    .then((card) => {
      addCard(createCard(card), cards);
      closePopup(placePopup);
      evt.target.reset();
    })
    .catch(err =>{
      console.log(err)
    })
};

placePopup.addEventListener('submit', handleSetImage);

