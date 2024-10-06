function largestNum(arr) {
    let l = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > l) {
            l = arr[i]; 
        }
    }
    return l;
}


let size = parseInt(prompt("Enter the size of the array:"));
let numbers = [];

for (let i = 0; i < size; i++) {
    let num = parseFloat(prompt());
    numbers.push(num); 
}

let largestNumber = largestNum(numbers);
document.write("The largest number is: " + largestNumber);
