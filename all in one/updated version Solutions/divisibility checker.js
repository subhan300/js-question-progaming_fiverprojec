let n = +prompt("Enter how many integers you want to enter: ");
let arr = [];
for (let i = 0; i < n; i++) {
    var no = +prompt("enter numbers: ");
    arr.push(no);
}

function statistics(arr , n) {
    var two_arr = [],three_arr = [],four_arr = [], percentageof2,percentageof3,percentageof4;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            two_arr.push(arr[i]);
            percentageof2 = (two_arr.length / arr.length) * 100;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            three_arr.push(arr[i]);
            percentageof3 = (three_arr.length / arr.length) * 100; 
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 4 == 0) {
            four_arr.push(arr[i]);
            percentageof4 = (four_arr.length / arr.length) * 100; 
        }
    }
    if (percentageof2 == undefined) {
        percentageof2 = "0";
    }
    if (percentageof3 == undefined) {
        percentageof3 = "0";
    }
    if (percentageof4 == undefined) {
        percentageof4 = "0";
    }
    console.log(percentageof2+"%");
    console.log(percentageof3+"%");
    console.log(percentageof4+"%");
}

statistics(arr , n);