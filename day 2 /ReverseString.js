str = "hello i am Pranish";
function reverseAString(str){
    return str.split("").reverse().join("");
}
console.log(`The reverse string is : ${reverseAString(str)}`);