//1.find vowels in the string 
const findVowels = (str) =>{
  let vowels = [ 'a', 'e', 'i','o','u']

  strArr = str.split('')
  let vowelArr = []
  for(let i=0; i<strArr.length ; i++){
    for(let j=0;j<vowels.length; j++){
        if(strArr[i].toLowerCase()===vowels[j]){
           let char  = str.slice(i,i+1)
           vowelArr.push(char)
           
        }
    }
  }
  return [...new Set(vowelArr)]
}

//2. way

const FindVowels = (str) =>{
    let vowels = [ 'a', 'e', 'i','o','u']
  
    strArr = str.split('')
    let vowelArr = []
    for(let i=0; i<strArr.length ; i++){
     if(vowels.includes(strArr[i].toLowerCase())){
        vowelArr.push(strArr[i])
     }
    }
    return [...new Set(vowelArr)]
  }



console.log(FindVowels("hello Harshada, I am looking forward to your message."));
