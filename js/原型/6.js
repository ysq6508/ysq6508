GrandFather.prototype.say = function() {
    console.log('grandfather say');
}
function GrandFather() {
    this.age = 60
    this.like = 'drink'
}

Father.prototype = new GrandFather()
function Father() {
    this.age = 40
    this.fortune = {
        card: 'visa'
    }
}

Son.prototype = new Father()
function Son() {
    this.age = 18
}

let son = new Son()
// console.log(son.age); // 18
// console.log(son.fortune); // { card: 'visa' }
console.log(son.like);  // drink
console.log(son.say());