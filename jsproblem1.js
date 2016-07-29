// Solution 1. O(1)
function sum(num1, num2){
  return num1 + num2;
}
sum(1,5);

// Solution 2. O(1)
function isEqual(arg1, arg2){
  if (arg1 === arg2) {
    return true;
  } else {
    return false;
  }
};
isEqual(8, 8)

// Solution 3. O(1)
function discountPercentage(cost, discount) {
 if(discount > 0 && discount < 100) {
   return cost * (discount / 100);
 }  else {
   return "warning";
 }
}
discountPercentage(50, 60);

// Solution 4. O(n)
function stringCapitalize(someString) {
  var arrayCaps = [];
  var arrayOfString = someString.split(" ");
  for (i=0; i<arrayOfString.length; i++){
    arrayCaps.push(arrayOfString[i].charAt(0).toUpperCase() + arrayOfString[i].slice(1))
  }
  return arrayCaps.join(" ");
};
console.log(stringCapitalize("capitalize this string"));

// Solution 5.  O(n)
function evenNumbers(number) {
  if(number < 0 || number > 100) {
  return "Please choose a number between 0 and 100";
} else {
  for(var i = 0; i <= number; i+=2) {
    if(i%2 === 0);
    console.log(i)
   }
  }
};
console.log(evenNumbers(8))

// Solution 6. O(1)
function isDivisible(arg1, arg2){
  if(arg1 / arg2) {
    return true;
  } else {
    return false;
  }
};
console.log(isDivisible())

Solution 7. O(1)
function oddNumbers(num){
  if(!Number.isInteger(num)){
    return false;
  } else if (num > 100 || num < 0) {
    return false;
  }
    return true;
  }
function outputOdd(num) {
    var result = [];
      if (num < 40) {
        for (var i = 1; i < 40; i+=2) {
          result.push(i);
        }
      } else {
        for (var j = 1; j < 40; j+=2) {
          result.push(j);
    }
      return result;
    }
}
console.log(oddNumbers(2))
console.log(oddNumbers(10))
console.log(oddNumbers(30))
console.log(oddNumbers(55))
