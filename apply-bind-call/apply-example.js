/*
    The Apply function is very similar to the Call function. The only difference 
        between call and apply is the difference in how arguments are passed.
*/
function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
}

function setBrand(brand) {
    Car.apply(this, ["Hatch", "Gasoline"]);
    this.brand = brand;
    console.log(`Car details = `, this);
    // Car details =  setBrand { type: 'Hatch', fuelType: 'Gasoline', brand: 'GM' }
}

const newBrand = new setBrand('GM')


function addUp() {
    // Using arguments to capture the arbitrary number of inputs.
    console.log('arguments', arguments)
    const args = Array.from(arguments);
    this.x = args.reduce((prev, curr) => prev + curr, 0);
    console.log('this.x', this.x)
}

function driverFunc() {
    const obj = {
        inps: [1, 2, 3, 4, 5]
    }
    addUp.apply(obj, obj.inps)
}

driverFunc()