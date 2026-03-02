//IIPE immeadiately invoked fuction expression
//the function runs immeadiately
//anything inside the function remains local without polluting the global enviroment

//example 1
(function(){
    console.log("this is an immediately invoked function")
})();

//create a self calling anonymous fuction add two numbers
(function(){
    let x = 67
    let y = 52
    console.log(x + y)
console.log(typeof(x))    
})();
//x and y are only inside life
// / outside the function, x does not exist(only available on local environment)
