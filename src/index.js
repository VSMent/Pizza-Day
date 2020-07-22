require('dotenv').config();
const geo = require('./GoogleGeocode');

if (process.argv[2]) {
  const address = process.argv[2];
  // Get coordinates
  const geoPromise = geo.getCoordinates(address, process.env.GEOCOGING_KEY);
  geoPromise.then(res => console.log(res), null);

  // console.log(`latitude: ${lat}, longitude: ${lng}`);
  // console.log(res);

  // Get weather
  // Print
}