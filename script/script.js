let formElement = document.querySelector('.popup__form');
let profileElement = document.querySelector('.profile');
let overleyPopup = document.querySelector('.overlay');
let profileTitle = profileElement.querySelector('.profile__title');
let profileJob = profileElement.querySelector('.profile__subtitle');
let editButton = profileElement.querySelector('.profile__edit-button');
let exitButton = overleyPopup.querySelector('.popup__exit-button'); 
let nameInput = formElement.querySelector('.popup__input_text_name'); 
let jobInput = formElement.querySelector('.popup__input_text_job'); 
//like
for (let like of document.querySelectorAll('.element__like')){
  like.addEventListener('click', function(){
    this.classList.toggle('element__like_active');
  })
}

// const cardElement = document.querySelector('.element');
// const likeElement = cardElement.querySelector('.element__like');
// function clickLike (){
//   likeElement.addEventListener('click', function (evt) {
//         const eventTarget = evt.target;
//         console.log(eventTarget);
//         evt.target.classList.toggle('element__like_active');
//   });
// }

// cardElement.addEventListener('click', clickLike);


// const cardElement = document.querySelector('.element');
// console.log(cardElement);

// const likeElement = cardElement.querySelector('.element__like');
// console.log(likeElement);

// likeElement.addEventListener('click', function (evt) {
//       const eventTarget = evt.target;
//       console.log(eventTarget);
//       evt.target.classList.toggle('_active');
// });





// function clickLike() {
//   const cardElement = document.querySelector('.element');
//   console.log(cardElement);
//   const likeElement = document.querySelector('.element__like');
//   console.log(likeElement);
//   likeElement.addEventListener('click', function (evt) {
//     console.log(evt);
//     // evt.target.classList.add('_active');
//   });
// }
// clickLike();

function openPopup(){
  overleyPopup.classList.add('overlay_popup-open');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
}
function closePopup(){
  overleyPopup.classList.remove('overlay_popup-open');
}
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}
editButton.addEventListener('click', openPopup);
exitButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
