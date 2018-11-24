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


methods.getLetterDay = function(callback){
    
    var date = moment().format('Do')
    var newDate = date.slice(0,-2)
    console.log('Current Day',newDate)
    LetterDay.find({day:newDate}, function(err, result) {
        if (err)
            throw err

        return callback(result)
    })
}

methods.getUserSchedule = function(userPhoneNumber,Letterday) {
    User.find({phoneNumber:userPhoneNumber}, function(err,results) {
        if (err)
            throw err
        var newLetterDay = Letterday + "Day"
        console.log(results[0][newLetterDay])
        return results[newLetterDay]
    })
}

methods.createLetterDays = function() {
    var newDay = LetterDay({ letterday:'F', day:23})
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

methods.removeUserfromDB = function(user) {

}

exports.data = methods