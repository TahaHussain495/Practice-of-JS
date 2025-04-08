


//    QUESTION 2
// Write a javascript program to find wheater a number a is divisible by 2 and 3

// let num = +prompt("enter the num");
// if (num % 2==0 && num % 3==0) {
//     console.log("your num is divisible")
// }
// else {
//     console.log("your num is not divisible")
// }


// Question 3 
// Write a javascript program to finf wheater a number a is divisible by 2 or 3

// let number = +prompt("Enter a number")
// if (number % 2==0 || number % 3==0) {
//     console.log ("Number is divisible")
// }
// else {
//     console.log("Number is not divisible")
// }


// Question 5 Print "You can Drive" or "You cannot Drive" based on age being greater than
// 20 using ternary operator

// let age = +prompt("Enter your age");

// if(age>20) {
//   alert("You can drive")
// }
// else {
//   alert ("You cannot drive due to low age")
// }

//  let a = age > 20 ? "You canyy Drive" : "You cannooot Drive" // Print in console
// console.log(a)



// ARRAY'S

// let marks_class_12 = [90,30,89,49,50,"Not Present"]

// console.log(marks_class_12[0])
// console.log(marks_class_12[1])
// console.log(marks_class_12[2])
// console.log(marks_class_12[3])
// console.log(marks_class_12[4])
// console.log(marks_class_12[5])
// console.log("The length of marks_class_12", marks_class_12.length)

// marks_class_12[0] = 97
// console.log(marks_class_12)


// let num = [2 , 4 , 56 , 65, 3 ,6 , 5]

// let b = num.toString() // to convert from num to string
// console.log(b)

// let c = num.join("_")
// console.log(c , typeof c)

// let r = num.pop() // remove the last element of an array
// console.log(num , r)

//  let r = num.push(45) // add new element to end of an array 
//  console.log(num, r)

// let r = num.shift()  // remove an element from start of n array
// console.log(r , num)

// let r = num.unshift(75) // add element to the beginning and returns new array length
// console.log(r , num)

// delete  num[0] // array element can be deleted using the delete operater
// console.log(num.length)



// let num = [2 , 4 , 56 , 65, 3 ,6 , 5]
// let num_more = [ 1, 2, 2 , 4 , 4 , 5 ]

// let newArr = num.concat(num_more) // concat used to join arrays
// console.log(newArr);

// Sort Method ( Arrange in number wise 1,2,3)

// FOR ASSENDING ORDER

// let compare = (a, b)=> {
//     return (a - b)
// }
// let num = [ 2 , 4 , 56 , 65, 3 ,6 , 5]
// num.sort(compare)
// console.log(num);

// FOR DECENDING ORDER

// let compare = (a, b)=> {
//     return (b , a)
// }
// let num = [ 2 , 4 , 56 , 65, 3 ,6 , 5]
// num.sort(compare)
// console.log(num);

// Slice Method (used for taking out the value)

// let cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta"]
//  console.log(cities)

//  let city = cities.slice(1 , 3)
//  console.log(city)


//  Splice Method (used for adding values)

//  let cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta"]
//  cities.splice(1,0,"peshawer" , "KPK" , "Multan")    // this 1 is added bc where you want to add new value   
//  console.log(cities)



// var arr = ["Karachi" , "Quetta" , "peshawer" ]

// arr[0] = [arr[1] , arr[1] = arr[0]] [0]

// console.log(arr)



// for (var i = 1 ; i <=10; i++) {
//     document.write(`2 x ${i} = ${i} <br/>`)
// }



// var arr = ["Karachi" , "lahore" , "multan" , "quetta"];

// for(var i = 0 ; i < arr.length; i++) {
//     console.log(arr[i])
// }







// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Conversion Formulae:

// C = (F - 32)*5/9
// F = (C * 9/5)+32


// let celcius = 25;
// let celcius_to_fahrenhiet = (celcius*9/5)+32;

// let fahrenhiet = 70;    
// let fahrenhiet_to_celcius = (fahrenhiet-32) *5/9;

// document.write("<p>"+ celcius + "°C is " + celcius_to_fahrenhiet + "</p>");
// document.write("<p>"+ celcius + "°C is " + celcius_to_fahrenhiet + "</p>");



// greet("Alice");

// function greet(name) {
//     console.log("Hello, " + name);
// }

//   "Hello, Alice"
  
//   function add(a, b) {
//     return a + b;
// }

// let result = add(5, 3);  // Calls the function with arguments 5 and 3
// console.log(result);  // Output: 8

// Replace index 0 from 2 & 2 from 0

// var arr = ["karachi" , "Lahore" , "Islamabad", "Quetta" , "Multan"]

// arr[2] = [arr[0] , arr[0] = arr[2]][0]
//  console.log[arr]

// Replace index 1 from 3 & 3 from 1

