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