
const http = require('http');


 http.createServer((req,res)=>{
  res.write('hello everyone');
  res.end()
}).listen(5000 , ()=>{
    console.log("the srver is run");
})


