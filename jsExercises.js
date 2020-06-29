/*1. Write a function that takes in a string and counts 
the occurance of the elements in the string and 
returns an object with the frequency count*/
function letterCount(string) {

    var myArray = string.toLowerCase().split('');

    var frequency = {};

    for (var i = 0; i < myArray.length; i++) {
        frequency[myArray[i]] = (frequency[myArray[i]] || 0) + 1;
    };

    return frequency;
}
//or

function letterCount2(string) {
    var myArray = string.toLowerCase().split('');

    var frequency = {};

    for (i = 0; i < myArray.length; i++) {

        var element = myArray[i];
        if (frequency[element] == frequency[element]) {
            frequency[element]++;
        } else frequency[element] = 1;
    };

    return frequency;
}

//or reduce method

function countLetters(string) {

    let myArray = string.toLowerCase().split('');
    let count = myArray.reduce((acc, character) => {
        acc[character] = (acc[character] || 0) + 1;
        return acc;
    }, {});
    console.log(count);
}

//or 

function countLetters(str) {
    let array = str.toLowerCase().split('');
    let obj = {
        spaces: 0,
        newLines: 0
    };

    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        obj[el] ? obj[el]++ : obj[el] = 1;
    };

    return obj;
}

/*2. Write a function that takes in three parameters and 
returns the sum of those three parameters*/

function sum(a, b, c) {
    var sum = a + b + c;
    return sum;
}

/*3.create a function that takes in a string and prints 
out a greeting. e.g. Charles --> "Hi, Charles!"*/

function greeting(string) {
    var name = console.log("Hi " + string ",");
    return name;
}

/*4.Write a function that takes in a number and returns 
the negative of that number. 5 ---> -5*/

function negativeNumber(number) {
    var negative = number * (-1);
    return negative;
}

/*5.Write a JavaScript program to find the sum of squares 
of a numeric vector.*/

function sumOfSquares(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += Math.pow(array[i], 2);
    };
    return sum;

}

/*6. Write a JavaScript program to display the current day 
and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/

var today = new Date();
var day = today.getDay();
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: " + dayOfWeek[day]);
var hour = today.getHours();
var amPm = (hour >= 12) ? "PM" : "AM";
hour = (hour <= 12) ? hour : (hour - 12);
var minutes = today.getMinutes();
minutes = (minutes < 10) ? ("0" + minutes) : minutes;
var seconds = today.getSeconds();
seconds = (seconds < 10) ? ("0" + seconds) : seconds;
console.log("Current time is: " + hour + " " + amPm + " : " + minutes + " : " + seconds);

/*7. Write a JavaScript program to compute the sum and 
product of an array of integers.*/

function sumAndProductOfArray(array) {
    let sum = 0;
    let product = 1;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
        product *= array[i];
    };

    return {
        sum: sum,
        product: product
    };
}
//or
/*function sumAndProductOfArray(array){
	let sum = array.reduce(function(total,item){
	return total + item;
});*/


function sumAndProductOfArray(array) {
    let sum = array.reduce((total, item) => total + item);
    let product = array.reduce((total, item) => total * item);
    return {
        sum: sum,
        product: product
    };
}

/*8. Write a function that returns the sum of the elements 
from an array that can be divided by 5; 
if an array is empty - it will return 0*/

function sumOfElementsDividedBy5(array) {
    let sum = 0;
    if (array.length == 0) {
        console.log("0");
    } else {
        for (let i = 0; i < array.length; i++) {
            (array[i] % 5 == 0) ? sum += array[i]: sum += 0;
        }
    };
    return sum;
}

//or

function sumOfElementsDividedBy5(array) {
    if (array.length == 0) console.log("0");
    else {
        var sum = array.filter(function(number) {
            return (number % 5 === 0)
        }).reduce(function(accumulator, value) {
            return accumulator + value;
        }, 0);
    }
    console.log(sum);
}

/*9. Replace some letters in "javascript is awesome" 
with symbols: 4 for	A, 3 for E, 1 for I, and 0 for o;
Otherwise, just add	the	original letter	to the new string.*/

var normalLetters = "javascript is awasome";
var changedLetters = "";

for (var i = 0; i < normalLetters.length; i++) {

    if (normalLetters[i] == "a") { changedLetters += "4"; } else if (normalLetters[i] == "e") { changedLetters += "3"; } else if (normalLetters[i] == "o") { changedLetters += "0"; } else if (normalLetters[i] == "i") { changedLetters += "1"; } else { changedLetters += normalLetters[i]; }

}
console.log(changedLetters);

//10.Make	a	random	string	generator.	

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";

for (var i = 0; i < 10; i++) {
    randomString += alphabet[Math.floor(Math.random() * 10)];
}
console.log(randomString);

/*11.Write a JavaScript program to compute the sum of 
the two given integers. If the two values are same, 
then returns triple their sum*/

function sum(x, y) {
    var sum = 0;
    if (x === y) {
        sum = (x + y) * 3;
        console.log("The x and y values are the same, their triple sum is " + sum);
    } else {
        sum = x + y;
        console.log("The sum is " + sum);
    }
}

/*12.Za pomocą"map" oraz arrow function stwórz tablicę 
zawierającą wszystkie liczby z tablicy numbers pomnożone 
razy 2. */
function numbersDoubled(array) {
    var arrayNumbersDoubled = array.map((number) => number * 2);
    console.log(arrayNumbersDoubled);
}

/*13.Za pomocą "reduce" stwórz zmienną, która będzie sumą
 wszystkich liczb z tablicy numbers. */
function sumOfArray(array) {
    var sum = array.reduce((accumulator, current) => accumulator + current);
    console.log(sum);
}

/*14.Za pomocą "filter" stwórz tablicę, która będzie zawierać
tylko liczby parzyste z tablicy numbers. */

function arrayOfEvenNumbers(array) {
    var evenNumbers = array.filter((number) => number % 2 === 0);
    console.log(evenNumbers);
}

