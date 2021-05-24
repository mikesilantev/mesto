// const cardImgElement = document.querySelector('.element__image').addEventListener('click', function(evt){
//   evt.target.classList.toggle('popup_open');
// })

 
 
 
 
 
 
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
    // newExitButton.addEventListener('click', function() {
    //   closePopups(cardElement)
    // });
    newLike.addEventListener('click', function(evt){
      console.log('Я лайк')
      evt.target.classList.toggle('element__like_active');
    })
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
