const express = require('express');
var bodyParser = require('body-parser');
var getRepos = require('../helpers/github.js')
var saveData = require('../database/index.js')
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(Object.keys(req.body)[0])
  // saveData.save(getRepos.getReposByUsername(req.body))
  getRepos.getReposByUsername(Object.keys(req.body)[0], (err, data) => {
  	if (err) {
  		console.log('ERROR getting repos from github')
  	} else {
  		console.log("GITHUB DATA========",data)
  		saveData.save(data)
  	}
  })

});

app.get('/repos', function (req, res) {
	console.log ("AYY SERVER GET")
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(1128, function() {
  console.log(`listening on port ${port}`);
});

