const axios = require("axios");

const httpClient = axios.create();
httpClient.defaults.timeout = 1000000;

var url =
  "http://test-s-node:3001/dlpciselniky/v1/lecivepripravky?limit=250000";

//var base64 = Buffer.from(username+':'+password).toString('base64');
//var config = `{headers:{'Authorization':'Basic ${base64}'}}`;
config = {
  method: "GET",
  url,
  timeout: 100000
  // headers: {'Authorization': 'Basic aGFqZWs6ZEdpYW50MzY3'}
};
console.log(config);

const getLeciva = () => {
  var count = 0;
  let start = new Date().getTime();
  return httpClient(config).then(response => {
    console.log(response.error);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    let end = new Date().getTime();
    console.log((end - start) / 1000, "s");
    return response;
  });
};

getLeciva()
  .then(res => {
    var count = 0;
    for (i = 0; i < res.data.length; i++) {
      // console.log(res.data[i].kod_sukl + "," + res.data[i].nazev);
      count++;
    }

    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
