function myBouncer(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i += 1) {
        let individualValue = arr[i];
        if (individualValue) {
            result.push(arr[i]);
        }
    }
    return result;


}
console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));

module.exports = myBouncer;