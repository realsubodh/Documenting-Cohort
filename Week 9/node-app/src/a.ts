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
/*function isLegal(a:number){
    if(a>=18){
        return true;
    }else{
        return false;
    }
}
const age = isLegal(13)
console.log(age) */

// fun that take another fn as input and how to add types to that
 function returnAfter1sec(fn: ()=> void){
    setTimeout(fn, 1000)
}

returnAfter1sec(function(){
    console.log("hii subu!")
}) 
// remember void will be replaced by the need of the return type of the function which is passing down


