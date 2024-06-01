Car.prototype.name = 'su7'
Car.prototype.lang = 5000
Car.prototype.height = 1400

function Car(color,owner) {
    // this.name = 'su7'
    // this.lang = 5000
    // this.height = 1400
    this.color = color
    this.owner = owner
}

let yan = new Car('pink','yan')
let qing = new Car('blue','qing')
console.log(yan.name); // su7
console.log(qing);
