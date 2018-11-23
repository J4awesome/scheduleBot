//schedule.js 
//helper file for download letter day, returning data, and getting users schedules 
var request = require('request')
var mongoose =  require('mongoose')
var moment = require('moment')
var url = "mongodb://127.0.0.1:27017/scheduleBot"
var methods = {}
var Schema = mongoose.Schema

var letterDay = new Schema({
    letterday:String,
    day:Number
})

var LetterDay = mongoose.model('LetterDay', letterDay)

var userSchedule = new Schema()

mongoose.connect(url)


methods.getLetterDay = function(){
    
    var date = moment().format('Do')
    var newDate = date.slice(0,-2)
    console.log(' Current Day',newDate)
    LetterDay.find({day:newDate}, function(err, result) {
        if (err)
            throw err

        console.log('results',result)
    })
}

methods.getUserSchedule = function() {

}

methods.createLetterDays = function() {
    var newDay = LetterDay({letterDay:'f',day:27})
    newDay.save(function(err){
        if(err) 
            throw err
        console.log('created letterday')    
    })
}

methods.removeUserfromDB = function(user) {

}

exports.data = methods
