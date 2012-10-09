/**
 * Created by azu.
 * Date: 12/10/09 22:06
 * License: MIT License
 */
function Gadget(){
    var specs = {
        screen_width : 320,
        screen_height : 480,
        color : "white"
    };

    this.getSpecs = function(){
        return specs;
    }
}

var toy = new Gadget(),
        specs = toy.getSpecs();
specs.color = "black";
specs.price = "free";

console.dir(toy.getSpecs());