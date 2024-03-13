/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    function toBe(n) {
        if (!notToBe(n)) {
            return true;
        }

        throw new Error("Not Equal")
    }

    function notToBe(n) {
        return val !== n
    }

    return {
        toBe,
        notToBe,
    }
};

const o = {};
console.log(expect(o).notToBe(o))

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */