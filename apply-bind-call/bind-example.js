/**
 * The bind function creates a copy of a function with a new value 
    *  to the this present inside the calling function.
 */

const user = {
    firstName: 'João',
    lastName: 'Neves',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

const logName = function () {
    console.log(`full Name: ${this.getFullName()}`);
}

const boundLogName = logName.bind(user);

boundLogName()