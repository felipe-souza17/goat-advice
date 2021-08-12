
    var request = new XMLHttpRequest()

    request.open('GET', 'https://api.adviceslip.com/advice')
    
    request.onload = function () {
        var data = JSON.parse(this.response)
    
        console.log(data)
        console.log(data.slip.advice)
        console.log(data.slip.id)

        document.getElementById("advice").innerHTML = '"' + data.slip.advice + '"'

        
        // document.getElementById("clicou").innerHTML = data.slip.advice
    }
    
    request.send()

