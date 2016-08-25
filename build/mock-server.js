var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var mockConfig = require('../mock/mock.config')
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.mockPort

var app = express()

//遍历并初始化mock
for(var key in mockConfig){
  var _method = key.split(':')[0].toLowerCase();
  var _url = key.split(':')[1];
  app[_method](_url,mockConfig[key]);
}

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('mockServer at http://localho1st:' + port + '\n')
})

