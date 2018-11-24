'use strict';

const request = require('request-promise');

module.exports = {

  send: function (params, callback) {

    const options = {
      method: 'POST',
      uri: 'https://www.puretext.us/service/sms/send',
      body: params,
      json: true
    };

    request(options)
      .then(function (response) {
        return callback(null, response);
      })
      .catch(function (err) {
        return callback(err && err.error ? err.error : {}, null)
      })

  }

};
