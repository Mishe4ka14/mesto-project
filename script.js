
const popup = document.querySelector('#popup');
const closePopupButton = document.querySelector('#closePopupButton');
const openPopupButton = document.querySelector('#openPopupButton');
const container = document.querySelector('.card-container'); //контейнер с карточками

//ниже описываем функции для открытия и закрытия попапа
function openPopup() {
  if(popup !== null) {
      popup.classList.add('popup_opened');
  }
}

function closePopup() {
  popup?.classList.remove('popup_opened');
}

//добавляем обработчик событий на кнопки
closePopupButton?.addEventListener('click', function() {
  closePopup();
});

openPopupButton?.addEventListener('click', function() {
  openPopup();
});

//ниже все аналогично для модального окна place
const place = document.querySelector('#place');
const closePlaceButton = document.querySelector('#closePlaceButton');
const openPlaceButton = document.querySelector('#openPlaceButton');

function closePlace() {
  place?.classList.remove('place_opened');
}

function openPlace() {
  place?.classList.add('place_opened');
}

closePlaceButton?.addEventListener('click', function() {
  closePlace();
});

openPlaceButton?.addEventListener('click', function() {
  openPlace();
});


//ниже описываем функцию для лайка
const elements = document.querySelector('#elements')

  elements?.addEventListener('click', Event => {
     const likeButton = Event.target?.closest ('.elements__like-button');
     likeButton.classList.toggle('elements__like-button_active');
    }
  );



//редактирование имени и информации в профиле
function popupSubmitHandler (evt) {
  evt.preventDefault(); //отмена стандартной отправки формы

  // Получаем значение полей jobInput и nameInput из свойства value
  const nameInput = document.querySelector('.popup__field_name');
  const jobInput = document.querySelector('.popup__field_job');

  //Выбераем элементы, куда должны быть вставлены значения полей
  let profileTitle = document.querySelector('.profile__title');
  let profileSubtitle = document.querySelector('.profile__subtitle');

  //Вставляем новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup();
}
//Прикрепляем обработчик к форме
popup.addEventListener('submit', popupSubmitHandler);


//ниже функция добавления карточки
function addCard(placeTitle, placeLink) { //функция с параметрами названия карточки и ссылкой
  const cardTemplate = document.querySelector('.template').content; //создаем переменную для шаблона
  const cardElement = cardTemplate.querySelector('.template__element').cloneNode(true); //создаем клон шаблона, в который будем подставлять значения

  placeTitle = document.querySelector('.place__name'); //присваиваем параметрам функции название и ссылку из модального окна
  placeLink = document.querySelector('.place__link');

  cardElement.querySelector('.elements__photo-title').textContent = placeTitle.value; //подставляем значения в шаблон
  cardElement.querySelector('.elements__photo').src = placeLink.value;

  container.prepend(cardElement); //вставляем разметку карточки в DOM
}

place.addEventListener('submit', function(e) { //обработчик событий ко всему модальному окну
  e.preventDefault();
  addCard();
  closePlace();
});

// const trashButton = document.querySelector('#trash');

//удаление карточки
