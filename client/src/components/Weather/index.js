import React from "react";
import $ from "jquery";
import "./weather.css"

export default function getWeather() {

    let latitude;
    let longitude;
    const geoKey = "fbdd220a24d54902b3077b5c9d5494c6"
    const apiKey = "775daeace8183df662c1b6fca71df7b4";
    let URL;
    let location;
    let icon;
    let fahrenheit;
    let wind;
    let description;
    let humid;
    let clouds;

    $.getJSON(`https://api.ipgeolocation.io/astronomy?apiKey=${geoKey}`, function (data) {
        latitude = data.location.latitude;
        longitude = data.location.longitude;
        URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
    }).then(function (){

    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`, function (data) {
        location = data.name;
        fahrenheit = data.main.temp;
        humid = data.main.humidity;
        wind = data.wind.speed;
        description = data.weather[0].description;
        icon = data.weather[0].icon;
        clouds = data.clouds.all;

    }).then(function (data) {
        let imageIcon = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
        // //set dom elements from API

        document.getElementById("weather-location").innerHTML = "Your Location: " + location;
        document.getElementById("wind").innerHTML = "Wind: " + wind + "mph";
        document.getElementById("degree-section").innerHTML = "Temperature: " + fahrenheit + "°F";
        document.getElementById("humid").innerHTML = "Humidity: " + humid + "%";
        document.getElementById("clouds").innerHTML = "Clouds: " + clouds + "% Cloudy";
        document.getElementById("desc").innerHTML = "Weather: " + description;
        document.getElementById("weather-icon").setAttribute("src", imageIcon);
    });
});



    return (
        <>
            <button
                id="emojid"
                style={{
                    width: "100px",
                    borderRadius: "3px",
                    position: "absolute",
                    marginTop: "145%",
                    marginLeft: "3%"

                }}
                onClick={e => {
                    e.preventDefault();
                    getWeather();
                    document.getElementById("weather-container").style.display = "block";
                }}
                className="emoji btn btn-large waves-effect waves-light hoverable blue accent-3">
                 ⛈️ 
         </button>

            <div class="containerW" id="weather-container">
                <div id="rowW" class="row2">
                    <h2 id="weather-location">Location</h2>
                    <h3 id="wind">Max. Temperature: °F</h3>
                    <h3 id="degree-section">Temperature: °F</h3>
                    <h3 id="humid">humidity</h3>
                    <h3 id="clouds">clouds</h3>
                    <h3 id="desc">desc</h3>
                    {/* <img class="weather-image" src="" alt="" width="128" height="128" /> */}
                    <h3 class="weather-description"></h3>

                    <button
                        style={{
                            width: "105px",
                            borderRadius: "4px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem",
                            marginBottom: "10%"
                        }}
                        onClick={e => {
                            e.preventDefault();
                            getWeather();
                            document.getElementById("weather-container").style.display = "none";
                        }}
                        className="closebtnw btn btn-large waves-effect waves-light hoverable blue accent-3">
                        Close
         </button>


                </div>



            </div>

        </>
    );
}
