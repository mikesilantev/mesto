const overleyPopup = document.querySelector('.overlay');
const formElement = document.querySelector('.popup__form');
const profileElement = document.querySelector('.profile');
//Кнопки
const editButton = profileElement.querySelector('.profile__edit-button');
const addButton = profileElement.querySelector('.profile__add-button');
//Попапы
const popup = document.querySelectorAll('.popup');



//Функция открытия попап
function openPopup(popupElement) {
  popupElement.classList.toggle('popup_open');
}
const popupEdit = document.getElementById('popupEdit');
const popupAdd = document.getElementById('popupAdd');
// Попап редактирования
editButton.addEventListener('click', () => {
  if (popupAdd.classList.contains('popup_open')){
    popupAdd.classList.remove('popup_open');
  }
  openPopup(popupEdit);
  // inputValue();
});
//Попап добавления
addButton.addEventListener('click', () => {
 if(popupEdit.classList.contains('popup_open')){
  popupEdit.classList.remove('popup_open');
 }
 openPopup(popupAdd);
});
//     openPopup(popupEdit);
//   }
//   openPopup(popupAdd);
// });



// //Закрытые попапа
// // Берем все элементы из нодлиста и пихаем в массив
// const exitButtons = [...overleyPopup.querySelectorAll('.popup__exit-button')];
// exitButton = exitButtons.forEach(exitButton => console.log(exitButton));
// console.log(exitButton[0]);

// const popups = [...document.querySelectorAll('.popup')]

// for (popupa of popups){
//   console.log(popupa);
// }
//Достаем кнопки из массива и на каждую вешаем слушалку
// for (exitButton of exitButtons){
//   exitButton.addEventListener('click', function(event) {
//     openPopup(popups);
//   });
// }
// console.log(popups);


// exitButton.forEach(exitButtons, i, exitButton);
//   console.log(exitButton);



// function closePopup(){
//   for (let exitButtonsItem of exitButton) {
//     exitButtonsItem.addEventListener('click', (event) => event.preventDefault());
//   }
// }



// exitButton.addEventListener('click', closePopup());







// //like
for (let like of document.querySelectorAll('.element__like')){
  like.addEventListener('click', function(){
    this.classList.toggle('element__like_active');
  })
}


// const closePopup = () => {
//   for (let exitButton of overleyPopup.querySelectorAll('.popup__exit-button')){
//     exitButton.addEventListener('click', function(){
//       overleyPopup.classList.toggle('overlay_popup-open');
//     });
//   }
// }
// let exitButton = overleyPopup.querySelectorAll('.popup__exit-button')
// exitButton.addEventListener('click', closePopup);
// const openPopup = popupElement => {popup.classList.toggle('overlay_popup-open');}


// editButton.addEventListener('click', () => {
//   openPopup(popupEdit);
//   // inputValue();
// });






// exitButton.addEventListener('click', function () {
//   overleyPopup.classList.toggle('overlay_popup-open');
// });


// let overleyPopup = document.querySelector('.overlay');
// let profileTitle = profileElement.querySelector('.profile__title');
// let profileJob = profileElement.querySelector('.profile__subtitle');
// let editButton = profileElement.querySelector('.profile__edit-button');
// let exitButton = overleyPopup.querySelector('.popup__exit-button'); 
// let nameInput = formElement.querySelector('.popup__input_text_name'); 
// let jobInput = formElement.querySelector('.popup__input_text_job');

// const addButton = profileElement.querySelector('.profile__add-button');
// console.log(addButton);

// const titleMeta = document.getElementsByTagName('TITLE')[0];


// function openPopup(){
//   overleyPopup.classList.toggle('overlay_popup-open');
// }

// function inputValue(){
//   nameInput.value = profileTitle.textContent;
//   jobInput.value = profileJob.textContent;
// }

// function closePopup(){
//   overleyPopup.classList.toggle('overlay_popup-open');
// }
// function formSubmitHandler (evt) {
//     evt.preventDefault();
//     profileTitle.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value;
//     titleMeta.textContent = 'Место | ' + profileTitle.textContent;
//     closePopup();
// }

// editButton.addEventListener('click', function(){
//   openPopup();
//   inputValue();
// });
// exitButton.addEventListener('click', closePopup);
// formElement.addEventListener('submit', formSubmitHandler);




// //Функция открытия попап
// function openPopup(popupElement) {
//   popupElement.classList.toggle('popup_open');
// }
// // Попап редактирования
// editButton.addEventListener('click', () => {
//   const popupEdit = document.getElementById('popupEdit');
//   openPopup(popupEdit);
//   // inputValue();
  
// });
// //Попап добавления
// addButton.addEventListener('click', () => {
//   const popupAdd = document.getElementById('popupAdd');
//   openPopup(popupAdd);
// });
