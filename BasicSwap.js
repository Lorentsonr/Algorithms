
// EXERCISE 1
function a(arr){
    var b = arr.length;
    var temp = arr[b-1];

    arr[b-1] = arr[0];
    arr[0] = temp;
    return arr;
}

console.log(a([1,2,3]));
console.log(a([2,4]));


// EXERCISE 2
function b(arr){
    var x = arr.length;
    
    for(var i = 0; i < x/2; i++) {
        var temp = arr[x-i-1];
        arr[i] = arr[x-i-1];
        arr[x-i-1] = temp;
    }
    return arr;
}

console.log(b([1,2,3]));
console.log(b([1,2,3,4,5]));