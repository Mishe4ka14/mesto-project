
//***************************ПЕРЕМЕННЫЕ**********************//
const content = document.querySelector('.page') //контент на странице
const container = content.querySelector('.card-container'); //контейнер с карточками

//переменные окна редактирования профиля
const popup = content.querySelector('#popup');
const closePopupButton = content.querySelector('#closePopupButton');
const openPopupButton = content.querySelector('#openPopupButton');

//перменные окна добавления карточки
const place = content.querySelector('#place');
const closePlaceButton = content.querySelector('#closePlaceButton');
const openPlaceButton = content.querySelector('#openPlaceButton');

//переменные окна полномасштабного изображения
const popupImage = content.querySelector('#image');
const closeImageButton = content.querySelector('.image__close-button');
const fullImage = popupImage.querySelector('.image__image-full');
const fullImageTitle = popupImage.querySelector('.image__title');


//****************************FUNCTIONS*********************/
//функции открытия и закрытия для всех попапов
function openPopup(item) {
  item.classList.add('popup_opened')
}

function closePopup(item) {
  item.classList.remove('popup_opened')
}

//редактирование имени и информации в профиле
function popupSubmitHandler (evt) {
  evt.preventDefault(); //отмена стандартной отправки формы

  // Получаем значение полей jobInput и nameInput из свойства value
  const nameInput = content.querySelector('.popup__field_name');
  const jobInput = content.querySelector('.popup__field_job');

  //Выбераем элементы, куда должны быть вставлены значения полей
  const profileTitle = content.querySelector('.profile__title');
  const profileSubtitle = content.querySelector('.profile__subtitle');

  //Вставляем новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup(popup);
}

//функция добавления новой карточки
function addCard(placeTitle, placeLink) { //функция с параметрами названия карточки и ссылкой
  const cardTemplate = document.querySelector('.template')?.content; //создаем переменную для шаблона
  const cardElement = cardTemplate.querySelector('.template__element').cloneNode(true); //создаем клон шаблона, в который будем подставлять значения
  placeTitle = content.querySelector('.place__name'); //присваиваем параметрам функции название и ссылку из модального окна
  placeLink = content.querySelector('.place__link');

  cardElement.querySelector('.elements__photo-title').textContent = placeTitle.value; //подставляем значения в шаблон
  cardElement.querySelector('.elements__photo').src = placeLink.value;
  cardElement.querySelector('.elements__photo').alt = placeTitle.value;

  //добавляем обработчик на кнопку удаления
  cardElement.querySelector('.elements__trash-button').addEventListener('click', function() {
    cardElement.remove();
  });

  cardElement.querySelector('.elements__like-button').addEventListener('click',function (evt) {
    evt.target.classList.toggle('elements__like-button_active');
  });

  cardElement.querySelector('.elements__photo').addEventListener('click', function(evt) {
    fullImage.src = evt.target.src;
    fullImageTitle.textContent = evt.target.alt;

    openPopup(popupImage);
  });

  container?.prepend(cardElement); //вставляем разметку карточки в DOM
};

// добавляем карточки которые есть изначально в массиве
initialCards.forEach(function(item) {
  const cardTemplate = content.querySelector('.template').content;
  const cardElement = cardTemplate.querySelector('.template__element').cloneNode(true);

  cardElement.querySelector('.elements__photo').src = item.link;
  cardElement.querySelector('.elements__photo-title').textContent = item.name;
  cardElement.querySelector('.elements__photo').alt = item.name;
  //удаление карточки
  cardElement.querySelector('#trash').addEventListener('click', function() {
    cardElement.remove();
  });

  cardElement.querySelector('.elements__like-button').addEventListener('click',function (evt) {
    evt.target.classList.toggle('elements__like-button_active');
  });

  cardElement.querySelector('.elements__photo').addEventListener('click', function(evt) {
    fullImage.src = evt.target.src;
    fullImageTitle.textContent = evt.target.alt;

    openPopup(popupImage);
  });

  container.prepend(cardElement);
});


//************************СЛУШАТЕЛИ СОБЫТИЙ********************/

//добавляем обработчик событий на кнопки попапа
closePopupButton?.addEventListener('click', function() {
  closePopup(popup);
});

openPopupButton?.addEventListener('click', function() {
  openPopup(popup);
});

// обработчик событий для окна добавления новой карточки
closePlaceButton?.addEventListener('click', function() {
  closePopup(place);
});

openPlaceButton?.addEventListener('click', function() {
  openPopup(place);
});

closeImageButton.addEventListener('click', function() {
  closePopup(popupImage);
});

//обработчик событий для редактирования информации в профиле
popup?.addEventListener('submit', popupSubmitHandler);

//обработчик ссобытий для добавления новой карточки
place?.addEventListener('submit', function(e) {
  e.preventDefault();
  addCard();
  closePopup(place);
});










