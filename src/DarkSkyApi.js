const https = require('https');

const getCurrently = (lat,lng,key) => {
  const baseApiUrl = "https://api.darksky.net/forecast";
  const exclude = "exclude=minutely,hourly,daily,alerts,flags";
  const requestUrl = `${baseApiUrl}/${key}/${lat},${lng}?${exclude}`;

  return new Promise((resolve, reject) => {
    https.get(requestUrl, (res) => {
      const {statusCode} = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => {
        rawData += chunk;
      });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData.currently);
        } catch (e) {
          console.error(e.message);
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    });
  });
};

module.exports = {
  getCurrently
}