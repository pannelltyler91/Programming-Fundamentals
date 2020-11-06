 

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



function printBanner(message){
    let banner = ""
    for( let i = 1; i <= 3; i++){
        for(let j = 1; j <= message.length; j++){
            if(i === 1 || i === 3 || j ===1 || j === message.length + 2){
                banner += "*"
            }else{
                banner += message
            }
        }
        banner += "\n"
    }
    console.log(banner)
}

printBanner("Javascript");