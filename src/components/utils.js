//***************************ПЕРЕМЕННЫЕ**********************//
export const content = document.querySelector('.page') //контент на странице
export const container = content.querySelector('.card-container'); //контейнер с карточками
export const popups = document.querySelectorAll('.popup')
//переменные окна редактирования профиля
export const profilePopup = content.querySelector('#popup');
export const profileCloseButton = content.querySelector('#closePopupButton');
export const profileOpenButton = content.querySelector('#openPopupButton');

//перменные окна добавления карточки
export const placePopup = content.querySelector('#place');
export const placeCloseButton = content.querySelector('#closePlaceButton');
export const placeOpenButton = content.querySelector('#openPlaceButton');
export const addButton = content.querySelector('#addButton');

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

//находим форму профиля
export const profileForm = content.querySelector('#popup-form');

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];
