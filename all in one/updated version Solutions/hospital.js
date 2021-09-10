let no_of_doctors=7
let days =Number(prompt(" enter number of days : "))
let no_of_patientsReviewed=0
let no_of_unReviewedPatients=0

let no_of_patientsChecked=0

for(let i=1;i<=days;i++){
    let no_of_patients=Number(prompt(`number of patients for day ${i}`))
    no_of_patientsReviewed=no_of_doctors-no_of_patients
    if(no_of_patientsReviewed<0){
        no_of_unReviewedPatients +=no_of_patientsReviewed
    }
    else{
        no_of_patientsChecked +=no_of_patients
       
    }
   
   if(i % 3 ==0){
       console.log(no_of_patientsChecked )
       console.log(no_of_unReviewedPatients )
    //    console.log(no_of_patientsChecked )

      console.log(no_of_patientsChecked<no_of_unReviewedPatients)
       if((no_of_unReviewedPatients-no_of_patientsChecked) < 0){
           no_of_doctors +=1
           
           console.log("no of doctors increased by 1" + no_of_doctors)
       }
   }


}


console.log(" no of doctors " + no_of_doctors)
console.log("NUMBER OF REVIEWD : " + no_of_patientsChecked)

console.log("NUMBER OF UNREVIEWD : " + no_of_unReviewedPatients)
