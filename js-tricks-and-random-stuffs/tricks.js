let counter = 0;
const a = {
    toString: function () {
        return ++counter;
    }
}

console.log(a == 1 && a == 2 && a == 3); // true