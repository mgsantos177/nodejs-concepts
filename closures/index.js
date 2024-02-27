// useful to not allowed to change a variable 
// a way to create private information.

/**
 * Closures are useful in many scenarios, such as maintaining private variables 
 * in JavaScript, creating function factories, and implementing callback functions. 
 */

function person(name) {
    // Closures depend on something outside their own scope.
    function getName() {
        return name;
    }

    return { getName }
}

const mat = person("Mat")

mat.name // undefined
mat.getName() // Mat
