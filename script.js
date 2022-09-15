let popup = document.querySelector('#popup');
let closePopupButton = document.querySelector('#closePopupButton');
let openPopupButton = document.querySelector('#openPopupButton');


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

//ниже описываем функцию для лайка
// function like() {
//   this.classList.toggle('elements__like-button_active');
// }

// let likeButton = document.querySelector('#likeButton')
// likeButton.addEventListener('click', like);
// let likeButton2 = document.querySelector('#likeButton2')
// likeButton2.addEventListener('click', like);
// let likeButton3 = document.querySelector('#likeButton3')
// likeButton3.addEventListener('click', like);
// let likeButton4 = document.querySelector('#likeButton4')
// likeButton4.addEventListener('click', like);
// let likeButton5 = document.querySelector('#likeButton5')
// likeButton5.addEventListener('click', like);
// let likeButton6 = document.querySelector('#likeButton6')
// likeButton6.addEventListener('click', like);


// ниже недоработанный вариант для всех  сразу
let elements = document.querySelector('#elements')

  elements.addEventListener('click', Event => {
  // if (Event.target.className !== 'elements__like-button') return;
     let likeButton = Event.target.closest('.elements__like-button')
     if (likeButton.classList.contains('elements__like-button_active')) {
      likeButton.classList.remove('elements__like-button_active');
    }
      else {
        likeButton.classList.add('elements__like-button_active');
      }
    }
  );


