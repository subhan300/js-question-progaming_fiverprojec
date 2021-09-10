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

vowvel()