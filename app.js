var express = require('express')
var app = express()
var port = 3000 //port the bot is being listened on 
var totalNumbers = 0 //number of registered 'clients'

var scheduleHelper = require('./Models/schedule.js')
var smsHelper = require('./Models/text.js')
var letterDay = ""


scheduleHelper.data.getLetterDay(function(data) {
    letterDay = data[0].letterday 
scheduleHelper.data.getUserSchedule('7328044377',letterDay) //random data used for testing api
    console.log('Letterday',data[0].letterday)
})

var schedule = [["Math","Reading","Science","Social Studies"],["Reading","Science","Social Studies","Math","Alegrba"],["Science","Reading","Social Studies","Science","Alegrba"]] //dummy data
//smsHelper.data.sendSMS('17328044377','Hi this is a test')
//scheduleHelper.data.createUser("7328044377",schedule)

app.get('/', function(req,res) {
    res.send('test')
})

app.listen(port) 
console.log('Server listening on port',port)
console.log('Registered numbers currently connected',totalNumbers)