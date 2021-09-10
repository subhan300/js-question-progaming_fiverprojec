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
    for(let i=0;i<number.length;i++){
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

min_max()