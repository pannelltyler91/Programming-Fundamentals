
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
 let symbol = ("*")
function printSquare(size){
    for(let x=0; x <= size; x++)
    for(let y=0; y <= size; y++)
    
    console.log(symbol);
}
    

printSquare(3);


// in class exercise 2 for 10/31/2020
for (let x = 0; x <= 20; x ++){
    if (x % 2 === 0)
    console.log(`${x} is an even number`)
    else if(x % 2 !== 0)
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