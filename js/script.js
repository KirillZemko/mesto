let popup = document.querySelector('.popup');
let editBtn = document.querySelector('.edit-button');
let closeBtn = document.querySelector('.popup__close-button');
let inputName = document.querySelector('.form__input-name');
let inputJob = document.querySelector('.form__input-job');

let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')

function editPopup() {
  popup.classList.add('popup_opened');
  inputName.value = `${profileName.textContent}`;
  inputJob.value = `${profileJob.textContent}`;
}

function closePopup() {
  popup.classList.remove('popup_opened');
  inputName.value = '';
  inputJob.value = '';
}

editBtn.addEventListener('click', editPopup);
closeBtn.addEventListener('click', closePopup);

// submitBtn.addEventListener('click', formSubmitHandler);
