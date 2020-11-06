 

 function printSquare(number){
    let star = ""
     for( let i = 0; i < number; i++){
         for ( let j = 0; j < number; j++){
             star+="*"
         }
         star+="\n"
     } console.log(star)
 }

 printSquare(5);



function printBox(x,y){
    let box = ""
    for( let i = 1; i <= x; i++){
        for(let j = 1; j<= y; j++){
            if(i === 1 || i === x || j === 1 || j === y){
                box += "*"
            }else{
                box += " "
            }
        }
        box += "\n"
    }
    console.log(box)
}

 printBox(6,4);



