let url = 'https://api.adviceslip.com/advice'
fetch(url)
  .then(response => {
    return response.json()
  })
  .then(data => {
    document.getElementById('advice').innerHTML = '"' + data.slip.advice + '"'
  })
