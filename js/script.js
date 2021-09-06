
// const settings16DayForecast = {
//     "async": true,
// 	"crossDomain": true,
// 	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?&city=Raleigh&units=imperial&lang=en",
// 	"method": "GET",
// 	"headers": {
//         "x-rapidapi-key": "89ba5fccd5msh0e005dd22e0b6e1p1d2f23jsne2a7b156b93e",
// 		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
// 	}
// };


//     $.ajax(settings16DayForecast).done(function (response) {
//         console.log(response.data[0].high_temp);
//     	console.log(response.data);
//         console.log(response);
//     });

// function settings16DayForecast (event) {
        //event.preventDefault()
        //userInput = $input.val()
//         $.ajax({
//             url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?&city=bronx&units=imperial&lang=en&key=89ba5fccd5msh0e005dd22e0b6e1p1d2f23jsne2a7b156b93e'
//         }
//     ).then(
//         (response) => {
//             console.log(response)
//         },
//         (error) => {
//             console.log('bad request', error)
//         }
//     )
// }
//     const $temp = $('#temp')
//     const $weatherbox1 = $('weatherbox1')
//     const $input = $('input[type="text"]');

// $('form').on('click', (event) => {
//     event.preventDefault();
//     let city = $input.val();
//     $.ajax({
//         url: `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?&city=${city}&units=imperial&lang=en&key=89ba5fccd5msh0e005dd22e0b6e1p1d2f23jsne2a7b156b93e`
//       }).then((response) => {
//           console.log(response);
//           $temp.text(response.data[0].high_temp);
//         },
//         function(error){
//           console.log("oops something didn't work", error)
//         }
//     )
// })

// const $input = $('input[type="text"]')
// $('form').on('submit', console.log($input))

let weatherData
let userInput

const $high_Temp0 = $('#high_Temp0')
const $low_Temp0 = $('#low_Temp0')
const $date_Time0 = $('#date_Time0')
const $weather_Description0 = $('#weather_Description0')

const $high_Temp1 = $('#high_Temp1')
const $low_Temp1 = $('#low_Temp1')
const $date_Time1 = $('#date_Time1')
const $weather_Description1 = $('#weather_Description1')

const $high_Temp2 = $('#high_Temp2')
const $low_Temp2 = $('#low_Temp2')
const $date_Time2 = $('#date_Time2')
const $weather_Description2 = $('#weather_Description2')

const $high_Temp3 = $('#high_Temp3')
const $low_Temp3 = $('#low_Temp3')
const $date_Time3 = $('#date_Time3')
const $weather_Description3 = $('#weather_Description3')

const $high_Temp4 = $('#high_Temp4')
const $low_Temp4 = $('#low_Temp4')
const $date_Time4 = $('#date_Time4')
const $weather_Description4 = $('#weather_Description4')

const $high_Temp5 = $('#high_Temp5')
const $low_Temp5 = $('#low_Temp5')
const $date_Time5 = $('#date_Time5')
const $weather_Description5 = $('#weather_Description5')

const $high_Temp6 = $('#high_Temp6')
const $low_Temp6 = $('#low_Temp6')
const $date_Time6 = $('#date_Time6')
const $weather_Description6 = $('#weather_Description6')

const $high_Temp7 = $('#high_Temp7')
const $low_Temp7 = $('#low_Temp7')
const $date_Time7 = $('#date_Time7')
const $weather_Description7 = $('#weather_Description7')

const $high_Temp8 = $('#high_Temp8')
const $low_Temp8 = $('#low_Temp8')
const $date_Time8 = $('#date_Time8')
const $weather_Description8 = $('#weather_Description8')

const $high_Temp9 = $('#high_Temp9')
const $low_Temp9 = $('#low_Temp9')
const $date_Time9 = $('#date_Time9')
const $weather_Description9 = $('#weather_Description9')

const $high_Temp10 = $('#high_Temp10')
const $low_Temp10 = $('#low_Temp10')
const $date_Time10 = $('#date_Time10')
const $weather_Description10 = $('#weather_Description10')

const $high_Temp11 = $('#high_Temp11')
const $low_Temp11 = $('#low_Temp11')
const $date_Time11 = $('#date_Time11')
const $weather_Description11 = $('#weather_Description11')

const $high_Temp12 = $('#high_Temp12')
const $low_Temp12 = $('#low_Temp12')
const $date_Time12 = $('#date_Time12')
const $weather_Description12 = $('#weather_Description12')

const $high_Temp13 = $('#high_Temp13')
const $low_Temp13 = $('#low_Temp13')
const $date_Time13 = $('#date_Time13')
const $weather_Description13 = $('#weather_Description13')

const $high_Temp14 = $('#high_Temp14')
const $low_Temp14 = $('#low_Temp14')
const $date_Time14 = $('#date_Time14')
const $weather_Description14 = $('#weather_Description14')

const $high_Temp15 = $('#high_Temp15')
const $low_Temp15 = $('#low_Temp15')
const $date_Time15 = $('#date_Time15')
const $weather_Description15 = $('#weather_Description15')

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
//let formSubmitted = document.querySelector('form').addEventListener('submit', weatherData)
// console.log(days)
//document.querySelector('#weatherBoxes').innerHTML('hello world')

// function render() {
//     //console.log(weatherData)
//     $high_Temp0.text(weatherData.data[0].high_temp)
//     $low_Temp0.text(weatherData.data[0].low_temp)
//     $date_Time0.text(weatherData.data[0].datetime)
//     $weather_Description0.text(weatherData.data[0].weather.description)

