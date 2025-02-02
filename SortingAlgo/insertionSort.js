// Insertion Sort
 /*
   1. We start with 2nd elem of arr as 1st elem is assumed to be sorted
   2.Compare 2nd elem with 1st and check if the 2nd elem is smaller than 1st, 
   if it is smaller then we shift
   3. move to the 3rd elem and compare it with the 1st two elements and put at its correct position. 
 */
function insertionSort(arr){
   for(let i =1 ; i<arr.length; i++){
    let key = arr[i]
    let j = i-1
    for(; j>=0;j--){
        if(arr[j]>key){
            arr[j+1] = arr[j]  //shifting
        }else{
            break ;
        }
        
    }
    
    arr[j+1] = key
   }
   return arr
}


function insertionSortbyWhileloop(arr){
    for(let i=1 ; i<arr.length ; i++){
        let key = arr[i]
        let j = i -1
        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j] 
            j--
        }
        arr[j+1] = key
    }
    return arr
}

arr = [10,5,2,6,1,12,1]
console.log("sorting using insertionSort",insertionSort(arr));
console.log("Insertion sort using while loop", insertionSortbyWhileloop(arr));




// console.log(parseInt('9+10'));
// console.log(parseInt('7FM'));
// console.log(parseInt('F7M'));
// console.log(isNaN('9+10'));





