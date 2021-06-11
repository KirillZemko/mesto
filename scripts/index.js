let popup = document.querySelector('.popup');
let editBtn = document.querySelector('.edit-button');
let closeBtn = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popupOverflow = document.querySelector('.popup');

// функция открытия popup окна и добавления значенний в input-ы из profileName
function editPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

// функция закрытия окна popup
function closePopup() {
  popup.classList.remove('popup_opened');
}

// функция изменяет значения введенных пользователем в input-ы и изменяет profileName, profileJob
function formSubmitHandler(evt) {
    // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки.
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}

// функция закрытия popup по клику по затемненной области
function closePopupByClickOnOverflow(evt) {
   if (evt.target !== evt.currentTarget) {
     return;
   }

  closePopup();
}

editBtn.addEventListener('click', editPopup);
closeBtn.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
popupOverflow.addEventListener('click', closePopupByClickOnOverflow);
