this["jsCodeEditor"] = this["jsCodeEditor"] || {};
this["jsCodeEditor"]["template"] = this["jsCodeEditor"]["template"] || {};

this["jsCodeEditor"]["template"]["About"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Perforce (p4) history visual stats viewer. </h1>\n<p>Author: sgurin</p>';

}
return __p
};

this["jsCodeEditor"]["template"]["Contact"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Contact</p>a ksjdhkaj shdkj ahskdh';

}
return __p
};

this["jsCodeEditor"]["template"]["Layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-template=\'NavBarMain\'>\n</div>\n\n\n<div class="container body">\n\n\n  <div class="starter-template">\n    <h1>Bootstrap starter template</h1>\n    <p dropzone class="lead">Drop here your initial files!</p>\n  </div>\n\n  <div id="mainViewContainer"></div>\n\n<div class="container">\n<div class="row">\n  <div class="col-md-3 ">.col-md-3</div>\n  <div class="col-md-9">.col-md-9</div>\n</div>\n</container>\n\n\n  </section>\n</div>';

}
return __p
};

this["jsCodeEditor"]["template"]["NavBarMain"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">Perforce Visual Stats</a>\n    </div>\n    <div class="collapse navbar-collapse">\n\n\t<ul class="nav navbar-nav">\n\t\t<!-- <li ><a href="#" data-toggle="collapse" data-target=".navbar-collapse">Home</a></li> -->\n\t\t<li><a href="/about" data-toggle="collapse" data-target=".navbar-collapse">About</a></li>\n\t\t<li><a href="/contact" data-toggle="collapse" data-target=".navbar-collapse">Contact</a></li>  \n\t\t<li class="dropdown">\n\t        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>\n\t\t\t<ul class="dropdown-menu">\n\t\t\t\t<li><a href="#">Action</a></li>\n\t\t\t\t<li><a href="#">Another action</a></li>\n\t\t\t\t<li><a href="#">Something else here</a></li>\n\t\t\t\t<li class="divider"></li>\n\t\t\t\t<li><a href="#">Separated link</a></li>\n\t\t\t\t<li class="divider"></li>\n\t\t\t\t<li><a href="#">One more separated link</a></li>\n\t\t\t</ul>\n\t\t\t</li>\n\t</ul>\n    </div>\n  </div>\n</div> \n';

}
return __p
};

this["jsCodeEditor"]["template"]["NavigatorView"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="navigator-view">\n\n  <section id="droparea">\n    <div dropzone class="centerall">\n      <p>drag and drop here your files/folders</p>\n    </div>\n    \n\t\n<div>';

}
return __p
};