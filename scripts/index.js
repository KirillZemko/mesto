let popup = document.querySelector('.popup');
let editBtn = document.querySelector('.edit-button');
let closeBtn = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');

let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')

function editPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = `${profileName.textContent}`;
  jobInput.value = `${profileJob.textContent}`;
}

function closePopup() {
  popup.classList.remove('popup_opened');
  nameInput.value = '';
  jobInput.value = '';
}

function formSubmitHandler (evt) {
    // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки.
    evt.preventDefault();

    profileName.textContent = `${nameInput.value}`;
    profileJob.textContent = `${jobInput.value}`;

    closePopup();
}

editBtn.addEventListener('click', editPopup);
closeBtn.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
