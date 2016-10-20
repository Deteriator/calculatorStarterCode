// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function add(a,b){
    return a+b;
}

function power(a,b){
    return Math.pow(a,b);
}
function square_root(a){
  
    return  Math.sqrt(a);
}
function logBase10(a){
   
    return Math.log(a);
}
function generateRandomNumber(a){
   return Math.floor(Math.random() * a) + 1; 
}
function factorial(a){
   var sum= 1
   for(var i=1;i<=a;i++){
   sum *=i;
   }
   return sum;
}  
    
