import './style.css';
import favIcon from './images/sun.png';
import locationIcon from './images/map-marker-custom.png';
import gitHubIcon from './images/github-mark-white.png';
import loadingIcon from './images/loading-custom.png';

import { weather } from './weather';

const page = (() => {
    const imgFav = document.querySelector("link");
    const icon = document.querySelector("#icon-location");
    const image = document.querySelector("#icon-github");
    const imgLoad = document.querySelector("#loading > img");
    const info = document.querySelector("#info > div:first-of-type");
    const loading = document.querySelector("#loading");
    const input = document.querySelector("#location");
    const submit = document.querySelector("#submit-location");
    const forecast = document.querySelector("#forecast");
    let boxesForecast = null;
    const queryAPI = "https://api.weatherapi.com/v1/forecast.json?key=762bb06944f34a6082b34316241001&days=3&q="
    
    function init() {
        document.title = "Weather App";
        _initIcons();
        _initSearch();
        _getWeatherAPI("Malaysia");
    }

    function _initIcons() {
        imgFav.href = favIcon;
        icon.src = locationIcon;
        image.src = gitHubIcon;
        imgLoad.src = loadingIcon;
    }

    function _getWeatherAPI(location) {
        _startLoading();
        fetch (queryAPI + location, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                _stopLoading();
                if (response.error) {
                    _removeErrors();
                    input.classList.add("error");
                }
                else {
                    _removeErrors();
                    weather.getCurrentInfo(response);
                    _createForecast(response);
                }
            });
    }

    function _createForecast(data) {
        while (forecast.children.length > 0) forecast.removeChild(forecast.lastChild);
        const boxes = weather.getForecastBoxes(data);
        for (const box of boxes) forecast.append(box);
    }

    function _initSearch() {
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

    function _removeErrors() {
        input.classList.remove("invalid", "error");
    }

    function _startLoading() {
        info.classList.add("hide");
        loading.classList.remove("hide");

        boxesForecast = document.querySelectorAll(".box-forecast");
        boxesForecast.forEach(box => {
            box.classList.add("blur");
        });
    }

    function _stopLoading() {
        setTimeout(() => {}, 5000);
        info.classList.remove("hide");
        loading.classList.add("hide");
        
        boxesForecast.forEach(box => {
            box.classList.remove("blur");
        });
    }

    return { init }
})()

page.init();