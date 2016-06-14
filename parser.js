var jsonFile = require('jsonfile');
var results = 'results2.json';
var finalResults = 'modifiedResults.json';

jsonFile.readFile(results, function(err, text) { 
	var modifiedResults =text.filter(function(obj) { return isNaN(obj.school)});
	jsonFile.writeFile(finalResults, modifiedResults, {spaces: 2}, function(err) {
		console.log(err)
	});
});
