let n = +prompt("Enter the number of integers you want to enter");
let arr = [];
for (let i = 0 ; i < n ; i++) {
    var no = +prompt("Enter numbers");
    arr.push(no);
}

function ZigZagSum(arr , n) {
    var even_arr = [] , odd_arr = [] , even_sum = 0, odd_sum = 0;
    for (let i = 1; i < n; i+=2) {
        even_arr.push(arr[i]);
    }
    for (let i = 0; i < n; i+=2) {
        odd_arr.push(arr[i]);
    }
    for (let i = 0; i < even_arr.length; i++) {
        even_sum += even_arr[i];
    }
    for (let i = 0; i < odd_arr.length; i++) {
        odd_sum += odd_arr[i];
    }
    var output = odd_sum - even_sum;
    console.log(even_arr);
    console.log(odd_arr);
    console.log(even_sum);
    console.log(odd_sum);
    console.log(output);
    
    
}

ZigZagSum(arr , n );