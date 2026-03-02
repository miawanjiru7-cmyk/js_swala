//anonymous function= does not have a name .. its usually assigned to a variable and passed as an argument or used immediately
// example 1
const greet = function(){
    console.log(" welcome to the world of greatness")
}
//call the function using the variable name which is greet
greet()
// create an anonymous function with parameters to check the difference of two numbers
const sub = function(num,num1){
    let answer = num - num1

console.log(`the answer is ${answer}`)
}
sub(50,24)

//product
const product = function(num2,num3){
    let answer = num2 * num3

console.log(`the answer is ${answer}`)    
}
product(50,24)