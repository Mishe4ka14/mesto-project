//функции открытия и закрытия для всех попапов
export function openPopup(item) {
  item.classList.add('popup_opened');
}

export function closePopup(item) {
  item.classList.remove('popup_opened')
}
