//@ts-check


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

