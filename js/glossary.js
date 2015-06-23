$(document).ready( function(){

  //Apigee programming
  function saveData(){

//Initialize our client
  var client = new Usergrid.Client({
      orgName:"mentalslapstick",
      appName:"sandbox"
  });

  var options = {
      type:"entry",
      word:"",
      definition:""
  };

  //Create our entity, display the results in HTML with ID of response

  client.createEntity(options, function(error, entry){
    if(error) {
        //error saving book
        $("#wordList").append("There was an error!");
    } else {
        //entry saved successfully
        //Use entry.get() here to get the properties from the object we just created!
        var uuid =
        var author =
        var title =
        $("#wordList").append("Book saved! Its uuid on our server is: "+uuid+"<br/>");
        $("#wordList").append(word + "<br/>");
        $("#wordList").append(definition);

    }
});


  //Start of original programming
//   displayDictionary();
//   $("#addButton").click(addWord);
//
//   $("#clearButton").click(function(){
//     localStorage.removeItem('theDictionary');
//     $('#wordList').html(" ");
//   });
// });
//
// function addWord(e) {
//   var entry ={};
//   entry.word = $("#word").val();
//   entry.definition = $("#definition").val();
//
//   var dictionary = getDictionary();
//   dictionary.push(entry);
//   saveDictionary(dictionary);
//   displayDictionary();
//   e.preventDefault();
// }
//
// function displayDictionary(){
//   var d = getDictionary();
//   $wordList = $('#wordList');
//   $wordList.html(" ");
//   $.each(d, function(index, entry){
//     $wordList.append("<dt>" + entry.word + "</dt><dd>" + entry.definition + "</dd>");
//   });
// }
//
// function saveDictionary(d){
//   localStorage.setItem("theDictionary", JSON.stringify(d));
// }
//
// function getDictionary(){
//   if (localStorage.getItem("theDictionary") === null){
//     return(initDictionary());
//   } else {
//     return (JSON.parse(localStorage.getItem("theDictionary")));
//   }
// }
//
// function initDictionary(){
//   var defaultDictionary = [
//     {word: "absolute positioning", definition: "The element is positioned relative to its first ancestor that has been positioned (i.e. isn't static)."},
//     {word: "delimiter", definition: "A symbol or tag that sets starting and ending boundaries on an element."},
//     {word: "event bubbling/event capturing", definition: "."},
//     {word: "property", definition: "."},
//     {word: "push/pull", definition: "."},
//     {word: "remote", definition: "."},
//     {word: "repository", definition: "."},
//     {word: "rule", definition: "."},
//     {word: "selector", definition: "."},
//     {word: "semantic markup", definition: "."},
//     {word: "type coercion", definition: "JavaScript's conversion of an incorrectly used value to some other type of value that it thinks is better, often done according to rules that only JavaScript knows or understands."},
//     {word: "user agent", definition: "."},
//     {word: "value", definition: "."}
//     ];
//     return(defaultDictionary);
// }
