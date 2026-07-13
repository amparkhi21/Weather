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
let api="0d07b727d23a4e9b9aabc8dfd53437ab";
async function weather(c){
    try{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${api}&units=metric`;
        const response=await fetch(url);
        const data=await response.json();
        if(!response.ok){
            name.textContent="City Not Found";
            document.getElementById("wind").textContent="Wind:";
            document.getElementById("humidity").textContent="Humidity:";
            document.getElementById("temperature").textContent="Temperature:";
            document.getElementById("condition").textContent="Condition:";
            return;
        }
        if(name){
            name.textContent=data.name;
        }
        document.getElementById("temperature").textContent = `${data.main.temp} °C`;
        document.getElementById("humidity").textContent = `${data.main.humidity} %`;
        document.getElementById("wind").textContent = `${data.wind.speed} km/h`;
        document.getElementById("condition").textContent = `${data.weather[0].main}`;
    }
    catch(error){
        console.error("Error found:",error);
    }
}  