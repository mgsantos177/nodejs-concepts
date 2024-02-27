async function recursion(n) {
    if (n === 0) {
        return;
    }
    await recursion(n - 1);
    for (let i = 0; i < n; i++) {
        // console log jump line by default, this is another alternative.
        process.stdout.write('#')
    }
    console.log('')

}

recursion(6)