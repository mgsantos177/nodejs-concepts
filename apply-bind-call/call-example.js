/* 
    call is a function that you use to change the value of this inside a function 
        and execute it with the arguments provided.
*/
function Car(type, fuelType) {
    console.log('car this', this)
    this.type = type;
    this.fuelType = fuelType;
}

function setBrand(brand) {
    console.log('this', this)
    Car.call(this, "hatch", "gasoline");
    this.brand = brand;
    console.log(`Car details = `, this);
}

const newBrand = new setBrand('Chev');
/*
    this setBrand {} = console on the line 9
    Car this setBrand {} = console on the line 2
        - this here 
    Car details =  setBrand { type: 'hatch', fuelType: 'gasoline', brand: 'Chev' } 
        = console of line 11
*/

const newEntity = (obj) => console.log(obj);


function mountEntity() {
    console.log('this', this)
    this.entity = newEntity;
    console.log(`Entity ${this.entity} is mounted on ${this}`);
}
mountEntity.call();