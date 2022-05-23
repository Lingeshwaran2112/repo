//alerting
// alert("Hello I am Learning Javascript");

// //logging
// console.log("I am Build Javascipt");

//var let const
//var methode
// var msg = "Heloo everybody, im frontend developer";
// alert(msg);
// console.log(msg);

/* Rules
        1. no javascript keywords name;
        2. shold not start with number;
        3. no space $ no -
        4. Its case -sensitive
        5. use meaningful name.
        6.Camel case only use = className
*/

//let methode

// let name = "spark";
// let mes = "My name is " + name + " It Is The beginneing Program Of Javascript"
// console.log(mes);
//let keyword la name mention pannni asignment opertaor use panii value ah change pana mudium
// let name = "spark";
// name = "Sparklingaa";
// let mes = "My Full Name is " + name + " i am a full stack developer ";
// console.log(mes);

//const methode
//const keyword la name change pana mudiyathu
//  const name = "SPARK";
// //  name = "Sparklingaa";
//  const mes = "My Full Name is " + name + " i am a full stack developer ";
//  console.log(mes);

//let var const in same methode
// var name ="Spark ";
// let dob ="21-12-1996";
// const mes = "My Full Name is " + name + "  my date-of birth is " + dob + " i am a full stack developer "
// console.log(mes);

//concordination
//let name = "spark";
// let mes = "My name is " + name + " It Is The beginneing Program Of Javascript"
// console.log(mes);

//Datatypes

// let firstName = "Spark" //string
// let age = 25; //integer
// let lastName = "undeifind"
// let isYoung = true; //boolean
// let trophy = null ; // null

//object
//object methode la elam curely brasis kula varanum
// let person = {
// name : "priya",
// age : 22,
// isshealive : "true",
// gender : "female",
// address: "madurai, tamilnadu, india"
// };

// //1st way of get answer
// console.log(person);
// console.log(person.name);
// console.log(person.gender);

// //2nd way of get answer

// console.log(person["age"])
// console.log(person["address"])

//3rd methode

// let person1 = {
//         name : "priya",
//         age : 22,
//         isshealive : "true",
//         gender : "female",
//         address: "madurai, tamilnadu, india",
//         sibling : {
//                 brother : "bala",
//                 sister : "gabby"
//         }
//         };
//         console.log(person1.sibling.brother);
//         console.log(person1.sibling.sister);


//Javascript Arrays
// //Array to use Square bracket []

// let favColors =["red", "white", "black"]; //array

// favColors[4] = "green"
// console.log(favColors[0]);
// console.log(favColors[1]);
// console.log(favColors[2]);
// console.log(favColors[4]);
// console.log(favColors);
// console.log(favColors.length);


//javascript functions
// function greetUser(){
//     //set of statement
//     let name = "Anbu";
//     let msg = "Hello " + name +"  How Are You?";
//     console.log(msg);
// };
// greetUser( );

// function greetUser(name){
//         //set of statement
   
//         let msg = "Hello " + name +"  How Are You?";
//         console.log(msg);
//     };
//     greetUser("Anbu" );//inga thara value arrguments nu name

    
// function greetUser(firstName, lastName){
        
//         let msg = "Hello " + firstName +" and " + lastName + "  How Are You?";
//         console.log(msg);
//     };
//     greetUser("Anbu","raj" );
//     greetUser("Vijay", "antony");
    
//Add The Numbers

// function add(number1, number2){
//         console.log(number1 + number2);
// };
// add(45,55);

// //multipy the numbers

// function multible(number1, number2){
//         console.log (number1 * number2)
// };
// multible (20, 6);

// //Minus The Values

// function minus (number1, number2){
//         console.log (number1 / number2);
// };
// minus (5000, 2000);

// //divide the value 

//javscript opperatoors.;

// variable + opperatos;

// 1..Arithmatic operater;
// 2..comparison operator;
// 3.. Assignment Operator;
// 4..Logical Opearator;
// 5..Bitwise Opperator;

//arithmatic operation
let number1 = 25 ;
let number2 = 35 ;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);