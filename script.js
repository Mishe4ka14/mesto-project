
const popup = document.querySelector('#popup');
const closePopupButton = document.querySelector('#closePopupButton');
const openPopupButton = document.querySelector('#openPopupButton');

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
let elements = document.querySelector('#elements')

  elements?.addEventListener('click', Event => {
     const likeButton = Event.target?.closest ('.elements__like-button')
     likeButton.classList.toggle('elements__like-button_active');
    }
  );



