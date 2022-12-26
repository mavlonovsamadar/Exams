function love6(a, b) {
    if((a===6 || b===6) || (a+b===6 || a-b===6 || b-a===6)){
        return true
    }
    else{return false}
}
console.log(love6(6, 4));
console.log(love6(4, 5));
console.log(love6(10, 16));