//schedule.js 
//helper file for download letter day, returning data, and getting users schedules 
var request = require('request')
var mongoose =  require('mongoose')
var moment = require('moment')
var url = "mongodb://127.0.0.1:27017/scheduleBot"
var methods = {}
var Schema = mongoose.Schema

var letterDay = new Schema({
    letterDay:String,
    day:Number
})

var userSchedule = new Schema()

mongoose.connect(url)


methods.getLetterDay = function(){
    
    var date = moment().format('Do')
    var newDate = date.slice(0,-2)
    console.log('Current Day',newDate)
    letterDay.find({day:newDate}, function(err, result) {
        if (err)
            throw err

        console.log(result)
    })
}

methods.getUserSchedule = function() {

}

methods.removeUserfromDB = function(user) {

}

exports.data = methods