let profileElement = document.querySelector('.profile');
let editButton = profileElement.querySelector('.profile__editButton');
let formElement = document.querySelector('.popup');
let exitButton = formElement.querySelector('.popup__exit-button');


function editProfile(){
    formElement.classList.add('popup_opened');
}

editButton.addEventListener('click', editProfile);

function exitProfile() {
    formElement.classList.remove('popup_opened');
}

exitButton.addEventListener('click', exitProfile);



// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__name-input');// Воспользуйтесь инструментом .querySelector()
console.log(nameInput);
let jobInput = formElement.querySelector('.popup__job-input');// Воспользуйтесь инструментом .querySelector()
console.log(jobInput);



// let exitButton = formElement.querySelector('.popup__exit-button');
// console.log(exitButton);

// function closePopup() {
//     exitButton.classList.add('popup_opened');
// }

// exitButton.addEventListener('click', closePopup);