let formElement = document.querySelector('.popup__form');
let profileElement = document.querySelector('.profile');
let popupOverley = document.querySelector('.popup__overlay');
//profile
let profileTitle = profileElement.querySelector('.profile__title');
let profileJob = profileElement.querySelector('.profile__subtitle');
let editButton = profileElement.querySelector('.profile__edit-button');
//popup
let exitButton = formElement.querySelector('.popup__exit-button'); 
let nameInput = formElement.querySelector('.popup__name-input'); 
let jobInput = formElement.querySelector('.popup__job-input'); 
//open-close
function popup(){
    popupOverley.classList.add('popup_opened');
    nameInput = ('value', profileTitle.textContent);
    jobInput = ('value', profileJob.textContent);
}
function popupClose(){
  popupOverley.classList.remove('popup_opened');
}
// popup();
//Listener
editButton.addEventListener('click', popup);
exitButton.addEventListener('click', popupClose);
//console
console.log(formElement);
console.log(profileElement);
console.log(profileTitle);
console.log(profileJob);
console.log(editButton);
console.log(nameInput);
console.log(jobInput);
// // profile
// let formElement = document.querySelector('.popup');
// let profileElement = document.querySelector('.profile');
// let editButton = profileElement.querySelector('.profile__edit-button');
// let profileTitle = profileElement.querySelector('.profile__title');
// let profileJob = profileElement.querySelector('.profile__subtitle');
// let avatarImg = document.querySelector('.profile__avatar');
// // popup
// let exitButton = formElement.querySelector('.popup__exit-button');
// let nameInput = formElement.querySelector('.popup__name-input');
// let jobInput = formElement.querySelector('.popup__job-input');
// // Открыть закрыть
// function editProfile(){
//     formElement.classList.add('popup_opened');
//     nameInput.setAttribute('value', profileTitle.textContent);
//     jobInput.setAttribute('value', profileJob.textContent);
//     avatarImg.setAttribute('alt', profileJob.textContent);
//     avatarImg.setAttribute('title', profileTitle.textContent);
// }
// function exitProfile() {
//     formElement.classList.remove('popup_opened');
// }
// function formSubmitHandler (evt) {
//     evt.preventDefault();
//     profileTitle.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value;
//     formElement.classList.remove('popup_opened');
// }

// editButton.addEventListener('click', editProfile);
// profileTitle.addEventListener('click', editProfile);
// exitButton.addEventListener('click', exitProfile);
// formElement.addEventListener('submit', formSubmitHandler);