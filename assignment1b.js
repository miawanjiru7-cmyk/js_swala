let income = 1000;
if (income < 5999){
    console.log("monthly contribution is 150");
}  
else if (income > 6000 && income <= 7999){
 console.log("monthly contribution is 300");
}
else if(income >7999 && income <=11999) {
    console.log("monthly contribution is 400");
}
else if ( income > 11999 && income <= 14999){
    console.log("monthly contribution is 500");
}
else if ( income > 14999 && income <= 19999){
    console.log("monthly contribution is 600");
}
else if (income > 19999 && income <= 24999 ){
    console.log("monthly contribution is 750");
}
else if ( income > 24999 && income <=29999){
    console.log("monthly contribution is 850");
}
else if (income >29999 && income <=49999){
    console.log("monthly contribution is 1000");
}
else if ( income >49999 && income <=99999){
    console.log("monthly contribution is 1500");
}
else  ( income>100000); 
    console.log("monthly contribution is 2000")
