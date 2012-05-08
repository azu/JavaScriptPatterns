/**
 * Created by azu.
 * Date: 12/05/08 22:04
 * License: MIT License
 */

function Waffle(){
    if (!(this instanceof Waffle)){
        return new Waffle();
    }
    this.tastes = "yummy";
}
Waffle.prototype.wantAnother = true;

var first = new Waffle();
var second = Waffle();
console.log(first.tastes); // "yummy"
console.log(second.tastes); // "yummy"
console.log(first.wantAnother); // true
console.log(second.wantAnother); // true