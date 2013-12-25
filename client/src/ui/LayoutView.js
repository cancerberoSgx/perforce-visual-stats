/**
@class LayoutView
@extend BaseView
*/

define('LayoutView', ['BaseView'], function(BaseView) {	
	var LayoutView = function(){		
		BaseView.apply(this, arguments); 
	}; 
	LayoutView.prototype = new BaseView();
	_.extend(LayoutView.prototype, {
		template: 'Layout'
	});

	return LayoutView; 
});