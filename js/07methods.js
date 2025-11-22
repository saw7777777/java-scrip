// metodos en javascript

// const person = {
//     name: "Juan",
//     lastName: "Perez",

//     age: 25,
//     genero: "Masculino",
//     city: "Anytown",
//     address: {
//         street: "123 Main St",
//         zip: "12345"
//     },
//     hobbies: ["reading", "traveling", "sports"],
//     isStudent: true,
//     fullName: function () {
//         return this.name + " " + this.lastName;
//     }
// };
// console.log(person.fullName());

//has una claculadora utilisando methodos y this 

const calculator = {
    result: 0,
    add: function (num) {
        this.result += num;
        return this;
    },
    subtract: function (num) {
        this.result -= num;
        return this;
    },
    multiply: function (num) {
        this.result *= num;
        return this;
    },
    divide: function (num) {
        if (num === 0) {
            console.error("Cannot divide by zero!");
            return this;
        }
        this.result /= num;
        return this;
    },
    clear: function () {
        this.result = 0;
        return this;
    },
    getResult: function () {
        return this.result;
    }
};

// Ejemplo de uso:
// console.log(calculator.add(5).subtract(2).multiply(3).divide(2).getResult()); // (5 - 2) * 3 / 2 = 4.5
// console.log(calculator.clear().add(10).getResult()); // 10

//uso la calculadora
console.log(calculator.add(9).subtract(4).multiply(38 , 5).divide(92).getResult());