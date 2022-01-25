let resultsData = ''

fetch("https://www.loc.gov/photos/?q=baseball&fo=json&c=10")
  .then(function (response) {
      return response.json()
  })
  .then(function (data) {
      resultsData = data
  })
  .then(renderResults)

function renderResults(){
  for (let i=0; i < resultsData.results.length; i++) {
      $('#results').append($(`<li><img src=${resultsData.results[i].image_url[0]}></li>`))
  }
}