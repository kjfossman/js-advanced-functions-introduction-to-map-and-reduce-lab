// Your code here
function mapToNegativize(array){
    let newA = array.map(element => element * -1)
    return newA
}

function mapToNoChange(array){
    return array.map(e => e)
}

function mapToDouble(array){
    return array.map(e => e*2)
}

function mapToSquare(array){
    return array.map(e => e*e)
}

function reduceToTotal(array, start = 0){
    const reducer = function(start, number){number + start}
    return array.reduce(reducer, start)
}