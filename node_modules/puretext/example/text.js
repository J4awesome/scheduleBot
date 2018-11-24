var puretext = require('../');

var text = {
  // From number is the number you will buy from your admin dashboard
  fromNumber: '+1XXXXXXXXXX',
  // To Number is the number you will be sending the text to
  toNumber: '+1XXXXXXXXXX',
  // Text Content
  smsBody: 'Sending SMS using Node.js',
  //Sign up for an account to get an API Token
  apiToken: 'XXXX'
};

puretext.send(text, function (err, response) {
    console.log(err,response);
    console.log(response)
})
