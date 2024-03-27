 $(document).ready(function(){
 //Weather App
 let cityname="Montreal";//$("#cityname").val();
 let APIkey="51f3a0a590fa4c63481b5e88e2dd5b5d";
 let APIurl=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`;
         $.ajax({
                 url:APIurl,
                 method:"GET",
                 dataType:"JSON",
                 success:function(weather){
                     console.log(weather);
                     let temp = weather.main.temp;
                    let humidity=weather.main.humidity;
                    let Minimum=weather.main.temp_min;
                    let Maximum=weather.main.temp_max;
                    let Latitude=weather.coord.lat;
                    let Longtitude=weather.coord.lon;
                    let weatherDesc=weather.weather[0].description;
                     $(".container").html(`
                     <form>
                <label for="">Enter your city: </label>
                <input type="text" id="cityname">
                <button type="button" class="btn btn-warning p-1">Show me the current weather</button>
             </form>
             <h2>Current Weather for: </h2>
             <ul>
                 <li>Current Temperature: ${temp}</li>
                 <li>Curent Humidity: ${humidity} </li>
                 <li>Minimum Temperature today: ${Minimum} </li>
                 <li>Maximum Temperature today: ${Maximum} </li>
                 <li>Latitude: ${Latitude} </li>
                 <li>Longtitude: ${Longtitude} </li>
                 <li>Weather Description: ${weatherDesc}</li>
                 </ul>
                     `)
                    },  
                 error:function(){
                     console.log("erreur");

                    }
                })                
})
