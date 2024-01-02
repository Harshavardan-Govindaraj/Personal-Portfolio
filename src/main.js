const quote = document.querySelector("blockquote");
const author = document.querySelector("cite");
const btn = document.querySelector(".quoteBtn");
btn.addEventListener('click', function () {
    getQuote();
})
const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quote.innerText = data.content;
    author.innerText = `-${data.author}`;
}
getQuote();