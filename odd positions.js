let length = +prompt("Enter the length of numbers");
var arr = [];
for (var i = 0; i< length; i++) {
    var no = +prompt("emter the numbers");
    arr.push(no);
}


 
function EvenOddSum(arr, n) {
    var even = 0;
    var odd = 0;
    for (let i = 0; i < n; i++)
    {
        // Loop to find even, odd sum
        if (i % 2 == 0)
            odd += arr[i];
        else
            even += arr[i];
    }
    console.log("Even index positions sum " + even);
    console.log("Odd index positions sum " + odd);
}

function OddMinMax(arr , n) {
    var max, min, new_arr = [];
    for (i = 0; i < n; i+=2) {
        new_arr.push(arr[i]);
    }
    if (new_arr == 0) {
        console.log("Odd max No"); 
        console.log("Odd min No");
    }
    else {
        min = Math.min.apply(null, new_arr),
        max = Math.max.apply(null, new_arr);
        console.log("Odd max " + max); 
        console.log("Odd min " + min);
    }
}

function EvenMinMax(arr , n) {
    var max, min, new_arr = [];
    for (i = 1; i < n; i+=2) {
        new_arr.push(arr[i]);
    }
    if (new_arr == 0) {
        console.log("Even max No"); 
        console.log("Even min No");
    }
    else {
        min = Math.min.apply(null, new_arr),
        max = Math.max.apply(null, new_arr);
        console.log("Even max " + max); 
        console.log("Even min " + min);
    }
}
EvenOddSum(arr, length);
OddMinMax(arr, length);
EvenMinMax(arr, length);
// console.log("Even positions max" + max);
// console.log("Even positions min " + min);