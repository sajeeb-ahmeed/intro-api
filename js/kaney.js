const kaney = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => kaneyQuote(data))
}
kaney()

const kaneyQuote = quotes => {
    const blockQuotes = document.getElementById('quotes')
    blockQuotes.innerText = quotes.quote
    console.log(quotes);

}