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
	      + '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'
	        + '<span class="sr-only">Toggle navigation</span>'
	        + '<span class="icon-bar"></span>'
	        + '<span class="icon-bar"></span>'
	        + '<span class="icon-bar"></span>'
	        + '<span class="icon-bar"></span>'
	      + '</button>'
	      + '<a class="navbar-brand" href="#">ExameApp</a>'
	    + '</div>'
	    + '<div id="navbar" class="navbar-collapse collapse" aria-expanded="false" styleheight: 1px;">'
	      + '<ul class="nav navbar-nav">'
	        + '<li class="active"><a href="#">Home</a></li>'
	        + '<li class="matchbtn" aria-expanded="true"><a href="#/match">Page 1</a></li>'
	        + '<li><a href="#/page2">Page 2</a></li>'
	        + '<li><a href="#/page3">Page 3</a></li>'
	      + '</ul>'
	    + '</div>'
	  + '</div>'
	+ '</nav>'
	+ '<div class="container">'
	  //+ '<div class="row">'
	   // + '<div class="col-sm-6" style="background-color:lavender;">'
	   // + '</div>'
	   // + '<div class="col-sm-6" style="background-color:lavender;">'
	   // + '</div>'
	 // + '</div>'
	+ '</div>'
    },
    stateMap = { $container : null },
    jqueryMap = {},
    // to keep track of visited pages
    visited = {
      home  : false,
      match : false,
      page2 : false,
      page3 : false
    },
    onTapList,
    setJqueryMap, initModule;
  //------------------END MODULE SCOPE VAR----------------

  //------------------BEGIN UTILITY METHODS---------------
  //------------------END UTILITY METHODS-----------------

  //------------------BEGIN DOM METHODS-------------------

  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container     : $container,
      $menu	 : $container.find('.cem-shell-list-menu'),
      $mbt     : $container.find('.matchbtn'),
      $main    : $container.find('.container')
    }
  };  // end setJqueryMap

  //------------------END DOM METHODS---------------------
  
  //------------------BEGIN EVENT HANDLERS----------------
  
  // switch to page1
  pageOne = function( event ) {
    console.log("Match clicked");
    console.log(document.location.hash);
    //jqueryMap.$main.append('<p class="proba">Danilo Zekovic</p>');
    jqueryMap.$main.append(match_form( jqueryMap, visited.match ));
    visited.match = true; // when page visited change it to true
  }

  onTapList = function ( event ) {
    // React to taps on menu in nav div
    var menu_item  = $(this).data("id");
    console.log('Tapped on ' + menu_item);
    console.log("click");
    switch(menu_item) {

      case 'match':
        console.log("match clicked");
	break;
      case 'page1': 
	console.log("page1");
	break;
    }
        return false;
  };
  //------------------END EVENT HANDLERS------------------
  
  //------------------BEGIN PUBLIC METHODS----------------
  
  initModule = function ( $container ) {
    stateMap.$container = $container;
    $container.html( configMap.main_html );
    setJqueryMap();
    
    jqueryMap.$menu.bind( 'click', onTapList   ); 
    jqueryMap.$mbt.click(pageOne);
  };
  

  return { initModule : initModule };
  //------------------END PUBLIC METHODS------------------

}());
