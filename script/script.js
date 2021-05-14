let formElement = document.querySelector('.popup__form');
let profileElement = document.querySelector('.profile');
let overleyPopup = document.querySelector('.overlay');
let profileTitle = profileElement.querySelector('.profile__title');
let profileJob = profileElement.querySelector('.profile__subtitle');
let editButton = profileElement.querySelector('.profile__edit-button');
let exitButton = overleyPopup.querySelector('.popup__exit-button'); 
let nameInput = formElement.querySelector('.popup__input_text_name'); 
let jobInput = formElement.querySelector('.popup__input_text_job'); 
function popupOpen(){
  overleyPopup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
}
function popupClose(){
  overleyPopup.classList.remove('popup_opened');
}
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose();
}
editButton.addEventListener('click', popupOpen);
exitButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);