// arr[1] = [arr[3] , arr[3] = arr[1]][0] 
// console.log[arr]



// To show single digit table 

// 1 Method

// for (var i = 1; i <= 10; i++) {
// document.write( `2 x ${i} = ${2 * i} <br/>`)
// }

// 2 Method

// let number = 4 ;

// document.write("<h3>Table of : " + number + "</h3>")

// for (let i = 1; i <= 10; i++) {
//   document.write("<p>" + number + " x " + i + " = " + (number * i) + "</p>")
// }

// For all tables

// let tableNumber = +prompt("Enter a number that want to show its Table")

// for ( let i = 1; i <= 10; i++) {
//   document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br />")
// }

// if user want to take out all the values

// var arr = ["karachi" , "Lahore" , "Islamabad", "Quetta" , "Multan"]
// var city = prompt()

// for ( i = 0; i < arr.length; i++) {
//   if (arr[i] === city) {
//     console.log("yes")

//   } else {
//     console.log("no")
  
//   }   
  
// }

// document.write("<h2>Arithmatic Operation</h2>")
// let currentYear = +prompt("Enter current year");
// let birthYear = +prompt("Enter your birth year")
// let age = currentYear - birthYear;
// let age1 = age - 1 
// document.write("<p> Current Year :" + currentYear + "</p>")
// document.write("<p> Birth Year :" + birthYear + "</p>")
// document.write("<h3> Current age :" + age + " or " + age1 + "</h3>")






//     //13.The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripge e old aof NN”.



// let favouriteSnack = "Chips"
// let currentAge = 19
// let maxAge = 70
// let perDay = 2
// let totalAmount = (maxAge - currentAge ) * 365 * perDay

// document.write ("<p> Favourite Snack :" + favouriteSnack + "</p>")
// document.write("<p> Current Age : " + currentAge +" </p>")
// document.write("<p> Max Age : " + maxAge + "</p>")
// document.write("<p> Estimated Amount :" + perDay + "</p>")
// document.write("<h3> You will need : " + totalAmount + " " + favouriteSnack + "to last you until the rip old age of " + maxAge + "</h3>")




// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like: 


// let educationPakistan = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PhD"]

// console.log (educationPakistan[0])
// console.log (educationPakistan[1])
// console.log (educationPakistan[2])
// console.log (educationPakistan[3])
// console.log (educationPakistan[4])
// console.log (educationPakistan[5])
// console.log (educationPakistan[6])
// console.log (educationPakistan[7])


// For Concat

// var myName = "Thanks ";
// var city = "karachi";
// var banger = "!";
// var costomMess = myName + city + banger;

// alert(costomMess);

// Variable for string

//  Write a JavaScript program that declares a variable to store your favorite quote as a string.
//   Then, print the quote along with the author's name in a single sentence using string concatenation
//   or template literals.

//  var favouriteQuote = "Dream big, work hard, stay humble.";
//  var poet = "Chatgpt";
//  var message = favouriteQuote + poet;

//  console.log(message);



// Declare a variable to store your age as a number. Then, increase its value by 5 and print the new age

// var age = 19
// var newAge = age + 5 
// console.log("New age is :" + newAge );


// Write a JavaScript program that takes two numbers, adds them together, and displays the result.

// var num1 = 19;
// var num2 = 20;

// var num3 = num1 + num2

// console.log(num3);


// Create a variable for a product's price and another for the quantity. Calculate and print the total cost

// var productPrice = 500;
// var quantity = 5
// var totalCost = productPrice * quantity;

// console.log(totalCost);



// Variables Names Legal and Illegal

// List five examples of legal variable names in JavaScript.
//  Briefly explain why each of your examples is considered legal.

// 1.  abc
// 2.  _abc
// 3.  $abc
// 4.  ab1
// 5.  abc123


// let a = 4
// let b = 6

// let result = ( a * b) - 6

// console.log(result)


// let x = 3 , y = 5
// let result = (x % y , x * y);

// console.log(result)

// var home = prompt("Your planet?", "Mars");

// console.log(home)

// Write a JavaScript prompt that asks the user for their full
//  name and stores the response in a variable named fullName.

// let fullName = prompt("Write your fullname");

// document.write("<h2> Full Name : " + fullName + "</h2>")


// Create a JavaScript prompt that asks the user for their age, includes a default
// value of "18", and then converts the input to a number.

// let age = +prompt("write your age" , 18)

// document.write(age)

// Write a JavaScript prompt that asks the user for their favorite programming language
// and then logs a custom message incorporating their answer.

// let userMessage = prompt("What's your favourite programming language")

// document.write("<h2> My Favourite programming language is  " + userMessage + " and I love it </h2>")

// let answer = prompt("Do you like coding")

// if ("yes") {
//   consol.log("Good!Keep learning")
// } else {
//   console.log("As your wish")
// }

