
let weatherData;
let userInput;

const $input = $('input[type="text"]');

$('form').on('submit', weather);

function weather(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax({
        url: `https://api.weatherbit.io/v2.0/forecast/daily?city=${userInput}&units=imperial&lang=en&key=5bff8890ebe34acaac52acd2590d936e`
    }).then(
        (data) => {
            weatherData = data.data;
            $(".container").html("");
            weatherData.forEach((element, index) => {
              const $weatherBoxes = $(`
              <div class="weatherBox">
                <p>Day ${ index +1 }: ${weatherData[index].datetime}</p>
                <br />
                <p class="highTemp">High: ${weatherData[index].high_temp}</p>
                <p class="lowTemp">Low: ${weatherData[index].low_temp}</p>
                <p class="description">${weatherData[index].weather.description}</p>
              </div>
            `);
            $weatherBoxes.appendTo($(".container"));
            });
            
            console.log(data);
            console.log(userInput);
        },
        (error) => {
            console.log('bad request: ', error);
        }
    );
} 