/**
 * Created by azu.
 * Date: 12/11/27 22:02
 * License: MIT License
 */

var Gadget = function(){
}
Gadget.isShiny = function(){
    return "you bet";
}
Gadget.prototype.setPrice = function(price){
    this.price = price;
}
// call static method
Gadget.isShiny();
// instance method
var iPhone = new Gadget();
iPhone.setPrice(500);

Gadget.prototype.isShiny = Gadget.isShiny;
iPhone.isShiny();

// ex

var Gadget = function(price){
    this.price = price;
};
// 静的メソッド
Gadget.isShiny = function(){
    // これは常に動作します
    var msg = "you bet";
    if (this instanceof Gadget){
        // これは静的でない呼び出しのときだけ動作します
        msg += ", it costs $" + this.price + '!';
    }
    return msg;
};
// 通常のメソッドをプロトタイプに追加
// thisをGadgetにして呼び出す
Gadget.prototype.isShiny = function(){
    return Gadget.isShiny.call(this);
}
Gadget.isShiny(); // "you bet"
var a = new Gadget('499.99');
a.isShiny();