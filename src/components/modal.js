import { popups, profileTitle, profileSubtitle, nameInput, jobInput, profilePopup } from "./utils.js";

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
};

//функции открытия и закрытия для всех попапов
export function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

export function closePopup(item) {
  item.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEscape);
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
      }
  })
});

//редактирование имени и информации в профиле
export function handleProfileFormSubmit (evt) {
  evt.preventDefault(); //отмена стандартной отправки формы

  //Вставляем новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  //сбрасываем форму плохим способом!
  nameInput.value = "";
  jobInput.value = "";

  closePopup(profilePopup);
}
