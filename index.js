// Define a helper function to generate a random integer within a specified range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Define the range for random numbers
var minRange = 1;
var maxRange = 100;

// Generate a random number within the specified range using the helper function
var randomNumber = getRandomInt(minRange, maxRange);

// Output the generated random number
console.log("Random number between", minRange, "and", maxRange, "is:", randomNumber);
