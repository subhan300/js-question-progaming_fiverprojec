
let waterBill=20
let interetBill=15

let months=Number(prompt("enter no of months"))
let avgBill=0
let totalBill=0
let electricityBill;
let TotalElectricityBill=0
let otherBill=0

let totalWaterBill=waterBill*months
let totalInternetBill=interetBill*months




// let x=[
// 68.63,
// 89.25 ,
// 132.53, 
// 93.53 ,
// 63.22,
// ]
for(let i=0;i<=months-1;i++){
    
    electricityBill=Number(prompt("enter electric bill") )
     TotalElectricityBill +=electricityBill
    //  console.log(" total electricity bill : "  + TotalElectricityBill )
     otherBill +=waterBill+interetBill+electricityBill+ (20*(waterBill+interetBill+electricityBill)/100)
    

}
let TotalBill=totalWaterBill+totalInternetBill+otherBill+TotalElectricityBill

console.log("water bill : " + totalWaterBill)
console.log("Internet Bill "+totalInternetBill)
console.log("electricity  bill : "+TotalElectricityBill )
console.log( " other bills : "+otherBill)
console.log("Total bill : "+TotalBill)
avgBill=(totalWaterBill+totalInternetBill+otherBill+TotalElectricityBill)/months
console.log("average bill : "+avgBill.toFixed(2))