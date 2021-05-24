// Константы
//Кнопки профиля
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');
//Попапы
const popupEdit = document.getElementById('popupEdit');
const popupAdd = document.getElementById('popupAdd');
// Кнопка редактирования

//События
buttonEditProfile.addEventListener('click', openPopups(buttonEditProfile));
buttonAddCard.addEventListener('click', openPopups(buttonAddCard));
//Функции
//Открытие попапа
function openPopups(item) {

  // item.addEventListener('click', function findPopup(evt) {
  //   // console.log(item);
  //   // console.log(item.lastElementChild);
  //   if (evt.target.classList.contains('element__image')){
  //     item.lastElementChild.classList.add('popup_open');
  //     console.log('Открываем картинку')
  //     // closePopups(item);
  //   }
  //   if (evt.target === buttonEditProfile){
  //     console.log('Повесили листенер')
  //     popupEdit.classList.add('popup_open');
  //     // closePopups(popupEdit);
  //     console.log(popupEdit)
  //   }
  //   if (evt.target === buttonAddCard){
  //     console.log('Повесили листенер')
  //     popupAdd.classList.add('popup_open');
  //     // closePopups(popupAdd);
  //   }
  //   item.addEventListener('click', function findPopup(){});
  //   console.log('удаляем листенер')
  }
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
function closePopups(item) {
  item.addEventListener('click', function findExitButton(evt) {
    if (evt.target.classList.contains('popup__exit-button')){
      console.log(item)
      item.classList.remove('popup_open');
      item.lastElementChild.classList.remove('popup_open');
      console.log('Закрываем окна');
      item.removeEventListener('click', function findExitButton(){});
    }
    // if ((evt.target.classList.contains('popup__exit-button')) && (item.classList.contains('element'))){
    //   item.lastElementChild.classList.remove('popup_open');
    //   console.log('Закрываем картинку');
    //   console.log(item.lastElementChild.classList)
    //   console.log(item)
    // }
  })
}
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
function deleteCard(item) {
  item.addEventListener('click', function findTrash(evt) {
    if (evt.target.classList.contains('element__trash')){
      item.remove();
    }
    item.removeEventListener('click', findTrash);
  })
  
}
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
function setLike(item) {
  const buttonLike = item.children[2].children[1]
  item.addEventListener('click', function findLike(evt) {
    if ((evt.target.classList.contains('element__like')) || (evt.target.classList.contains('element__like_active'))) {
      buttonLike.classList.toggle('element__like_active');
    }
    item.removeEventListener('click', findLike);
  })
}
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
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
  // console.log('Выводим стартовый массив')
  // console.log('!!!')
  // console.log(initialCards);
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
    const newImg = cardElement.querySelector('.element__image');
    const trashButton = cardElement.querySelector('.element__trash');
    const newLike = cardElement.querySelector('.element__like');
    const newImgZoom = cardElement.querySelector('.popup__image_zoom');

    // console.log(newImgZoom);
    const subtitleImgZoom = cardElement.querySelector('.popup__subtitle');
    const newExitButton = cardElement.querySelector('.popup__exit-button');
    newExitButton.addEventListener('click', function() {
      closePopups(cardElement)
    });
    // console.log(subtitleImgZoom);
    //Забираем инфо из базы
    //подставляем в карточку
    //////////////////////////////////////////////////////////////////////
    newImg.src = item.link;
    newImgZoom.src = item.link;
    newImg.alt = item.name;
    subtitleImgZoom.textContent = item.name;
    cardElement.querySelector('.element__title').textContent = item.name;
    //////////////////////////////////////////////////////////////////////
    newImg.addEventListener('click', function(){
      openPopups(cardElement);
    })
    //Вешаем на корзину событие
    trashButton.addEventListener('click', function(){
      console.log('Я корзина')
      deleteCard(cardElement);
    })
    newLike.addEventListener('click', function(){
      console.log('Я лайк')
      setLike(cardElement);
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