var myArray = [2, 4, 0, 8, 10];
myArray[2] = 6;


function myArrayFunction(arr) {
    var myItems = [...arr];
    myItems[2] = 6;

    return myItems;
};
console.log(myArrayFunction(myArray));
module.exports = myArrayFunction;