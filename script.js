$(document).ready(function(){

  
      $("#searchBtn").on("click", function(){ 
      
      // var i = 0
      var city = $("#city").val();

      currentWeatherData(city);
      weatherForecast(city);
      // // for(var i = 0; i<10; i++)
      // // console.log(i + city)
      // localStorage.setItem(i, city)
      // }
      })


      var cities = [];

      

    
      
     
function currentWeatherData(city){
  
      var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=68104193d77dd20a330828b49be243ea"
      
        
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
  if(cities.indexOf(city) === -1){
        cities.push(city);
        localStorage.setItem("history", cities)
  }


        $(".city").text("City name: " + response.name)
        $(".date").text(response.lastupdate)        //EDIT THIS
        $(".windSpeed").text("Wind Speed: " + response.wind.speed + "MPH")
        $(".humidity").text("Humidity: " + response.main.humidity +"%")

        var icon = response.weather[0].icon
        $(".icon").attr("src", "http://openweathermap.org/img/w/" +icon +".png")
       
        var tempC = parseInt(response.main.temp - 273.15)
        $(".temp").text("Temperature: " + tempC + "°C")
       
        var lat = response.coord.lat
        var lon = response.coord.lon
    
      
        var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?appid=68104193d77dd20a330828b49be243ea"+ "&lat="+ lat +"&lon=" + lon

        $.ajax({
        url: queryURL2,
        method: "GET"
      }).then(function(response) {

        var uv = response.value

        if (uv < 3 ){
            $("#uvBtn").attr("class", "btn btn-success")
            $("#uvBtn").css("background-color", "green")
            $("#uvBtn").css("border-color", "green")
            $("#uvBtn").text("Low")
        }
          else if (3 < uv && uv < 6){
            $("#uvBtn").attr("class", "btn btn-success")
            $("#uvBtn").css("background-color", "yellow")
            $("#uvBtn").css("border-color", "yellow")
            $("#uvBtn").text("Moderate")
          }
          else if(6 < uv  && uv < 8){
            $("#uvBtn").attr("class", "btn btn-success")
            $("#uvBtn").css("background-color", "orange")
            $("#uvBtn").css("border-color", "orange")
            $("#uvBtn").text("High")
          }
         else if(8 < uv && uv< 11){
            $("#uvBtn").attr("class", "btn btn-success")
            $("#uvBtn").css("background-color", "red")
            $("#uvBtn").css("border-color", "red")
            $("#uvBtn").text("Very High")
          }

          else{
            $("#uvBtn").attr("class", "btn btn-success")
            $("#uvBtn").css("background-color", "purple")
            $("#uvBtn").css("border-color", "purple")
            $("#uvBtn").text("Extreme")
          } 
        $(".uvIndex").text("UV Index: " + response.value)

      })
    })}

    function weatherForecast(city){

      var queryURL5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=68104193d77dd20a330828b49be243ea"

      $.ajax({
        url: queryURL5,
        method: "GET"
      }).then(function(response) {
        console.log(response)
        // Day 1
        $("#date1").text(response.list[4].dt_txt)
        var tempC1 = parseInt(response.list[4].main.temp - 273.15)
        $("#temp1").text("Temp: " + tempC1 + "°C")
        $("#humidity1").text("Humidity: " + response.list[4].main.humidity + "%")
        $("#icon1").attr("src", "http://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png")
        

        // Day 2
        $("#date2").text(response.list[12].dt_txt)
        var tempC2 = parseInt(response.list[12].main.temp - 273.15)
        $("#temp2").text("Temp: " + tempC2 + "°C")
        $("#humidity2").text("Humidity: " + response.list[12].main.humidity + "%")
        $("#icon2").attr("src", "http://openweathermap.org/img/w/" + response.list[12].weather[0].icon + ".png")

        // Day 3
        $("#date3").text(response.list[20].dt_txt)
        var tempC3 = parseInt(response.list[20].main.temp - 273.15)
        $("#temp3").text("Temp: " + tempC3 + "°C")
        $("#humidity3").text("Humidity: " + response.list[20].main.humidity + "%")
        $("#icon3").attr("src", "http://openweathermap.org/img/w/" + response.list[20].weather[0].icon + ".png")

        // Day 4
        $("#date4").text(response.list[28].dt_txt)
        var tempC4 = parseInt(response.list[28].main.temp - 273.15)
        $("#temp4").text("Temp: " + tempC4 + "°C")
        $("#humidity4").text("Humidity: " + response.list[28].main.humidity + "%")
        $("#icon4").attr("src", "http://openweathermap.org/img/w/" + response.list[28].weather[0].icon + ".png")

        // Day 5
        $("#date5").text(response.list[36].dt_txt)
        var tempC5 = parseInt(response.list[36].main.temp - 273.15)
        $("#temp5").text("Temp: " + tempC5 + "°C")
        $("#humidity5").text("Humidity: " + response.list[36].main.humidity + "%")
        $("#icon5").attr("src", "http://openweathermap.org/img/w/" + response.list[36].weather[0].icon + ".png")


      })
      }


      });
   