// Write a JavaScript expression that compares the number 7 and the string "7" using 
// both == and ===. What outcomes do you expect from each comparison?

// console.log(7 == "7");
// console.log(7 === "7");

// Compare the values null and undefined using both == and ===. What
// differences can you observe between the two operators in this case

// console.log(null == undefined);
// console.log(null === undefined)



// Write an if...else statement to check if a variable num is greater than 0.
//  If it is, log "Positive"; otherwise, log "Zero or Negative."

// example a

// let number = +prompt("Enter your Marks in English")

// if (number > 50) {
//   console.log("Passed! Congratulations")

// }else {
//   console.log("Fail")
// }

// example b

// let num = +prompt("Enter Your number")

// if ( num > 0) {
//   console.log("Positive")
// } else {
//   console.log("Negative")
// }


// let age = +prompt("Enter your age")

// if (age < 20) {
//   console.log("You are junior")
// } else if (age > 30) {
//   console.log("Senior")
// } else {
//   console.log("middle")
// }



// let colour = prompt("Enter Your Favourite Colour")

// if (colour === "red") {
//   console.log("Good choice")
// } else if (colour === "black") {
//   console.log("dark choice")
// } else if (colour === "Pink") {
//   console.log("Naughty choice")
// } else {
//   console.log("why bro why")
// }


// let age = +prompt("are you eligible")
// let a = 10 
// let b = 20

// if ( a > 10 || b < 20 ) {
//   console.log("You are eligible")
// } else {
//   console.log("You are not eligible")
// }



// Create an if statement using the || operator to check if a variable day 
// is either "Saturday" or "Sunday". If it is, log "It's the weekend!".

// let days = prompt("weekend holiday")
// let day  = "saturday" 
// let da   = "sunday"


// if ( days === "saturday" || days === "sunday" ) {
//   console.log("It's weekend")
// } else {
//   console.log("its not weekend")
// }




// let arr = ["karachi" , "lahore" , "islamabad"]
// let userCity = prompt();



// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] === userCity) {
//     flag = true
//    }
  
// }
// let abc = 1

// for (let i = 0; i < 5; i++ ) {
//   console.log("---" , i)
//   for (let j = 0; j < 3; j++){
//     console.log(i,j)
//   }
// }/


// for ( let i = 0; i < 3; i++) {
//   for(let j = 0; j < 5; j++) {
//     console.log(i,j)
//   }
// }


// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }
// console.log("Hello")


// let one = "tea";
// let two = "eat";

// for ( let i = 0; i < 4; i++) {
//   if (let j = 0; j < 4; j++) {
    
//   }
// }


// sum of  1 to 100

// let sum = 0
// let n = 6

// for (let i = 1; i <= n; i++) {
//      sum = sum + i
// }

// console.log(sum)


// Write a for loop that prints the numbers from 1 to 10 in the console.

// for (let i = 0; i <=10; i++) {
//   console.log("i = " ,i)
// }


// Create a for loop that prints the multiplication table of 5 (from 5 x 1 to 5 x 10).

// console.log("Table of 5")

// let num = 5

// for (let i = 1; i <=10; i++) {
//   console.log(num + "x" + i + "=" + (num * i) + "")
// }


// print even numbers from 0 to 100

// for (let i = 0; i <=100; i++) {
//   if( i%2 === 0 ) {
//     console.log("i =" ,i)
//   }
  
// }

// print odd numbers from 0 to 100


// for (let i = 0; i <=100; i++) {
//   if( i%2 !== 0 ) {
//     console.log("i =" ,i)
//   }


// while loop 1 to 10 

// let i = 5

// while (i <= 10) {
//   console.log("i =" , i)
//   i++
// }


// Question (Guess the game number using while loop)

// let gamNum = 25

// let userInput = +prompt("Guess the game number");

// while (userInput != gamNum) {
//   userInput = +prompt(" You Guess the wrong number, Guess again");
// }

// console.log("Congratulations, You guess the correct number");



// let fullName = prompt("Enter your full name");

// let username = "@" + fullName + fullName.length;
// console.log(username)



// Write a JavaScript program that takes a number as 
// input and checks if it is positive, negative, or zero using if-else.


// let num = +prompt("Enter Number here")

// if ( num <= 100) {
//   console.log("positive")
// } else if (num <= 100) {
//   console.log("negative")
// }


// Create a program that asks the user for a number and checks if it is divisible by 5 using if-else.

// let divisible = +prompt("Enter a number that is divible by 5")


//   if (divisible %5 === 0) {
//     console.log("divisible by 5")
//   } else {
//     console.log("negative")
//   }


// Write a JavaScript program that takes two numbers as input and determines the larger number using if-else.
// If both numbers are equal, display a message saying so.


// let num = +prompt("Enter a number")
// let num1 = 30
// let num2 = 35


// if ( num = 20) {
//   console.log("Enter a greater number")
// } else if ( num = 25) {
//   console.log("hello")
// }




