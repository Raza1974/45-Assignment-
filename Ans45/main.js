#! /usr/bin/env node
function createCar(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    // Adding additional options
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
console.log(myCar);
export {};
