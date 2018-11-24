//text.js
//main file for sending out sms to user's daily

var puretext = require('puretext')
const apiToken = 'vs3urj'
var methods = {}

methods.sendSMS = function(number,data) {

    let text = {
        toNumber:number,
        fromNumber:'+15853674951',
        smsBody:data,
        apiToken:apiToken
    }
    puretext.send(text, function(err,response) {
        if (err)
            throw err
        console.log(response)
    })
}

exports.data = methods