// type lets you define multiple values using union, like number and string at the same time
// UNION
type GreetArg = number | string;

function greet(id:GreetArg){
    if(typeof id === "string"){
        console.log("your type is of string")
    }else{
        console.log("your type is number")
    }
}
greet(1);
greet("2")

// Intersection
type Employee = {
    name:string;
    startDate: Date;
}

interface Manager {
    name:string,
    department: string
}

type TechLead = Employee & Manager; // intersection
 
const t: TechLead ={
    name: "harkkirat",
    startDate: new Date(),
    department: "asdasdf"
}
console.log(t)

// Arrays
type numberArr = number[];

function maxVal(arr: numberArr){
    let max = 0;
    for(let i=0;i<arr.length; i++){
        max = arr[i];
    }
}
maxVal([1,2,3])

// Enums 
// enums provide easy readibility of constants. 
enum Direction{
    Up,
    Down,
    Left,
    Right
}

function DoSomething(keypressed: Direction){
    if(keypressed == Direction.Up){
        // do something logic
    }
}

DoSomething(Direction.Down);
DoSomething(Direction.Up);  

// Generics 
// makes type variable, dynamic and resusable

function identity<T>(arg:T){
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100)
console.log(output1, output2);