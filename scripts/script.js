//***************************ПЕРЕМЕННЫЕ**********************//
const content = document.querySelector('.page') //контент на странице
const container = content.querySelector('.card-container'); //контейнер с карточками

//переменные окна редактирования профиля
const profilePopup = content.querySelector('#popup');
const profileCloseButton = content.querySelector('#closePopupButton');
const profileOpenButton = content.querySelector('#openPopupButton');

//перменные окна добавления карточки
const placePopup = content.querySelector('#place');
const placeCloseButton = content.querySelector('#closePlaceButton');
const placeOpenButton = content.querySelector('#openPlaceButton');

//переменные окна полномасштабного изображения
const imagePopup = content.querySelector('#image');
const imageCloseButton = content.querySelector('#closeImageButton');
const fullImage = imagePopup.querySelector('.image__image-full');
const fullImageTitle = imagePopup.querySelector('.image__title');

// Получаем значение полей jobInput и nameInput из свойства value
const nameInput = content.querySelector('.popup__field_name');
const jobInput = content.querySelector('.popup__field_job');

//Выбераем элементы, куда должны быть вставлены значения полей
const profileTitle = content.querySelector('.profile__title');
const profileSubtitle = content.querySelector('.profile__subtitle');

//создаем шаблон для новой карточки
const cardTemplate = document.querySelector('.template')?.content; //создаем переменную для шаблона

const placeTitle = content.querySelector('#place-title'); //присваиваем параметрам функции название и ссылку из модального окна
const placeLink = content.querySelector('#place-link');

// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close-button');

//находим форму профиля
const profileForm = content.querySelector('#popup-form');
//****************************FUNCTIONS*********************/
//функции открытия и закрытия для всех попапов
function openPopup(item) {
  item.classList.add('popup_opened')
}

function closePopup(item) {
  item.classList.remove('popup_opened')
}

//редактирование имени и информации в профиле
function handleProfileFormSubmit (evt) {
  evt.preventDefault(); //отмена стандартной отправки формы

  //Вставляем новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  //сбрасываем форму плохим способом!
  nameInput.value = "";
  jobInput.value = "";

  closePopup(profilePopup);
}

function createCard(item) {
  const cardElement = cardTemplate.querySelector('.template__element').cloneNode(true); //создаем клон шаблона, в который будем подставлять значения

  //создаем переменные для картинки и названия
  const imageCard = cardElement.querySelector('.elements__photo');
  const imageCardTitle = cardElement.querySelector('.elements__photo-title');

  //записываем данные значение в переменные
  imageCard.src = item.link;
  imageCard.alt = item.name;
  imageCardTitle.textContent = item.name;

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

  return cardElement
}

//добавляем произвольные карточки
function addCard(placeTitle, placeLink) {
  const item = createCard({name: placeTitle.value, link: placeLink.value});
  container?.prepend(item);
};

//добавляем карточки из массива
initialCards.forEach(function(item) {
  const cardElement = createCard(item)
  container.append(cardElement);
});

//************************СЛУШАТЕЛИ СОБЫТИЙ********************/
//универсальный обработчик крестиков
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

profileOpenButton?.addEventListener('click', function() {
  openPopup(profilePopup);
});

placeOpenButton?.addEventListener('click', function() {
  openPopup(placePopup);
});

//обработчик событий для редактирования информации в профиле
profilePopup?.addEventListener('submit', handleProfileFormSubmit);

//обработчик ссобытий для добавления новой карточки
placePopup?.addEventListener('submit', function(e) {
  e.preventDefault();
  addCard(placeTitle, placeLink);
  e.target.reset();
  closePopup(placePopup);

});

//закрытие попапа кликом на esc
content.addEventListener('keydown', function(evt) {
  if(evt.key === "Escape"){
    closePopup(profilePopup);
    closePopup(placePopup);
    closePopup(imagePopup);
  }
});

//закрытие попапов кликом на оверлей
profilePopup.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(profilePopup)
  }
});

placePopup.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(placePopup)
  }
});

imagePopup.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(imagePopup)
  }
});

//****************************VALIDATION*************************************/

// const formElement = content.querySelector('.popup__form');
// const formInput = formElement.querySelector('.popup__field');
// const formError = formElement.querySelector(`${formInput.id}-error`);

//функция показа сообщения об ошибке
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add('.popup__field-error');
  errorElement.textContent = errorMessage;
  // errorElement.classList.add('.popup__field-error_active');
};

//функция удаления сообщения об ошибке
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove('.popup__field-error');
  errorElement.classList.remove('.popup__field-error_active');
  errorElement.textContent = '';
};

//функция проверки валидации формы
const isValid = (formElement, inputElement) => {
  if(!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
    hideInputError(formElement, inputElement);
  }
};


//функция добавления обработчиков полям одной формы
const setEventListeners = (formElement) => {
  //создаем массив инпутов внутри одной формы
  const inputList = Array.from(formElement.querySelectorAll('.popup__field'));

  //каждому вешаем обработчик и вызываем проверку
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
    });
  });
};

//функция добавления обработчиков всем формам
const enableValidation = () => {
  //создаем массив всех форм на странице
  const formList = Array.from(content.querySelectorAll('.popup__form'));

  //на каждую форму вешаем вызов
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation();