/*15.Za pomocą "filter" stwórz tablicę, która będzie 
zawierać tylko liczby nieparzyste z tablicy numbers. */

function arrayOfOddNumbers(array) {
    var oddNumbers = array.filter((number) => number % 2 !== 0);
    console.log(oddNumbers);
}

/*16. Reduce() - Wyobraźmy sobie, że z API otrzymujemy 
dane w poniższym formacie:

const users = [  
    {id: 'a1', email: 'abc@xyz', name: 'Abc'},
    {id: 'b2', email: 'def@xyz', name: 'Def'},
    {id: 'c3', email: 'ghi@xyz', name: 'Ghi'},
    {id: 'd4', email: 'jkl@xyz', name: 'Jkl'},
]

Czyli tablica obiektów reprezentujących użytkownika. 
Każdy obiekt zawiera losowe id, email oraz imię. 
Nasza aplikacja jednak oczekuje innego formatu danych. 
Interesuje nas tylko ID oraz email i chcielibyśmy mieć 
je w jednym obiekcie:

const result = {  
    a1: 'abc@xyz',
    b2: 'def@xyz',
    c3: 'ghi@xyz',
    d4: 'jkl@xyz',
}*/

const users = [
    { id: 'a1', email: 'abc@xyz', name: 'Abc' },
    { id: 'b2', email: 'def@xyz', name: 'Def' },
    { id: 'c3', email: 'ghi@xyz', name: 'Ghi' },
    { id: 'd4', email: 'jkl@xyz', name: 'Jkl' },
];

var IdAndEmail = users.reduce(function(accumulator, user) {
    accumulator[user.id] = user.email;
    return accumulator;
}, {});
console.log(IdAndEmail);

//or

var IdAndEmail = users.reduce((accumulator, user) => { accumulator[user.id] = user.email; return accumulator; }, {});
console.log(IdAndEmail);

//17.Write a JavaScript program to get the current date.
var today = new Date();
var date = today.getDate();
var month = (today.getMonth()) + 1;
var year = today.getFullYear();
(date < 10) ? date = "0" + date: date;
(month < 10) ? month = "0" + month: month;
console.log("Date: " + date + "/" + month + "/" + year);

/*18.Write a JavaScript program to find the area of 
a triangle where lengths of the three of its sides 
are 5, 6, 7.*/

function areaOfTriangle(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * ((s - a) * (s - b) * (s - c))).toFixed(3);
}

/*19.Write a JavaScript program to rotate the string 
'w3resource' in right direction by periodically removing 
one letter from the end of the string and attaching 
it to the front. */

function rotateToString(string) {
    var array = string.split('');
    var reversedArray = array.reverse();
    var backToString = reversedArray.join('');
    return backToString;
}

//or

function rotateToString(string) {
    return string.split('').reverse().join('');
}

/*20. Write a function that returns the area of a circle, 
given the radius. // Note: Use Math.PI */
function areaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}


/*21. Write a function that takes in one parameter and
returns the cube of that parameter*/
function cube(n) {
    return Math.pow(n, 3);
}

/*22.Write a JavaScript program to determine whether a given 
year is a leap year in the Gregorian calendar.*/

function leapYear(n) {
    ((n % 4 === 0 && n % 100 === 0 && n % 400 === 0) || (n % 4 === 0 && n % 100 !== 0)) ? console.log(n + " is a Leap Year"): console.log(n + " is not a Leap Year");
}
//or

function leapYear(year) {
    let x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    return x;
}
console.log(x);

/*23. Write a JavaScript program to find 1st January is being 
a Sunday between 2014 and 2050.*/

function firstSunday() {
    for (var year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1);
        if (date.getDay() == 0) {
            console.log(year + ": 1st of Jan is Sunday");
        }
    }
}

/*24. Write a JavaScript program where the program takes a random 
integer between 1 to 10, the user is then prompted to input 
a guess number. If the user input matches with guess number, 
the program will display a message "Good Work" otherwise display 
a message "Not matched".*/

function randomNumberGuess(userNumber) {
    let min = 1;
    let max = 10;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    prompt("Enter a number from 1-10");
    (randomNumber === userNumber) ? console.log("Good Work! The random number was " + randomNumber + "!"): console.log("Not matched! The random number was " + randomNumber + "!");
}

/*25. Write a JavaScript program to calculate days left until 
next Christmas*/

