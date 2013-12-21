/**
@class LayoutView
@extend BaseView
*/

define('LayoutView', ['BaseView'], function(BaseView) {	
	// var makeClassExtension(baseClass, function()
	var LayoutView = function(){		
		BaseView.apply(this, arguments); 
	}; 
	LayoutView.prototype = new BaseView();
	_.extend(BaseView.prototype, {
		template: 'Layout'
/*
	,	events: {
			'click a': 'collapseNavBar'
		}
	,	collapseNavBar: function(e) {
			// this.$('.navbar-collapse').toggle(); 
		}
*/
	});

	return LayoutView; 
});