var express = require('express')
var app = express()
var port = 3000 //port the bot is being listened on 
var totalNumbers = 0 //number of registered 'clients'
var bodyParser = require('body-parser');
var scheduleHelper = require('./Models/schedule.js')
var smsHelper = require('./Models/text.js')
var letterDay = ""


scheduleHelper.data.getLetterDay(function(data) { //get letter day based on day of week
    if (data[0].letterday == undefined) {

    } else {
        letterDay = data[0].letterday
        //scheduleHelper.data.getUserSchedule('7328044377',letterDay) //random data used for testing api
        console.log('Letterday',data[0].letterday)
    }
})

scheduleHelper.data.updateSchedule()
var schedule = [["Math","Reading","Science","Social Studies"],["Reading","Science","Social Studies","Math","Alegrba"],["Science","Reading","Social Studies","Science","Alegrba"]] //dummy data
//smsHelper.data.sendSMS('17328044377','Hi this is a test')
//scheduleHelper.data.createUser("7328044377",schedule)

app.get('/', function(req,res) {
    res.send('test')
})

app.get('/create/letterday', function(req,res) {
    letterDay = req.query['letterday']
    day = req.query['day']
    if (letterDay == undefined && day == undefined) {
        res.sendStatus(500)
    } else {
        scheduleHelper.data.createLetterDays(letterDay,day)
        console.log('attempting to insert letterday',letterDay,'day',day)
    }
})

app.listen(port) 
console.log('Server listening on port',port)
console.log('Registered numbers currently connected',totalNumbers)