/* 
haze
drizzle
rain
snow
Mist,smoke,fog
dust,sand,ash
squall,tornado
clear
for else.

*/

let imgArray = [
"https://cdn-icons-png.flaticon.com/128/182/182264.png",
"https://cdn-icons-png.flaticon.com/128/1532/1532336.png",
"https://www.flaticon.com/premium-icon/rain_844732",
"https://cdn-icons-png.flaticon.com/128/100/100825.png",
"https://cdn-icons-png.flaticon.com/128/175/175872.png",
"https://cdn-icons.flaticon.com/png/128/4383/premium/4383606.png?token=exp=1635518357~hmac=fded664ce270222e6dbf6060ad6ae077",
"https://cdn-icons.flaticon.com/png/128/3920/premium/3920960.png?token=exp=1635518443~hmac=cb2b9975ddd6fdf4581244518095839e",
"https://cdn-icons-png.flaticon.com/128/1229/1229325.png",
"https://cdn-icons.flaticon.com/png/128/1585/premium/1585341.png?token=exp=1635518706~hmac=d1cabc1a794fefc557f68ade20f63569",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCKwFzvXTGVYnolcLk2ltPXIY3mwcxHYbbA&usqp=CAU"
]


const key = "a2bbcb085d09f72901caf7274f466bc2"
const myUrl = "https://api.openweathermap.org/data/2.5/weather?q="
let place = document.getElementById('input')

function myFunction(){
  let city = place.value
let url = myUrl+city+"&units=metric"+"&APPID="+key
fetch(url).then(function(response){
  return response.json()
}).then(function(value){
  console.log(value)
  document.getElementById('city').innerText = value.name
  document.getElementById('temp').innerText = Math.round(value.main.temp)+"°C"
   document.getElementById('max').innerText = value.main.temp_max+"°C"
   document.getElementById('min').innerText = value.main.temp_min+"°C"
   document.getElementById('humidity').innerText = value.main.humidity
   document.getElementById('pressure').innerText = value.main.pressure
   document.getElementById('speed').innerText = value.wind.speed+"Km/h"
   let climate = value.weather[0].main
   let climate2 = value.weather[0].description
if(climate=="Haze"){
document.getElementById('image').src= imgArray[0]
document.getElementById('weather').innerText=climate2
}
else if(climate=="Drizzle"){
document.getElementById('image').src= imgArray[1]
document.getElementById('weather').innerText=climate2
}
else if(climate=="Rain"){
document.getElementById('image').src= imgArray[2]
document.getElementById('weather').innerText=climate2
}
else if(climate=="Snow"){
document.getElementById('image').src= imgArray[3]
document.getElementById('weather').innerText=climate2
}
else if(climate=="Mist"||"Smoke"||"Fog"){
document.getElementById('image').src= imgArray[4]
document.getElementById('weather').innerText=climate2
}
else if(climate=="Dust"||"Sand"||"Ash"){
document.getElementById('image').src= imgArray[5]
document.getElementById('weather').innerText=climate2
}
else if(climate=="Squall"||"Tornado"){
document.getElementById('image').src= imgArray[6]
document.getElementById('weather').innerText=climate2
}
else if(climate=="Clear"){
  document.getElementById('image').src= imgArray[7]
document.getElementById('weather').innerText=climate2
}
else if(climate=="Clouds"){
  document.getElementById('image').src= imgArray[9]
document.getElementById('weather').innerText=climate2
}
else{
  document.getElementById('image').src= imgArray[8]
document.getElementById('weather').innerText=climate2
}
  }
 )
}