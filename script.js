const generateBtn = document.querySelector(".meme-generator .meme-generator-btn");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeImg = document.querySelector(".meme-generator img");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const update = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme By: ${author}`;
}

const generatememe = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) =>{
        update(data.url, data.title, data.author);
    });
};

generateBtn.addEventListener("click", generatememe);

generatememe();