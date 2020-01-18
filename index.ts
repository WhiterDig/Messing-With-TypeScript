console.clear();
// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>ToDo</h1>`;

// async function verifyID(s) {
//   if(!s){
//     return false;
//   }
  
//   return s == "Dave"
// }

// async function signIn(user){
//   const x = await verifyID(user);

//   console.log(x)
// }

// signIn("Dav");

// console.log("Literally anything")

// const x = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     let ans = 3 + 11;
//     console.log(ans);
//     resolve(ans);
//   },1000
//   )
// })


//console.log("Your name is " + x.then((x)=>{console.log(x)}));

// x.then((x) => {
//   console.log(x)
// });

// const obj = {
//   id : 1,
//   name : "John",
//   status : "Dead",
//   age : 24,
//   thumbs : true
// }

// const {name, status} = obj;

// console.log(name);
// console.log(status);

// let arr = [
//   "John is dead",
//   "John is alive",
//   123,
//   true
// ]

// const [a, b, c] = arr;

// console.log(a , b , c);

// function weDave({name, id}){
//   console.log(name,id);
// }

// weDave(obj);

// function seven(obj){
//   return {
//     ...obj,
//     id : 12345
//   };
// }

// console.log(seven(obj));

// class Animal{
//   breed;
//   color;
//   size;

//   constructor(a,b,c){
//     this.breed = a;
//     this.color = b;
//     this.size = c;
//   }
// }

// class Dog extends Animal{

//   constructor(x,y,z,aa){
//     super(x,y,z);
//     this.childrenEaten = aa;
//   }

//   bark(){
//     console.log("BARK");
//   }

//   childrenEaten = 100;
// }

// class Cat extends Animal{

//   constructor(m,n,o,p){
//     super(m,n,o);
//     this.furBallsCoughed = p;
//   }
//   shit(){
//     console.log("*poop*");
//   }

//   furBallsCoughed = 10000;
// }

// let jake = new Dog("doggo","red","big",40000);
// let kricket = new Cat("kit","blank","tiny",7);

// console.log(jake,kricket);
// jake.bark();
// kricket.shit();

// function f1(){
//   console.log("vanilla");
//   return false;
// }

// function f2(){
//   console.log("potato");
//   return false;
// }

// f1()||f2()
// console.log("Clear");
// f1()&&f2()
// console.log("Clear");
// f2()||f1()
// console.log("Clear");
// f2()&&f1()
// console.log("Clear");
// let x = null;
// console.log(x || "Zach")