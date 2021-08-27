const loadQuotes = _ => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
};
const displayQuote = quote => {
    const element = document.getElementById("quote");
    element.innerText = quote.quote;
}