const power=()=>{
    
    let n=Number(prompt("enter number "))
    let p=Number(prompt("enter power"))
    let power_result=1

    for(let i=0;i<p;i++){
       
        power_result *=n


    }
    console.log(`the result you got of ${n} power ${p} is ${power_result} `)
}
power()