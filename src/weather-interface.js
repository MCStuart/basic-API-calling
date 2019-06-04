$(document).ready(function() {
    $('#weatherLocation').click(function() {
      let city = $('#location').val();
      $('#location').val("");
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d70b9bd22e55b376098b03977dd39f4`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
            console.log(response);
            $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
            $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
          },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.");
        }
      });
    });
  });