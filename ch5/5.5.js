/**
 * Created by azu.
 * Date: 12/11/13 22:22
 * License: MIT License
 */
function Sandbox(){
    // 引数は配列argsに変換
    var args = Array.prototype.slice.call(arguments),
    // 配列の最後はコールバック関数なので取り出す
            callback = args.pop(),
    // Sandbox(["A","B"],callback) or Sandbox("A","B",callback) どちらでも可能なように
            modules = (args[0] && typeof args[0] === "string") ? args : args[0];
    // newを付けないで呼ばれたときにコンストラクタとして呼び直す
    if (!(this instanceof Sandbox)){
        return new Sandbox(modules, callback);
    }
    // now add modules to the core `this` object
    // moduleがない=パラメータレス or *を指定したときは全てのモジュールを使う
    if (!modules || modules === '*'){
        modules = [];
        for (var module in Sandbox.modules){
            if (Sandbox.modules.hasOwnProperty(module)){
                modules.push(module);
            }
        }
    }
    // 必要なモジュールの初期化
    for (var i = 0, len = modules.length; i < len; i++){
        Sandbox.modules[modules[i]](this);
    }
    // Sandboxのコールバック(処理本体)を呼ぶ
    callback(this);
}
Sandbox.prototype = {
    name : "My Application",
    version : "1.0",
    getName : function(){
        return this.name;
    }
};
Sandbox.modules = {};
Sandbox.modules.dom = function(box){
    box.getElement = function(){
    }
    box.getStyle = function(){
    }
    box.foo = "bar";
};
Sandbox.modules.event = function(box){
    box.attachEvent = function(){
    }
    box.dettachEvent = function(){
    }
};
Sandbox.modules.ajax = function(box){
    box.makeRequest = function(){
    }
    box.getResponse = function(){
    }
}

// 適当な解説
// https://gist.github.com/4065899
// 適当な例 (かえってわかにくい)
// https://gist.github.com/811201