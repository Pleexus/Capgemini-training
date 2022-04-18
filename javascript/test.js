
// alert("Hello Prajwal");
// *****************************
// var youLikeMeat = false;

// if(youLikeMeat){

//     document.write("HEre is the Meaty menu...");
// }
// else{
//     document.write("You hate Meat");
// }
// *****************************

// var MyAge = 9;

// if(MyAge>30){
//     document.write("you are over 30!");
// }
// else if(MyAge >20){
//     document.write("you are over 20!");
// }
// else if(MyAge >10){
//     document.write("you are over 10!");
// }
// else{
//     document.write("You are not over 10!");
// }

// *****************************

// var MyAge = 14;
// if(MyAge>= 18 && MyAge <=30){
//     document.write("You can come!");
// }
// else{
//     document.write("you ain't coming");
// }

// *****************************

// var age =5;
// //while condition is true
// while(age<10){
//     console.log("your age is less than 10");
//     age++;
// }
// document.write("you are now over 10");

// *****************************

// var age =5;
// //for (index var; condition ; incrementor)
// for(age =5; age< 10; age++){
//     console.log("your age is less than 10");
    
// }
// document.write("you are now over 10");

// *****************************

// var links = document.getElementsByTagName("a");
// for ( i =1;  i<=links.length; i++)
// {
//     console.log("No of links: "+ i);
    
// }
// document.write("you are now over 10");

// *****************************

// for(i = 0; i< 10; i++){
    
//     //skips 5 and 3
//     if(i === 5 || i ===3){
//         continue;
//     }
//     console.log(i);
//     if(i==7){
//         break;
//     }
   
// }
// console.log("i have broken out of loop");

// *****************************

// var links = document.getElementsByTagName("a");

// for(i =0; i<links.length; i++){
//     links[i].className = "link: " + i;
// }

// *****************************
// var average =0;
// function getAverage(a,b){
//     average = (a+b)/2; //local var
//     console.log(average);
//     return average;
// }
// // additional call parameters are ignored
// var myResult = getAverage(7,12);  //global var

// function logResult(){
//     console.log("The Average is "+ myResult+ " inside the function.");
// }
// logResult();

// *****************************

// var a = 7;
// var b = 5;
// console.log(a+b);
// console.log(Math.round(7.8));
// console.log(Math.PI);

// *****************************

// var a = "apple";
// var b = 5;
// // console.log(a*b); //returns NaN (Not a Number)
// if(!isNaN(a)){
//     console.log("that ain't even a number");
// }
// else{
//     console.log("Meaning of life is: "+ (a+b));
// }

// *****************************

// var MyString = 'I\'m a "fun" ninja string';
// console.log(MyString); // returns I'm a "fun" string
// console.log(MyString.length);
// console.log(MyString.toUpperCase());
// console.log(MyString.indexOf("string")); // returns -1 if not found

// if(MyString.indexOf("ninja")===-1){
//     console.log("the word ninja is not in the string");
// }
// else{
//     console.log("the word ninja starts at "+ MyString.indexOf("ninja"));
// }
// var str1 = "abc";
// var str2 = "Bcd"; // a is greator than B in js
// console.log(str1 <str2); 

// *****************************

// var myArray = new Array();
// myArray[0] = 8;
// myArray[1] = "hello";

// var myCar = new Object();
// myCar.maxSpeed =50;
// myCar.driver = "PRajwal";
// myCar.drive = function(){ console.log("now driving");};
// myCar.drive();

// var myCar2= {
//     maxSpeed: 70,
//     driver: "notPRaj", 
//     drive: function(speed,time){
//          console.log(speed*time);
//         } 
//     };

// console.log(myCar2.maxSpeed);
// myCar2.drive(50,3);

// *****************************

// // console.log(this);
// var myCar1= {
//     maxSpeed: 70,
//     driver: "notPRaj", 
//     drive: function(speed,time){
//          console.log(speed*time);
//     },
//     test : function(){
//         console.log(this); //refers to myCars1
//     }
//  };
// var myCar2= {
//     maxSpeed: 70,
//     driver: "notPRaj", 
//     drive: function(speed,time){
//          console.log(speed*time);
//     },
//     test : function(){
//         console.log("driver name is "+ this.driver); //refers to myCars2
//     }
//  };
//  var myCar3= {
//     maxSpeed: 70,
//     driver: "Prajwal", 
//     drive: function(speed,time){
//          console.log(speed*time);
//     },
//     test : function(){
//         console.log(this); //refers to myCar3
//     }
//  };
// myCar1.test();
// myCar2.test();
// myCar3.test();
// console.log(myCar2.maxSpeed);
// myCar2.drive(50,3);

// *****************************


//constructor
// var Car = function(maxSpeed,driver){
//     this.maxSpeed = maxSpeed;
//     this.driver = driver;
//     this.drive = function(speed,time)
//     {
//         console.log(speed*time);
//     };
//     this.logDriver = function(){
//         console.log("driver name is "+ this.driver);
//     };
// }

// var myCar = new Car(70, "Prajwal");
// var myCar1 = new Car(20, "Hu tao");
// var myCar2 = new Car(30, "Shenhe");
// var myCar3 = new Car(60, "Ganyu");

// myCar.drive(30,5);
// myCar3.logDriver();

// *****************************
// DATE 
// var myDate = new Date; //current date time 
// console.log(myDate);
// var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
// var myFutureDate = new Date(2515, 0, 31, 10, 30, 15);
// console.log(myPastDate);
// console.log(myFutureDate);
// var birthday = new Date(2000, 2, 23, 12, 00, 30);
// var birthday2 = new Date(2000, 2, 23, 12, 00, 30);
// console.log(birthday.getMonth()); //0-11
// console.log(birthday.getFullYear());
// console.log(birthday.getDate()); 1-31
// console.log(birthday.getDay()); //0-6
// console.log(birthday.getHours()); //0-23
// console.log(birthday.getTime());

// if(birthday == birthday2){
//     console.log("Birthdays are equal");
// }
// else{
//     console.log("Birthdays are not equal");
// }

// *****************************
