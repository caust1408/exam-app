/* match.js
 * Danilo Zekovic
 * created 3/17/2015
 * contains the logic for page 1, that will represent the match problems
 */

match_form = function( jqueryMap ) {
  console.log("match_form");
 
  var data = MATCH; // set data to JSON data
  //var elements = JSON.parse(data);
  jqueryMap.$main.empty();    // clear the content of the $main container
  console.log(data[2].text);

  // display all the statments(questions) as paragraph from the data 
  for (var i = 0; i < data.length; ++i){
    jqueryMap.$main.append('<div class="row"></div>');
    $('.row:last').append('<div class="col-sm-6"></div>');
    $('.col-sm-6:last').append("<p></p>");
    var question = data[i].text;
    $("p:last").html( question );

    // create and add answears
    $('.row:last').append('<div class="col-sm-6"></div>');
    $('.col-sm-6:last').append("<p></p>");
    var answear = data[i].value;
    $('p:last').html( answear );
  }

}
