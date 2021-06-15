let popup = document.querySelector('.popup');
let editBtn = document.querySelector('.edit-button');
let closeBtn = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popupOverflow = document.querySelectorAll('.popup');
let likeButtons = document.querySelectorAll('.place__like');
let popupAddCard = document.querySelector('.popup__add-card');
let closeBtnAddCard = document.querySelector('.popup__close-button_type_add-card');
let createBtn = document.querySelector('.popup__button_type-add-card');
let addCardBtn = document.querySelector('.add-button');
let cardTitle = document.querySelector('.popup__input_type_title');
let cardUrl = document.querySelector('.popup__input_type_url');

function showAddCardPopup() {
  popupAddCard.classList.add('popup__add-card_opened');
}

function closeAddCardPopup() {
  popupAddCard.classList.remove('popup__add-card_opened');
}

// toggle состояния кнопки like
function likeButtonToggler(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', function() {
      arr[i].classList.toggle('place__like_type_active');
    })
  }
}

likeButtonToggler(likeButtons);

// функция открытия popup окна и добавления значенний в input-ы из profileName
function showEditPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  popup.classList.add('popup_opened');
}

// функция закрытия окна popup
function closeEditPopup() {
  popup.classList.remove('popup_opened');
}

// функция изменяет значения введенных пользователем в input-ы и изменяет profileName, profileJob
function formSubmitHandler(evt) {
    // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки.
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closeEditPopup();
}

// функция закрытия popup по клику по затемненной области
function closePopupByClickOnOverflow(evt) {
   if (evt.target !== evt.currentTarget) {
     return;
   }

   closeEditPopup();
   closeAddCardPopup();
}

editBtn.addEventListener('click', showEditPopup);
closeBtn.addEventListener('click', closeEditPopup);
formElement.addEventListener('submit', formSubmitHandler);
popupOverflow[0].addEventListener('click', closePopupByClickOnOverflow); // editPopup
popupOverflow[1].addEventListener('click', closePopupByClickOnOverflow); // // addCardPopup
addCardBtn.addEventListener('click', showAddCardPopup);
closeBtnAddCard.addEventListener('click', closeAddCardPopup);

