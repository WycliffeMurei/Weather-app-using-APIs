// const apikey="9c97d05888ae3f4ac0dc9f5f32637577";
// const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=city";
// const searchBox = document.querySelector('.search input');
// const searchBtn = document.querySelector('.search button');
// const weathericon = document.querySelector('.weather-icon');




//         async function checkWeather(city)
//         {
//             const response=await fetch(apiurl + city + `&appid=${apikey}`);
//             if(response.status=404){
//                 document.querySelector(".error").style.display="block";
//                 document.querySelector(".weather").style.display="none"

//             }
//             else
//             {
//                 var data = await response.json();
            
            
            
//             document.querySelector('.city').innerHTML=data.name;
//             document.querySelector('.temp').innerHTML=Matth.round(data.main.temp )+ "°C";
//             document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
//             document.querySelector('.wind').innerHTML=data.wind.speed + "km/h";

//             if(data.weather[0].main == "Clouds"){
//                 weathericon.src="";
//             }
//             else if (data.weather[0].main == "Clear"){
//                 weathericon.src="";
//             }
//             else if (data.weather[0].main == "Rain"){
//                 weathericon.src="";
//             }
//             else if (data.weather[0].main == "Drizzle"){
//                 weathericon.src="";
//             }
//             else if (data.weather[0].main == "Mist"){
//                 weathericon.src="";
//             }

//             document.querySelector(".weather").style.display ="block";
//             document.querySelector(".error").style.display ="none";

            

            

//         }
//         searchBtn.addEventListener("click",()=>{
//             checkWeather(searchBox.value);
//         })

//     }
    
            


const apikey = "9c97d05888ae3f4ac0dc9f5f32637577";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.getElementById('searchinput');
const searchBtn = document.getElementById('searchbutton');
const weathericon = document.querySelector('.weather-icon');


async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main === "Clouds") {
            weathericon.src = "icons/clouds.png"; // replace with actual icon path
        } else if (data.weather[0].main === "Clear") {
            weathericon.src = "icons/clear.png"; // replace with actual icon path
        } else if (data.weather[0].main === "Rain") {
            weathericon.src = "icons/rain.png"; // replace with actual icon path
        } else if (data.weather[0].main === "Drizzle") {
            weathericon.src = "icons/drizzle.png"; // replace with actual icon path
        } else if (data.weather[0].main === "Mist") {
            weathericon.src = "icons/mist.png"; // replace with actual icon path
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox);
});

         
        