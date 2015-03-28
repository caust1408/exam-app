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
    jqueryMap.$match.show();
  }else{
    jqueryMap.$match.show();
    // display all the statments(questions) as paragraph from the data 
    for (var i = 0; i < data.length; ++i){
      // created the row to place the bootstrap collumns into it
      jqueryMap.$match.append('<div class="row"></div>');
    
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
      // to keep track of elements already selected
      var selected = [];
      for (var k = 0; k < data.length; ++k) {
        selected[k] = false;
      }
      // loop until all the elements have been added to the list 
      while (isAllSelected(selected)){
	// get the random number between 0 and the number of elements
	var num = Math.floor((Math.random() * data.length));
	// check if the number has been selected befor if not than add it
        if(selected[num] != true){
	  $('select:last').append('<option></option>');
	  var answer = data[num].value;
	  $('option:last').html(answer);
	  selected[num] = true;
	}
	console.log(num + " random num");
      }
/*
      for (var j = 0; j < data.length; ++j) {
        $('select:last').append('<option></option>');
        var answear = data[j].value;
        $('option:last').html(answear);
      } */
    } // end for
  } // end if
} // end match_form

// to check are have all the elements already been selected
var isAllSelected = function(selected) {
  for (var i = 0; i < selected.length; ++i){
    if (selected[i]){
      continue;
    }else{
      return true;
    }
  }
  return false;
}
