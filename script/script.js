// profile
let profileElement = document.querySelector('.profile');
let editButton = profileElement.querySelector('.profile__editButton');
let profileTitle = profileElement.querySelector('.profile__title');
let profileJob = profileElement.querySelector('.profile__subtitle');

// popup
let formElement = document.querySelector('.popup');
let exitButton = formElement.querySelector('.popup__exit-button');
let nameInput = formElement.querySelector('.popup__name-input');
let jobInput = formElement.querySelector('.popup__job-input');
let saveButton = formElement.querySelector('.popup__save-button');

// Открыть закрыть
function editProfile(){
    formElement.classList.add('popup_opened');
    nameInput.setAttribute('value', profileTitle.textContent);
    jobInput.setAttribute('value', profileJob.textContent);
}
function exitProfile() {
    formElement.classList.remove('popup_opened');
}



function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    formElement.classList.remove('popup_opened');
}
editButton.addEventListener('click', editProfile);
exitButton.addEventListener('click', exitProfile);
formElement.addEventListener('submit', formSubmitHandler); 
