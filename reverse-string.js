/* Reverse the String  */


/* 1. By Using for loop */
function reversestring(str){
  let reversed = ''
  for(let i = str.length-1; i >=0 ; i--){
    reversed += str[i]
  }
  return reversed
}

/* 2. By Using js inbuilt function */
function reverseBySplit(str){
    let reversed = str.split('').reverse().join('')
    return reversed
}

console.log(reversestring("Harshada Bhondave"));
console.log(reverseBySplit("Pandharinath"));

