function myFun(){

}
/*
"this" function doesn't always refer to what is expected
 */

const myFun = () => {

}
/*
"this" keyword inside an arrow function will always keep its reference
no more issue with the "this" keyword.
 */

function print(name){
    console.log(name);
}

print("aakash");

const arrowPrint = name => {
    console.log(name);
}
//if only one param, you can skip ()
//no param, or more than one param, you need ()


arrowPrint("arrow");


const multiply = number => {
    return number * 2;
}

console.log(multiply(3));

const multiplyReturnAndBraceless = number => number * 2;

console.log(multiplyReturnAndBraceless(2));