// // Ask the user for two numbers
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

// // Convert the input to numbers
// num1 = Number(num1);
// num2 = Number(num2);

// // Compare the numbers
// if (num1 > num2) {
//     console.log(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//     console.log(num2 + " is larger than " + num1);
// } else {
//     console.log("Both numbers are equal.");
// }


// Create a JavaScript program that takes a student's score as input and assigns a grade 
// using the following conditions:

// 90 and above: "A"
// 80 to 89: "B"
// 70 to 79: "C"
// 60 to 69: "D"
// Below 60: "F"


// let num = +prompt("Enter your score")

// if (num >= 90 ) {
//   console.log("Congrats! You score a A grade")
// } else if (num >= 80 ) {
//   console.log("You score a B grade ")
// } else if (num >= 70 ) {
//   console.log("You score a C grade ")
// } else if ( num >=60 ) {
//   console.log("You score a D grade ")
// } else {
//   console.log("Fail")
// }







// find even and odd numbers b/w 1 to 100

// var even = []
// var odd = []

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 ) {
//     even.push(i)
//   } else  {
//     odd.push(i)
//   }
// }

// console.log(even)
// console.log(odd)



// let foods = ["Apple" , "Banana" , "Qiwi" , "Grapes" ]

// for (let i = 0; i < foods.length; i++) {
//   document.write( i + " -- " + foods[i] + " <br / >")
// }

// Write a JavaScript program that prints all even numbers from 1 to 50 using a for loop.

// for (let i = 1; i <=50; i++) {
//   if( i % 2 != 0) {
//     console.log(i)
//   }
// }

// let arr = [10 , 20 , 10]

// let sum = 0

// for ( let value of arr) {
//   sum += value
// }

// let avg = sum / arr.length
// console.log("Average marks of class = " + avg + " ")
 



// let arr = [ "Blomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"]

// // arr.shift(1)
// // arr.splice(2,1,"Ola")
// arr.push("Amazon")

// console.log(arr);


// function myFunction() {
//   console.log("Hello..My Name is Taha Hussain")
//   console.log("I'm learning JS");
// }

// myFunction();
// myFunction();


// function sum( a,b ) {
//   return a + b
// // }
// function sum(x ,y) {
//  return x * y
// }

// const arrowSum = (x,y) => {
//   console.log(x * y)
// } 

// NESTED LOOP

// let firstName = ["Banana" , "Apple" , "Mango" , "Grapes"]

// let lastName = ["Yellow" , "Red" , "Yellow" , "Green"]

// let fullName = []

// for(let i = 0; i < firstName.length; i++) {
//   for (let j = 0; j < lastName.length; j++) {
//     fullName.push(firstName[i] + " " + lastName[j]);
    
//   }
// }

// console.log(fullName);



// for (let i = 0; i < 3; i++) {  // Outer loop
//   console.log(`Outer loop iteration: ${i}`);
//   for (let j = 0; j < 2; j++) {  // Inner loop
//       console.log(`   Inner loop iteration: ${j}`);
//   }
// }


// let matrix = [
//               [1 , 2 , 3 ] ,
//               [4 , 5 , 6 ] ,
//               [7 , 8 , 9 ]

// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++){
//     console.log(matrix[i][j]);
    
//   }
// }


// CHAPTER 19 : LOOPS => FLAGS 
// Example

// let arr = ["karachi" , "lahore" , "quetta"]

// let flag = false;

// for(let i = 0; i < arr.length; i++) {
//  if(arr [i] == "karachi") {
//   flag = true
//   console.log("mil gaya");
//  }
  
// }
 
// if (flag) {
//   console.log("mil gaya");
  
// } else {
//   console.log("nhi mila");
  
// }


// Flags prompt Example

// let arr = ["karachi" , "lahore" , "quetta"]
// let a = prompt("Enter the city")

// let flag = false 

// for (let i = 0; i < arr.length; i++) {
//   if( arr[i] == a) {
//     flag = true
//   }
// }

// if (flag) {
//   console.log("Mil gaya");
  
// } else {
//   console.log("Nhi mila");
  
// }


// Break example


// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if ( i === 4) {
//   break
//   }
  
// }



// 1
// Write a for loop that iterates through a list of numbers and sets a flag to True 
// if a negative number is found.

// let numbers = ( 10 , 21 , 32 , 43 , 55 , 60)
// let a = +prompt("Enter a number");

// let flag = false

// for (let i = 0; i < numbers.length; i++) {
//   if( numbers[i] == a) {
//     flag = true
//   }
// }

// if(flag) {
//   alert("Valid");
  
// } else {
//   alert("Invalid")
// }



// let a = prompt("Enter your City")
// let cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta"]

// let flag = false

// for (let i = 0; i < cities.length; i++) {
//   if (cities[i] === a) {
//     flag = true
  
//   }
// }

// if(flag) {
//   console.log("Mil gaya");
// } else {
//   console.log("Nhi mila");
  
// }



// let cities = ["karachi" , "Lahore" , "Islamabad" , "Quetta"]
// let city = prompt("Enter the city")
// let flag = false

// for( let i = 0; i < cities.length; i++) {
//   if(city === cities[i]){
//     console.log("Match");
//     flag = true
//     break
//   }
  
// }

// if(flag === false) {
//   console.log("Not match");
  
// }




// Create an array named fruits containing "apple", "banana", and "cherry".

// let arr = ["apple" , "banana" , "cherry"]

// Add "orange" at the end of the fruits array.

// arr.push("orange")


// Remove the first element of the fruits array.

// arr.shift(0)

// console.log(arr);

// Find the index of "banana" in the fruits array.

// arr.indexOf("banana");

// console.log(arr);

// Check if "grape" is present in the fruits array.


// let a = prompt("Enter fruit")

// let flag = false

// for( let i = 0; i < arr.length; i++) {
//   if( arr[i] === a ) {
//     console.log("Match");
//     flag = true;
//     break
//   }
// }

// if (flag === false) {
//   console.log("Not match");
// }


// Finding the index of an element:

// let arr = ["apple" , "banana" , "cherry"]

// let index = arr.indexOf("banana");
// // console.log(index); 

// let arr = [1 , 2 , 3, 4 ,45 , 56 ,75 ]

// let a;

// do {
//   a = +prompt("enter a number")
//   arr.push(a)
// } while (a != 0 );
// console.log(arr);



// Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.


// let a = prompt();
// let colours = ["red" , "yellow" , "green" , "purple"]

// colours.splice(1 , 1 ,"black")

// console.log(colours);


// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
// if (cityToCheck === cleanestCities[i]) {
// alert("It's one of the cleanest cities");
// } 
// }


// let a = prompt("Take attendence")
// let studentNames = ["ahmed" , "ali" , "osama" , "taha" , "usman" , "daniyal"]
// let flag = false

// for( let i = 0; i < studentNames.length; i++) {
//     if ( studentNames[i] === a) {
//         console.log("Present");
//         flag = "true"
//     }
// }

// if (flag === false) {
//     console.log("Absent");
    
// }


// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];

// for( let i = 0; i < firstNames.length; i++) {
//     for( let j = 0; j < lastNames.length; j++) {
//         // console.log(firstNames[i] + " " + lastNames[j]);
//         fullNames.push(firstNames[i] + lastNames[j]);
        
//     }
// }

// console.log(fullNames);


// let a = +prompt("enter a num 1")
// let b = +prompt("Enter num 2")

// let sumNumbers = a - b;

// console.log(sumNumbers);



// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// let slicedFruits = fruits.slice(1, 4);

// console.log(slicedFruits); // Output: ["banana", "cherry", "date"]
// console.log(fruits); // Original array remains unchanged




// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
// //   console.log(matrix);

//   console.log(matrix[0][1]); // Output: 2
//   console.log(matrix[2][2]); // Output: 9
  



// for ( let i = 1; i <= 3; i++) {
//     for ( let j = 1; j <= 2; j++) {
//         console.log(i , j);
        
//     }
// }



// PALINDROME METHOD using method



// let word = "civic"
// let word2= word.split("").reverse().join('')

// if ( word === word2) {
//   console.log("this is palindrom");
  
// } else {
//   console.log("Unmatched");
  
// }



// PALINDROME METHOD using for loop



// let word = "level"

// let word2 = ""

// for ( let i = word.length-1; i >= 0; i--) {
//   word2 += word[i]
// }

// console.log(word,word2);

// if ( word === word2) {
//   console.log("this is palindrome");
  
// } else {
//   console.log("This is not");
  
// }


// PALINDROME METHOD using for loop and prompt



// let word = prompt("Enter any palindrome words")
// let word1 = ""

// for ( let i = word.length-1; i >= 0; i--) {
//     word1+=word[i]
// }

// console.log(word, word1);

// if ( word === word1) {
//     console.log("This is palindrome word");
    
// } else {
//     console.log("This is not a palindrome word");
    
// // }

// function greet () {
//     let name = document.getElementById("name").value;
//     let str = "Hello " + name + " how may I help you"
//     document.getElementsByClassName('greet')[0].innerHTML = str;
 
// }




// let str = "1233456"

// let result = Array.from(str , toNum)

// function toNum(x) {
//     return Number (x)
// }

// console.log(result);




// function submit() {
//     let input = document.getElementById("input-value")
//     console.log(input.value);
    
// }



// Upper Case

// let str = "saylani"

// console.log(str.toUpperCase());


// Lower case

// let num = prompt("enter")

// console.log(num.toLowerCase());


//  how to Find index of


// let str = "Saylani"

// console.log(str.indexOf("i"));


// // eval string

// let input = document.querySelector("#input")
// let btn = document.querySelector("#btn")

// btn.addEventListener("click" , function() {
//     let result = eval(input.value)
//     console.log(result);
    
// })


// sub string


//  let display = document.getElementById("input")

//  let delbtn = document.getElementById("btn")

//  delbtn.addEventListener("click" , function() {
//      let result = display.value
//      display.value = result.substring(0 , result.length-1) 
//  })


// for each loop


// var names = ["taha" , "hussain" , "ali" , "muhammed" , "umer"]


// names.forEach(general)

// function general(value , index) {
//     document.write( index + "- "  + value , "<br />") 
// }




// event

// let display = document.getElementById("btn")

// display.addEventListener("click" , function(event) {
//     console.log(event.target);
    
// })

// event example

// let display = document.getElementById("btn")

// let show = document.getElementById("hell")

// let oui = document.getElementById("class")

// display.addEventListener("click" , function(event){
//     console.log("Hello! how cam I help you");
    
// })

// show.addEventListener("click" , function(event){
//     console.log("Ramadan Mubarak");
    
// })

// oui.addEventListener("click" , function(event){
//     console.log("Hello!");
    
// })


// remove example


// let display = document.getElementById("btn")


// display.addEventListener("click" , function(event){
//     event.target.remove()
// })





// function myName(fullname , lastname) {
//     console.log("Hello" + fullname + lastname);
    
// }

// myName(' taha' , ' hussain')



// function sum(a , b) {
//     console.log(a + b +'<br>');
    
// }

// sum ( 12 , 36 );
// sum ( 19 , 16 );
// sum ( 12 , 16 );
// sum ( 12 , 26 );
// sum ( 12 , 46 );
// sum ( 12 , 56 );


// document.write("total subjects = 5 <br> " + "total marks = 500" + '<br>' + '<br>')

// function subjects(hindi , English , urdu , maths , physics)  {
//      let a =  hindi + English + urdu + maths + physics
//      return a;
// }

// let b = subjects(50,69,80,99,90)
// document.write("Marks Obtained = " + b + '<br>')

// function percantage(tm) {
//     let c = tm/500*100
//     return c;
// }

// let d = percantage(b);
// document.write("Percantage : " +d+ '<br>') 


// let str = "civic"

// function myFunction() {
//     let str = reverse("").split('').join('')
// }

// console.log(myFunction , str);


// DOM examples


//question  Create a h2 heading element with text "hello javascript" and add from Apna college to this text using jS


// let text = document.querySelector("h2")

// console.log(text.innerText + " from Apna college");



// Question Create 3 divs from common class name "box" and access them and add some unique text in to them

// let boxs = document.querySelectorAll(".box")


// let idx = 1
// for (div of boxs) {
//     div.innerText = "hello " + idx
//     idx++;
// }



// let head = prompt("Enter player 1")
// let tail = prompt("Enter player 2")

// let toss = Math.floor(Math.random() * 2)

// if ( toss == 0) {
//     Swal.fire({
//         title: `${head} head win`,
//         text: "You win the toss!",
//         icon: "success"
//       });
    
// }
// else {
//     Swal.fire({
//         title: `${tail} tail win`,
//         text: "You win the toss!",
//         icon: "success"
//       });
// }


// Factorial of 5

// function factorial(n) {
//     let result = 1;
//     for (let i = n; i > 0; i--) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5)); // Output: 120




// let num = 10.5

// console.log(Math.round(num));   .5 ko dekh raha hai .5 hoga to 1 num aaga barhaga
// console.log(Math.floor(num)); . sa phla ki value shoe karaga
// console.log(Math.ceil(num));   jo actual value hogi us sa 1 num ziada batye ga


// console.log((Math.random()* 999 ).toFixed(0));    999 means 998 tk aai gi value 1 num kam hojaiiga  ,  tofixed is use for jb . ka bad ki value remove karni ho



// var para = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias," +
//            "repudiandae! Pariatur expedita illum dignissimos quisquam, amet aspernatur temporibus reprehenderit facilis similique!" +
//            "Dolorem veritatis facere est corrupti quo vitae molestiae asperiores."


// var convert = para.split("").join("").toUpperCase()

// console.log(convert);



// floor practice question

// var numbers = [3.8, 7.6, 9.2, 5.4];

// let convert = numbers.map(Math.floor)

// console.log(convert);


// Math.random example

// 1.

// var randomNum = Math.floor(Math.random() * 11); 
// console.log(randomNum);

// 2.

// var colors = ["red", "blue", "green", "yellow"];

// var select = colors[Math.floor(Math.random() * colors.length)]

// console.log(select);


// var para = "hello my name is taha hussain"
// var test = para.split(' ')

// for(var i = 0; i < test.length; i++) {
//     test[i] = test[i] [0].toUpperCase() + test[i].slice(1);
    
// }

// var final = test.join(' ')

// document.write(final)


// Password Generator

// let str = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
// let convert = ' '
// let len = +prompt("Enter password")


// for( let i = 0; i < len; i++) {
//     convert += str[Math.floor(Math.random() * str.length)]
// } document.write(convert)









// find the amximum value in the given array

// let arr = [18 , 98 , 45 , 69 , 93 , 92 , 70]

// let toppers = arr.filter((val) => {
//     return val > 90
// })

// console.log(toppers);



// convert str into numbers


// let str = '78'

// let num = parseInt(str)

// console.log(typeof(num));




// convert num to string


// var num = 10

// var str = num.toString()
// 
// console.log(typeof(str));



// Controlling the length of decimals


// var num = Math.random() * 3
// console.log(num.toFixed(2))


// take out the current date and time 


// let time = new Date()
// let copy = time.toString().slice(16,25)
// console.log(copy);



// finding out your the curret day


// var time = ['sun' , 'mon' , 'tues' , 'wed' , 'thurs' , 'fri' , 'sat' , 'sun']

// var copy = new Date().getDay ()

// console.log(time [copy]);


// var time = new Date().getTime()
// var dob = new Date(prompt('Enter your date of birth')).getTime()
// var age = time - dob
// var formula = age / (1000 * 60 * 60 * 24 * 365)
// console.log(`my age is ${Math.floor(formula)}`)



// function myName(write) {
    
//     return (`${write} just login`)
    
// }

// console.log(myName('Taha Hussain'));








// dom topics

// let newbtn = document.createElement("button")

// newbtn.innerText = "click me!"

// let val = document.querySelector('p')

// val.after(newbtn)


// let newHeading = document.createElement("h1")
// newHeading.innerHTML = "<i>Hello, I'm new!</i>"

// document.querySelector("body").prepend(newHeading)

// newHeading.remove();


// let newBtn = document.createElement("button")
// newBtn.innerText = "click me!"

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn)


