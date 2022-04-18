// function greetPerson(name: string){
//     var greet;
//     //if var is decalared inside if block it will be accessible outside also.
//     if(name === "Prajwal"){
//         greet = "Hello Prajwal";
//     }else{
//         greet = "hi There";
//     }
//     console.log(greet);
//     // any var declaration at any place is moved at top in js
//     // so code will work even if var greet is defined here
// }
// greetPerson("Prajwal");
//**************************************************************** 

// function greetPerson(name: string){
//     let greet;
//     if(name === "Prajwal"){
        
//         //let is block scope
//         //can't be accessed outside if block
//         greet = "Hello Prajwal";
//     }else{
//         greet = "hi There";
//     }
//     console.log(greet);
//     //let keyword doesn't hoist var declaration
//     //i.e. can't be declared after always before
//     //can't redeclare variable using let keyword in same scope
    
// }
// greetPerson("Prajwal");
//**************************************************************** 
// // use let keyword in loops
// for(let i =1; i<=5; i++){
//     setTimeout(function(){console.log(i);},1000)
// }

//**************************************************************** 

// let num1;
// const num2 = 10;
// // can't add anymore new object to obj1
// //but we can assign new values to properties
// const obj1 = {
//     name:"Prajwal"
// };
// console.log(obj1.name);
// obj1.name="DAbaby";
// console.log(obj1.name);

//**************************************************************** 

// const getArrowvalue = (m) => {
//     return 10*m;
// }
// console.log(getArrowvalue(10));

//**************************************************************** 

// var employee = {
//     id:1,
//     greet: function(){
//         setTimeout(() =>{console.log(this.id)}, 1000);
//     }
// };
// employee.greet();

//**************************************************************** 
// let percentBonus= () => 0.1;
// let getValue = function(value=10, bonus=value*percentBonus()){
//     console.log(value+bonus);
//     console.log(arguments.length)
// };
// getValue(); 
// getValue(20);
// getValue(20,30);
// // getValue(undefined ,30);

//**************************************************************** 

// let displayColors = function(message, ...colors){
//     console.log(message);
//     console.log(colors);
//     console.log(arguments.length)

//     for(let i in colors){
//         console.log(colors[i]);
//     }
// }

// let message = "list of colors";
// displayColors(message, 'Red');
// displayColors(message, 'Red', 'Blue');
// displayColors(message, 'Red', 'Blue', 'Green');

//**************************************************************** 

// let displayColors = function(message, ...colors){
//     console.log(message);
//     // console.log(colors);

//     for(let i in colors){
//         console.log(colors[i]);
//     }
// }

// let message = "list of colors";

// let colorArray = ['Orange', 'Yellow', 'Indigo'];
// displayColors(message, ...colorArray);

//**************************************************************** 

// let firstname = "Prajwal";
// let lastname = "Bing";

// let person = {
//     firstname ,
//     lastname 
// };

// function createPerson(firstname, lastname, age){
//     let fullname = firstname + " " + lastname;
//     return {
//             firstname,
//             lastname,
//             fullname,
//             isSenior : function(){
//                 return age>60;
//             }
//         }
// }

// let p = createPerson('Prajwal', 'Bisht', 32);

// console.log(p.firstname);
// console.log(p.lastname);
// console.log(p.fullname);
// console.log(p.isSenior());
// // console.log(person.firstname);
// // console.log(person.lastname);

//**************************************************************** 
// let ln = "last name";
// let person = {
//     "first name" : "Prajwal",
//     [ln]: "Bisht"
// };
// console.log(person);

//**************************************************************** 

// let employee = ["Prajwal", "Bisht", "Male"];

// let [fanme, lname, gender] = employee;

// console.log(fanme);
// console.log(lname);
// console.log(gender);

//**************************************************************** 

// let employee = {
//     fname: "Prajwal",
//     lname: "Bisht",
//     gender: "Male"
// };
// // alias 
// let {fname: f, lname: l , gender: g} = employee;

// console.log(f);
// console.log(l);
// console.log(g);

//**************************************************************** 

// let user = "Prajwal";
// let greet = `Welcome 'single' "double" ${user} to ES2015
//             this is the second line
//             and so on...

// `;

// console.log(greet);

//**************************************************************** 


// let colors = ["red", "blue", "green"];
// for(let index in colors){
//     console.log(colors[index]);
    
// }

// for(let color of colors){
//     console.log(color);
    
// }
// let letters = "ABC"; // picks on character at a time
// for(let letter of letters){
//     console.log(letter);
    
// }


//**************************************************************** 
// // let p1 = new Person();
// class Person{
//     greet(){}
// }

// let p = new Person();

// console.log(p.greet === Person.prototype.greet);


