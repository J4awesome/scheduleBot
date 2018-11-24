## Synopsis

So you have learned Node.js and you want to do something out of the ordinary by allowing your app to communicate with users real time. You could build an app for an event promoter that sends texts every Friday/Saturday evening promoting an event and even handle text responses or you could just build an app that texts every friend of yours once a week to stay in touch.

To send a text programmatically your code needs to make an XHR request to an SMS gateway that will read the text details from your request and then initiate a text to the recipient’s phone number

[PureText](http://crm.puretext.us/) offers a Texting/SMS gateway to which you can make an HTTP GET/POST request with details such as recipient number and body of the text and [PureText](http://crrm.puretext.us/) will deliver the text to the recipient for you.

In order to identify that this request belongs to you, you’ll need to include your API token in the HTTP GET/POST request. Register for a free API token [here](https://www.puretext.us/auth/google)

A thing to note is that you cannot just use any phone number as the ‘From’ number. The rule of thumb is the number must be registered through the same company who’s SMS gateway you choose to use.

To send a text message using Node.js you don’t need a dedicated short code. Dedicated short codes are expensive and take 2-3 months to get approved, instead, you can now use local 10 digit VOIP numbers or also referred to as long codes to send a  text/SMS programmatically from your Node.js app

So let’s get started, to do a quick and dirty POC you’ll need:

1.  An API token key (Get an API token [here](https://app.puretext.us/plans))
2.  A ‘From’ number through your SMS gateway (Get a from number [here](https://crm.puretext.us/admin/numbers))

Copy Paste the following code in your IDE and replace the API Token and From Number values from the ones in your dashboar

## Code Example

```javascript

var puretext = require('puretext');

var text = {
  fromNumber: '+1XXXXXXXXXX', // From number is the number you will buy from your admin dashboard
  toNumber: '+1XXXXXXXXXX', // To Number is the number you will be sending the text to
  smsBody: 'Sending SMS using Node.js', // Text Content
  apiToken: 'XXXXXX' //Sign up for an account to get an API Token
};

puretext.send(text, function (err, response) {
  if (err) {
    console.log('there was an error',err)
  }
  else {
    console.log('there was no error',response)
  }
})

```

## Motivation

Even though PureText uses a simple get request. Many users are using different modules to achieve an HTTP get like 'request' or 'superagent' or even native node.js http.request module. This provides a standard

## Installation

```
npm install puretext --save
```

## License

MIT
