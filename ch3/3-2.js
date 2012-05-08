/**
 * Created by azu.
 * Date: 12/04/24 22:08
 * License: MIT License
 */
var Person = function person(name){
    this.name = name;
}
Person.prototype.say = function(){
    return "I am " + this.name;
}

var adam = new Person("Adam");
adam.say(); // "I am Adam"
