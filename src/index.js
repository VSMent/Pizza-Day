require('dotenv').config();
const geo = require('./GoogleGeocode');
const weather = require('./DarkSkyApi');

if (process.argv[2]) {
  const address = process.argv[2];
  // Get coordinates
  const geoPromise = geo.getCoordinates(address, process.env.GEOCOGING_KEY);
  geoPromise.then(
    res => {
      // Get weather
      const weatherPromise = weather.getCurrently(res.lat, res.lng, process.env.DARK_SKY_API_KEY);
      weatherPromise.then(
        currently => {
          const str = `Weather in ${address}.
          Temperature (F):  ${currently.temperature}
          Humidity (%):     ${currently.humidity}
          Pressure (mm):    ${currently.pressure}`;
          // Print
          console.log(str);
        },
        null
      );
    },
    null
  );
} else {
  console.log("Please specify address");
}