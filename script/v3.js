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
console.log('Выводим стартовый массив')
console.log('!!!')
console.log(initialCards);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//забираем template с html
const cardTemplate = document.querySelector('#card-template').content;
//Секция элементс для вставки карточек
const card = document.querySelector('.elements');
//////////////////////////////////////////////////////////////////////
//Создание разметки для карточки//////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function createCardDOM(item){
  // Клонируем темплейт
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  // Переменные для лайка картинки и корзины
  const newImg = cardElement.querySelector('.element__image');
  const trashButton = cardElement.querySelector('.element__trash');
  const newLike = cardElement.querySelector('.element__like');
  //Забираем инфо из базы
  //подставляем в карточку
  //////////////////////////////////////////////////////////////////////
  newImg.src = item.link;
  newImg.alt = item.name;
  cardElement.querySelector('.element__title').textContent = item.name;
  //////////////////////////////////////////////////////////////////////
  newImg.addEventListener('click', function(){
    const getUrl = newImg.src
    createPopupImg(getUrl);
  })
  //Вешаем на корзину событие
  trashButton.addEventListener('click', function(){
    console.log('Я корзина')
  })
  newLike.addEventListener('click', function(){
    console.log('Я лайк')
  })
  //Выврдим в карточку
  card.append(cardElement);
}
//////////////////////////////////////////////////////////////////////
//Функция Создания карточек при загрузки//////////////////////////////
//////////////////////////////////////////////////////////////////////
function loadStartCard(array){
  array.forEach(item => {
    createCardDOM(item);
  })
  console.log('Карточки созданы!');
}
loadStartCard(initialCards);
//////////////////////////////////////////////////////////////////////
//Добавление новой карточки в массив карточки/////////////////////////
//////////////////////////////////////////////////////////////////////
function addCardArray(array){
  createCardDOM(array);
  console.log('Карточка добавлена на страницу!')
}

function test(i) {
  console.log(i);
}
////////////////////////////////////////////////////////////////////
//Сборка попапа для картинки////////////////////////////////////////
////////////////////////////////////////////////////////////////////
function createPopupImg(el) {
  const pageWrap = document.querySelector('body');
  const divElementPopup = document.createElement('div');
  divElementPopup.classList.add('popup', 'popup_open', 'popup_img');
  const buttonCreate = document.createElement('button');
  buttonCreate.classList.add('popup__exit-button', 'link');
  buttonCreate.addEventListener('click', function(){
  closePopup();
  })
  const divElementWrap = document.createElement('div');
  divElementWrap.classList.add('popup__wrap');
  const imgCreate = document.createElement('img'); // клонируем img
  imgCreate.classList.add('element__image_zoom')
  imgCreate.setAttribute('src', el);
  const imgTitleCreate = document.createElement('h3');
  divElementWrap.append(imgCreate, imgTitleCreate,buttonCreate);
  divElementPopup.append(divElementWrap);
  pageWrap.append(divElementPopup);
}
//////////////////////////////////////////////////////////////////////
//Попапы//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const profileElement = document.querySelector('.profile');
const editButton = profileElement.querySelector('.profile__edit-button');
const addButton = profileElement.querySelector('.profile__add-button');
const popupEdit = document.getElementById('popupEdit');
const popupAdd = document.getElementById('popupAdd');
// Функция открытитя попапов
function openPopup(popupElement) {
  popupElement.classList.toggle('popup_open');
}
//Открытие окна редактирования
editButton.addEventListener('click', () => {
  openPopup(popupEdit);//функция попап с параметром popapEdit
  inputValue();
})
//Открытие окна добавления
addButton.addEventListener('click', () => openPopup(popupAdd));
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
const profileForm = document.getElementsByName('editProfileForm');
console.log(profileForm);
function formSubmitHandler() {
  // evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup()
}
saveProfileButton.addEventListener('click', formSubmitHandler);

//Сохраняем карточку
const saveCardButton = document.getElementById('saveCard');
console.log(saveCardButton)
const locInput = document.querySelector('.popup__input_text_loc-name');
console.log(locInput)
const urlInput = document.querySelector('.popup__input_text_url');
console.log(urlInput)

function addSubmitHandler(evt){
  if ((locInput.value === '') || (urlInput.value === '')) return console.log()
  if ((locInput.value === 'Имя карточки') || (urlInput.value === 'Ссылка на картинку')) return
  evt.preventDefault();
  initialCards.unshift({name: locInput.value, link: urlInput.value});
  console.log('Функция addSubmitHandler');
  addCardArray(initialCards);
  console.log(initialCards);
  closePopup()
}
saveCardButton.addEventListener('click', function(){
  addSubmitHandler();
});

function closePopup() {
  const exitButton = document.querySelector('.popup__exit-button')
  const popups = document.querySelectorAll('.popup');//выбираем все попапы
  popups.forEach(popup => {
    popup.addEventListener('click', evt => {
      if (evt.target.classList.contains('popup__exit-button')){
              popup.classList.remove('popup_open');
              console.log('сработал крестик');
            }
    })
  })
  console.log(exitButton);
}


// // Закрытие popup рабочее
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