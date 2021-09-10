let legacy_amount=prompt("enter legacy amount") ;
let years_to_lived=prompt("enter years to live 1800 onwards")
let spend_amount_even=12000
let spend_amount_odd=12000

let age=18
let total_money=0
let b=0
while(years_to_lived<1800){
     years_to_lived=prompt("enter again years greater than 1800")



}
for(let i=1800;i<=years_to_lived;i++){
    if(i % 2==0){
        console.log(i % 2==0)
        legacy_amount=legacy_amount-spend_amount_even
        total_money =legacy_amount
 
    }
    else{
        age++
     
      
      
        legacy_amount=legacy_amount-(spend_amount_odd+age *50)
        total_money =legacy_amount
    }
}

console.log(total_money)
if(total_money>0){
    console.log(`he will live a carefree lve and wil have ${total_money.toFixed(2)} dollars left`)
}
else{
    console.log(`he will need that much money to left ${total_money.toFixed(2)}`)
}
