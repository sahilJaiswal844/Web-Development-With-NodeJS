let arr = [12,56,135,73,13,468];

let arr2 = arr.map(function (item) {
    return 100 - item;
})

console.log(arr2);

let arr3 = arr.map(Math.sqrt);
console.log(arr3);