function daysTillChristmas() {
    var today = new Date();
    var christmas = new Date(today.getFullYear(), 11, 24);
    if (today.getMonth() == 11 && today.getDate() >= 24) {
        if (today.getMonth() == 11 && today.getDate() == 24) console.log("Today is Christmas Eve");
        christmas = new Date(today.getFullYear() + 1, 11, 24);
    }
    var timeTillChristmas = Math.round((christmas.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    console.log("Days till Christmas: " + timeTillChristmas);
}

/*26. Write a JavaScript program to calculate multiplication 
and division of two numbers (input from user).*/
function productAndQuotient(x, y) {
    var x = prompt("Enter your first number:");
    var y = prompt("Enter your second number:");
    var product = x * y;
    var quotient = x / y;
    return "product = " + product + " quotient = " + quotient;
}

/*27. Write a JavaScript program to convert temperatures to 
and from Celsius, Fahrenheit. 
Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */
//???????

function CelciusToFahrenehit() {
    var number = prompt("Enter temperature in \xB0C ");
    var f = ((number / 5) * 9) + 32;
    console.log(number + "\xB0C is " + f + "\xB0F");
}

function FahrenehitToCelcius() {
    var number = prompt("Enter temperature in \xB0F ");
    var c = ((number - 32) / 9) * 5;
    console.log(number + "\xB0F is " + c + "\xB0C");
}

//28. Write a JavaScript program to get the website URL (loading page). 
alert(document.URL);


/*?????????????30. Write a JavaScript program to get the difference 
between a given number and 13, if the number is greater 
than 13 return double the absolute difference.*/

function numberDifference(number) {
    var mySetNumber = 13;
    (number > 13) ? console.log(2 * (number - mySetNumber)): console.log(mySetNumber - number);
}

/*31. Write a JavaScript program to compute the absolute difference 
between a specified number and 19. Returns triple their absolute 
difference if the specified number is greater than 19.*/

function numberAbsoluteDifference(number) {
    var mySetNumber = 19;
    (number > 13) ? console.log(3 * (number - mySetNumber)): console.log(mySetNumber - number);
}

/*32. Write a JavaScript program to check two given numbers and 
return true if one of the number is 50 or if their sum is 50.*/
function magicFifty(x, y) {
    (x == 50 || y == 50) || (x + y == 50) ? console.log(true): console.log(false);
}

//or

function magicFifty(x, y) {
    return ((x == 50 || y == 50) || (x + y == 50));
}

/*33. Write a JavaScript program to check a given 
integer is within 20 of 100 or 400.*/
function withinTwenty(number) {
    return ((Math.abs(100 - number) <= 20) || (Math.abs(400 - number) <= 20));
}

/* 34.  Write a JavaScript program to check from two 
given integers, if one is positive and one is negative.*/

function positiveOrNegative(x, y) {
    return ((x > 0 && y < 0) || (x < 0 && y > 0));
}
//or 

function positiveOrNegative(x, y) {
    return (Math.sign(x) !== Math.sign(y));
}
/* 35.  Write a JavaScript program to create a new 
string adding "Py" in front of a given string. 
If the given string begins with "Py" then return 
the original string.*/

function myPyString(str) {
    var str = "str";
    if (str.substring(0, 2) == "Py") {
        return str;
    } else return ("Py" + str);
}

/*36. Write a JavaScript program to remove 
a character at the specified position of 
a given string and return the new string.*/

function shortString(myString, position) {
    var removed = myString.slice(position, position + 1);
    return myString.replace(removed, "");
}
//or

function shortString(myString, position) {
    return myString.replace(myString.charAt(position), "");
}

/*37. Write a JavaScript program to create a new string 
from a given string changing the position of first 
and last characters. The string length must be 
greater than or equal to 1.*/

function characterChange(myString) {
    if (myString.length <= 1) { return myString; } else {
        var removeFirst = myString.charAt(0);
        var removeLast = myString.charAt(myString.length - 1);
        return (removeLast + (myString.substring(1, myString.length - 1)) + removeFirst);
    }
}

//or

function characterChange(myString) {
    if (myString.length <= 1) {
        return myString;
    }
    var midString = myString.substring(1, myString.length - 1);
    return ((myString.charAt(myString.length - 1)) + midString + myString.charAt(0));
}

/*38. Write a JavaScript program to create a new string 
from a given string with the first character of the 
given string added at the front and back.*/

function addCharacter(myString) {
    return (myString.charAt(0) + myString + myString.charAt(0));
}

//or 

function newString(str) {
    var first = str.charAt(0);
    return first + str + first;
}

/*39. Write a JavaScript program check if a given positive
 number is a multiple of 3 or a multiple of 7.*/

function multipleOrNot(number) {
    if (number % 3 == 0 && number % 7 == 0) {
        var result = "number is a multiple of 3 and 7";
    } else if (number % 3 == 0) {
        var result = "number is a multiple of 3";
    } else if (number % 7 == 0) {
        var result = "number is a multiple of 7";
    } else {
        var result = "number is not a multiple of 3 or 7";
    }
    return result;
}

//or

function multipleOrNot(number) {
    var answer = (number % 3 == 0 || number % 7 == 0) ? true : false;
    return answer;
}

/*40. Write a JavaScript program to create a new string from a given 
string taking the last 3 characters and added at both the front and back.
The string length must be 3 or more.*/

function longerString(myString) {
    if (myString.length < 3) return false;
    const chunk = myString.slice(myString.length - 3);
    return chunk + myString + chunk;

}

//or ???????

function longerString(myString) {
    var result = (myString.length >= 3) ? ((myString.slice(-3)) + myString + (myString.slice(-3))) : false;
    return result
}

/*41. Write a JavaScript program to check if a string starts 
with 'Java' and false otherwise.*/

function stringCheck(myString) {
    if (myString.length < 4) { return false }
    let result = (myString.slice(0, 4) == "Java") ? true : false;
    return result;
}

//or

function stringCheck(myString) {
    let result = (myString.length < 4) ? false : (myString.toLowerCase().slice(0, 4) == "java") ? true : false;
    return result;
}

//or

function stringCheck(myString) {
    let result = (myString.length >= 4 && myString.toLowerCase().slice(0, 4) == "java") ? true : false;
    return result;
}

/*42. Write a JavaScript program to check if two given integer values 
are in the range 50..99 (inclusive). Return true if either of them
 are in the said range.*/

function numberRange(x, y) {
    let result = ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) ? true : false;
    return result;
}

//or

function numberRange(x, y) {
    let result = (x >= 50 && x <= 99) ? true : (y >= 50 && y <= 99) ? true : false;
    return result;
}

//with 3 intergers

function numberRange(x, y, z) {
    return ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (y >= 50 && y <= 99));
}

/*43. Write a JavaScript program to check if a string "Script" presents at 5th 
(index 4) position in a given string, if "Script" presents in the string 
return the string without "Script" otherwise return the original one.*/

function stringOccurance(myString) {
    let result = myString.slice(4, 10) == "Script" ? myString.replace("Script", "") : myString;
    return result;
}

/*44. Write a JavaScript program to find the largest of three given integers.*/

function largestValue(x, y, z) {
    var max = 0;
    if (x > y) {
        max = x;
    } else {
        max = y;
    }
    if (z > max) {
        max = z;
    }
    return max;
}

//or 

