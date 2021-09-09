


// let legacy_amount=prompt("enter legacy amount") ;
// let years_to_lived=prompt("enter years to live 1800 onwards")
// let spend_amount_even=12000
// let spend_amount_odd=12000

// let age=18
// let total_money=0
// let b=0
// while(years_to_lived<1800){
//      years_to_lived=prompt("enter again years greater than 1800")



// }
// for(let i=1800;i<=years_to_lived;i++){
//     if(i % 2==0){
//         console.log(i % 2==0)
//         legacy_amount=legacy_amount-spend_amount_even
//         total_money =legacy_amount
 
//     }
//     else{
//         age++
     
      
      
//         legacy_amount=legacy_amount-(spend_amount_odd+age *50)
//         total_money =legacy_amount
//     }
// }

// console.log(total_money)
// if(total_money>0){
//     console.log(`he will live a carefree lve and wil have ${total_money} dollars left`)
// }
// else{
//     console.log(`he will need that much money to left ${total_money}`)
// }





// let waterBill=20
// let interetBill=15

// let months=Number(prompt("enter no of months"))
// let avgBill=0
// let totalBill=0
// let electricityBill;
// let TotalElectricityBill=0
// let otherBill=0

// let totalWaterBill=waterBill*months
// let totalInternetBill=interetBill*months


// console.log(totalWaterBill+ "water bill ")

// let x=[
// 68.63,
// 89.25 ,
// 132.53, 
// 93.53 ,
// 63.22,
// ]
// for(let i=0;i<=months-1;i++){
    
//     // electricityBill=Number(prompt("enter electric bill") )
//      TotalElectricityBill +=x[i]
//      console.log(" total electricity bill : "  + TotalElectricityBill )
//      otherBill +=waterBill+interetBill+x[i]+ (20*(waterBill+interetBill+x[i])/100)
    

// }
// let TotalBill=totalWaterBill+totalInternetBill+otherBill+TotalElectricityBill

// console.log(TotalElectricityBill + "electri ity bill")
// console.log( " other bills : "+otherBill)
// console.log("Total bill : "+TotalBill)
// avgBill=(totalWaterBill+totalInternetBill+otherBill+TotalElectricityBill)/months
// console.log("average bill : "+avgBill)





//   question  3 hospital *****************************************************************************************










// let no_of_doctors=7
// let days =Number(prompt(" enter number of days : "))
// let no_of_patientsReviewed=0
// let no_of_unReviewedPatients=0

// let no_of_patientsChecked=0

// for(let i=1;i<=days;i++){
//     let no_of_patients=Number(prompt(`number of patients for day ${i}`))
//     no_of_patientsReviewed=no_of_doctors-no_of_patients
//     if(no_of_patientsReviewed<0){
//         no_of_unReviewedPatients +=no_of_patientsReviewed
//     }
//     else{
//         no_of_patientsChecked +=no_of_patients
       
//     }
   
//    if(i % 3 ==0){
//        console.log(no_of_patientsChecked )
//        console.log(no_of_unReviewedPatients )
//     //    console.log(no_of_patientsChecked )

//       console.log(no_of_patientsChecked<no_of_unReviewedPatients)
//        if((no_of_unReviewedPatients-no_of_patientsChecked) < 0){
//            no_of_doctors +=1
           
//            console.log("no of doctors increased by 1" + no_of_doctors)
//        }
//    }


// }


// console.log(" no of doctors " + no_of_doctors)
// console.log("NUMBER OF REVIEWD : " + no_of_patientsChecked)

// console.log("NUMBER OF UNREVIEWD : " + no_of_unReviewedPatients)




// *************************************************************************************



//  no of question 4 


const power=()=>{
    
    let n=Number(prompt("enter number "))
    let p=Number(prompt("enter power"))
    let power_result=1

    for(let i=0;i<p;i++){
       
        power_result *=n


    }
    console.log(`the result you got of ${n} power ${p} is ${power_result} `)
}





// power()

// ********************************************************************************************88

// question 5 



