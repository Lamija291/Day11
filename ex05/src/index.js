var myNestedArray = [["Toblerone"], ["Milka"]];


function myNestedFunction(arr) {
    var myArray = [[2], [3]];
    myArray.push([[2], [3]]);

}

return myNestedArray;

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;