class Vehicle {
    licensePlate(license: string) {
        console.log(`Vehicle license details are: ${license}.`);
    }
}

class Car extends Vehicle {
    numberOfSeats(seats: number = 0) {
        console.log(`No. of seats are ${seats}`);
    }
}

const car = new Car();
car.numberOfSeats();
car.licensePlate('One motoring');
car.numberOfSeats();