let btn = document.querySelector("#submit");
let url = document.querySelector("#url");
let topText = document.querySelector("#top");
let bottomText = document.querySelector("#bottom");
let memeSection = document.querySelector(".meme-section");

btn.addEventListener("click", function (e) {
  e.preventDefault(); // prevents button from refreshing page
  let memeContainer = document.createElement("div");
  memeContainer.classList.add("meme");
  let img = document.createElement("img");
  img.src = url.value;

  let memeTop = document.createElement("div");
  memeTop.innerText = topText.value;
  memeTop.classList.add("meme-text", "top-text");

  let memeBottom = document.createElement("div");
  memeBottom.innerText = bottomText.value;
  memeBottom.classList.add("meme-text", "bottom-text");

  let deleteButton = document.createElement("div");
  let garbage = document.createElement("img");
  garbage.src = "trash.svg";
  garbage.classList.add("garbage");
  deleteButton.append(garbage);

  memeContainer.append(img, memeTop, memeBottom, deleteButton);
  memeSection.append(memeContainer);

  // clear text fields after submitting
  url.value = "";
  topText.value = "";
  bottomText.value = "";

  // to remove meme
  memeContainer.addEventListener("click", function (e) {
    this.remove();
  });
});