function largestValue(x, y, z) {
    var result = Math.max(x, y, z);
    return result;
}

/* 45. Write a JavaScript program to find a value which is 
nearest to 100 from two different given integer values.*/

function nearHundred(x, y) {
    if (x == y) return "Numbers are equal";
    if ((Math.abs(100 - x)) == (Math.abs(100 - y))) return "Equal difference value";
    var result = ((Math.abs(100 - x)) < (Math.abs(100 - y))) ? x : y;
    return result;
}

/* 46. Write a JavaScript program to check if two numbers are in
 range 40..60 or in the range 70..100 inclusive.*/

function checkRange(x, y) {
    var result = ((x >= 40 && x <= 60) && (y >= 40 && y <= 60)) ? "numbers in the range : 40 ...60" : ((x >= 70 && x <= 100) && (y >= 70 && y <= 100)) ? "numbers in the range : 70...100" : "numbers in some different range";
    return result;
}

//or

function checkRange(x, y) {
    var result = ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)) ? true : false;
    return result;
}

/* 47. Write a JavaScript program to find the larger number from 
the two given positive integers, the two numbers are in the 
range 40..60 inclusive.*/

function largerNumber(x, y) {
    if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
        if (x == y) return "Numbers are equal";
        var result = (x > y) ? x : y;
        return result;
    } else return "numbers aren't in the range";
}

/* 48. Write a JavaScript program to check a given string 
contains 2 to 4 numbers of a specified character.*/

function elementCheck(myStr, myChar) {
    var count = 0;
    for (var i = 0; i < myStr.length; i++) {
        (myStr.charAt(i) == myChar) ? count += 1: count;
    }
    var result = (count >= 2 && count <= 4) ? true : false;
    return ("result: " + result + ", count: " + count);
}

//or

function elementCheck(myStr, myChar) {
    var count = 0;
    for (var i = 0; i < myStr.length; i++) {
        (myStr.charAt(i) == myChar) ? count++ : count;
    }
    var result = (count >= 2 && count <= 4) ? true : false;
    return ("result: " + result + ", count: " + count);
}

/*49. Write a JavaScript program to check if the last
digit of the three given positive integers is same.*/
function lastDigit(x, y, z) {
    if (x > 0 && y > 0 && z > 0) {
        var result = (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10) ? "Same last digit" : "Last digits are not the same";
        return result;
    } else return false;
}

/*50. There are two arrays with individual values, write a JavaScript 
program to compute the sum of each individual index value from 
the given arrays.*/

function sumArrays(myArr1, myArr2) {
    var sumArray = [];
    var j = 0;
    var i = 0;
    if (myArr1.length == 0 || myArr2.length == 0) return "At least one array is empty";
    while (i < myArr1.length && i < myArr2.length) {
        sumArray.push(myArr1[i] + myArr2[i]);
        i++;
    }
    if (i == myArr1.length) {
        for (j = i; j < myArr2.length; j++) {
            sumArray.push(myArr2[j]);
        }
    } else {
        for (j = i; j < myArr1.length; j++) {
            sumArray.push(myArr1[j]);
        }
    }
    return sumArray;
}

/*51. Write a JavaScript function to filter false, 
null, 0 and blank values from an array.*/

function clean(myArray) {
    return myArray.filter(Boolean);
}

/*52. Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array*/

function getArrayElements(myArray, n) {
    if (myArray === null) return void(0);
    if (n == null) return myArray[0];
    if (n < 0) return [];
    var newArray = myArray.slice(0, n);
    return newArray;
}
/*53. Write a JavaScript program to create new string with first 
3 characters are in lower case. If the string length is less 
than 3 convert all the characters in upper case.(37)*/

function changeCase(myString) {
    if (myString.length > 0) {
        return (myString.length < 3) ? myString.toUpperCase() : myString.substring(0, 3).toLowerCase() + myString.substring(3);
    } else return false;
}

//or

function changeCase(myString) {
    let result;
    if (myString.length > 0) {
        if (myString.length > 3) { result = (myString.toUpperCase()) } else { result = (myString.substring(0, 3).toLowerCase() + myString.substring(3)) }
        return result;
    } else return false;
}

/*54 Write a JavaScript program to check the total marks of a student in various examinations. 
The student will get A+ grade if the total marks are in the range 89..100 inclusive, 
if the examination is "Final-exam." the student will get A+ grade where total marks 
must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.(38);*/

function totalMarks(total, final) {
    if (final) { return total >= 90; }
    return (total >= 89 && total <= 100);

}

/*55. Write a JavaScript program to compute the sum of the two given 
integers, If the sum is in the range 50..80 return 65 other wise 
return 80.(39)*/

function sumIntergers(a, b) {
    return ((a + b >= 50 && a + b <= 80) ? '65' : '80');
}

/*56. Write a JavaScript program to check from two given integers if 
either one is 8 or their sum or difference is 8.*/

function checkForEight(a, b) {
    if (a == 8 || b == 8) return true;
    if ((a + b) == 8 || (a - b) == 8) return true;
    return false;
}

/*57. Write a JavaScript program to check three given numbers, 
if the three numbers are same return 30 otherwise return 40 
and if two numbers are same return 20.(41)*/

function checkIfSame(a, b, c) {
    if (a == b && b == c) return "30";
    if (a == b || b == c || c == a) return "20";
    return "40";
}

/*58. Write a JavaScript program to check if three given numbers 
(integers) are increasing in strict mode and flag is "false",
however if "true" is false the numbers will in soft mode. (42)*/

function intIncrease(a, b, c) {
    if (b > a && c > b) return "strict mode";
    else if (c > b) return "soft mode";
    else return "undefined";
}

/*59. Write a JavaScript program to remove duplicate items 
from an array (ignore case sensitivity).*/

