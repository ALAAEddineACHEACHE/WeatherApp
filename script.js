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
                    
                    },
                    
                 error:function(){
                     console.log("erreur");
                    }

                }).done(function(weather){
            $(".container").html(`
            <form>
       <label for="">Enter your city: </label>
       <input type="text" id="cityname">
       <button type="button" class="btn btn-warning p-1">Show me the current weather</button>
    </form>
    <h2>Current Weather for: </h2>
    <ul>
        <li>Current Temperature:</li>
        <li>Curent Humidity:${weather.humidity} </li>
        <li>Minimum Temperature today: </li>
        <li>Maximum Temperature today: </li>
        <li>Latitude: </li>
        <li>Longtitude: </li>
        <li>Weather Description:${weather.description}</li>
        </ul>
   



            
            
            
            
            `

            )



                })
})