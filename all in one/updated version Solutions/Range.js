// to print all the numbers in range i to 1000 which ends by 7
var arr = [];
for (var i = 1; i<=1000; i++ ) {
  if (i % 10 == 7) {
    arr.push(i);
  }
}
console.log(arr.join(" "));
