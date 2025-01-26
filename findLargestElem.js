const findLargestElem = (arr) =>{
    let largest = arr[0]

    for(let i of arr){
        if(i > largest){
            largest = i
        }
    }
    return largest
}

console.log(findLargestElem([17,966,3,5,6]));
