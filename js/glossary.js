$(document).ready( function(){
    $("#addButton").click(addWord);
    displayDictionary(getDictionary());
});

function addWord(e) {
  var entry ={};
  entry.word = $("#word").val();
  entry.definition = $("#definition").val();
  var dictionary = getDictionary();
  dictionary.push(entry);
  saveDictionary(dictionary);
  displayDictionary(getDictionary());
  e.preventDefault();
}

function displayDictionary(d){
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
    {word: "delimiter", definition: "A symbol or tag that sets starting and ending boundaries on an element."}
    ];
    return(defaultDictionary);
}
