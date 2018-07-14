const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  var userURL = "https://api.github.com/users/" + username +"/repos"
  console.log("USERURLLLL============", userURL)
  let options = {
    url: userURL,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, function(err,httpResponse,body){
    if(err) {
      return console.err("http request error")
    }
    cb(null, body)
  })

  
}

module.exports.getReposByUsername = getReposByUsername;