var server= require('x-ray');
var xRay = server(); 
var url = 'http://www.forbes.com/profile/bill-gates/?list=rtb'; 
var jsonfile = require('jsonfile');
var file = 'general.json';
var techFile = 'tech.json'; 
var techUrl = 'http://www.forbes.com/profile/bill-gates/?list=richest-in-tech';



	xRay(techUrl,'.data.has_image dl:last-child dd ') (function (err, text) { 
		var modifiedResults = text.filter(function(val) {return isNaN(val)});
		var storedResults = {education: modifiedResults};
		jsonfile.writeFile(techFile, storedResults, {spaces: 2}, function(err) {
			console.log(err)
		});

	})
	.paginate('.next-link a @href')
	.limit(100)

