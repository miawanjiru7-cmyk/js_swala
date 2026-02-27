// write a for loop to find the largest number in the array: [10,20,4,99,1].
 let numbers = [10, 20, 4, 45,99, 1];

let largest = numbers[0]; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("The largest number is:", largest);