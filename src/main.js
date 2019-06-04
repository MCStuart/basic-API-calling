// require('exports-loader?file!./bootstrap/js/dist/.js')
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
$(document).ready(function() {
  console.log(process.env.API_KEY);
    $('#weatherLocation').click(function() {
      const city = $('#location').val();
      $('#location').val("");
  
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
  
      request.onreadystatechange = function() {
          console.log(this);
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      }
  
      request.open("GET", url, true);
      request.send();
  
     const getElements = function(response) {
         console.log(response.main);
         console.log();
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      }
    });
  });