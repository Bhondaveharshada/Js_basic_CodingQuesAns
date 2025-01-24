// Remove Duplicate value from the array 

const removeDuplicate = (arr) =>{
  let uniqeElements = []

  for(let i = 0 ; i<arr.length; i++){
    if(uniqeElements.indexOf(arr[i])===-1){
        uniqeElements.push(arr[i])
    }
  }
  return uniqeElements
}


// Remove elements by set method
const removeDuplicateElem = (arr) =>{
   return [...new Set(arr)]
}

arrayy = [1,2,3,4,4,6,6,7,7,2]
console.log(removeDuplicate(arrayy));

console.log(removeDuplicateElem(arrayy));

