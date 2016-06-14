var server= require('x-ray');
var xRay = server(); 
var url = 'http://www.forbes.com/profile/bill-gates/?list=rtb';
var urlSecondPiece = 'http://www.forbes.com/profile/micky-arison/?list=billionaires'; 
var urlThirdPiece = 'http://www.forbes.com/profile/takemitsu-takizaki/?list=billionaires'; 
var jsonfile = require('jsonfile');
var file = 'general.json';
var techFile = 'tech.json'; 
var techUrl = 'http://www.forbes.com/profile/bill-gates/?list=richest-in-tech';

	
	function getFirstDataSet () {
		xRay(urlSecondPiece,'.data.has_image dl:last-child dd ') (function (err, text) { 

			var modifiedResults = text.filter(function(val) {return isNaN(val)});
			var storedResults = {education: modifiedResults};
			jsonfile.writeFile(techFile, storedResults, {spaces: 2}, function(err) {
				console.log(err)
			});

		})
		.paginate('.next-link a @href')
		.limit(399);
	};


	function getSecondDataSet () {
		xRay(urlThirdPiece,'.data.has_image', [{
			title: '.name h1', 
			school: '.data.has_image dl:last-child dd'
		}])
		.paginate('.next-link a @href')
		.limit(399)
		.write('results2.json');
	}; 

	getSecondDataSet();
	getFirstDataSet(); 


