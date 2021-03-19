function myMutation(arr) {
    let firstElement = arr[0].toLowerCase();
    let secondElement = arr[1].toLowerCase();

    for (let i = 0; i < secondElement.length; i += 1) {
        let letter = secondElement[i];
        if (firstElement.indexOf(letter) === -1) {
            return false;
        }
    }
    return true;
}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;

