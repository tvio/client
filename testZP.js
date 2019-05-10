const axios = require ('axios');
const fs = require ('fs');
const https = require('https');

const instance = axios.create({
    baseURL: 'https://testsukl.iniba.eu/zp/v1',
    httpsAgent: new https.Agent({
        ca: fs.readFileSync('../cert.pem'),
        cert: fs.readFileSync('../cert.pem'),
        key: fs.readFileSync('../server.key'),
        auth: 'user:password',
        rejectUnauthorized: false
    })
});

instance.get('/ciselniky/mj')
  .then(res => console.log(res))
  .catch(err => console.log(`error: ${err.stack}`));
