// let dice = {
//     sides: 6,
//     roll: function () {
//     let randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//     }
// };

function Dice(sides) {
    this.sides = sides;
}
Dice.prototype.roll = function () {
        let randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
};

let dice = new Dice(6);

