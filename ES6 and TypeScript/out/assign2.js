"use strict";
/**
 * 1.	Symbols: Write a class that defines next() method to return next number from
 * Fibonacci series. The class will have a private attributes ‘previousNo’ & ‘currentNo’.
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Fibo_previousNo, _Fibo_currentNo;
class Fibo {
    constructor() {
        _Fibo_previousNo.set(this, Symbol());
        _Fibo_currentNo.set(this, Symbol());
        __classPrivateFieldSet(this, _Fibo_previousNo, 0, "f");
        __classPrivateFieldSet(this, _Fibo_currentNo, 1, "f");
    }
    next() {
        let nxt = Symbol();
        nxt = __classPrivateFieldGet(this, _Fibo_previousNo, "f") + __classPrivateFieldGet(this, _Fibo_currentNo, "f");
        __classPrivateFieldSet(this, _Fibo_previousNo, __classPrivateFieldGet(this, _Fibo_currentNo, "f"), "f");
        __classPrivateFieldSet(this, _Fibo_currentNo, nxt, "f");
        return nxt;
    }
}
_Fibo_previousNo = new WeakMap(), _Fibo_currentNo = new WeakMap();
let obj = new Fibo();
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
const listArmStrong = [0, 1, 153, 370, 371, 407];
const iterator = listArmStrong[Symbol.iterator]();
function getNextArmstrong() {
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
function isArmstrong(num) {
    let d = 0;
    let n1 = num;
    while (n1 > 0) {
        d++;
        n1 = Math.floor(n1 / 10);
    }
    let n = num;
    let arm = 0;
    while (n > 0) {
        let rem = n % 10;
        console.log(rem);
        arm = arm + Math.pow(rem, d);
        n = Math.floor(n / 10);
    }
    if (arm == num) {
        return true;
    }
    else {
        return false;
    }
}
function* getNextArmstrong() {
    let i = 0;
    while (true) {
        if (isArmstrong(i)) {
            yield i;
        }
        if (i > 1000) {
            i = 0;
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
console.log(g.next().value);
console.log(g.next().value);
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
var printusers = (room, name) => {
    console.log(`Users in room name ${name} are : `);
    for (let key of room.keys()) {
        console.log(key);
    }
};
var printmessages = (room, name) => {
    console.log(`Messages in room name ${name} are : `);
    for (let value of room.values()) {
        console.log(value);
    }
};
printusers(croom1, "chatroom1");
printusers(croom2, "chatroom2");
printmessages(croom1, "chatroom1");
printmessages(croom2, "chatroom2");
