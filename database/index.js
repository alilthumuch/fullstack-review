const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number, //id for repos
  name: String, //name of repos
  repos_url: String, //URL of repos
  username: String, 
  
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (apiData) => {
	console.log('API DATAAAA', apiData)
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var filter = apiData.filter(value => {
  	return value.id;
  })

  var filteredArray = [];
  filter.forEach((value, index) => {
  	filteredArray.push(value.id, value.name, value.owner.login, value.owner.repos_url)
  })

  Repo.insertMany(filteredData, (err) =>{
  	if (err) {
  		console.log("error inserting data", err)
  	}
  })

}

module.exports.save = save;