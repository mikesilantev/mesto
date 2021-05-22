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
  //Забираем инфо из базы
  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__title').textContent = item.name;
  cardElement.querySelector('.element__image').alt = item.name;
  //Выврдим в карточку
  card.append(cardElement);
}
//////////////////////////////////////////////////////////////////////
//Создание карточки///////////////////////////////////////////////////
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
function loadLastItem(array){
  const lastItemArray = array[array.length - 1];
  console.log(lastItemArray);
}
function addCardArray(array){
  // array.shift({name: locInput.value, link: urlInput.value});
  array.push({name: 1, link: 2});
  loadLastItem(array);
  createCardDOM(array);
  console.log('Карточка добавлена на страницу!')
}
addCardArray(initialCards);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////