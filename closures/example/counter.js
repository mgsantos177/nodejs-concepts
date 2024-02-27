// example of use of closure

/*  
    With this example, avoid to access directly the count value
        Only accessible by the functions
*/

function createCounter() {
    let count = 0;

    function increment() {
        count++
    }

    function decrement() {
        count--;
    }

    function reset() {
        count = 0;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        reset,
        getCount
    }
}

const counter1 = createCounter();


counter1.increment();
counter1.increment();

counter1.reset();
counter1.increment();
counter1.decrement();
counter1.increment();
console.log("Counter 1 count:", counter1.getCount()); // Output: 1