function removeDuplikaty(num) {
    var num = [1, 2, 2, "a", 4, "a", 5, 4, 7, 8, 7, 3, 6];
    var x;
    var obj = {};
    var newArray = [];
    for (x = 0; x < num.length; x++) {
        obj[num[x]] = 0;
    }
    for (x in obj) {
        newArray.push(x);
    }
    return newArray;
}

//or shorter version

function usunUsun(num) {
    var obj = {};
    for (var i = 0; i < num.length; i++) {
        obj[num[i]] = 0;
    }
    return Object.keys(obj);
}

//or with reduce

const arr = [1, 2, 2, "a", 4, "a", 5, 4, 7, 8, 7, 3, 6];
const removeDuplicates = arr.reduce((col, el) => {
    if (!col.includes(el)) {
        col.push(el);
    };
    return col;
}, []);

//or

function bezDuplikatow(array) {
    let newArray = array.filter(function(value, index) {
        return array.indexOf(value) === index;
    });
    return newArray;
}


/*60. Write a JavaScript program to flatten a nested (any depth) array.
If you pass shallow, the array will only be flattened a single level.*/

var arr = [1, [2],
    [3, [
        [4]
    ]],
    [5, 6, 7]
];
var flatenedArray = arr.flat();
console.log(flatenedArray);

arr.reduce(function(acc, val) {
    acc = acc.concat(val);
}, []);

//or deep level with reduce and concat - recursive

function deepFlattening(array) {
    return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(deepFlattening(val)) : acc.concat(val), []);
}

/*61. JavaScript function always returns a random number between 
min and max (both included):*/

function getRandomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min)
}
//or

function getRandom(min, max) {
    if (min == null && max == null) return 0;
    if (max == null) {
        max = min;
        min = 0
    }
    return Math.floor(Math.random() * (max - min) + 1) + min
}

/*62. Write a JavaScript function to find the highest value in an array.*/

function highestValue(array) {
    if (array == null) return "array is empty";
    return array.reduce((acc, val) => (val > acc) ? val : acc);
}

/*63. Write a JavaScript program to check from three given numbers 
(non negative integers) that two or all of them have the same rightmost
digit.(43)*/

function lastDigitSame(a, b, c) {
    return (a % 10 == b % 10 || a % 10 == c % 10) ? true : (b % 10 == c % 10);
}

//or

function same_last_digit(a, b, c) {
    return (a % 10 == b % 10) || (a % 10 == c % 10) || (b % 10 == c % 10);

}

/*64. Write a JavaScript program to check from three given integers that 
if a number is greater than or equal to 20 and less than one of the 
others.(44)*/

function greaterNumber(x, y, z) {
    if (x >= 20 && (x < y || x < z)) return true;
    if (y >= 20 && (y < x || y < z)) return true;
    if (z >= 20 && (z < x || z < y)) return true;
    return false;
}

//or

function greaterNumber(x, y, z) {
    return (x >= 20 && (x < y || x < z)) || (y >= 20 && (y < x || y < z)) || (z >= 20 && (z < x || z < y));
}

/*65. Write a JavaScript program to check two given integer values and 
return true if one of the number is 15 or if their sum or difference
is 15 (45)*/

function isItFifteen(x, y) {
    return (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15);
}

/*66. Write a JavaScript program to check two given non-negative 
integers and if one of the number (not both) is multiple of 7 or 11.(46)*/

function isItSevenOrEleven(a, b) {
    (a % 7 === 0 || a % 11 === 0) && (b % 7 === 0 || b % 11 === 0) ? false: (a % 7 === 0 || a % 11 === 0) || (b % 7 === 0 || b % 11 === 0);
}

/*67 Write a JavaScript program to check if a given number in the 
range 40..10000 presents in two numbers (in same range).
For example 40 presents in 400 and 4000.*/

function isNoPresent(min, max, n) {
    if (n < min || n > max) return false;
    else if (n >= min && n <= max) return true;
    else return false;

}

/*68.Write a JavaScript program to reverse a given string.*/

function stringReverse(string) {
    return string.split("").reverse().join("");
}

/*69. Write a JavaScript program to replace every character in a given 
string with the character following it in the alphabet.(49)*/

function NextAlphabetLetterReplace(myString) {
    var myArray = myString.split("");
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].toLowerCase() != myArray[i].toUpperCase()) {
            if (myArray[i] == "z") myArray[i] = "a";
            continue;
            if (myArray[i] == "Z") myArray[i] = "A";
            continue;
            myArray[i] = String.fromCharCode(myArray[i].charCodeAt() + 1);
        }
    }
    return myArray.join("");
}

/*70. Write a JavaScript program to capitalize the first letter of 
each word of a given string.(50)*/

function capitalLetter(string) {
    var array = string.split(" ");
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].substring(1);
    }
    return array.join(" ");
}

//or with map

function capitalLetter(string) {
    var array = string.split(" ");
    array = array.map(function(element) {
        return element.charAt().toUpperCase() + element.substring(1);
    });
    return array.join(" ");
}

// shorter version

function capitalLetter(string) {
    var array = string.split(" ");
    array = array.map((element) => element.charAt().toUpperCase() + element.substring(1));
    return array.join(" ");
}

function capitalLetter(string) {
    var array = string.split(" ");
    return (array.map((element) => element.charAt().toUpperCase() + element.substring(1))).join(" ");
}

/*71.  Write a JavaScript program to convert a given 
number to hours and minutes.(51)*/

function numIntoTime(num) {
    var hour = Math.floor(num / 60);
    var minutes = num % 60;
    return hour + " : " + minutes;
}

function numIntoTime(num) {
    var minutes = num % 60;
    return (((num - minutes) / 60) + " : " + minutes);
}

/*72.  Write a JavaScript program to convert the 
letters of a given string in alphabetical order.(52)*/

function alphaOrder(str) {
    return str.split("").sort().join("").trim();
}

//or each word separately 

