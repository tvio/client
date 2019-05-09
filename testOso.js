const axios = require ('axios');

const httpClient = axios.create();
httpClient.defaults.timeout = 1000000;

var url = 'http://s-util-as:8001/ords/rest/identity/osoby';


//var base64 = Buffer.from(username+':'+password).toString('base64');
//var config = `{headers:{'Authorization':'Basic ${base64}'}}`;
config = {
    method: 'GET',
    url,
    timeout: 100000,
  //  headers: {'Authorization': 'Basic aGFqZWs6ZEdpYW50MzY3'}
};
console.log(config);

const getOso = ()=> {
    var count = 0;
   return httpClient(config).then((response)=>{
   console.log(response.error);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
        return response;     
    });
    
};     
   


getOso().then((res)=>{
  var count = 0;
    for (i=0 ; i < res.data.items.length;i++) {
        console.log(res.data.items[i].prijmeni);   
       count++;
    };
   
      console.log(count);
     
}).catch((e)=>{
   console.log(e);
});