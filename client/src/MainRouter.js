define('MainRouter', ['BaseView', 'backbone'], function(BaseView) {

	/**
	@class MainRouter
	@extends Backbone.Router
	*/
	var MainRouter=Backbone.Router.extend({

		routes: {
			"about": "about"
		,	"contact": "contact"
		}

	,	about: function() {
			this.doRenderTemplate('About'); 
		}
	,	contact: function(){
			this.doRenderTemplate('Contact'); 
		}
		//TODO: cache views
	,	doRenderTemplate: function(template) {
			var view = new BaseView({
				template: template
			,	application: this.application
			}); 
			view.render('#mainViewContainer'); 
		}
	});
	return MainRouter;
});
