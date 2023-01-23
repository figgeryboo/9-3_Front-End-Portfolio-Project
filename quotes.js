
const quote = document.getElementById("quote-text")

fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    quote.textContent = `"${data.content}" - ${data.author}`
  })