// for changing the class


// let div = document.querySelector('div')

// console.log(div ,setAttribute("class" , "newclass"));



// let id = document.getElementById('myid')


// id.addEventListener('click' , () => {
//     console.log('hello');
    
// })


// id.addEventListener('click' , () => {
//     console.log('hello');
    
// })

// id.addEventListener('click' , () => {
//     console.log('hello, to my world');
    
// })




// // 1. Function to check if a number is even or odd
// function isEvenOrOdd(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

// or by forloop

// for ( let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
        
//     }
// }



// 2. Function to find the largest number in an array
// function findMax(arr) {
//     return Math.max(...arr);
// }

// 3. Function to calculate the factorial of a number
// function table(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * table(n - 1);
// }

// console.log(table(5));


// // 4. Function to reverse a string
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }


// // 5. Function to count vowels in a string
// function countVowels(str) {
//     const vowels = "aeiouAEIOU";
//     return str.split("").filter(char => vowels.includes(char)).length;
// }

// // 6. Function to check if a number is prime
// function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// // 7. Function to remove duplicates from an array
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// // 8. Function to capitalize the first letter of each word in a sentence
// function capitalizeWords(sentence) {
//     return sentence
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");
// }

// or

// let para = "hello my name is taha hussain"
// let test = para.split(' ')

