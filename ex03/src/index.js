var myPetsArray =["Dog", "Cat"];

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
        myNewPets.push(["Bird", "Fish"]);
        myNewPets.shift(["Fish"]);
        myNewPets.unshift(["Lion"]);

     
}

console.log(myArrayFunction());
module.exports = myArrayFunction;


