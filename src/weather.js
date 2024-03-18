import icon113 from './images/weather/64x64/day/113.png';

import weatherCond from './weather-condition.json';

const weather = (() => {
    function getIcon(day) {
        const icon = day.day.condition.icon;
        const iconURL = "./images/" + icon.slice(21);
        return iconURL;
    }

    return { getIcon };
})()

export { weather };