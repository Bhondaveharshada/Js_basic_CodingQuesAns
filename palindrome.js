// Check Wheter string or number is palindrome or not.

const isPalindrome = (x) =>{
   if(typeof x ==="string"){
    let reversedword = x.split('').reverse().join('')
   if(x === reversedword){
    return `this  '${x}' is palindrome.`
   }
   }
   else if(typeof x==='number'){
    let original = x;
    let reversed = 0
     while(x > 0){
        reversed = reversed * 10 + (x % 10)
        x = Math.floor(x/10)
     } 
     if(original === reversed){
        return `this  '${original}' is palindrome.`
     }else {
        return `this  '${original}' is not palindrome.`
     }
    }else {
        return `this  '${x}' is not valid input`
    }
}
    
 

console.log(isPalindrome(112));
