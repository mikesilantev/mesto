let formElement = document.querySelector('.popup__form');
let profileElement = document.querySelector('.profile');
let overleyPopup = document.querySelector('.overlay');
let profileTitle = profileElement.querySelector('.profile__title');
let profileJob = profileElement.querySelector('.profile__subtitle');
let editButton = profileElement.querySelector('.profile__edit-button');
let exitButton = overleyPopup.querySelector('.popup__exit-button'); 
let nameInput = formElement.querySelector('.popup__input_text_name'); 
let jobInput = formElement.querySelector('.popup__input_text_job');

const addButton = profileElement.querySelector('.profile__add-button');
console.log(addButton);

const titleMeta = document.getElementsByTagName('TITLE')[0];
//like
for (let like of document.querySelectorAll('.element__like')){
  like.addEventListener('click', function(){
    this.classList.toggle('element__like_active');
  })
}

function openPopup(){
  overleyPopup.classList.toggle('overlay_popup-open');
}

function inputValue(){
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup(){
  overleyPopup.classList.toggle('overlay_popup-open');
}
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    titleMeta.textContent = 'Место | ' + profileTitle.textContent;
    closePopup();
}

editButton.addEventListener('click', function(){
  openPopup();
  inputValue();
});
exitButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
