
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

pairs()
