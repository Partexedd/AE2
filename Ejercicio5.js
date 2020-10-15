let values = [4,8];

function multipleFactorial(x) {
    return x.map( function(a) {
        let res = 1;
        for (let i = 1; i <= a; i++) {
            res = i * res
        }
        return res
        }
    )
}
    
console.log(multipleFactorial(values))