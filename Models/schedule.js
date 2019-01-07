//schedule.js 
//helper file for download letter day, returning data, and getting users schedules 
var request = require('request')
var mongoose =  require('mongoose')
var cron = require('node-schedule')
var moment = require('moment')
var texthelper = require("./text.js")
var url = "mongodb://127.0.0.1:27017/scheduleBot"
var methods = {}
var Schema = mongoose.Schema

var letterDay = new Schema({
    letterday:String,
    day:Number
})

var user = new Schema({
    phoneNumber:String,
    ADay:[],
    BDay:[],
    CDay:[],
    DDay:[],
    EDay:[],
    FDay:[],
    GDay:[]
})

var LetterDay = mongoose.model('LetterDay', letterDay)
var User = mongoose.model('Users',user)

var userSchedule = new Schema()

mongoose.connect(url, { useNewUrlParser:true })

methods.updateSchedule = function() {
     
    var event = cron.scheduleJob({hour:5, minute:30, dayOfWeek:[1,2,3,4,5]}, function() { //send sms to every avaliable client 
        //first update letterday
        var letterDay = ""
        methods.getLetterDay(function(result) {
            console.log(result)
            letterDay = result
        })
        console.log(letterDay)
        console.log('sending sms to clients')
        var userSchedule = methods.getUserSchedule('7328044377',letterDay)
        texthelper.data.sendSMS(userSchedule)
    })
}

methods.getLetterDay = function(callback){
    
    var date = moment().format('Do')
    var newDate = date.slice(0,-2)
    console.log('Current Day',newDate)
    LetterDay.find({day:7}, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            callback(result)
        }
    })
}

methods.getUserSchedule = function(userPhoneNumber,Letterday) {
    User.find({phoneNumber:userPhoneNumber}, function(err,results) {
        if (err)
            console.log(err)
        var newLetterDay = Letterday + "Day"
        console.log(results[0][newLetterDay])
        return results[newLetterDay]
    })
}

methods.createLetterDays = function(letterday, day) {
    var newDay = LetterDay({ letterday:letterday, day:day})
    newDay.save(function(err){
        if(err) 
            throw err
        console.log('created letterday')    
    })
}

methods.createUser = function(phoneNumber, schedule) {
    var newUser = User({phoneNumber:phoneNumber, ADay:schedule[0],BDay:schedule[1],CDay:schedule[2],DDay:schedule[3],EDay:schedule[4],FDay:schedule[5],GDay:schedule[6]})
    console.log(newUser)
    newUser.save(function(err) {
        if (err)
            throw err

        console.log('created user')
    })
}

exports.data = methods