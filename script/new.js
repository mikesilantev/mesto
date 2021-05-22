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
const card = document.querySelector('.elements');
//////////////////////////////////////////////////////////////////////
//Создание разметки для карточки//////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function createCardDOM(item){
  // Клонируем темплейт
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
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
    console.log('Я картинка');
    // createCardPopup();
    openCard();
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
// Вывод последнего элемента массива
// function loadLastItem(array){
//   const lastItemArray = array[array.length - 1];
//   console.log(lastItemArray);
// }
function addCardArray(array){
  createCardDOM(array);
  console.log('Карточка добавлена на страницу!')
}
//////////////////////////////////////////////////////////////////////
//Удаление карточек новой карточки в массив карточки//////////////////
//////////////////////////////////////////////////////////////////////
const trashItems = document.querySelectorAll('.element__trash');
function deleteCard(i){
  // initialCards.splice(i , 1);
  i.parentNode.remove();
  console.log('Карточка удалена из DOM');
}
////////////////////////////////////////////////////////////////////
//Открытие попапа для картинки//////////////////////////////////////
////////////////////////////////////////////////////////////////////
function openCard(){
  const elementImages = document.querySelectorAll('.element__image');
  elementImages.forEach(i => {
    i.addEventListener('click', function () {
      console.log(i);
      
    })
  })}

// const openCard = () =>{
//   const elementImages = document.querySelectorAll('.element__image');
//   const elementImageTitle = document.querySelectorAll('.element__image');
//   elementImages.forEach(elementImage => {
//     elementImage.addEventListener('click', evt =>{
//       const  elementImageSrc = elementImage.getAttribute('src');
//       console.log(elementImageSrc);
//       createPopup(elementImageSrc);
//       closePopup();
//     })
//   })
// }
// openCard();


//Вешаем событие на новую карточк
//Переделать!!!
// function addEventTrash(){
//   trashItems.forEach(i, function(){
//     console.log(trashItems)
//     console.log(i)
//     i.addEventListener('click', function(){
//       deleteCard(i);
//     })
//   })
// }
// trashItems.forEach(i => {i.addEventListener('click', function(){deleteCard(i)})})
// addEventTrash()
// function ddd(){

// }
// trashItems.forEach(i => {
//   i.addEventListener('click', function(){
//     deleteCard(i)
//   // console.log(initialCards);
//   })

//   } 
// )
//Удаление по клику на корзине
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
//Сборка попапа для картинки////////////////////////////////////////
////////////////////////////////////////////////////////////////////
function createPopup(el) {
  const pageWrap = document.querySelector('body');
  const divElementPopup = document.createElement('div');
  divElementPopup.classList.add('popup', 'popup_open', 'popup_img');
  const buttonCreate = document.createElement('button');
  buttonCreate.classList.add('popup__exit-button', 'link');
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
////////////////////////////////////////////////////////////////////
//Открытие попапа для картинки//////////////////////////////////////
////////////////////////////////////////////////////////////////////
// const openCard = () =>{
//   const elementImages = document.querySelectorAll('.element__image');
//   const elementImageTitle = document.querySelectorAll('.element__image');
//   elementImages.forEach(elementImage => {
//     elementImage.addEventListener('click', evt =>{
//       const  elementImageSrc = elementImage.getAttribute('src');
//       console.log(elementImageSrc);
//       createPopup(elementImageSrc);
//       closePopup();
//     })
//   })
// }
// openCard();

// function createCardPopup(){
//   const elementImage = document.querySelectorAll('.element__image');
//   const elementImageTitle = document.querySelectorAll('.element__image');
//       const  elementImageSrc = elementImage.getAttribute('src');
//       console.log(elementImageSrc);
//       createPopup(elementImageSrc);
//       closePopup();
//     }






// Закрытие popup рабочее
const closePopup = () => {
  const removePopups = (removeItem) => {
    removeItem.classList.remove('popup_open');
  }
  const popups = document.querySelectorAll('.popup');//выбираем все попапы
  if (!popups) return //если попапа нет то ничего не делаем
  popups.forEach(popup => { //разбиваем попоп на массив
  popup.addEventListener('click', evt => { 
    if (evt.target.classList.contains('popup__exit-button')){
      popup.classList.remove('popup_open');
      console.log('сработал крестик');
    } 
    if (evt.target === saveProfileButton){
      popup.classList.remove('popup_open');
      formSubmitHandler(evt);
      console.log('сохраняем профиль');
    } 
    if (evt.target === saveCardButton){
      popup.classList.remove('popup_open');
      addSubmitHandler(evt);
      console.log('Сохраняем карточку');
    }
    if ((evt.target.classList.contains('popup__exit-button')) 
      && (popup.classList.contains('popup_img')))
      {
      removePopups(popup);
      console.log('прячем попап');
      deletePopup();
      console.log('удаляем попап из DOM');
    }
  })
})
}
closePopup();
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
function formSubmitHandler (evt) {
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
  if ((locInput.value === 'Имя карточки') || (urlInput.value === 'Ссылка на картинку')) return
  evt.preventDefault();
  initialCards.unshift({name: locInput.value, link: urlInput.value});
  console.log('Функция addSubmitHandler');
  addCardArray(initialCards);
}