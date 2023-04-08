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
  cards,
  profileAvatar,
  container,
  strelka,
  AvatarPopup,
} from './utils.js';

import {openPopup, closePopup} from './modal.js';
import { createCard, addCard } from './card.js';
import { createCardRequest, setUserInfo, getUserInfo, getCards } from './api.js';
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
import strelka1 from '../images/strelka.svg';
import '../pages/index.css';

//*****************************FUNCTION********************************* */

//функция изменения данных профиля
const handleSetUserInfo = (evt) => {
  evt.preventDefault();
  setUserInfo(nameInput.value, jobInput.value)
    .then((info) => {
      profileTitle.textContent = info.name;
      profileSubtitle.textContent = info.about;
      closePopup(profilePopup)
    })
  };

//отрисовываем данные профиля
const userInfo = () => {
  return getUserInfo()
  .then(info => {
    profileTitle.textContent = info.name;
    profileSubtitle.textContent = info.about;
    profileAvatar.src = info.avatar;
  })
};
userInfo();

//отрисовываем карточки
const usersCard = () => {
  return getCards()
  .then(cards => {
    cards.forEach(function(item) {
      const cardElement = createCard(item)
      container.append(cardElement);
    })
  })
}
usersCard();

//функция добавления новой карточки
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
//**************************EVENT LISTENERS*************************/

//универсальный обработчик крестиков
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

//открытие профиля
profileOpenButton?.addEventListener('click', function() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(profilePopup);
});

//открытие попапа карточек
placeOpenButton?.addEventListener('click', function() {
  openPopup(placePopup);
});

//обработчик данных профиля
profilePopup?.addEventListener('submit', handleSetUserInfo);

//обработчик нового изображения
placePopup.addEventListener('submit', handleSetImage);

//появление и удаление стрелки над аватаром
profileAvatar.addEventListener('mouseover', function(){
  strelka.classList.add('profile__strelka_active');
});

profileAvatar.addEventListener('mouseout', function(){
  strelka.classList.remove('profile__strelka_active');
});

//открытие попапа редактирования аватара
profileAvatar.addEventListener('mousedown', function() {
  openPopup(AvatarPopup)
});

strelka.addEventListener('mousedown', function(){
  openPopup(AvatarPopup)
});
