$(document).ready( function(){
  displayDictionary();
  $("#addButton").click(addWord);

  $("#clearButton").click(function(){
    localStorage.removeItem('theDictionary');
    $('#wordList').html(" ");
  });
});

function addWord(e) {
  var entry ={};
  entry.word = $("#word").val();
  entry.definition = $("#definition").val();

  var dictionary = getDictionary();
  dictionary.push(entry);
  saveDictionary(dictionary);
  displayDictionary();
  e.preventDefault();
}

function displayDictionary(){
  var d = getDictionary();
  $wordList = $('#wordList');
  $wordList.html(" ");
  $.each(d, function(index, entry){
    $wordList.append("<dt>" + entry.word + "</dt><dd>" + entry.definition + "</dd>");
  });
}

function saveDictionary(d){
  localStorage.setItem("theDictionary", JSON.stringify(d));
}

function getDictionary(){
  if (localStorage.getItem("theDictionary") === null){
    return(initDictionary());
  } else {
    return (JSON.parse(localStorage.getItem("theDictionary")));
  }
}

function initDictionary(){
  var defaultDictionary = [
    {word: "absolute positioning", definition: "The element is positioned relative to its first ancestor that has been positioned (i.e. isn't static)."},
    {word: "delimiter", definition: "A symbol or tag that sets starting and ending boundaries on an element."},
    {word: "event bubbling/event capturing", definition: "."},
    {word: "property", definition: "."},
    {word: "push/pull", definition: "."},
    {word: "remote", definition: "."},
    {word: "repository", definition: "."},
    {word: "rule", definition: "."},
    {word: "selector", definition: "."},
    {word: "semantic markup", definition: "."},
    {word: "type coercion", definition: "JavaScript's conversion of an incorrectly used value to some other type of value that it thinks is better, often done according to rules that only JavaScript knows or understands."},
    {word: "user agent", definition: "."},
    {word: "value", definition: "."}
    ];
    return(defaultDictionary);
}
