const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number, //id for repos
  name: String, //name of repos
  username: String, //URL of repos
  repos_url: String,
  forks_count: Number,
  
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (apiData) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // var filter = apiData.filter(value => {
  // 	return value.id;
  // })
  var repos_url = "";
  //console.log(JSON.parse(apiData), 'TYPE==========')

  var apiData1 = JSON.parse(apiData)
  var filteredArray = {};
  // for (var i = 0; i < apiData.length; i++) {
  // 	filteredArray.push(apiData[i].id, apiData[i].name, apiData[i].full_name)
  // 	//console.log("THINGSSS", apiData[i])
  // }
  apiData1.forEach((value, index) => {
  	filteredArray = {id: value.id, name: value.name, username: value.owner.login, repos_url: value.html_url, forks_count: value.forks_count}
  })
  // console.log("FILTERED DATAAA========", filteredArray)

  Repo.create(filteredArray, (err) =>{
  	if (err) {
  		console.log("error inserting data", err)
  	}
  })

}

let getData = (getData) => {
	Repo.find({}, (err, data) =>{
		if (err) {
			console.log(err)
		} else {
			getData(err, data)
		}
	}).sort( { forks_count: -1 } )
}

module.exports.save = save;
module.exports.getData = getData;