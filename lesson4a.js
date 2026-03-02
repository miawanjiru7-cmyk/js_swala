// functions with parameters -- accept arguments
function greet(name){
    console.log("hello"+ name)
}
//call the function
greet("Alice")//its accepting arguments
greet("bob")
greet("steve")
//write a js function that is accepting county_name as a parameter and log a message ,my county is + county_name
function mycounty (county_name){
    console.log("my county is :"+county_name)
}
//call you fuction
mycounty("kiambu")
//create a function called add which is acception num1 and num2 as parameters to find the sum of two numbers
function add(num1,num2){
    let answer = num1 + num2 
    console.log(`the answer is ${answer}`)
}
//call your function with arguments
add(23,45)