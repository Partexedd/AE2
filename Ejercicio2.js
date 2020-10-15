let dataArray = [125,25]

function average(x) {
    return x.reduce((a, b) => ( a + b )) / x.length
}
console.log(average(dataArray))