function alphaOrderWords(str) {
    var arr = str.split(" ");
    arr = arr.map((element) => element.split("").sort().join(""));
    return arr.join(" ");
}

/*73. Write a JavaScript program to check if the characters 
a and b are separated by exactly 3 places anywhere (at least once)
in a given string.(53)*/

function checkAandB(str) {
    var a = str.indexOf("a");
    var b = str.indexOf("b");
    if (a >= 0 && b >= 0) {
        if (str.substring(a + 1, b).length == 3 || str.substring(b + 1, a).length == 3) return true;
        else return false;
    } else return false;
}

/*74. Write a JavaScript program to count the number of vowels
in a given string.*/

function countVowels(str) {
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'i' || str[i] == 'o' || str[i] == 'e' || str[i] == 'u') {
            count++;
        }
    }
    return count;
}

//or

function vowelCount(str) {
    str = str.toLowerCase().split("");
    return str.reduce(function(count, letter) {
        (letter == 'a' || letter == 'i' || letter == 'o' || letter == 'e' || letter == 'u') ? count += 1: count;
        return count;
    }, 0);
}

//web solution

function vowelCount(str) {
    return str.replace(/[^aeiou]/g, "").length;
}

/*regular expressions : 
g tells to find all matches, not just the first.
i tells to be case insensitive.
What goes inside the // is the pattern.
[] tells to match any character in a set.
aeiou are the characters in the set.*/

/*75. Write a JavaScript program to check if a given string contains 
equal number of p's and t's present.(55)*/

function letterCountTP(str) {
    var p = 0;
    var t = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "p") p += 1;
        if (str[i] == "t") t += 1;
    }
    return (p == t);
}

//or

function equal_pt(str) {
    var str_p = str.replace(/[^p]/g, "");
    var str_t = str.replace(/[^t]/g, "");
    return str_p.length === str_t.length;
}

/*?????76. Write a JavaScript program to divide two positive numbers and
return a string with properly formatted commas. (56)????*/


/* 77. Write a JavaScript program to create a new string of specified 
copies (positive number) of a given string. (57)*/

function copyString(str, n) {
    return ((n < 0 || (typeof str !== "string")) ? false : str.repeat(n));
}

/*78. Write a JavaScript program to create a new string of 4 copies of the 
last 3 characters of a given original string. The length of the given 
string must be 3 and above.(58)*/

function copyLastChar(str) {
    return (str.length < 3 || str == null) ? false : str.substring(str.length - 3).repeat(4);
}

/*79. Write a JavaScript program to extract the first half of a string of even length.(59)*/

function halfString(str) {
    return (str.length % 2 == 0 ? str.substring(0, str.length / 2) : str);
}

//or with slice

function halfString(str) {
    return (str.length % 2 == 0 ? str.slice(0, str.length / 2) : str);
}

/*80. Write a JavaScript program to create a new string without the first
 and last character of a given string(60)*/

function noEndorBeginning(str) {
    return str.slice(1, st.length - 1);
}

//or
function noEndorBeginning(str) {
    return str.slice(1, -1);
}

/*81.Write a JavaScript program to concatenate two strings
except their first character.(61)*/

function stringsTogether(str1, str2) {
    str1 = str1.slice(1);
    str2 = str2.slice(1);
    return str1.concat(str2); //or str1+str2
}
/*82. Write a JavaScript program to move last three character
 to the start of a given string. The string length must be 
 greater or equal to three.(62)*/

function addThree(str) {
    return str.length >= 3 ? str.slice(-3).concat(str.slice(0, -3)) : "string too short";

    //or return str.length>=3 ? str.slice(-3)+str.slice(0,-3) : "string too short";
}

/*83. Write a JavaScript program to create a string using the middle three characters
of a given string of odd length. The string length must be greater or equal to three.(63)*/

function middleThree(str) {
    return str.length >= 3 && str.length % 2 !== 0 ? str.substr((Math.floor(str.length / 2)) - 1, 3) : str;
}

/* 84. Write a JavaScript program to concatenate two strings and return the result. 
If the length of the strings are not same then remove the characters from 
the longer string.(64)*/

function addStrings(str1, str2) {
    if (str1.length > str2.length) str1 = str1.slice(0, str2.length);
    if (str1.length < str2.length) str2 = str2.slice(0, str1.length);
    return str1.concat(str2);
}

//or

function addString(str1, str2) {
    var min = Math.min(str1.length, str2.length);
    return str1.slice(0, str1.length - min) + str2.slice(0, str2.length - min);
    //to remove elements from the beginning of the string str.substring(str.length-min)
}

/*85. Write a JavaScript program to test if a string ends with "Script". 
The string length must be greater or equal to 6.(65)*/

function stringCheck(str) {
    return (str.length >= 6 && str.substring(str.length - 6) == "Script") ? true : false;
}

//or with slice

function stringCheck(str) {
    return (str.length >= 6 && str.slice(-6) == "Script") ? true : false;
}

/*86. Write a JavaScript program to display the city name if 
the string begins with "Los" or "New" otherwise return blank. (66)*/

function cityDisplay(str) {
    return (str.length >= 3 && (str.slice(0, 3) == "New" || str.slice(0, 3)) == "Los") ? str : "";
}

/*87. Write a JavaScript program to create a new string from a given string, 
removing the first and last characters of the string if the first or last 
character are 'P'. Return the original string if the condition is not satisfied.  (67)*/

function checkForP(str) {
    if (str.indexOf("p") == 0) str = str.slice(1);
    if (str.lastIndexOf("p") == str.length - 1) str = str.slice(0, -1);
    return str;
}

/*88.  Write a JavaScript program to create a new string using the first and last
n characters from a given sting. The string length must be greater or equal to n. (68)*/

function createStr(str, n) {
    return (str.length < n || n == null) ? str : str.slice(0, n) + str.slice(-n);
    // or str.substring(0,n) + str.substring(str.length-n)
}
/*89. Write a JavaScript program to compute the sum of three elements of a given 
array of integers of length 3.(69)*/

