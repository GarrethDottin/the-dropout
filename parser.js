	var jsonFile = require('jsonfile');
	var results = 'results.json';
	var finalResults = 'educationList.json';

	// Removes people that dont have a school associated 
	function cleanDataSet() { 
		jsonFile.readFile(results, function(err, text) { 
			var modifiedResults = text.filter(function(obj) { return isNaN(obj.school)});
			jsonFile.writeFile(finalResults, modifiedResults, {spaces: 2}, function(err) {
				console.log(err)
			});
		});
	}
