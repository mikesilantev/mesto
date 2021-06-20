const enableValidation = ({formSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    // console.log(formElement);
    setEventListeners(formElement, rest);
  });
  // console.log(formList);
};

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  // console.log(buttonElement);

  // console.log(buttonList);

  // buttonList.forEach((buttonElement) => {
  //   buttonElement.addEventListener('click', toggleButtonState(inputList, buttonElement));
  //   console.log('я функция toggleButtonState внутри setEventListeners ');
  // });
 
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      //Проверка на валидность
      checkInputValidity(formElement, inputElement, {...rest});
      // console.log(evt);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);

      // console.log(evt);
    });
    // console.log(inputElement);
  });
  // console.log(inputList);
  // console.log(formElement);
  // console.log(inputSelector);
  // console.log(rest);
};
const checkInputValidity = (formElement, inputElement, {inputErrorClass, errorClass, ...rest}) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};
const hasInvalidInput = (inputList) => {
  // console.log('Я функция hasInvalidInput');
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    // return console.log('Фукция hasInvalidInput ' + inputElement)
  });
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
    // console.log(inputList);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled', 'disabled');
  }
  // console.log('я функция toggleButtonState');
  // console.log(buttonElement);
};

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  // console.log(errorClass);
  console.log(errorMessage);
  // console.log(inputErrorClass);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // console.log(errorElement);
  // console.log(inputElement);
  console.log(inputErrorClass);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass);
};





const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
enableValidation(configValidation); 