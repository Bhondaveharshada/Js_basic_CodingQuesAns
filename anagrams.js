//Check if two given strings ara Anagrams or not


const checkAnagrams = (str1 ,str2) =>{
    let word1 = str1.split("").sort().join('')
    let word2 = str2.split("").sort().join('')

    if(word1 !== word2){
        return false
    }
    return true
}

console.log(checkAnagrams('listen','silent'));
