function isEven(number) {
    if(number%2 === 0){
        return "The number is even";
    } else {
        return "The number is odd";
    }
}

function factorial(factor) {
    if (factor === 0) {
        return 1;
    }
    let temp = 1;
    do {
        temp *= factor;
        factor--;
    } while (factor > 0);
    return temp;
}

function kebabToSnake(kebab) {
    let temp;
    if(typeof kebab === "string"){
        temp = kebab.split("-");
    } else {
        return "This is not a string"
    }
    return temp.join("_")
}

console.log(isEven(17));
console.log(factorial(5));
console.log(kebabToSnake("slkdfdfl-jdsljfl_fhsjf-sjdfksjf"));