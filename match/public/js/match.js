/* match.js
 * Danilo Zekovic
 * created 3/17/2015
 * contains the logic for page 1, that will represent the match problems
 */

match_form = function( jqueryMap, visited ) {
  console.log("match_form" + visited);
  
  var data = MATCH; // set data to JSON data

  // if the page was visited just show it again
  // else create the content of the page
  if (visited){
    jqueryMap.$main.show();
  }else{
    // display all the statments(questions) as paragraph from the data 
    for (var i = 0; i < data.length; ++i){
      // created the row to place the bootstrap collumns into it
      jqueryMap.$main.append('<div class="row"></div>');
    
      // bootstrap collumns
      // xs for phone size will have one collumn
      // md medium desktop and grater will have two 
      $('.row:last').append('<div class="col-xs-12 col-md-6"></div>');  // append it to row div
      $('.col-md-6:last').append('<label></label>'); //append it to collumn
      var question = data[i].text;
      $("label:last").html( question );

      // create and add answears
      $('.row:last').append('<div class="col-xs-12 col-md-6"></div>');
      $('.col-md-6:last').append(
        '<div class="form-group">'
          + '<label for="sel1">Select your answear:</label>'
	  + '<select class="form-control" id="sel1">'
	    + '<option></option>'
	  + '</select>'
        + '</div>'
      );

      for (var j = 0; j < data.length; ++j) {
        $('select:last').append('<option></option>');
        var answear = data[j].value;
        $('option:last').html(answear);
      } 
      //var answear = data[i].value;
      //$('p:last').html( answear );
    }
  } // end if
} // end match_form
