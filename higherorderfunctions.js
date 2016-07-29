var strLength = function(str) {
  return [str, str.length];
}

function printStrLength (strLengthArr) {
  console.log("the phrase " + strLengthArr[0] + "is ")
}
 printStrLength(strLength('hoisting'));
var listItems = [
  [ 1, 'Zarya' ],
  [ 2, 'Mei' ],
  [ 3, 'Mercy' ],
];

function listIt (items) {
  return items[0] + ': ' + items[1];
}

function markdownImage (items) {
  return '![' +items[1]+ '](./' +items[1]+ '/' +items[0]+ '.png)';
}

function allTheThings (items, listItFn) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    // `pair` is an array of two items (e.g. [ 2, 'Mei' ])
    var pair = items[i];

    // `formattedAsList` is the two items, formatted (e.g. '2: Mei')
    var formattedAsList = listItFn(pair);

    // Now we take that result and push it into a final array
    result.push(formattedAsList);
  }

  return result;
}

console.log(allTheThings(listItems, listIt));

function map (array, callbackFn) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var item = callbackFn(array[i]);
    result.push(item);
  }

  return result;
}

var myArray = [10, 20, 30]

function addOne(num);
return num + 1;


map(myArray, myFn)
