/** Recreating a map function */

function newMap(func) {
    console.log('func', this)
    let destArr = [];
    const srcArrLen = this.length;

    for (let i = 0; i < srcArrLen; i++) {
        destArr.push(func.call(this, this[i]));
    }

    return destArr;
}

Object.defineProperty(Array.prototype, 'newMap', {
    value: newMap
})

function addMoreOne(item) {
    return item + 1
}

const arr = [1, 2, 3];
const newArr = arr.newMap(item => item + 1)
console.log(newArr);