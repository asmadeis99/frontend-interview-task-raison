import ItemCardList from "../ItemCard/itemCardList";

import "./mapContainer.css";

const mapContainer = (cardList) => {
  const mapWrapper =  document.createElement("div");
  mapWrapper.classList.add("map-wrapper");
  mapWrapper.appendChild(ItemCardList(cardList));


  return mapWrapper;
}

export default mapContainer;