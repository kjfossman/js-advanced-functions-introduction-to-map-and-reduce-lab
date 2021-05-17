// Your code here
function mapToNegativize(array){
    let newA= []
    for(let i = 0; i < array.length; i++){
        newA.push(array[i]*(-1))
    }
    return newA
    // let newA = array.map(element => element * -1)
    // return newA
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
    let total = start 
    for(let i = 0; i < array.length; i++){
        total = total + array[i]
    }
    return total
}

function reduceToAllTrue(array){

    for(let i = 0; i < array.length; i++){
        if(array[i] === false) return false 
    }
    return true 
}

function reduceToAnyTrue(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === true) return true 
    }
    return false
}