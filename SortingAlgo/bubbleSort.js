    const bubbleSort = (arr) =>{
        n = arr.length
        let temp ,swapped ;
    for(let i = 0; i < n - 1 ; i++){
        swapped = false                  //swapped help us to ckeck if any elem swapped during inner loop 
        for(let j= 0 ; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j] ;
                arr[j] = arr[j+1] ;
                arr[j+1] = temp ;
                swapped = true;
            }
            
        }
        /* If no swaps happened in the entire pass (i.e., swapped is still false), it means the array is already sorted. 
            and Exit the loop early to save time, as further passes are unnecessary. */
        if(swapped == false){      
            break ;
        }
    }
    
    return arr

    }

arr = [6,3,9,2,4,8,88]
console.log(bubbleSort(arr));

