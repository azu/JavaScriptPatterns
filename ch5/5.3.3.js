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

// new する度にプライベートのspecsは作られてる => メモリ増える
var toy = new Gadget();
var toy_2 = new Gadget();


function Gadget(){}
Gadget.prototype = (function(){
    var specs = {
        screen_width : 320,
        screen_height : 480,
        color : "white"
    };
    return {
        getSpecs : function(){
            return specs;
        }
    }
})();
// new しても prototype 部分は共通なので一回で済む
var r_toy = new Gadget();
var r_toy_2 = new Gadget();