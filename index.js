/*APi KEYS*/
const apikey="9c97d05888ae3f4ac0dc9f5f32637577";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=city";
/*Doms*/
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weathericon = document.querySelector('.weather-icon');



/*async function calling the api*/
        async function checkWeather(city)
        {
            const response = await fetch(apiurl + city + `&appid=${apikey}`);
            if(response.status=404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none"

            }
            else
            {
                var data = await response.json();
            
            
            
            document.querySelector('.city').innerHTML=data.name;
            document.querySelector('.temp').innerHTML=Matth.round(data.main.temp )+ "°C";
            document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
            document.querySelector('.wind').innerHTML=data.wind.speed + "km/h";

            if(data.weather[0].main == "Clouds"){
                weathericon.src="";
            }
            else if (data.weather[0].main == "Clear"){
                weathericon.src="";
            }
            else if (data.weather[0].main == "Rain"){
                weathericon.src="";
            }
            else if (data.weather[0].main == "Drizzle"){
                weathericon.src="";
            }
            else if (data.weather[0].main == "Mist"){
                weathericon.src="";
            }

            document.querySelector(".weather").style.display ="block";
            document.querySelector(".error").style.display ="none";

            

            

        }
        /*function called*/
        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        })

    }
    
            

         
        