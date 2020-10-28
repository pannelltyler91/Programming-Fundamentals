function hello(name){
    console.log(`Hello,${name}!`)
    }
    
    hello("Tyler");
    
    function helloworld(name){
    if (name === true)
    console.log(`Hello, ${name}`)
    else
    console.log("Hello world!")
    }
    
    helloworld();
    
    function madlib(name,subject){
        console.log (`${name}'s favorite subject in school is ${subject}`)
        }
        
        madlib("Tyler","coding");

        function tipAmount (amount, service){
            var bad=("bad")
            var fair=("fair")
            var good=("good")
            if (service === bad) 
            console.log(amount * 0.10)
             else if (service === fair)
            console.log(amount * 0.15)
             else if(service === good)
            console.log(amount * 0.20)
             else
            console.log("No tip, customer service almost non-existent")
            }
            
            tipAmount (100,"fair");
            tipAmount (500,"good");


            function totalAmount (amount, service){
            var bad=("bad")
            var fair=("fair")
            var good=("good")
            if (service === bad) 
            console.log((amount * 0.10) + amount)
            else if(service === fair)
            console.log((amount * 0.15) + amount)
            else if(service === good)
            console.log((amount * 0.20) + amount)
            else 
        console.log ("No tip! Customer service almost non-existent")
        }

totalAmount(100,"good");


function splitAmount(amount, service, partySize){
    var bad=("bad")
    var fair=("fair")
    var good=("good")
    if(service === bad)
    console.log(((amount * 0.10) + amount) / partySize)
    else if (service === fair) 
    console.log(((amount * 0.15) + amount) / partySize)
    else if (service === good)
    console.log(((amount * 0.20) + amount) / partySize)
    else 
    console.log("Not tip! Customer service almost non-existent")
    }
  
    splitAmount(100,"bad",3);
     let number=(0)
    for (let number = 0; number <= 10; number = number + 1) {
        console.log(number);
      }

  number;