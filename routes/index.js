/*
 * GET home page.
 */
var labs = require('../labs.json');

exports.view = function(req, res){
  if(labs.length < 9) {
	labs.push({
		"id": "lab-9",
		"title": "Debugging 101",
		"date": "March 7",
		"image": "debug.png"
	});
  }
  
	res.render('index', {
	'labs': labs
  });
};


// exports.addFriend = function(request, response) {   
// 	// Your code goes here

// 	data.friends.push({
// 		"name": request.query.name, 
// 		"image": "friendo1.png",
// 		"id": "new friend"
// 	});
// 	console.log(data.friends);
// 	response.render("friends", data);
// }
