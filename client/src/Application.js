define('Application', ['FolderDDManager', 'LayoutView', 'MainRouter', 'html-templates', 'backbone', 'bootstrap'], 
	function(FolderDDManager, LayoutView, MainRouter) {

	/**
	@class Application
	*/
	var Application=function(){
	}; 

	var proto = Application.prototype;
	/**
	@method start
	*/
	proto.start = function(handler) {
		/** the template function global dictionary
		@property template {Object string->function}
		*/
		this.template = jsCodeEditor.template;
		/** the application layout view
		@property layout {LayoutView}
		*/
		this.layout = new LayoutView({application: this});
		this.layout.render(document.body);

		/**
		@property folderDDManager {FolderDDManager}
		*/
		this.folderDDManager = new FolderDDManager();


		this.mainRouter = new MainRouter();
		this.mainRouter.application=this;
		Backbone.history.start({pushState: true}); 

		//at last we notify
		if(handler){
			handler.apply(this, arguments); 
		}
	}; 
	return Application;
});