// for (let i = 0; i < test.length; i++) {
    
//     test[i] = test[i][0].toUpperCase() + test[i].slice(1)
// }

// let final = test.join(' ')

// document.write(final);





// /    / 9. Function to find the sum of all numbers in an array
// function sumArray(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
// }

// console.log(sumArray([10 , 20 , 30]));

// function sumArray(sum) {
    
//     return sum.reduce(function(sum , num) {
//         return sum + num
//     } , 0)
// }

// console.log(sumArray([10 , 20 , 40]));



// // 10. Function to generate a random number between a given range
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomNumber(1 , 10));



// // 11. Function to merge two arrays and remove duplicates
// function mergeUnique(arr1, arr2) {
//     return [...new Set([...arr1, ...arr2])];
// }

// // 12. Function to sort an array in ascending order
// function sortArray(arr) {
//     return arr.sort((a, b) => a - b);
// }

// // 13. Function to check if a string is a palindrome
// function isPalindrome(str) {
//     const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//     return cleaned === cleaned.split("").reverse().join("");
// }

// // 14. Function to convert Fahrenheit to Celsius
// function fahrenheitToCelsius(f) {
//     return ((f - 32) * 5) / 9;
// }

// // 15. Function to convert Celsius to Fahrenheit
// function celsiusToFahrenheit(c) {
//     return (c * 9) / 5 + 32;
// }

