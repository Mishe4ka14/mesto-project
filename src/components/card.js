import { cardTemplate, fullImage, fullImageTitle, id, imagePopup } from "./utils.js";
import { openPopup } from "./modal.js";
import { deleteCard, likeCard ,deleteLikeCard } from "./api.js";

//функция на добавление новой карточки
export const addCard = (item, container) => {
  container?.prepend(item);
};

//функция на удаление мусорки
const deleteTrash = (owner, trashBtn) => {
  if(id !== owner){
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

//функция проверки моего лайка
const isMylike = (likes, btn) => {
  likes.forEach(element => {
    if(element._id === id){
      btn.classList.add('elements__like-button_active');
    }
  });
}

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

  //добавляем обработчик на кнопку удаления
  cardElement.querySelector('.elements__trash-button').addEventListener('click', function() {
    deleteCard(item._id)
    .then(item => {
      cardElement.remove();
    })
    .catch(err => {
      console.log(err)
    })
  });

  //обработчик лайка
  cardElement.querySelector('.elements__like-button').addEventListener('click',function (evt) {
      if(evt.target.classList.contains('elements__like-button_active')){
        deleteLikeCard(item._id)
        .then(item => {
          isMylike(item.likes, evt.target)
          setLikes(item.likes, likesNumber)
        evt.target.classList.remove('elements__like-button_active');
      })}
      else{
        likeCard(item._id)
        .then(item => {
          isMylike(item.likes, evt.target)
        evt.target.classList.add('elements__like-button_active');
        setLikes(item.likes, likesNumber)
        })}
    });

  //обработчик полномасштабного изображения
    imageCard.addEventListener('click', function(evt) {
      fullImage.src = evt.target.src;
      fullImage.alt = evt.target.alt;
      fullImageTitle.textContent = evt.target.alt;
      openPopup(imagePopup);
  });

  //проверяем наличие установленного моего лайка
  isMylike(item.likes, cardElement.querySelector('.elements__like-button'))
  //проверяем наличие лайков
  setLikes(item.likes, likesNumber)
  //удаляем корзину у чужих карточек
  deleteTrash(item.owner._id, trash);

  return cardElement
}



