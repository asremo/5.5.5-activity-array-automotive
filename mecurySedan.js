//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        if(this.passenger < this.maxPassengers) {
            if((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                console.log(this.make + " ") + this.model + "has enough space to seat passengers"
                return this.passenger;
            } else {
                console.log(this.make + " " + this.model + "does not have enough space to seat all passengers");
            }
        }
    }
    start() {
        if(this.fuel > 0) {
            console.log("The car has started")
            return this.started = true;
        } else {
            console.log("No fuel so the car cannot start")
            return this.started = false;
        }
    }
    checkForService() {
        if(this.mileage > 30000) {
            console.log("This car needs to be serviced.")
            return this.scheduleService = true;
        } else {
            console.log("This car does not need to be serviced yet.")
            return this.scheduleService = false;
        }
    }
}

//this shows how to call from this module...
let myCar = new Car("Mecury", "Sedan", "2020", "gray", 40000);

myCar.start()
myCar.loadPassenger(3)
myCar.checkForService()

console.log(myCar)


