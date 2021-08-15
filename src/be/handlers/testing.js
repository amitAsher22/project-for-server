

const path = require('path');
const fs = require('fs')
const os = require('os');
const url = require('url')
const http = require('http')

const server = http.createServer((req ,res)=>{
 res.write('hello amit the king');
 res.end()

}).listen(8090 , ()=>
    console.log('this serve is work'))
  








