let values = [25,21,125,11,1]

function findMinimum(x) {
    x.sort()
    return x[0]
}
console.log(findMinimum(values))