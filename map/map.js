var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]


function map(arr, anonymousFunction){
  newWords = [];
  arr.forEach(function(word) {
    currentFunction = anonymousFunction(word)
    newWords.push(currentFunction);
  });
  console.log(newWords)
}

/*___________________________________________________________

const words = ["ground", "control", "to", "major", "tom"];

function map(words, method) {
  const result = [];
  words.forEach(function(word) {
    result.push(method(word));
  });
  console.log(result);
}

function length(word) {
  return word.length;
}

function capitalize(word) {
  return word.toUpperCase();
}

function reverse(word) {
  return word.split('').reverse().join('');
}

map(words, capitalize);
--------------------------------------------------------------*/

//Yours will take in two arguments.
//The first will be an array to map
//and the second will be a callback function.
//The function will return a new array
//based on the results of the callback function.

