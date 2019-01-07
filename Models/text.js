//text.js
//main file for sending out sms to user's daily

var puretext = require('puretext')
const apiToken = 'y0g514'
var methods = {}

methods.sendSMS = function(number,data) {
    let text = {
        toNumber:number,
        fromNumber:'+14147753216',
        smsBody:data,
        apiToken:apiToken
    }
    puretext.send(text, function(err,response) {
        if (err)
            throw err
        console.log(response["error"])
    })
}

exports.data = methods