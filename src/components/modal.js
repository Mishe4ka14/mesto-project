import { changeAvatar } from "./api.js";
import { popups, profileTitle, profileSubtitle, nameInput, jobInput, profilePopup, profileAvatar, newAvatarLink, buttons, AvatarPopup,  } from "./utils.js";

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

//вешаем закрытие на все попапы сразу
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

// функция редактирования имени и информации в профиле
export function handleProfileFormSubmit (evt) {
  evt.preventDefault(); //отмена стандартной отправки формы

  //Вставляем новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  //сбрасываем форму плохим способом!
  nameInput.value = "";
  jobInput.value = "";

  closePopup(profilePopup);
};

export const handleProfileAvatarSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, evt)
  changeAvatar(newAvatarLink.value)
  .then(link => {
    profileAvatar.src = link.avatar;
    closePopup(AvatarPopup)
    evt.target.reset();
  })
  .catch(err => {
    console.log(err);
  })
  .finally(()=> {
    renderLoading(false, evt)
  })
}

export function renderLoading(isLoading, evt){
  const btn = evt.target.querySelector('.popup__save-button')
  if(isLoading){
    btn.textContent = btn.dataset.value1
  }
  else{
    btn.textContent = btn.value
  }
}
