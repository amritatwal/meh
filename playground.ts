// Interface

// Interface notes:
    // A way of focusing on the shape a value has 
    // Helps to defining contracts within your code

interface Player {
    name: string,
    age:  number
    nationality: string,
    shirtNumber: number
}

// Define an object that takes on the shape of Player. This ensures type safety.
const FrankLampard: Player = {
    name: "Frank Lampard",
    age: 42,
    nationality: "English",
    shirtNumber: 8
}


// When I write out the function below, I am passing in the parameter and the interface name that the argument must take shape of when the function is invoked. 
// Or in other words, I am declaring what shape the argument must conform to by using relevant syntax (:) followed by the type name.
function myFunction(myPlayer: Player) {
    console.log(myPlayer)
}

myFunction(FrankLampard)

// Ensuring that what is returned from the function takes the shape of Player as well.
function anotherFunction(myPlayer: Player): Player {
    return
}

anotherFunction(FrankLampard)


// Unions

// Union notes: 
    // A way of declaring of creating more complex types by combining multiple simpler types.
    // Unions signify that a value can be one of many types.
    
type isHot = true | false; 

const amritIsHot: isHot = true;

console.log(amritIsHot)

