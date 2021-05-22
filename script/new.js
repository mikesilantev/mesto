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
//Создание карточки///////////////////////////////////////////////////
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
function loadStartCard(){
  initialCards.forEach(item => {
    createCardDOM(item);
  })
  console.log('Карточки созданы!');
}
loadStartCard();
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////