let number=[]
const min_max=()=>{
    let number_of_inputs=Number(prompt("enter no of inputs "))

   
    let no_of_index=0
    let max=number[no_of_index]
// this will put numbers in array 
    for (let i=0;i<number_of_inputs;i++){
        let input_number=Number(prompt(`enter ${i+1}  number :  `))
        number.push(input_number)
    }


    
    // this is to find maximum
    for(let i=0;i<number.length-1;i++){
        if(number[no_of_index]<number[i]){
            
            no_of_index=i
            max=number[no_of_index]
    
        }
        else{
            max=number[no_of_index]
        
        }
    }
    console.log(number)
    console.log("max : "+  max )



// this is to find minimum
let min=0
let min_index=0
for(let i=0;i<number.length;i++){
    if(number[min_index]>number[i]){
        min_index=i
        min=number[min_index]
        

    }
    else{
     min=number[min_index]

    }
}

console.log("min : "+  min)

}

// min_max()



//  vowvel sum


const vowvel=()=>{
    let characters_array=[]
    let no_of_characters=Number(prompt("enter total number of charcters : "))

    for(let i=0;i<no_of_characters;i++){
        let character=prompt("enter a single character")
        characters_array.push(character)
    }

    let sum0fVowvels=0


    for(let i=0;i<characters_array.length;i++){
        if(characters_array[i]=="a"){
           sum0fVowvels +=1

        }
        else if(characters_array[i]=="e"){
            sum0fVowvels +=2
        }
        else if(characters_array[i]=="i"){
            sum0fVowvels +=3
        }
        else if(characters_array[i]=="o"){
            sum0fVowvels +=4
        }
        else if(characters_array[i]=="u"){
            sum0fVowvels +=5
        }
        else{
            
        }
    }
    console.log(` sum of vowvels is : `+sum0fVowvels)

}

// vowvel()
// let n=9
// if(n%2==0){
//     console.log( (n/2)*100 )
// }


















// sequential pairs . 

const pairs=()=>{
    let pairs_array=[]
    no_of_pairs=Number(prompt("enter total number of pairs "))
    for(let i=0;i<no_of_pairs;i++){
        let n_pair_array=[]
        let firstNo=Number(prompt(`enter ${i+1} pair numbers`))
        let secondNo=Number(prompt(`enter ${i+1} pair numbers`))
      
        n_pair_array.push(firstNo)
        n_pair_array.push(secondNo)

        pairs_array.push(n_pair_array)


    }
    let total_diff=0
    let diff=0
    // let sum1=0
    let sum_check_array=[]
    
   for(let i=0;i<pairs_array.length;i++){
      let sum1=  pairs_array[i][0] + pairs_array[i][1]
     
       sum_check_array.push(sum1)

       
       
   }
   console.log(sum_check_array)
   let swicth=0
   for(let i=0;i<sum_check_array.length-1;i++){
    
    if(sum_check_array[i]==sum_check_array[i+1]){
        console.log(`yes ,sum  value is  ${sum_check_array[i]}`)
        
    }
    else{
       diff=sum_check_array[i]-sum_check_array[i+1]
        console.log(`not , max_diff ${diff} `)
        
    }
   }
    console.log(pairs_array,"pairs")
}

// pairs()



const graded_app=()=>{
    let number_of_students=Number(prompt(" enter no of students : ")) ;
    let grades_array=[]
    let avg=0
    for(let i=0;i<number_of_students;i++){
        let grade=Number(prompt(` enter grade  of student ${i} : `))
        grades_array.push(grade)

    }
    console.log(grades_array)
    for(let i=0;i<grades_array.length;i++){
      
      if(grades_array[i]>=5){
          console.log(` ${i+1} student has done Top ${(3*10).toFixed(2)}%`)
      }
      else if(grades_array[i]>=4){
      console.log(`${i+1} student is between 4-4.99 has got percentage ${(2*10).toFixed(2)}%`)
    }
    else if(grades_array[i]>=3 ){
        console.log(`${i+1} student is between  3-3.99 has got percentage ${(2*10).toFixed(2)}%`)
      }
      else if(grades_array[i]<3){
        console.log(`${i+1} student is fail and has got percentage ${(2*10).toFixed(2)}%`)
      }

      avg +=grades_array[i]

    
    
}
console.log(`average result is ${(avg/10).toFixed(2)}`)


}

graded_app()