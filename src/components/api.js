const config = {
  baseURL: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '8c2802e0-9b5b-4767-b677-ed23ce66f120',
    'Content-Type': 'application/json'
  }
}

//универсальная функция запроса
const request = (url, options) => {
  return fetch(url, options)
}
//запрос информации о пользователе
export const getUserInfo = () => {
 return request(`${config.baseURL}/users/me`, {headers: config.headers})
  .then((res) => {
    if(res.ok) {
      return res.json();
    } else{
      return Promise.reject(`Ошибка: ${res.status}`);
    }
})}

//запрос на получение карточек
export const getCards = () => {
  return request(`${config.baseURL}/cards`, {headers: config.headers})
  .then((res) => {
    if(res.ok) {
      return res.json();
    } else{
      return Promise.reject(`Ошибка: ${res.status}`);
  }})
}

//запрос на добавление новой карточки
export const createCardRequest = (placeTitle, placeLink) => {
  return request(`${config.baseURL}/cards`, {
     method: 'POST',
     headers: config.headers,
     body: JSON.stringify({
      name: placeTitle,
      link: placeLink
    }),
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    } else{
      return Promise.reject(`Ошибка: ${res.status}`);
  }})
}

const handleCreateCard = (evt) => {
  evt.preventDefault();
  // const {name, link} = evt.currentTarget;
   createCardRequest( placeTitle.value, placeLink.value)
    .then((card => {
      addCard(card.name, card.link)
      closePopup(placePopup);
      evt.target.reset();
    }))

// const handleCreateCard = (evt) => {
//   evt.preventDefault();
//   createCardRequest(placeTitle.value, placeLink.value)
//     .then((card => {
//       addCard(createCard(card),cards)
//       closePopup(placePopup);
//       evt.target.reset();
//     }))
}

placePopup?.addEventListener('submit', handleCreateCard)
//   e.preventDefault();
//   addCard(placeTitle, placeLink);
//   e.target.reset();
//   closePopup(placePopup);
//   addButton.classList.add('popup__save-button_inactive');
//   addButton.disabled = true;
// });


import { closePopup } from "./modal"
import { addCard, createCard } from "./card"
import { placeLink, placeTitle, placePopup, cards } from "./utils"





