import "./title.css";

const title = () => {
  const title = "Hello World";
  const description = "Always ready to meet with you.";

  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("title-wrapper");

  const h1 = document.createElement("h1");
  h1.textContent = title;

  const div = document.createElement("div");
  div.textContent = description;

  titleWrapper.appendChild(h1);
  titleWrapper.appendChild(div);

  return titleWrapper;
};

export default title;