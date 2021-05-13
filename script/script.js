let formElement = document.querySelector('.popup__form');
let profileElement = document.querySelector('.profile');
let overleyPopup = document.querySelector('.overlay');

//profile
let profileTitle = profileElement.querySelector('.profile__title');
let profileJob = profileElement.querySelector('.profile__subtitle');
let editButton = profileElement.querySelector('.profile__edit-button');

//popup
let exitButton = formElement.querySelector('.popup__exit-button'); 
let nameInput = formElement.querySelector('.popup_name-input'); 
let jobInput = formElement.querySelector('.popup_job-input'); 

//open
function popup(){
  overleyPopup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
}

// close
function popupClose(){
  overleyPopup.classList.remove('popup_opened');
}

//formSubmitHandler
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose();
}

//Listener
editButton.addEventListener('click', popup);
exitButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);
