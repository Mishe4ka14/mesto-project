const config = {
  baseURL: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '8c2802e0-9b5b-4767-b677-ed23ce66f120',
    'Content-Type': 'application/json'
  }
}

//универсальная функция запроса
const request = (url, options) => {
  return fetch(url, options).then((res) => {
    if(res.ok) {
      return res.json();
    } else{
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  })}

//запрос информации о пользователе
export const getUserInfo = () => {
 return request(`${config.baseURL}/users/me`, {headers: config.headers})
}

//запрос на получение карточек
export const getCards = () => {
  return request(`${config.baseURL}/cards`, {headers: config.headers})
}






