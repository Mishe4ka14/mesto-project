//проверяем есть ли невалидная форма
export const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

//функция отключения кнопки если форма невалидна
export const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__save-button_inactive');
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__save-button_inactive');
  }
};

//функция добавления обработчиков всем формам
export const enableValidation = () => {
  //создаем массив всех форм на странице
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  //на каждую форму вешаем вызов
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

//функция показа сообщения об ошибке
export const showInputError = (formElement, inputElement, errorMessage, inputErrorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(inputErrorClass);
    inputElement.classList.add('popup__field_type_error');
    errorElement.classList.add('popup__field-error_active');
    errorElement.textContent = errorMessage;
  };

  //функция удаления сообщения об ошибке
export const hideInputError = (formElement, inputElement, inputErrorClass, inputErrorType) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(inputErrorType);
    inputElement.classList.remove('popup__field_type_error');
    errorElement.textContent = '';
  };

  //функция проверки валидации формы
export const isValid = (formElement, inputElement) => {
    //делаем проверку регулярным выражением и показывыем кастомное сообщение
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    }
    else {
      inputElement.setCustomValidity("");
    }

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

  //находим кнопку сохранения
  const buttonElement = formElement.querySelector('.popup__save-button');

  //сразу блокируем кнопку до ввода данных
  toggleButtonState(inputList, buttonElement);

  //каждому вешаем обработчик и вызываем проверку
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)

      //если форма невалидна блокируем кнопку
      toggleButtonState(inputList, buttonElement);
    });
  });
};

