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

// Arrays
type numberArr = number[];

function maxVal(arr: numberArr){
    let max = 0;
    for(let i=0;i<arr.length; i++){
        max = arr[i];
    }
}
maxVal([1,2,3])