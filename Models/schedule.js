//schedule.js 
//helper file for download letter day, returning data, and getting users schedules 
var request = require('request')
var mongoClient =  require('mongodb').MongoClient
var moment = require('moment')
var url = "mongodb://127.0.0.1:27017/scheduleBot"
var methods = {}

mongoClient.connect(url, function(err,db) {
    if (err)
        throw err
    var dbo = db.db('scheduleBot')
    dbo.createCollection("letterDays", function(err,res) {
        if (err)
            throw err
        console.log('Collection Created')
    })
    dbo.createCollection('users', function(err,res) {
        if (err)
            throw err
        console.log("Collection Created")
        db.close();
    })
})

methods.getLetterDay = function(){
    mongoClient.connect(url, function(err,db) {
        if (err)
            throw err
        var dbo = db.db('scheduleBot')
        var date = moment().format('Do')
        date.slice(-2)
        console.log('Current Day',date)
        dbo.collection('letterDays').findOne({ day:date }, function(err, result) {
            if (err)
                throw err
            console.log('Letter day recived',result)
            return result
        })
    })
}

methods.getUserSchedule = function() {

}

methods.removeUserfromDB = function(user) {

}

exports.data = methods