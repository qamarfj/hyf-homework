const searchStr = document.getElementById("search-word");
const btnSearch = document.getElementById("btn-search");
const maxGif = document.getElementById("search-limit");
const gifContainer = document.getElementById("gif-container");
//at butten press start api
btnSearch.addEventListener("click", giphyApi);
//validate inputs, create url accordingly pass url to search function
function giphyApi() {
  const search = searchStr.value;
  if (search === "")
    gifContainer.innerHTML = `<h1> OOPs! Don't know what you want to search. Please specify your search. </h1>`;
  else {
    let url;
    if (parseInt(maxGif.value) >= 0)
      url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=o32lzavpaHWfxaPC3D1AGydr2KJFYAM7&limit=${maxGif.value}`;
    else
      url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=o32lzavpaHWfxaPC3D1AGydr2KJFYAM7`;
    console.log(url);
    console.log(parseInt(maxGif.value));
    fetchGiphy(url);
  }
}
//fetch data with giphy API
function fetchGiphy(url) {
  fetch(url)
    .then((response) => response.json())
    .then((gifs) => {
      const gifdata = gifs.data;
      const gifsUrl = gifdata.map((gif) => gif.images.original.url);
      renderGiphy(gifsUrl);
    });
}
//render images to DOM
function renderGiphy(gifsUrl) {
  //clear previous list items
  clearListItems();

  gifsUrl.forEach((gifUrl) => {
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    newImg.src = gifUrl;
    newLi.appendChild(newImg);
    gifContainer.appendChild(newLi);
  });
}
//clear older data from list
function clearListItems() {
  while (gifContainer.hasChildNodes())
    gifContainer.removeChild(gifContainer.firstChild);
}
