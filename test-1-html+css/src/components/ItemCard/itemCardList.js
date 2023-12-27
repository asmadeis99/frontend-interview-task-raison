import "./itemCardList.css";

const ItemCard = (itemObject) => {

  const itemContainerElement = document.createElement("div");
  itemContainerElement.classList.add("item-wrapper");

  const imgElement = document.createElement("img");
  imgElement.src = String(itemObject.src);
  itemContainerElement.appendChild(imgElement);

  const nameElement = document.createElement("div");
  nameElement.classList.add("item-name");
  nameElement.textContent = String(itemObject.name);

  const contactsElement = document.createElement("div");
  contactsElement.classList.add("contacts-container");

  const phoneElement = document.createElement("span");
  phoneElement.textContent = String(itemObject.phone);
  const emailElement = document.createElement("span");
  emailElement.textContent = String(itemObject.email);

  const addressElement = document.createElement("div");
  addressElement.classList.add("item-address");
  addressElement.textContent = itemObject.address;

  itemContainerElement.appendChild(nameElement);
  itemContainerElement.appendChild(contactsElement);
  contactsElement.appendChild(phoneElement);
  contactsElement.appendChild(emailElement);
  itemContainerElement.appendChild(addressElement);

  return itemContainerElement;
}

const ItemCardList = (cardList) => {
  const cardListElement = document.createElement("div");
  cardListElement.classList.add("card-list");

  for(let card of cardList) {
    cardListElement.appendChild(ItemCard(card));
  }

  return cardListElement;
}

export default ItemCardList;