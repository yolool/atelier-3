const numbers = [1, 3, 4];

function factorial(n){
    if(n<=1){
        return 1
    }else{
       return n * factorial(n - 1) 
    }
}
const newnumbers = numbers.map(factorial);
console.log(newnumbers); 