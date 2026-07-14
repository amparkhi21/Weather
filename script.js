let city=document.getElementById("city");
let btn=document.getElementById("btn");
let name=document.getElementById("cityName");
btn.addEventListener("click",function(){
    const c=city.value;
    if(c===""){
        alert("Please enter city name!");
        return;
    }
    weather(c);
})
city.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        e.preventDefault();
        btn.click();
    }
})
let api="de9fb10660223f5bb1e7044dd1f336db";
async function weather(c){
    try{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${api}&units=metric`;
        const response=await fetch(url);
        const d=await response.json();
        if(!response.ok){
            name.textContent="City Not Found";
            document.getElementById("wind").textContent="Wind:";
            document.getElementById("humidity").textContent="Humidity:";
            document.getElementById("temperature").textContent="Temperature:";
            document.getElementById("condition").textContent="Condition:";
            return;
        }
        if(name){
            name.textContent=d.name;
        }
        document.getElementById("temp").textContent= `${d.main.temp} °C`;
        document.getElementById("con").textContent=`${d.weather[0].main}`;
        document.getElementById("chead").textContent=`${city.value}`;
        document.getElementById("temperature").textContent = `${d.main.temp} °C`;
        document.getElementById("humidity").textContent = `${d.main.humidity} %`;
        document.getElementById("wind").textContent = `${d.wind.speed} km/h`;
        document.getElementById("condition").textContent = `${d.weather[0].main}`;
    }
    catch(error){
        console.error("Error found:",error);
    }
} 