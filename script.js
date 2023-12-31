url ="https://api.openweathermap.org/data/2.5/weather?q=";

// url ="https://api.openweathermap.org/data/2.5/weather?q= {city name} &appid= {API key} &units=metric";

let apiKey="/* API KEY */";

let temp=document.querySelector(".temperature");

let humidityData=document.querySelector(".humidityData p");

let windData=document.querySelector(".windData p");

let weatherType=document.querySelector(".weatherType")

let city;



let btn=document.querySelector(".search-btn");

btn.addEventListener("click",()=>{
    city=document.querySelector("#input").value;
    apiUrl=`${url}${city}&appid=${apiKey}&units=metric`;
    getWeather();
})





async function getWeather(){
    response= await fetch(apiUrl);
    if(response.status == 404){
        alert("Enter correct city name");
    }else{
    data= await response.json();
    temperature=data.main.temp;
    humidity=data.main.humidity;
    windSpeed=data.wind.speed;
    weatherData=data.weather[0].description;
    weatherType.innerText=weatherData;
    temp.innerText =`${temperature}°C`;
    humidityData.innerText=humidity;
    windData.innerText=windSpeed;
    }
}

