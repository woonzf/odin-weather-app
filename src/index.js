import './style.css';
import locationIcon from './images/map-marker-custom.png';
import gitHubIcon from './images/github-mark-white.png';

const page = (() => {
    let data = null;

    function init() {
        document.title = "Weather App";
        _initSearch();
        _initFooter();
        _getWeatherAPI();
    }

    function _getWeatherAPI() {
        fetch ("https://api.weatherapi.com/v1/forecast.json?key=762bb06944f34a6082b34316241001&days=3&q=malaysia", {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                console.log(response)
                data = response;
                _initForecast();
            });
    }

    function _initForecast() {
        const div = document.querySelector("#forecast");

        for (const day of data.forecast.forecastday) {
            const box = document.createElement("div");
            box.classList.add("box-forecast");
            box.classList.add("bg-info");
            div.append(box);
        }
    }

    function _initSearch() {
        const icon = document.querySelector("#icon-location");
        icon.src = locationIcon;
    }

    function _initFooter() {
        const anchor = document.querySelector("#footer a");
        anchor.href = "https://github.com/woonzf";

        const image = document.querySelector("#icon-github");
        image.src = gitHubIcon;
    }

    return { init }
})()

page.init();