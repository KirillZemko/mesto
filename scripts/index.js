const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.edit-button');
const closeBtn = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupOverflow = document.querySelectorAll('.popup');
const likeButtons = document.querySelectorAll('.place__like');
const popupAddCard = document.querySelector('.popup__add-card');
const closeBtnAddCard = document.querySelector('.popup__close-button_type_add-card');
const createBtn = document.querySelector('.popup__button_type-add-card');
const addCardBtn = document.querySelector('.add-button');
const cardTitle = document.querySelector('.popup__input_type_title');
const cardUrl = document.querySelector('.popup__input_type_url');


function showEditPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  popup.classList.add('popup_opened');
}

function closeEditPopup() {
  popup.classList.remove('popup_opened');
}

function showAddCardPopup() {
  popupAddCard.classList.add('popup__add-card_opened');
}

function closeAddCardPopup(evt) {
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

// закрытия popup окон кнопкой ESC (уточнить!)
document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    closeAddCardPopup();
    closeEditPopup();
  }
});
