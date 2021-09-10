const graded_app=()=>{
    let number_of_students=Number(prompt(" enter no of students : ")) ;
    let grades_array=[]
    let avg=0
    for(let i=0;i<number_of_students;i++){
        let grade=Number(prompt(` enter grade  of student ${i+1} : `))
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