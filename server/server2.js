var isDevel = false; 

var express = require('express');
var fs = require('fs'); 
var cp = require('child_process');
//command line related stuff
var exec = require('child_process').exec;

var _ = require('underscore'); 

var app = express();

if(isDevel) {
	var grunt = cp.spawn('grunt', ['--force', 'watch'])
	grunt.stdout.on('data', function(data) {
		console.log("%s", data)
	});
}

/**
capable of returning javascript object with information about perforce changes / commits, etc comunicating throught the command line
@class PerforceCommander
*/
var PerforceCommander = function() {
}; 
_.extend(PerforceCommander.prototype, {
	/**
	@method getUserChanges
	@param username {String}
	@param maxresults {int}
	@param fn {Function} signature: function (error, stdout, stderr)
	@return child proccess object (child_process)
	*/
	getUserChanges: function(username, maxresults, fn, fnerr){
		var child;
		var command = 'p4 changes -l -u ' + username; 
		var self = this; 
		child = exec(command, function (error, stdout, stderr){
			if (error !== null) {
				console.log('exec error: ' + error);
				if(fnerr) {
					fnerr(error); 
				}
			}
			else {
				// console.log('stdout: ' + stdout);
				// console.log('stderr: ' + stderr);
				var changes = self.extractPerforceChanges(stdout);

				fn(null, changes); 
			}
		});
		return child; 
	}
	
	/**
	taks a string that is perforce's output and return a well defined Chage Object with fields 
	changelist, date, author, message
	@method extractPerforceChanges
	*/
,	extractPerforceChanges: function(str) {
		var regexp = this.extractPerforceChangesRegexp;
		var match = regexp.exec(str);
		var data = []; 
		while(match) {
			var change = {}; 
			change.changelist = match[1]; 
			change.date = new Date(
				parseInt(match[2], 10), //year
				parseInt(match[3], 10), //month
				parseInt(match[4], 10), //day
				0, 0, 0, 0); 
			// console.log(match[1m]);
			match = regexp.exec(str);
			data.push(change); 
		} 
		return data;
	}
	/**
	@property extractPerforceChangesRegexp {Regexp}
	*/
,	extractPerforceChangesRegexp: /Change\s+(\d+)\s+on\s+(\d+)\/(\d+)\/(\d+)(.*)/g

}); 

var perforce = new PerforceCommander();
perforce.getUserChanges('sgurin', 20, function(error, changes){
	console.log(changes); 
});


// var myString = "something format_abc";
// var myRegexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
// var match = myRegexp.exec(myString);
// console.log(match[1]);

// var str = "Change 582213 on 2013/06/24 by sgurin@sgurin_sgurin-lp_2148\n\n\t254413 : removed <small> created class .small"+
// "Change 582199 on 2013/06/24 by sgurin@sgurin_sgurin-lp_2148\n\n\t254413  : changed class .facet_browse;"



// var myRegexp = /Change\s+(\d*)\s+on(\d+)\/(\d+)\/(\d+)\s+by\s+([^\s]+).*/g;

		
		



// //first of all authenticate the user - the user cannot enter this page if it si not authenticated. 
// app.use(express.basicAuth(function(user, pass, callback) {
// 	var result = (user === 'sg' && pass === 'test');
// 	callback(null /* error */, result);
// }));

//then we intercept calls to index and render a template because we need to pass user information to the client. 

var clientFolder = __dirname + '/../client/'; 
var indexTemplate = clientFolder + 'index.underscoreTemplate'; 
app.use(function(req, res, next){
	console.log("req.url: "+req.url)
	if(req.url==='' || req.url==='/' || req.url==='/index.html'|| req.url==='index.html'
		|| req.url==='/contact'|| req.url==='/about') {
		var context = buildTemplateContext(req, res); 		
		renderTemplate(indexTemplate, context, function(output){
			res.send(output); 
		});
	}
	else {
		next();
	}
}); 


function renderTemplate(templFilePath, context, fn) {	
	fs.readFile(templFilePath, 'utf8', function (err,data) {
		if (err) {
			throw err;
		}
		else {
			var templ = _.template(data); 
			var output = templ(context); 
			fn(output); 
		}
	});
}

function buildTemplateContext(req, res) {	
	var context = {isDevel: isDevel}; 
	if(isDevel) {
		context.user = {username: req.auth.username, password: req.auth.password};
	}
	else {
		context.user = {username: 'some user', password: 'some secret'};
	}
	return context;
}

//last we serve all static files
app.use('/', express.static(clientFolder));

module.exports = app;

app.listen(process.env.PORT || 3000);