// // employee();
// // function employee(){}
// // employee();
//**************************************************************** 

// class Person{
//     constructor(name){
//         this.name = name;
//         console.log(this.name + " constructor");
        
//     }
//     static staticMethod(){
//         console.log("StaTIC mETHOD");
        
//     }
//     greetPerson(){
//         console.log("Hello " + this.name);
        
//     }
// }
// //claing constructor
// let p = new Person("Prajwal");
// Person.staticMethod();
// p.greetPerson();

//**************************************************************** 

// class Person{
//     constructor(name){
//         console.log(name +" construuctor");
        
//     }
//     getID(){
//         return 10;
//     }
// }
// class Employee extends Person{
//     constructor(name){
//         super(name); //this ensures parent is suceessfully setup
//         console.log(name+ " Employee");
        
//     }
//     getID(){
//         // return 50;
//         return super.getID(); //returns the getID in parent class
//     }
// }

// let e = new Employee("Prajwal");
// console.log(e.getID());

//**************************************************************** 

// //checking SET
// let mySet = Object.create(null);
// mySet.id = 0;
// if(mySet.id){
//     console.log("id exists");
    
// }
// //retrieve MAP
// let myMap = Object.create(null);
// myMap.name = "Prajwal";
// let val = myMap.name;
// console.log(val);

// myMap[100] = "Hello";
// console.log(myMap["100"]);

// let ob1 = {};
// let ob2 = {};

// myMap[ob1] = "World";
// console.log(myMap[ob2]);

// console.log(ob1.toString());
// console.log(ob2.toString());

//**************************************************************** 

// //only contains unique values
// let mySet = new Set();
// //object don't correspond to string hence they are unqiue
// let ob1 = {};
// let ob2 = {};
// mySet.add("hello");
// mySet.add(ob1);
// mySet.add(ob2);
// console.log(mySet.size);

// let newSet = new Set([1,2,3,4,5,5,5,5]);
// console.log(newSet.size);
// //Chaining add method
// let chainSet = new Set().add("hello").add("World");
// console.log(chainSet.size);

// //checking existence
// console.log(newSet.has(6));
// console.log(newSet.delete(1)); //true
// console.log(newSet.size);

//**************************************************************** 

// // Weak sets- handles memory properly
// let set = new WeakSet();
// let key = {};
// set.add(key);
// console.log(set.has(key));
// key =null; // now reference to key is not accessible anymore
// console.log(set.has(key));

//**************************************************************** 

// //for associating between info and values

// let myMap = new Map();
// myMap.set("fname", "Prajwal");
// myMap.set("age", 30);
// console.log(myMap.get("fname"));

// let ob1 = {};
// let ob2 = {};

// myMap.set(ob1,10);
// myMap.set(ob2,20);
// console.log(myMap.get(ob1));
// myMap.delete("fname");
// myMap.clear();
// console.log(myMap.size);
// console.log(myMap.has("fname"));

//**************************************************************** 

// //iterating Maps
// let MyMap = new Map([
//     ["fname", "Prajwal"],
//     ["lname", "Bisht"]
// ]);

// // for(let [key,value] of MyMap.entries()){
// //     console.log(`${key} -> ${value}`);
    
// // }
// for(let entry of MyMap.entries()){
//     console.log(`${entry[0]} -> ${entry[1]}`);
    
// }

// for( let value of MyMap.values()){
//     console.log(value);
    
// }

// for(let key of MyMap.keys()){
//     console.log(key);
    
// }

//**************************************************************** 

// var number = [2,3,6,8];
// number.forEach(arrayFunction);
// function arrayFunction(element,index, array){
//     console.log("arr["+index+"]= "+element);
    
// }

// for Map
// let myMap = new Map([["fname", "Prajwal"],
//                     ["lname", "Bisht"]]);
// myMap.forEach(mapFunction);
// function mapFunction(value, key, callingMap){
//     console.log(key+" "+value);
//     console.log(myMap === callingMap);
 
// }

//for Set -has same key and values
// let mySet = new Set([1,2,3]);
// mySet.forEach(setFunction);
// function setFunction(value, key, callingSet){
//     console.log(key+" "+value);
//     console.log(mySet === callingSet);

//**************************************************************** 

// // weakmap

// let myMap = new WeakMap();
// let ob1= {};

// myMap.set(ob1, "Hello World");
// console.log(myMap.get(ob1));
// ob1 = null;
// console.log(myMap.get(ob1));

//****************************************************************

// // symbols - to generate unique ID

// let s= Symbol("First symbol");
// console.log(typeof(s));
// console.log(s.toString());

// let s2 = Symbol();
// let s3 = Symbol();

// console.log(s2===s3); //we can say they are unique as returns false

