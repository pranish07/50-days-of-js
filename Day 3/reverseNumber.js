const num = 2234;
function reverseGivenInteger(num){
    let rev = 0;
    while(num>0){
        rev = rev*10 + num%10;
        num = Math.floor(num/10);
    }
    return rev;  
    
    // let ans = num.toString();
    // let rev = parseInt(ans.split('').reverse().join(''));
    // return rev;
}
console.log(`The reverse number is : ${reverseGivenInteger(num)}`);