// profile
let formElement = document.querySelector('.popup');
let profileElement = document.querySelector('.profile');
let editButton = profileElement.querySelector('.profile__title');
let profileTitle = profileElement.querySelector('.profile__title');
let profileJob = profileElement.querySelector('.profile__subtitle');
let avatarImg = document.querySelector('.profile__avatar');
console.log(avatarImg);
// popup
let exitButton = formElement.querySelector('.popup__exit-button');
let nameInput = formElement.querySelector('.popup__name-input');
let jobInput = formElement.querySelector('.popup__job-input');
// Открыть закрыть
function editProfile(){
    formElement.classList.add('popup_opened');
    nameInput.setAttribute('value', profileTitle.textContent);
    jobInput.setAttribute('value', profileJob.textContent);
    avatarImg.setAttribute('alt', profileJob.textContent);
    avatarImg.setAttribute('title', profileTitle.textContent);
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