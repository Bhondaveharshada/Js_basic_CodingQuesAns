function selectionSort(arr) {
   n = arr.length
   for(let i = 0; i< n-1;i ++ ){
    let smallest = i      // 0
    for(let j = i+1 ; j < n ; j++){
        if(arr[j]<arr[smallest]){
            smallest = j
        }

    }
    let temp = arr[i]
    arr[i]= arr[smallest]
    arr[smallest]= temp
   }
  return arr
}

arrayy = [6,4,2,8,4,7]
console.log("Sorting Using Selection Sort.\n",selectionSort(arrayy));
