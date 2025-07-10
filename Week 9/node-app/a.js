"use strict";
// let x: number =1;   : number is the type which we give to the js
// x = "harkirat"; error, beacuse type checking is added
// console.log(x);
/*function greet(firstName: string){
    console.log("Hello "+ firstName);
}

greet("Subodh") */
// sum function
// although type inference is there, ts knows what type i need to return
/*function sum(num1: number, num2:number): number{  //explictly tells what type of return is needed
    return num1 + num2;
}

const value = sum(23,45)
console.log(value) */
// return true of false - learn type inference
function isLegal(a) {
    if (a >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const age = isLegal(13);
console.log(age);
