import './style.css';
import locationIcon from './images/map-marker-custom.png';
import gitHubIcon from './images/github-mark-white.png';

import { weather } from './weather';

const page = (() => {
    const input = document.querySelector("#location");
    const submit = document.querySelector("#submit-location");
    const queryAPI = "https://api.weatherapi.com/v1/forecast.json?key=762bb06944f34a6082b34316241001&days=3&q="
    
    function init() {
        document.title = "Weather App";
        _initSearch();
        _initFooter();
        _getWeatherAPI("Malaysia");
    }

    function _getWeatherAPI(location) {
        fetch (queryAPI + location, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                console.log(response)
                if (response.error) {
                    _removeErrors();
                    input.classList.add("error");
                }
                else {
                    _removeErrors();
                    _createForecast(response);
                }
            });
    }

    function _createForecast(data) {
        const div = document.querySelector("#forecast");
        while (div.children.length > 0) div.removeChild(div.lastChild);
        for (const day of data.forecast.forecastday) {
            const box = document.createElement("div");
            box.classList.add("box-forecast");
            box.classList.add("bg-info");
            
            const icon = document.createElement("img");
            icon.src = weather.getIcon(day);
            box.append(icon);

            div.append(box);
        }
    }

    function _initSearch() {
        const icon = document.querySelector("#icon-location");
        icon.src = locationIcon;

        submit.onclick = function(e) {
            e.preventDefault();
            if (input.value == "") {
                _removeErrors();
                input.classList.add("invalid");
            } else {
                _getWeatherAPI(input.value);
                input.value = "";
            }
        }
    }

    function _initFooter() {
        const image = document.querySelector("#icon-github");
        image.src = gitHubIcon;
    }

    function _removeErrors() {
        input.classList.remove("invalid");
        input.classList.remove("error");
    }

    return { init }
})()

page.init();