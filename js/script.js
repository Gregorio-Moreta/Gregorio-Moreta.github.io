let weatherData
let userInput

const $input = $('input[type="text"]')

$('form').on('submit', weather)

function weather(event) {
    event.preventDefault()
    userInput = $input.val()
    $.ajax({
        url: `https://api.weatherbit.io/v2.0/forecast/daily?city=${userInput}&units=imperial&lang=en&key=d9b5c7c9931647f6a52ad388821c3004`
    }).then(
        (data) => {
            weatherData = data
            render()
            console.log(data)
            console.log(userInput)
        },
        (error) => {
            console.log('bad request: ', error)
        }
    );
}

function render() {
    x = 0
    while (x < 16) {
        let a = document.querySelector('#high_Temp' + x)
        a.innerHTML = (weatherData.data[x].high_temp)
        //let y = '$high_Temp' + x    right track
        let b = document.querySelector('#low_Temp' + x)
        b.innerHTML = (weatherData.data[x].low_temp)
        // $low_Temp0.text(weatherData.data[x].low_temp)
        let c = document.querySelector('#date_Time' + x)
        c.innerHTML = (weatherData.data[x].datetime)
        // $date_Time0.text(weatherData.data[x].datetime)
        let d = document.querySelector('#weather_Description' + x)
        d.innerHTML = (weatherData.data[x].weather.description)
        // $weather_Description0.text(weatherData.data[x].weather.description)
        x++
        console.log(x)
        console.log(a)
        console.log(b)
        console.log(weatherData)
    }

}