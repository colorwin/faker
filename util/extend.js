function Vehicle (wheel) {
    this.wheel = wheel
}

Vehicle.prototype.drive = function () {
    console.log(`drive with ${this.wheel} wheels`)
}

function Car (wheel, color) {
    Vehicle.call(this, wheel)
    this.color = color
}

Car.prototype = Object.create(Vehicle.prototype)

Car.prototype.show = function () {
    console.log(`color is ${this.color}`)
}
Car.prototype.construtor = Car

var Benci = new Car(4, 'red')
Benci.show()
Benci.drive()
