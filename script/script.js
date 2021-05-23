const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

const cardTemplate = document.querySelector('#card-template').content;//забираем template с html
const card = document.querySelector('.elements');
initialCards.forEach(item => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__title').textContent = item.name;
  cardElement.querySelector('.element__image').alt = item.name;
  card.append(cardElement);
})
// клонируем содержимое тега template
function buildCard() {
  const itemCard = initialCards[0];
  console.log(initialCards);
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = itemCard.link;
  cardElement.querySelector('.element__title').textContent = itemCard.name;
  cardElement.querySelector('.element__image').alt = itemCard.name;
  card.append(cardElement);
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
  // // клонируем содержимое тега template
  // initialCards.forEach(item => {
  //   const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  //   cardElement.querySelector('.element__image').src = item.link;
  //   cardElement.querySelector('.element__title').textContent = item.name;
  //   cardElement.querySelector('.element__image').alt = item.name;
  //   card.append(cardElement);
  // })
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


// Загрузка карточек на сайт
const pageWrap = document.querySelector('body');
const profileElement = document.querySelector('.profile');
//Кнопки
const editButton = profileElement.querySelector('.profile__edit-button');
const addButton = profileElement.querySelector('.profile__add-button');
//Попапы
const popupEdit = document.getElementById('popupEdit');
const popupAdd = document.getElementById('popupAdd');
// Функция открытитя попапов
function openPopup(popupElement) {
  popupElement.classList.toggle('popup_open');
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// Профиль
const nameInput = document.querySelector('.popup__input_text_name');
const jobInput = document.querySelector('.popup__input_text_job');
const profileTitle = profileElement.querySelector('.profile__title');
const profileJob = profileElement.querySelector('.profile__subtitle');
// Вставляем инфо в поля
function inputValue(){
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
}
//Сохранение title
const saveProfileButton = document.getElementById('saveProfile');
function formSubmitHandler(evt) {
  const profileForm = document.getElementsById('editProfileForm');
  console.log(profileForm);
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}
//Сохраняем карточку
const saveCardButton = document.getElementById('saveCard');
const locInput = document.querySelector('.popup__input_text_loc-name');
const urlInput = document.querySelector('.popup__input_text_url');
function addSubmitHandler(evt){
  if ((locInput.value === '') || (urlInput.value === '')) return
  evt.preventDefault();
  initialCards.unshift({name: locInput.value, link: urlInput.value});
  console.log(initialCards);
  console.log('Функция addSubmitHandler');
  console.log(initialCards[0]);
  buildCard(initialCards);
}
////////////////////////////////////////////////////////////////////
// Добавляем новую карточку
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// вызов попапов по клику
editButton.addEventListener('click', () => {
  openPopup(popupEdit);//функция попап с параметром popapEdit
  inputValue();
})
addButton.addEventListener('click', () => openPopup(popupAdd));
////////////////////////////////////////////////////////////////////
//Удаление созданных попаов с картинками
function deletePopup() {
  const delPopup = document.querySelector('.popup_img');
  console.log(delPopup);
  delPopup.remove();
}
////////////////////////////////////////////////////////////////////
// Закрытие popup рабочее
// const closePopup = () => {
//   const removePopups = (removeItem) => {
//     removeItem.classList.remove('popup_open');
//   }
//   const popups = document.querySelectorAll('.popup');//выбираем все попапы
//   if (!popups) return //если попапа нет то ничего не делаем
//   popups.forEach(popup => { //разбиваем попоп на массив
//   popup.addEventListener('click', evt => { 
//     if (evt.target.classList.contains('popup__exit-button')){
//       popup.classList.remove('popup_open');
//       console.log('сработал крестик');
//     } 
//     if (evt.target === saveProfileButton){
//       popup.classList.remove('popup_open');
//       formSubmitHandler(evt);
//       console.log('сохраняем профиль');
//     } 
//     if (evt.target === saveCardButton){
//       popup.classList.remove('popup_open');
//       addSubmitHandler(evt);
//       console.log('Сохраняем карточку');
//     }
//     if ((evt.target.classList.contains('popup__exit-button')) 
//       && (popup.classList.contains('popup_img')))
//       {
//       removePopups(popup);
//       console.log('прячем попап');
//       deletePopup();
//       console.log('удаляем попап из DOM');
//     }
//   })
// })
// }
// closePopup();
////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
//Сборка попапа для картинки////////////////////////////////////////
////////////////////////////////////////////////////////////////////

//like
for (let like of document.querySelectorAll('.element__like')){
  like.addEventListener('click', function(){
    this.classList.toggle('element__like_active');
  })
}
// при клике на elementImage добавляем
// засовываем ссыль в теги попапа




// const popups = document.querySelector('.popup__wrap');
// console.log(popups.children[1]);




// const exitButtons = querySelector('.popup__exit-button');
// const popups = document.querySelector('.popup');
// console.log(popups)

// function closePopup(e) {
//   const parent = e.target.closest('.popup');
//   popups.classList.remove('popup_open');
//   console.log('error');
// }
// exitButtons.addEventListener('click', () => closePopup);




// //Функция открытия и закрытия попап
// function openPopup(popupElement, popupDouble) {
//   if (popupDouble.classList.contains('popup_open')) {
//     popupDouble.classList.remove('popup_open')
//   }
//   popupElement.classList.toggle('popup_open');
// }
// //Слушатели
// editButton.addEventListener('click', () => {openPopup(popupEdit,popupAdd);});
// addButton.addEventListener('click',() => {openPopup(popupAdd,popupEdit);});


// забрали кнопки
// const popups = [...document.querySelectorAll('.popup')];
// for (popups of popup){
//   console.log(popups);
// }
// console.log(popup);
// function closePopup(el) {
//   el.classList.remove('popup_open');
// }
// const exitButtons = [...overleyPopup.querySelectorAll('.popup__exit-button')];
// for (exitButton of exitButtons){
//   exitButton.addEventListener('click', closePopup(popup));
// }

// // Попап редактирования
// editButton.addEventListener('click', () => {
//   if (popupAdd.classList.contains('popup_open')){
//     popupAdd.classList.remove('popup_open');
//   }
//   openPopup(popupEdit);
//   // inputValue();
// });

// //Попап добавления
// addButton.addEventListener('click', () => {
//  if(popupEdit.classList.contains('popup_open')){
//   popupEdit.classList.remove('popup_open');
//  }
//  openPopup(popupAdd);
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
// })

// Закрытие popup рабочее
// const closePopup = () => {
//   const popups = document.querySelectorAll('.popup');//выбираем все попапы
//   if (!popups) return //если попапа нет то ничего не делаем
//   popups.forEach(popup => { //разбиваем попоп на массив
//   popup.addEventListener('click', evt => { 
//     if (evt.target.classList.contains('popup__exit-button')){
//       popup.classList.remove('popup_open');
//     } 
//   })
// })
// }
// closePopup();