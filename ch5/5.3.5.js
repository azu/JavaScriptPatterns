/**
 * Created by azu.
 * Date: 12/10/09 22:30
 * License: MIT License
 */
function Gadget(){
    // プライベートメンバ
    var name = 'iPod';
    // パブリック関数
    this.getName = function () {
        return name;
    }
}
Gadget.prototype = (function(){
    var browser = "Mobile Webkit";
    return {
        getBrowser : function(){
            return browser;
        }
    }
})();

var toy = new Gadget();

// 5.3.3べースで比較すると意味が分かる
// https://gist.github.com/3858997