// // 16. Function to find the longest word in a sentence
// function longestWord(sentence) {
//     return sentence.split(" ").reduce((longest, word) => 
//         word.length > longest.length ? word : longest, ""
//     );
// }

// // 17. Function to check if an array is sorted in ascending order
// function isSorted(arr) {
//     return arr.every((val, index) => index === 0 || arr[index - 1] <= val);
// }

// // 18. Function to generate Fibonacci sequence up to n terms
// function fibonacci(n) {
//     let sequence = [0, 1];
//     for (let i = 2; i < n; i++) {
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }
//     return sequence.slice(0, n);
// }

// // 19. Function to count occurrences of each element in an array
// function countOccurrences(arr) {
//     return arr.reduce((acc, curr) => {
//         acc[curr] = (acc[curr] || 0) + 1;
//         return acc;
//     }, {});
// }

// // 20. Function to check if a given string is an anagram of another
// function isAnagram(str1, str2) {
//     const formatStr = str => str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
//     return formatStr(str1) === formatStr(str2);
// }

// // Example Usage
// console.log(isEvenOrOdd(4)); // "Even"
// console.log(findMax([1, 5, 3, 9, 2])); // 9
// console.log(factorial(5)); // 120
// console.log(reverseString("hello")); // "olleh"
// console.log(countVowels("javascript")); // 3
// console.log(isPrime(17)); // true
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
// console.log(capitalizeWords("hello world")); // "Hello World"
// console.log(sumArray([1, 2, 3, 4, 5])); // 15
// console.log(randomNumber(1, 10)); // Random number between 1 and 10
// console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
// console.log(sortArray([5, 3, 8, 1])); // [1, 3, 5, 8]
// console.log(isPalindrome("racecar")); // true
// console.log(fahrenheitToCelsius(100)); // 37.78
// console.log(celsiusToFahrenheit(0)); // 32
// console.log(longestWord("The quick brown fox jumps over the lazy dog")); // "jumps"
// console.log(isSorted([1, 2, 3, 4])); // true
// console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
// console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "banana"])); // { apple: 2, banana: 3, orange: 1 }
// console.log(isAnagram("listen", "silent")); // true






