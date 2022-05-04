//----- DOM ----- //

let inputCiudad = document.getElementById("ciudad")

let boton = document.getElementById("boton")

let ciudad = document.getElementById("texto-ciudad")

let temperatura = document.getElementById("temperatura")

let icono = document.getElementById("icono")

let pronostico = document.getElementById("pronostico")

let humedad = document.getElementById("humedad")

let viento = document.getElementById("viento")

//-----  -----//



let peticionClima = ()=> {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCiudad.value}&appid=7fd12f101f60e40c6fdc494861d4c7f2`

    fetch(url)
    .then(r => r.json())
    .then(data => {
        console.log(data)
        temperatura.textContent = `${Math.round(data.main.temp - 273.15)}C`;
        ciudad.textContent = data.name;
        icono.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        // pronostico.textContent = data.weather[0].description;
        humedad.textContent = `${data.main.humidity}%`;
        viento.textContent = `${Math.round((data.wind.speed) * 1,60934)}km/h`;
        inputCiudad.value = "";
        let translation = `https://api.mymemory.translated.net/get?q=${data.weather[0].description}!&langpair=en|es`
        fetch(translation).then(r => r.json()).then(data => pronostico.textContent = data.matches[1].translation)
    })
    .catch(e => console.log(e) )    
}

boton.addEventListener("click", ()=> peticionClima())