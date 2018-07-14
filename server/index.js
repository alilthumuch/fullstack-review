const express = require('express');
var bodyParser = require('body-parser');
var getRepos = require('../helpers/github.js')
var mongoData = require('../database/index.js')
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // saveData.save(getRepos.getReposByUsername(req.body))
  getRepos.getReposByUsername(Object.keys(req.body)[0], (err, data) => {
  	if (err) {
  		console.log(err)
  	} else {
  		mongoData.save(data)
      res.status(201).send()
  	}
  })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // if (err) {
  // 	console.error("ERROR GETTING DATA")
  // } else {
  // 	res.json(req)
  // }
  mongoData.getData((err, data) => {
  	if (err) {
  		console.log("ERROR GETTING DATA app.get")
  	} else {
  		res.json(data)
  	}
  })
  	
});

let port = 1128;

app.listen(1128, function() {
  console.log(`listening on port ${port}`);
});

