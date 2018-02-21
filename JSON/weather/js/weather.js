$(document).ready(function() {

  let weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  let data = {
    q : "Portland,OR",
    units : "metric"
  };
  function showWeather(weatherReport) {
    $('#temperature').text(weatherReport.main.temp);
  }
  $.getJSON(weatherAPI, data, showWeather)

});
