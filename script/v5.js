const buttonEdit = document.querySelector('.profile__edit-button');
buttonEdit.addEventListener('click', function(){
  console.log('Кликнули по кнопке редактирования')
  openModal(modalEdit);
})
//Кнопка добавления новых карточек
const buttonAdd = document.querySelector('.profile__add-button');
buttonAdd.addEventListener('click', function(){
  console.log('Кликнули по кнопке добавления картинок')
  openModal(modalAdd);
})
//Открытие попапов
const modalEdit = document.querySelector('.popup_type_edit');
const modalAdd = document.querySelector('.popup_type_add');
const modalImage = document.querySelector('.popup_type_image');
console.log(modalImage)


function openModal(modal){
  modal.classList.toggle('popup_open')
};






















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
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  //забираем template с html
  const cardTemplate = document.querySelector('#card-template').content;
  // console.log(cardTemplate);
  //Секция элементс для вставки карточек
  const card = document.querySelector('.elements');
  //////////////////////////////////////////////////////////////////////
  //Создание разметки для карточки//////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  function createCardDOM(item){
    // Клонируем темплейт
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    // console.log(cardElement);
    // Переменные для лайка картинки и корзины
    const cardImg = cardElement.querySelector('.element__image');
    
    const cardTrashButton = cardElement.querySelector('.element__trash');
    const cardLike = cardElement.querySelector('.element__like');
    const cardImgZoom = cardElement.querySelector('.popup__image_zoom');
    // console.log(newImgZoom);
    const subtitleImgZoom = cardElement.querySelector('.popup__subtitle');
    const newExitButton = cardElement.querySelector('.popup__exit-button');
    //////////////////////////////////////////////////////////////////////
    cardImg.src = item.link;
    cardImgZoom.src = item.link;
    cardImg.alt = item.name;
    subtitleImgZoom.textContent = item.name;
    cardElement.querySelector('.element__title').textContent = item.name;
    //////////////////////////////////////////////////////////////////////
    //Выврдим в карточку
    cardElement.querySelector('.element__image').addEventListener('click', function (evt) {
      evt.target.parentNode.children[3].classList.toggle('popup_open')
    })
    

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