// let arr = [3, 4 , 5 , 6 , 2]

// arr.forEach((num) => {
//     console.log(num*num);
    
// })



// map example

// let arr = ["karachi" , "lahore" , "islamabad" , "multan"]

// let newArr = arr.map ((value) => {
    
//     return value
    
// })

// console.log(newArr);


// filter example


// let num = [1 ,2 , 3 , 4 , 5]

// let evenArr = num.filter((value) => {
//     return value % 2 !== 0
// })

// console.log(evenArr);

 

// let marks = [90 , 68, 92 , 85 , 99 , 56]

// let final = marks.filter((value) => {
//     return value >= 90

// })

// console.log(final);




// let num = +prompt("Enter a number")

// let arr = []

// for ( let i = 1; i <= num; i++){
 
//     arr [ i - 1] = i
    
// }

// console.log(arr);




// let sum = arr.reduce((sum , curr) => {
//     return sum + curr
// })

// console.log(sum);


// function submitForm() {
    
//     let name = document.getElementById("name")
//     let email = document.getElementById("email")

//     if(name.value.trim() && email.value.trim()) {

//     console.log(email.value);
//     console.log(name.value);

//     name.value = ""
//     email.value = ""
// } else {
//     console.log("please enter a value");
    
// }

    
// }



// var day = prompt("enter day")

// switch (day) {

//     case "tuesday":
//     console.log(1);
//         break;
//  case "wednesday":
//     console.log("2");
//     break;
//     default:
//         alert("default")
    
// }



// while loop

// var i = 0 
// while (i <= 7) {
//     console.log(i);
//     i++
// }

// do while loop

// let i = 0
// do {
//     console.log(i);
//     i++
// } while (i <= 5);




// let num = [1 , 2 , 3 , 4 ]

// const newArr = num.reduce((prev , current) => {
//     return prev > current ? prev : current
// })


// console.log(newArr);









// console.log(moment().format('DD MM YY'));

// console.log(moment("02/01/2025").fromNow());





// var date = moment().format("MM-dddd-YYYY hh:m:s A")
// // date.
// console.log(date);

// var a = moment([2024, 0, 28]);
// var b = moment(new Date());
// let result = a.diff(b, 'days') // "a day ago"

// console.log(result);

// var start =  moment().format([2024 , 6 , 20])

// var end = moment().format([2024 , 6 , 25])

// end.from(start)
// end.from(start , true)


// var start = moment([2007, 0, 5]);
// var end   = moment([2007, 0, 10]);
// end.from(start);       // "in 5 days"
// let result = end.from(start, true);

// console.log(result);


// let date = new Date()

// console.log(date.toJSON());




let clock = document.getElementById('clock')

setInterval (() => {

let now = moment().format('hh:mm:s a');

clock.innerText = now

},1000)











































































































































































































































































































































































































































































































































