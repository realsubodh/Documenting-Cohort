// map, filter and arrow function
// suppose there is a proble statement, given an array, now give me back a new array in which every value is multiplied by 2.
// input array = [1,2,3,4,5,6]
// output array = [2,4,6,8,10,12]

// now one traditional approach will be like this
const input = [1,2,3,4,5,6];

/*const newArray = [];
for(let i=0; i <input.length; i++){
    newArray.push(input[i]*2)
}
console.log(newArray) */
// above one is completely fine but for the more easier and cleaner code all this drama can be done using map function

// for using map function we need one input function and one transformation function

// transformation function
function transform(i){
    return i*2;
}

// map function
const ans = input.map(transform);
console.log(ans)

// another way for writing map function
const answer = input.map(function(i){
    return i *3;
})
console.log(answer)

/* assignment
Create a map function that takes 2 inputs an array, and a transformation callback fn and transforms the array into a new one using the transformation function.
*/

// FILTER function

function filterlogic(n){
    if(n%2==0){
        return true
    }
    else{
        return false
    }
}
 
const filteranswer = input.filter(filterlogic)
console.log(filteranswer)