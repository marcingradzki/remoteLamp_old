const axios = require('axios');

const fetchSunset = async () => {
    const url = 'http://api.sunrise-sunset.org/json?lat=51.7687323&lng=19.4569911&formatted=0';
    let sunset;
    await axios.get(url)
        .then(({ data }) => {
            sunset = data.results.sunset;
        })
        .catch(error => console.log(error))
    return sunset;
};

const calculateOffset = sunset => {
    const now = new Date();
    return new Date(sunset) - now;
};

const setTimer = (offset) => {
    return setTimeout(() => {
        // turn on lamp
        console.log('FIRE!');
    }, offset);
};

const setCustomTrigger = customDate => {
    return setTimer(calculateOffset(customDate));
};

const setSunsetTrigger = async () => {
    const sunset = await fetchSunset();
    //return setTimer(3000);
    return setTimer(calculateOffset(sunset));
};

const kill = trigger => {
    clearTimeout(trigger);
};

module.exports = {
    setSunsetTrigger,
    setCustomTrigger,
    kill,
};