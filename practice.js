function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};

// this.tank = 1
// this.odometer = 125
// this.milesPerGallon = 8
Car.prototype.drive = function (miles) {
  let gallonsWasted = miles / this.milesPerGallon;
  //      1.125         =  9      /       8

  //      1.125   <=    1
  if (gallonsWasted <= this.tank) {
    this.tank -= gallonsWasted;
    this.odometer += miles;
  } else {
    //        8        =     1      *      8
    let milesTraveled = this.tank * this.milesPerGallon;
    this.odometer += milesTraveled;
    // 125 + 8 = 133

    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
};

let newCar = new Car("cadi", 10);

newCar.fill(5);
newCar.drive(51);

console.log(newCar.drive(51));
