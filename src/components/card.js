import { cardTemplate, fullImage, fullImageTitle, imagePopup, likesNumber, trash, user } from "./utils.js";
import { openPopup } from "./modal.js";
import { checkLikes, getCards } from "./api.js";
import { container } from './utils.js';
//добавляем произвольные карточки
export const addCard = (item, container) => {
  // const item = createCard({name: placeTitle.value, link: placeLink.value});
  container?.prepend(item);
};
//функция на удаление мусорки
const deleteTrash = (owner, trashBtn) => {
  if(user._id !== owner){
    trashBtn.remove()
  }
}

//функция установка количества лайков
const setLikes = (likes, number) => {
  if (likes.length > 0) {
    number.textContent = likes.length;
    number.classList.add('elements__number-likes_active');
  } else {
    number.textContent = '';
    number.classList.remove('elements__number-likes_active');
  }
};

//функция создания новой карточки
export function createCard(item) {
  const cardElement = cardTemplate.querySelector('.template__element').cloneNode(true); //создаем клон шаблона, в который будем подставлять значения

  //создаем переменные для картинки и названия
  const imageCard = cardElement.querySelector('.elements__photo');
  const imageCardTitle = cardElement.querySelector('.elements__photo-title');
  const likesNumber = cardElement.querySelector('.elements__number-likes');
  const trash = cardElement.querySelector('.elements__trash-button')
  //записываем данные значение в переменные
  imageCard.src = item.link;
  imageCard.alt = item.name;
  imageCardTitle.textContent = item.name;

    //количество лайков
     checkLikes(item._id)
      .then(item => {
        setLikes(item.likes, likesNumber)
      })
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

  // deleteTrash(item.owner._id, trash);
  return cardElement
}



