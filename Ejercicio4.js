let values = [25,11,21,157];
let number = 125;

function findMinimum(x, y) {
    return x.every((a) => ( a < y ))
}

console.log(findMinimum(values, number))