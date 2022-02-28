let btn = document.querySelector("#submit");
let url = document.querySelector("#url");
let topText = document.querySelector("#top");
let bottomText = document.querySelector("#bottom");
let memeSection = document.querySelector(".meme-section");

btn.addEventListener("click", function (e) {
  e.preventDefault(); // prevents button from refreshing page
  let memeContainer = document.createElement("div");
  memeContainer.classList.add("meme");

  let img = addImage(url.value);
  let text = addText(topText.value, bottomText.value);
  let deleteButton = deleteOverlay();

  memeContainer.append(img, text[0], text[1], deleteButton);
  memeSection.append(memeContainer);

  // clear text fields after submitting
  clearInputs();

  // to remove meme
  memeContainer.addEventListener("click", function (e) {
    this.remove();
  });
});

let addImage = function (link) {
  let img = document.createElement("img");
  img.src = link;
  return img;
};

let addText = function (top, bottom) {
  let memeTop = document.createElement("div");
  let memeBottom = document.createElement("div");

  memeTop.innerText = top;
  memeBottom.innerText = bottom;

  memeTop.classList.add("meme-text", "top-text");
  memeBottom.classList.add("meme-text", "bottom-text");
  return [memeTop, memeBottom];
};

let deleteOverlay = function () {
  let deleteButton = document.createElement("div");
  let garbage = document.createElement("img");
  garbage.src = "trash.svg";
  garbage.classList.add("garbage");
  deleteButton.append(garbage);
  return deleteButton;
};

let clearInputs = () => {
  url.value = "";
  topText.value = "";
  bottomText.value = "";
};

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let header = document.querySelector(".meme-creation");

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

setInterval(function () {
  h1.style.color = randomColor();
  h2.style.color = randomColor();
  header.style.backgroundColor = randomColor();
}, 500);
