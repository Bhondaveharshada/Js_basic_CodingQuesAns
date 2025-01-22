// Finding Longest Word from the Sentense

const findLongestWord = (Sentense) =>{
   let longestWord = ''
   let arrayofWords = Sentense.split(' ')
   console.log("converted sentense into array", arrayofWords);
   
   for(let word of arrayofWords ){
       if(word.length > longestWord.length ){
           longestWord = word
       }
    }
    return `longest Word is ${longestWord}`   
}

console.log(findLongestWord("I am learning javascript programming"));
