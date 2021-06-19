// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const enableValidation = ({formSelector, ...rest}) => {
  // console.log(rest);
  testFunc(formSelector, {...rest}); 

};

const testFunc = (formSelector, {inputSelector, submitButtonSelector, ...rest}) => {
  // console.log(formSelector);
  // console.log(inputSelector); 
  // console.log(rest);
testFuncFunc(submitButtonSelector);
};

const testFuncFunc = (submitButtonSelector) => {
  console.log(submitButtonSelector);
  // console.log(rest);
}
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});


const enableValidation = ({formSelector, ...rest}) => { // разложили входящий параметр obj на две составные части: переменную formSelector, и все остальные свойства obj в виде объекта rest
  setEventListeners(formElement, rest);
};

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) => { // здесь у функции два параметра: formElement и объект.
  // из второго параметра вытащили свойства inputSelector, submitButtonSelector, inactiveButtonClass. ими теперь можно пользоваться внутри функции setEventListeners
  // например, передать в другую функцию...
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  // а остальные свойства положили в объект rest, и если они там есть, то это будет непустой самостоятельный объект
};