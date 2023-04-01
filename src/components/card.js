import { container } from "./utils.js";
import { createCard } from "./index.js";

//добавляем произвольные карточки
export function addCard(placeTitle, placeLink) {
  const item = createCard({name: placeTitle.value, link: placeLink.value});
  container?.prepend(item);
};

