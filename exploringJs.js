
//Print Numbers

for (let number=1; number <= 10; number ++) {
  
    console.log(number);
  }

let number = 1;
while(number <= 10) {
    console.log(number);
    number++;
}

//Print a Square
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


// in class exercise 2 for 10/31/2020
for (let x = 0; x <= 20; x ++){
    if (x % 2 === 0)
    console.log(`${x} is an even number`)
    else(x % 2 !== 0)
    console.log(`${x} is an odd number`)
}

for (let x = 0; x < 10; x++){
    console.log( x * 9)
}

let x = 100
while( x > 0) {
    console.log(x)
    x--

}

let problemArray = [['Lion','Deer','Sheep'],['Cub','Fawn','Lamb']]
for (let x = 0; x < problemArray.length; x++){
    console.log(problemArray[x]);
}

for (let x = 0; x < problemArray.length; x++){
    for (j = 0; j < problemArray.length; x++) {

    }
    console.log(problemArray[x]);
}