function sumOfArray(arr) {
    return arr.reduce((sum, item) => sum + item, 0);
}

/*90. Write a JavaScript program to rotate the elements left of 
a given array of integers of length 3.(70)*/

function arrRotate(arr) {
    arr.push(arr.shift());
    return arr;
}

/*91. Write a JavaScript program to check if 1 appears in first or last
position of a given array of integers. The array length must be greater or equal to 1.(71)*/

function checkForOne(arr) {
    return (arr.length >= 1 && (arr[0] == 1 || arr[arr.length - 1] == 1));
}

/*92. Write a JavaScript program to check if the first and last elements
are equal of a given array of integers length 3 (72)*/

function firstLastequal(arr) {
    return arr.length >= 1 ? (arr[0] == arr[arr.length - 1]) : false;
}

/*93. Write a JavaScript program to reverse the elements of a given 
array of integers length 3.(73)*/

function arrReverse(arr) {
    arr.reverse();
}
//or 

function reverseArr(arr) {
    return arr.map((item, index, array) => arr[(arr.length - 1) - index];
    }

    /*94. Write a JavaScript program to find the larger value between the first 
    or last and set all the other elements with that value. Display the new array.(74)*/

    function biggerEl(arr) {
        return (arr[0] > arr[arr.length - 1]) ? arr.map((item) => arr[0]) : arr.map((item) => arr[arr.length - 1])
    }

    /* 95. Write a JavaScript program to create a new array taking the middle 
    elements of the two arrays of integer and each length 3.(75)*/

    function twoMidArrJoined(arr1, arr2) {
        arr1 = (arr1.length % 2 !== 0) ? arr1.slice(Math.floor(arr1.length / 2), Math.ceil(arr1.length / 2)) : arr1.slice(Math.floor(arr1.length / 2 - 1), Math.ceil(arr1.length / 2 + 1));
        arr2 = (arr2.length % 2 !== 0) ? arr2.slice(Math.floor(arr2.length / 2), Math.ceil(arr2.length / 2)) : arr2.slice(Math.floor(arr2.length / 2 - 1), Math.ceil(arr2.length / 2 + 1));
        return arr1.concat(arr2);
    }

    /*96. Write a JavaScript program to create a new array taking the first 
    and last elements from a given array of integers and length must be greater 
    or equal to 1.(76)*/

    function firstAndLast(arr) {
        return (arr.length >= 1) ? [...arr.slice(0, 1), ...arr.slice(arr.length - 1)] : false;
    }

    //or 

    function firstAndLast(arr) {
        var result = [];
        (arr.length >= 1) ? result.push(arr[0], arr[arr.length - 1]): result = "array not long enough";
        return result;
    }

    /* 97. Write a JavaScript program to test if an array of integers 
    of length 2 contains 1 or a 3.(77)*/

    function checkNumbers(arr) {
        return (arr.includes(1) || arr.includes(3));
    }

    //or 

    function checkNumbers(arr) {
        for (var i = 0; i < arr.length; i++) {
            return (arr[i] == 1 || arr[i] == 3)
        }
    }

    //or

    function numCheck(arr) {
        return (arr.indexOf(1) != -1 || arr.indexOf(3) != -1);
    }

    /* 98. Write a JavaScript program to test if an array of integers 
    of length 2 does not contain 1 or a 3.(78)*/

    function noNumCheck(arr) {
        return (arr.indexOf(1) == -1 || arr.indexOf(3) == -1);
    }

    //or

    function noNumCheck(arr) {
        return !(arr.includes(1) || arr.includes(3));
    }

    /* 99. Write a JavaScript program to test if a given array of 
    integers contains 30 and 40 twice. The array length should 
    be 0, 1, or 2.(79)*/

    function checkDoubles(arr) {
        var tCount = 0;
        var fCount = 0;
        for (var i = 0; i < arr.length; i++) {
            arr[i] == 30 ? tCount += 1 : tCount;
            arr[i] == 40 ? fCount += 1 : fCount;
        }
        return (tCount == 2 RN426279402GB fCount == 2);


        /* 100. Write a JavaScript program to swap the first and last
        elements of a given array of integers. The array length should 
        be at least 1. (80)*/

        function swap(arr) {
            var first = arr.shift();
            var last = arr.pop();
            arr.push(first);
            arr.unshift(last);
            return arr;
        }

        /*or Swap the first and last element in an array
        without temporary variable or ES6 swap method [a, b] = [b, a]*/

        function swap1(arr) {
            return [arr.pop(), ...arr.slice(1), arr.shift()];
        }

        /*or ES6 swap method [a, b] = [b, a]
        eg. array = [44,33,22,11]
        [array1[0], array1[1], array1[2], array1[3]] =
        [array1[3], array1[2], array1[1], array1[0]];
        result: Array(4) [ 11, 22, 33, 44 ]*/

        function swap2(arr) {
            [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
            return arr;
        }

        /* 101. Write a JavaScript program to add two digits of a 
        given positive integer of length two.(81)*/

        function addInt(n) {
            return Math.floor(n / 10) + n % 10;
        }

        /*102, Write a JavaScript to add two positive integers without carry.(82)*/

        function addTwo(a, b) {
            var result = 0;
            var x = 1;
            while (a > 0 && b > 0) {
                result += x * ((a + b) % 10);
                a = Math.floor(a / 10);
                b = Math.floor(b / 10);
                x *= 10;
            }
            return result;
        }

        /* 103. Write a JavaScript to find the longest string 
        from an given array of strings.(83)*/

        function longestString(arr) {
            return arr.reduce((current, value) => current.length < value.length ? value : current);
        }

        /*104. Write a JavaScript to replace each character of 
        a given string by the next one in the English alphabet.(84)*/

        function NextAlphabetLetterReplace(myString) {
            var myArray = myString.split("");
            for (var i = 0; i < myArray.length; i++) {
                if (myArray[i].toLowerCase() != myArray[i].toUpperCase()) {
                    if (myArray[i] == "z") myArray[i] = "a";
                    else if (myArray[i] == "Z") myArray[i] = "A";
                    else myArray[i] = String.fromCharCode(myArray[i].charCodeAt() + 1);
                }
            }
            return myArray.join("");
        }

        /*105.  Write a JavaScript code to divide an given array of positive 
        integers into two parts. First element goes to first part, second 
        element goes to second part, and third element goes to first part 
        and so on. Now compute the sum of two parts and store into an array of size two. (85)*/

        function divideArr(arr) {
            var arr1 = arr.filter((item, index) => index % 2 == 0);
            var arr2 = arr.filter((item, index) => index % 2 != 0);
            return [...[arr1.reduce((count, item) => count += item)], ...[arr2.reduce((count, item) => count += item)]];
        }

        //or two subarrays

        function divideArr(arr) {
            return [
                [arr.reduce((acc, el, i) => i % 2 == 0 ? acc += el : acc)],
                [arr.reduce((acc, el, i) => i % 2 != 0 ? acc += el : acc)]
            ]
        }

        //or one new array with two elements

        function divideArr(arr) {
            return [arr.reduce((acc, el, i) => i % 2 == 0 ? acc += el : acc), arr.reduce((acc, el, i) => i % 2 != 0 ? acc += el : acc)]
        }

        //simpler way

        function alternativeSum(arr) {
            var result = [0, 0]
            for (var i = 0; i < arr.length; i++) {
                i % 2 == 0 ? result[0] += arr[i] : result[1] += arr[i];
            }
            return result;
        }

        /*106. Write a JavaScript program to find the types of a given angle.

            Types of angles:
            Acute angle: An angle between 0 and 90 degrees.
            Right angle: An 90 degree angle.
            Obtuse angle: An angle between 90 and 180 degrees.
            Straight angle: A 180 degree angle.(86)*/

        function angleType(n) {
            if (n < 0 && n < 90) return "acute angle";
            if (n === 90) return "right angle";
            if (n > 90 && n < 180) return "obtuse angle";
            if (n == 180) return "straight angle";
        }
        /*107. Write a JavaScript program to check whether two arrays of integers
         of same length are similar or not. The arrays will be similar if one array 
         can be obtained from another array by swapping at most one pair of elements(87)*/

        function similarArr(arr1, arr2) {
            for (var i = 0; i < arr1.length; i++) {
                for (var j = 0; j < arr1.length; j++) {
                    var result = true;
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    for (var k = 0; k < arr1.length; k++) {
                        if (arr1[k] != arr2[k]) {
                            result = false;
                            break;
                        }
                    }
                    if (result) {
                        return true;
                    }
                    arr1[j] = arr1[i];
                    arr1[i] = temp;
                }
            }
            return false;
        }


        //or arrays equal

        function arrEqual(arr1, arr2) {
            if (arr1.length !== arr2.length) return false;
            arr1.sort(function(a, b) { return a - b });
            arr2.sort(function(a, b) { return a - b });
            for (var i = 0; i < arr1.length; i++) {
                return arr1[i] == arr2[i];
            }
        }
    }

    //or shorter

    function arrEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        arr1.sort(function(a, b) { return a - b });
        arr2.sort(function(a, b) { return a - b });
        for (var i = 0; i < arr1.length; i++) {
            return arr1[i] == arr2[i];
        }
    }


    /*108. Write a JavaScript program to check whether two given 
    integers are similar or not, if a given divisor divides both 
    integers and it does not divide either. (88)*/

    function numSimilar(a, b, divisor) {
        return ((a % divisor == 0 && b % divisor == 0) || (a % divisor !== 0 && b % divisor !== 0));
    }

    /*109. Write a JavaScript program to find the kth greatest
    element of a given array of integers (90)*/

    function highestElementK(arr, k) {
        arr = arr.sort(function(a, b) { return b - a });
        return arr[k - 1];
    }

    //or sorting array with bubble sort - values decending; 
    //if bubble sort with values ascending => return arr[len-k];

    function highestElementK(arr, k) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] < arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        console.log(arr);
        return arr[k - 1];
    }

    /* BUBBLE SORT: TWO LOOPS...
    The index j in the inner loop travels up the array, 
    comparing adjacent entries in the array (at j and j+1), 
    while the outer loop (i) causes the inner loop to make repeated 
    passes through the array. After the first pass, the largest
    element is guaranteed to be at the end of the array,
    after the second pass, the second largest element is in position,
    and so on. That is why the upper bound in the inner loop (n-1-i)
    decreases with each pass: we don't have to re-visit the end of 
    the array. */

    /* 110. Bubble sort - values increasing ...*/

    function bubbleSort(arr) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    //or values decreasing ...

    function bubbleSort(arr) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] < arr[j + 1]) { //changed condition ...
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    //or with 'while'

    function bubble(arr) {
        var len = arr.length
        while (len) {
            for (i = 0; i < len; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp
                }
            }
            len--;
        }
        return arr
    };

    /*111. Fill in the array with a hudred random numbers from 0 - 99.*/

    function randomArray() {
        let arr = [];
        let min = 0;
        let max = 100;
        for (let i = 0; i < 100; i++) {
            arr.push(Math.floor((Math.random() * (max - min)) + min));
        }
        return arr;
    }

    //or shorter version

    function randomArray() {
        let arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push(Math.floor(Math.random() * 100));
        }
        return arr;
    }

    /*112. Selection sort*/

    function selectionSort(arr) {
        var min;
        for (var i = 0; i < arr.length - 1; i++) {
            min = i;
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) min = j;
                if (min !== i) {
                    var temp = arr[i];
                    arr[i] = arr[min];
                    arr[min] = temp;
                }
            }
        }
        return arr;
    }