//     $high_Temp1.text(weatherData.data[1].high_temp)
//     $low_Temp1.text(weatherData.data[1].low_temp)
//     $date_Time1.text(weatherData.data[1].datetime)
//     $weather_Description1.text(weatherData.data[1].weather.description)
    
//     $high_Temp2.text(weatherData.data[2].high_temp)
//     $low_Temp2.text(weatherData.data[2].low_temp)
//     $date_Time2.text(weatherData.data[2].datetime)
//     $weather_Description2.text(weatherData.data[2].weather.description)
    
//     $high_Temp3.text(weatherData.data[3].high_temp)
//     $low_Temp3.text(weatherData.data[3].low_temp)
//     $date_Time3.text(weatherData.data[3].datetime)
//     $weather_Description3.text(weatherData.data[3].weather.description)
    
//     $high_Temp4.text(weatherData.data[4].high_temp)
//     $low_Temp4.text(weatherData.data[4].low_temp)
//     $date_Time4.text(weatherData.data[4].datetime)
//     $weather_Description4.text(weatherData.data[4].weather.description)
    
//     $high_Temp5.text(weatherData.data[5].high_temp)
//     $low_Temp5.text(weatherData.data[5].low_temp)
//     $date_Time5.text(weatherData.data[5].datetime)
//     $weather_Description5.text(weatherData.data[5].weather.description)
    
//     $high_Temp6.text(weatherData.data[6].high_temp)
//     $low_Temp6.text(weatherData.data[6].low_temp)
//     $date_Time6.text(weatherData.data[6].datetime)
//     $weather_Description6.text(weatherData.data[6].weather.description)
    
//     $high_Temp7.text(weatherData.data[7].high_temp)
//     $low_Temp7.text(weatherData.data[7].low_temp)
//     $date_Time7.text(weatherData.data[7].datetime)
//     $weather_Description7.text(weatherData.data[7].weather.description)
    
//     $high_Temp8.text(weatherData.data[8].high_temp)
//     $low_Temp8.text(weatherData.data[8].low_temp)
//     $date_Time8.text(weatherData.data[8].datetime)
//     $weather_Description8.text(weatherData.data[8].weather.description)
    
//     $high_Temp9.text(weatherData.data[9].high_temp)
//     $low_Temp9.text(weatherData.data[9].low_temp)
//     $date_Time9.text(weatherData.data[9].datetime)
//     $weather_Description9.text(weatherData.data[9].weather.description)
    
//     $high_Temp10.text(weatherData.data[10].high_temp)
//     $low_Temp10.text(weatherData.data[10].low_temp)
//     $date_Time10.text(weatherData.data[10].datetime)
//     $weather_Description10.text(weatherData.data[10].weather.description)
    
//     $high_Temp11.text(weatherData.data[11].high_temp)
//     $low_Temp11.text(weatherData.data[11].low_temp)
//     $date_Time11.text(weatherData.data[11].datetime)
//     $weather_Description11.text(weatherData.data[11].weather.description)
    
//     $high_Temp12.text(weatherData.data[12].high_temp)
//     $low_Temp12.text(weatherData.data[12].low_temp)
//     $date_Time12.text(weatherData.data[12].datetime)
//     $weather_Description12.text(weatherData.data[12].weather.description)
    
//     $high_Temp13.text(weatherData.data[13].high_temp)
//     $low_Temp13.text(weatherData.data[13].low_temp)
//     $date_Time13.text(weatherData.data[13].datetime)
//     $weather_Description13.text(weatherData.data[13].weather.description)
    
//     $high_Temp14.text(weatherData.data[14].high_temp)
//     $low_Temp14.text(weatherData.data[14].low_temp)
//     $date_Time14.text(weatherData.data[14].datetime)
//     $weather_Description14.text(weatherData.data[14].weather.description)
    
//     $high_Temp15.text(weatherData.data[15].high_temp)
//     $low_Temp15.text(weatherData.data[15].low_temp)
//     $date_Time15.text(weatherData.data[15].datetime)
//     $weather_Description15.text(weatherData.data[15].weather.description)
// }


// $(document).ready(function(){
// $('.weatherBoxes').children('div').each(function () {
//     alert(this.value); // "this" is the current element in the loop
// });

// $('.weatherBoxes').children().each( (index, element) => {
//     console.log(index);     // children's index
//     console.log(element);   // children's element
//  });
// });

function render() {
    x = 0
    while (x < 16) {
        let y = document.querySelector('#high_Temp' + x)
        y.innerHTML += (weatherData.data[x].high_temp)
        //let y = '$high_Temp' + x    right track
        let a = document.querySelector('#low_Temp' + x)
        a.innerHTML += (weatherData.data[x].low_temp)
        // $low_Temp0.text(weatherData.data[x].low_temp)
        let b = document.querySelector('#date_Time' + x)
        b.innerHTML = (weatherData.data[x].datetime)
        // $date_Time0.text(weatherData.data[x].datetime)
        let c = document.querySelector('#weather_Description' + x)
        c.innerHTML = (weatherData.data[x].weather.description)
        // $weather_Description0.text(weatherData.data[x].weather.description)
        x++
        console.log(x)
        console.log(y)
        console.log(a)
        console.log(weatherData)
    }

}