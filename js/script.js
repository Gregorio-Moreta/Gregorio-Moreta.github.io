
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

let userInput;
const $input = $('input[type="text"]')

function weather(event) {
    event.preventDefault()
    userInput = $input.val()
    $.ajax({
        url: `https://api.weatherbit.io/v2.0/forecast/daily?city=${userInput}&units=imperial&lang=en&key=d9b5c7c9931647f6a52ad388821c3004`
    }).then(
        (data) => {
            console.log(data);
            console.log(userInput)
        },
        (error) => {
            console.log('bad request: ', error);
        }
    );
}
//document.querySelector('form').addEventListener('submit', weather)
$('form').on('submit', weather)

