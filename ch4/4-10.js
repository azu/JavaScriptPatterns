/**
 * Created by azu.
 * Date: 12/08/28 22:48
 * License: MIT License
 */
var sayHi = function(who){
    return "Hello" + (who ? ", " : "") + "!";
};
sayHi();

var alien = {
    sayHi : function(who){
        return "Hello" + (who ? ", " + who : "") + "!";
    }
};
alien.sayHi('world'); // "Hello, world!"
alien.sayHi.apply(alien, ["humans"]); // "Hello, humans!"

sayHi.call(alien, "humans");

var alien = {
    sayHi : function(){
        return this;
    }
};
alien.sayHi();; // this is alien
var alias = alien.sayHi;
alias();// this is global


function add(x,y){
    var oldX = x, oldY = y;
    if(typeof oldY === "undefined"){
        return function(newY){
            return oldX + newY;
        };
    }
    return x + y;
}
typeof add(1);// function
add(3)(4);