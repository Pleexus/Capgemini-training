/**
 * 1.	Symbols: Write a class that defines next() method to return next number from 
 * Fibonacci series. The class will have a private attributes ‘previousNo’ & ‘currentNo’.
 */

 class Fibo{
    #previousNo=Symbol();
    #currentNo=Symbol();
    constructor(){
       this.#previousNo=0;
       this.#currentNo=1;
    }
    next(){
       
        let nxt=Symbol();
        nxt = this.#previousNo+this.#currentNo;
        this.#previousNo=this.#currentNo;
        this.#currentNo=nxt;
       
        return nxt;
    }
}

let obj =new Fibo();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());

// /**
// * 2.	Iterators: Write a program that returns next Armstrong number after 
// * calling getNextArmstrong() method.
// */

const  listArmStrong=[0, 1, 153, 370, 371, 407];
const iterator = listArmStrong[Symbol.iterator]();
function getNextArmstrong(){
   
   return iterator.next().value;
}
console.log(getNextArmstrong());
console.log(getNextArmstrong());
console.log(getNextArmstrong());

// /**
// * 3.	Generators: Write a program that returns next Armstrong number after 
// * calling getNextArmstrong() method. Add functionality to reset generating 
// * Armstrong number from zero. In case, Armstrong number goes above one thousand then
// *  throw an error.
// */

function isArmstrong(num){
   let d=0;
   let n1=num;
   
   
   while(n1>0){
       d++;
       n1=Math.floor(n1/10);
   }
   let n=num;
   let arm=0;
   
   while(n>0){
       let rem = n%10;
       console.log(rem);
       arm = arm+Math.pow(rem,d);
     
       n = Math.floor(n/10);
   }
 
   if(arm==num){
       return true;
   }
   else{
       return false;
   }
}

function *getNextArmstrong(){
   let i=0;
   while(true){
       if( isArmstrong(i)){
           yield i;
       }
       if(i>1000){
           i=0;
           yield "number is too larger";
       }
       i++;
   }
}

var g = getNextArmstrong();
console.log(g.next());
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value)
console.log(g.next().value)



// /**
// * 4.	Collections: Using Set & Map, create a static data for chatting application. 
// * Here we have 2 chatrooms, every chatroom is having 3 
// * users & every user has posted different messages in a chat room. Note that one user can 
// * belong to a single chat room only. Now you need to find out how you will hold this data 
// * using Set & Map data structures. Also add functionality to get list of all users from a 
// * specific chatroom & listing down all message from a chatroom.
// */

var croom1 = new Map();
var croom2 = new Map();
// adding users and messages
croom1.set("user1", ["Hi user1", "How are you?", "I am fine", "Thank you"]);
croom1.set("user2", ["Hi user2", "How are you?", "I am fine", "Thank you"]);
croom1.set("user3", ["Hi user3", "How are you?", "I am fine", "Thank you"]);
croom2.set("user4", ["Hello user4", "How are you?", "I am fine", "Thank you"]);
croom2.set("user5", ["Hello user5", "How are you?", "I am fine", "Thank you"]);
croom2.set("user6", ["Hello user6", "How are you?", "I am fine", "Thank you"]);
//printing users and messages
var printusers= (room,name)=>{
    console.log(`Users in room name ${name} are : `);
    for(let key of room.keys()){console.log(key);}
}
var printmessages= (room,name)=>{
    console.log(`Messages in room name ${name} are : `);
    for(let value of room.values()){console.log(value);}
}
printusers(croom1,"chatroom1");
printusers(croom2,"chatroom2");
printmessages(croom1,"chatroom1");
printmessages(croom2,"chatroom2");