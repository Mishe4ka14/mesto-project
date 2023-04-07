import { config } from "./utils"

//универсальная функция запроса
const request = (url, options) => {
  return fetch(url, options).then(checkResponse)
};

//функция с проверкой
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

//запрос информации о пользователе
export const getUserInfo = () => {
 return request(`${config.baseURL}/users/me`, {headers: config.headers})
};

//запрос на получение карточек
export const getCards = () => {
  return request(`${config.baseURL}/cards`, {headers: config.headers})
};

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
};

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
};

//запрос количества лайков
export const checkLikes = (cardId) => {
  return request(`${config.baseURL}/cards/likes/${cardId}`,
   {method: 'PUT',
    headers: config.headers})
}
;











