/* 
 * spa.shell.js
 */

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
 */

  spa.shell = (function () {
  //------------------BEGIN MODULE SCOPE VAR--------------
  
  var
    configMap = {
      main_html : String()
	+ '<nav class="navbar navbar-inverse navbar-fixed-top">'
	  + '<div class="container-fluid">'
	    + '<div class="navbar-header">'
	      + '<a class="navbar-brand" href="#">ExameApp</a>'
	    + '</div>'
	    + '<div>'
	      + '<ul class="nav navbar-nav">'
	        + '<li class="active"><a href="#">Home</a></li>'
	        + '<li><a href="#">Page 1</a></li>'
	        + '<li><a href="#">Page 2</a></li>'
	        + '<li><a href="#">Page 3</a></li>'
	      + '</ul>'
	    + '</div>'
	  + '</div>'
	+ '</nav>'
    },
    stateMap = { $container : null },
    jqueryMap = {},
    setJqueryMap, initModule;
  //------------------END MODULE SCOPE VAR----------------

  //------------------BEGIN UTILITY METHODS---------------
  //------------------END UTILITY METHODS-----------------

  //------------------BEGIN DOM METHODS-------------------

  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container     : $container 
    }
  };  // end setJqueryMap

  //------------------END DOM METHODS---------------------
  
  //------------------BEGIN EVENT HANDLERS----------------
  //------------------END EVENT HANDLERS------------------
  
  //------------------BEGIN PUBLIC METHODS----------------
  
  initModule = function ( $container ) {
    stateMap.$container = $container;
    $container.html( configMap.main_html );
    setJqueryMap();
  };
  

  return { initModule : initModule };
  //------------------END PUBLIC METHODS------------------

}());
