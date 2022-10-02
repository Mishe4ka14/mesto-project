
//**************************CLIENT CODE********************/
const initialCards = [
  // @ts-check
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

//***************************ПЕРЕМЕННЫЕ**********************//
const content = document.querySelector('.page')
const container = document.querySelector('.card-container'); //контейнер с карточками

const popup = document.querySelector('#popup');
const closePopupButton = document.querySelector('#closePopupButton');
const openPopupButton = document.querySelector('#openPopupButton');

const place = document.querySelector('#place');
const closePlaceButton = document.querySelector('#closePlaceButton');
const openPlaceButton = document.querySelector('#openPlaceButton');

const image = document.querySelector('#image');


const popupImage = document.querySelector('#image');

const closeImageButton = document.querySelector('.image__close-button');
const fullImage = popupImage.querySelector('.image__image-full');
const fullImageTitle = document.querySelector('.image__title');


//добавляем карточки которые есть изначально
initialCards.forEach(function(item) {
  const cardTemplate = document.querySelector('.template').content;
  const cardElement = cardTemplate.querySelector('.template__element').cloneNode(true);
  const imageCard = cardElement.querySelector('.elements__photo');

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


function openPopup(item) {
  item.classList.add('popup_opened')
}

function closePopup(item) {
  item.classList.remove('popup_opened')
}
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
  closePopup(image);
});

//обработчик событий для редактирования информации в профиле
popup?.addEventListener('submit', popupSubmitHandler);

//обработчик ссобытий для добавления новой карточки
place?.addEventListener('submit', function(e) {
  e.preventDefault();
  addCard();
  closePopup(place);
});

//****************************FUNCTIONS*********************/

//редактирование имени и информации в профиле
function popupSubmitHandler (evt) {
  evt.preventDefault(); //отмена стандартной отправки формы

  // Получаем значение полей jobInput и nameInput из свойства value
  const nameInput = document.querySelector('.popup__field_name');
  const jobInput = document.querySelector('.popup__field_job');

  //Выбераем элементы, куда должны быть вставлены значения полей
  const profileTitle = document.querySelector('.profile__title');
  const profileSubtitle = document.querySelector('.profile__subtitle');

  //Вставляем новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup(popup);
}

//функция добавления новой карточки
function addCard(placeTitle, placeLink) { //функция с параметрами названия карточки и ссылкой
  const cardTemplate = document.querySelector('.template')?.content; //создаем переменную для шаблона
  const cardElement = cardTemplate.querySelector('.template__element').cloneNode(true); //создаем клон шаблона, в который будем подставлять значения
  placeTitle = document.querySelector('.place__name'); //присваиваем параметрам функции название и ссылку из модального окна
  placeLink = document.querySelector('.place__link');

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


function closeImagePopup() {
  image?.classList.remove('image_opened');
  }

  const openImageButton = document.querySelector('.elements__photo');
  function openImagePopup() {
    image?.classList.add('image_opened');
  }







