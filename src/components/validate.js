//проверяем есть ли невалидная форма
export const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

//функция отключения кнопки если форма невалидна
export const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
};

//функция добавления обработчиков всем формам
export const enableValidation = (settings) => {
  //создаем массив всех форм на странице
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  //на каждую форму вешаем вызов
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
};

//функция показа сообщения об ошибке
export const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(settings.inputErrorClass);
    inputElement.classList.add(settings.inputErrorType);
    errorElement.classList.add(settings.errorClass);
    errorElement.textContent = errorMessage;
  };

  //функция удаления сообщения об ошибке
export const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(settings.inputErrorClass);
    inputElement.classList.remove(settings.inputErrorType);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = '';
  };

  //функция проверки валидации формы
export const isValid = (formElement, inputElement, settings) => {
    //делаем проверку регулярным выражением и показывыем кастомное сообщение
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    }
    else {
      inputElement.setCustomValidity("");
    }

    if(!inputElement.validity.valid){
      showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    }
    else {
      hideInputError(formElement, inputElement, settings);
    }
  };

//функция добавления обработчиков полям одной формы
export const setEventListeners = (formElement, settings) => {
  //создаем массив инпутов внутри одной формы
  const inputList = Array.from(formElement.querySelectorAll('.popup__field'));

  //находим кнопку сохранения
  const buttonElement = formElement.querySelector('.popup__save-button');

  //сразу блокируем кнопку до ввода данных
  toggleButtonState(inputList, buttonElement, settings);

  //каждому вешаем обработчик и вызываем проверку
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, settings);

      //если форма невалидна блокируем кнопку
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

