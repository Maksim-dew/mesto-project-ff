// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

function createCard(cardData, deleteCallback) {
  const cardTemplate = document.querySelector('#card-template'); 
  const cardElement = cardTemplate.content.querySelector('.places__item').cloneNode(true); 

  const cardImage = cardElement.querySelector('.card__image'); 
  cardImage.src = cardData.link; 

  const cardTitle = cardElement.querySelector('.card__title'); 
  cardTitle.textContent = cardData.name; 

  const deleteButton = cardElement.querySelector('.card__delete-button'); 
  deleteButton.addEventListener('click', function() { 
    deleteCallback(cardElement); 
  });

  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove(); 
}

const placesList = document.querySelector('.places__list'); 

initialCards.forEach(function(cardData) { 
  const cardElement = createCard(cardData, deleteCard); 
  placesList.appendChild(cardElement); 
});