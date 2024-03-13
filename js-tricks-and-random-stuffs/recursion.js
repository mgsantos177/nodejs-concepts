function recursion(n) {
    if (n === 0) {
        return;
    }
    recursion(n - 1);
    for (let i = 0; i < n; i++) {
        // console log jump line by default, this is another alternative.
        process.stdout.write('#')
    }
    console.log('')

}

recursion(5)

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(10));