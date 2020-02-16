
// challenge:
// create a function that takes two arguments, a string and number
// function should return a single string that contain the original string, 
// repeated the number of times specified by the second argument
// or an emmpty string if the number is negative

function repeatString(str, num) {
    var newString = "";
    if (num <= 0) {
        return newString;
}
    for (var i = 1; i <= num; i++) {
      newString += str;
    }

    return newString;
     
   }
   
   console.log(repeatString('car', 4))
   console.log(repeatString('bar', 3))