var actorOne = {
    firstName: "Will",
    lastName: "Smith",
    age: 51,
    yearlyEarnings: 50000

}

var actorTwo = {
    firstName: "Tom",
    lastName: "Cruise",
    age: 55,
    yearlyEarnings: 35000,
}

var actorThree = {
    firstName: "Selma",
    lastName: "Hayek",
    age: 50, 
    yearlyEarnings: 7000, 
}

var actorArray = [actorOne,actorTwo,actorThree]


for(let i=0; i < actorArray.length; i++){
    if(actorArray[i].yearlyEarnings > 30000)
    console.log(actorArray[i].lastName + " " + actorArray[i].yearlyEarnings);

}


