console.log("hello world");
console.log("Tanya grover");
console.log("I love javascript");
console.log(" welcome to the tanya's world");

fullName="tanya grover";
console.log(fullName);

age=56;
console.log(age);

price=99.00;
console.log(price);

//null value means nothing
x=null;
console.log(x);

y=undefined;
console.log(y);

radius=14;
console.log(radius);

//boolean values
isFollow=false;
console.log(isFollow);

//js is dynamically typed language
// this "=" equal to operator is called assignment operator. and in boolean datatype there are two types of vales that is called true and false.



//let, const, var

//let
// let Name="tanya grover";
// let age=34;
// let totalPrice=1000;
   
//VAR
// var age=24;
// var age=59;
// var age=86;
// console.log(age);

// //LET
// let age=24;
// let age=59;
// let age=86;
// console.log(age);

// //const
// const age=24;
// const age=59;
// const age=86;
// console.log(age);

const pi=3.14;
console.log(pi);

let a;
console.log(a);//// the output will be undefined by default bcz there is no value in a.

//let and const have block scope
{
    let a =5;
    console.log(a);
}
{
 
    let a =10;
    console.log(a)
}
//// when new curly braces ("{}") starts from that point new blocks starts.

// datatypes

 //  A SPECIAL CASE OF STRING DATATYPE

// const product = {
//     x : "1234"
// }
// console.log(["1234"] + 23); // to use this special case must blocks that means curly braces. inside the curly braces are called objects.

// const someone = {
//     x : "1234"
// }
// console.log(["1234"] + abcde);

// FIND TYPE OF 

// const student = {
//     name : "Tanya grover",
//     age : 21,
//     isFollow : false ,
//     marks : 699,

// };
// console.log(student);

// console.log(typeof student); // output is object. remember onething there should be space in between typeof and the next word, for example typeof student,there is space between typeof and student.

// console.log(student.name); // this is the way to find the value of particular keyword inside the object.

                                              // OR 

// console.log(student["age"]);  // this is the way to find the value of particular keyword inside the object.


// console.log(typeof student["marks"]); // this is the way to find the typeof of particular keyword inside the object.

//  student ["age"] = student ["age"] + 1;
// console.log(student ["age"]);

// student ["name"] = "Tanya grover"
// console.log( student ["name"]);

// student ["marks"] = student ["marks"] + 202;
// console.log(student["marks"]);

// student ["marks"] = "899" ;
// console.log(student["marks"]);

// student ["isFollow"] = "true";
// console.log(student["isFollow"]);



//PRACTICE QUESTION number 1


const product = {
    name : "ball pen",
    price : 270,
    offer : 5,
};

console.log(product);

console.log(typeof product);

console.log(typeof product["price"]);

console.log(product.price);

//         OR

console.log(product["price"])

// if we want to change than

product ["name"] = "gel pen";
console.log(product["name"]);

product ["price"] = product ["price"] + 80;
console.log(product ["price"]);

// PRACTICE QUESTION NUMBER 2


const profile = {
    userName : "____tanya____ ", 
    isFollow : false,
    followers : 123,
    following : 123,
};

console.log(profile);

console.log(typeof profile["isFollow"]);




