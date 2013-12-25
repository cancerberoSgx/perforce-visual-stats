
var _ = require('underscore'); 

var fs = require('fs'); 
var cp = require('child_process');
//command line related stuff
var exec = require('child_process').exec;

/**
capable of returning javascript object with information about perforce changes / commits, etc comunicating throught the command line
@class PerforceCommander
*/
var PerforceCommander = function() {
}; 

//example perforce command for obtaining all the changes on a folder (all users)
// p4 changes -l -m 1500 //depot/Platform_Solutions/ECommerce/Reference_Implementations/... > ouput.txt

_.extend(PerforceCommander.prototype, {
	/**
	@method getPerforceChanges
	@param username {String}
	@param maxresults {int}
	@param fn {Function} signature: function (error, stdout, stderr)
	@return child proccess object (child_process)
	*/
	getPerforceChanges: function(username, maxresults, file, fn, fnerr){
		var child;
		var command = 'p4 changes -l ' + 
			(maxresults ? (' -m ' + maxresults) : ' -m 100') +
			(username ? (' -u ' + username) : '') + 
			(file ? file : ''); 
		var self = this; 
		child = exec(command, function (error, stdout, stderr){
			if (error !== null) {
				console.log('exec error: ' + error);
				if(fnerr) {
					fnerr(error); 
				}
			}
			else {
				var changes = self.extractPerforceChanges(stdout);
				fn(null, changes); 
			}
		});
		return child; 
	}
	
	/**
	takes a string that is perforce's output and return a well defined Change Object with fields 
	changelist, date, author, message

	@method extractPerforceChanges
	*/
,	extractPerforceChanges: function(str) {
	// console.log(str); 
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
			change.username = match[5]; 
			change.userhost = match[6]; 

			console.log('change: ', change);
			match = regexp.exec(str);
			data.push(change); 
		} 
		return data;
	}
	/**
	@property extractPerforceChangesRegexp {Regexp}
	
	output line example

	Change 562334 on 2013/05/03 by sgurin@sgurin_sgurin-lp_2148

	issue 250547  : SpecRunner.html and many testunit specs fixed for Shopping
	*/
,	extractPerforceChangesRegexp: /Change\s+(\d+)\s+on\s+(\d+)\/(\d+)\/(\d+)(.*)/g
// ,	extractPerforceChangesRegexp: /Change\s+(\d+)\s+on\s+(\d+)\/(\d+)\/(\d+) by ([^@])@([^\s])(.*)/g

}); 

module.exports=PerforceCommander;