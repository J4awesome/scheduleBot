var express = require('express')
var app = express()
var port = 3000 //port the bot is being listened on 
var totalNumbers = 0

var scheduleHelper = require('./Models/schedule.js')
var letterDay = ""
scheduleHelper.data.getLetterDay(function(data) {
    letterDay = data[0].letterday
    console.log('data',data[0].letterday)
})

app.get('/', function(req,res) {
    res.send('test')
})

app.listen(port) 
console.log('Server listening on port',port,'\n', 'number of numbers currently connected',totalNumbers,'\n','letter day',letterDay)