// let s4 = Symbol.for('RegSymbol');
// let s5 = Symbol.for('RegSymbol'); //checks and finds s4 as it is same and retrieves its value

// console.log(s4===s5); //returns true

// console.log(Symbol.keyFor(s4));

// let fname = Symbol("FirstName");
// let person = {
//     [fname]: "prajwal";
// };
// console.log(Object.getOwnPropertySymbols(person));
// console.log(Object.getOwnPropertyNames(person));

//****************************************************************

// //symbol iterator

// // for..of --> iterator method -->symbol.iterator

// let str = "hello";
// let arr = [1,2,3];
// let num =6;
// let obj = {
//     name: "Praj"
// };
// console.log("For String -"+ typeof str[Symbol.iterator]);
// console.log("For array -"+ typeof arr[Symbol.iterator]);
// console.log("For number -"+ typeof num[Symbol.iterator]);
// console.log("For object -"+ typeof obj[Symbol.iterator]);


//****************************************************************

// let iterable = [1,2,3];

// function createIterator(array){
//     let count = 0;
//     return {
//         next: function(){
//             return count < array.length?
//             {value: array[count++], done:false}:
//             {value: undefined, done:true};
//         }
//     }
// }

// let myIterator = createIterator(iterable);
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());



// Iterable {
//     [symbol.iterator]() : Iterator
// }

// Iterator {
//     next(): IResultObj
// }
// IResultObj{
//     value: any
//     done: bool
// }

//*********************************************************

// // making object iterable
// let person = {
//     fname: "Prajwal",
//     lname: "Bisht"
// };
// person[Symbol.iterator] = function(){
//     let properties = Object.keys(person);
//     let count = 0;
//     let isDone = false;
//     let next = () => {
//         if(count>=properties.length){
//             isDone = true;
//         }
//         return {done: isDone, value: this[properties[count++]]};
//     }
//     return {next};
// }

// for(let p of person){
//     console.log(p);  
// }

//*********************************************************

// // Generators - done is set to true after yield ends and value is undefined
// function *createGenerator(){
//     yield 1;
//     console.log("after 1st yield");
//     yield 2;
    
// }

// let myGen = createGenerator();
// // used to simplify code custom iterators
// console.log(myGen.next());
// console.log(myGen.next());
// console.log(myGen.next());

// person class iteration using generators

// let person = {
//     fname: "Prajwal",
//     lname: "Bisht"
// };
// person[Symbol.iterator] = function*(){
//     let properties = Object.keys(person);
//     for(let t of properties){
//         yield this[t];
//     }
// };

// for(let p of person){
//     console.log(p);
// }

//*********************************************************

// TYPESCRIPT CODE

// var x = 10;
// var y = "hi";
// var z = true;

// //explicitly specifying type 
// var a: number = 10;
// var b: string;

//*********************************************************

//use type anotation basically
// var n1 = 10;
// // n1= "hi";

// var n2 = n1 +"hello";

//*********************************************************

// // Any type

// var info : any;
// info =10;
// info = "hello";
// info = true;

// var information;

//*********************************************************

// // Enumerations - used to give friendly name to numerical value and give specific type to variable

// enum EyeColor {Brown =1, Black, Blue};

// var myEyeColor = EyeColor.Brown;
// console.log(myEyeColor);
// console.log(EyeColor[myEyeColor]);

//*********************************************************

// Arrays and tuples 

// let strArr1 : string[] = ["hello", "ASAP ROCKY"];
// let strArr2 : Array<string> = ["hello", "ASAP ROCKY"];

// let anyArr: any[] = ["Halo", 1, true];

// // tuples used to specify element types inside the array
// // can add any number for element of type mentioned below

// let myTuples : [string, number] = ["Prajwal", 23];
// console.log(myTuples[0]);
// console.log(myTuples[1]);
// myTuples[2] = 100;
// console.log(myTuples[2]);

//*********************************************************

// class Person{
//     public fname: string;
//     public lname: string;
//     constructor(fname: string, lname:string){
//         this.fname = fname;
//         this.lname = lname;
//     }
// };

// // both the codes are equivalent to each other
// // angular syntax below
// class Person1{
//     constructor(public fname: string, lname: string){

//     }
// }

//*********************************************************
// // interafaces

// interface Person{
//     fname : string;
//     lname : string;
//     age? : number; //optional with ?
// }

// let emplyoee1: Person ={
//     fname : "Prajwal",
//     lname: "Bisht",
//     age : 22
// }
// //optional property
// let emplyoee2: Person ={
//     fname : "Aniket",
//     lname: "Das",
// }

//*********************************************************

// Decorators

// @Component({
//     selector: 'my-app',
//     template: '<h1>Coder tutorial<h1>'
// })          class AppComponent
// export class AppComponent{

// }

//*********************************************************








