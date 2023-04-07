import { config, jobInput, nameInput } from "./utils"
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

//запрос на изменение данных профиля

export const setUserInfo = (nameInput, jobInput) => {
  return request(`${config.baseURL}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
     name: nameInput,
     about: jobInput
   }),
  })
   .then((res) => {
    if(res.ok) {
      return res.json();
    } else{
      return Promise.reject(`Ошибка: ${res.status}`);
  }})
}

export const checkLikes = (cardId) => {
  return request(`${config.baseURL}/cards/likes/${cardId}`,
   {method: 'PUT',
    headers: config.headers})
  .then((res) => {
    if(res.ok) {
      return res.json();
    } else{
      return Promise.reject(`Ошибка: ${res.status}`);
  }})
}












