

const container = document.createElement('div')
container.setAttribute('class', 'container')
function loadXMLDoc() {
var request = new XMLHttpRequest()
/*request.open('GET', "https://www.goodsreads.com/search.xml?key=45fRUDiNyR1FnhAVXgPiuA&q=Ender%27s+Game", true)*/
request.open('GET', 'https://www.goodsreads.com/search.xml?key=45fRUDiNyR1FnhAVXgPiuA&q=Ender%27s+Game"', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(books => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = books.title

      const p = document.createElement('p')
      books.description = books.description.substring(0, 300)
      p.textContent = `${books.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()
}