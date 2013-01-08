/**
 * Created by azu.
 * Date: 13/01/08 22:08
 * License: MIT License
 */

    // 親コンストラクタ
function Parent(name){
    this.name = name || "Adam";
}
Parent.prototype.say = function(){
    return this.name;
}
// 空の子
function Child(name){

}

(function main(){
    inherit(Child, Parent);

    var kid = new Child();
    /*
    kid __proto__ (new Parent) __proto__ Parent.prototype((new Parent).constructor.prototype)
     */
})();

// 継承関数
function inherit(Child, Parent){
    Child.prototype = new Parent();
}

