/**
 * Created by azu.
 * Date: 12/12/11 22:09
 * License: MIT License
 */
"use strict";
var constant = (function(){
    var constants = {};
    var ownProp = Object.prototype.hasOwnProperty;
    var allowed = {
        string : 1,
        number : 1,
        boolean : 1
    };
    var prefix = (Math.random() + "_").slice(2);

    return {
        set : function(name, value){
            if (this.isDefined){
                return false;
            }
            if (!ownProp.call(allowed, typeof value)){
                return false;
            }
            constants[prefix + name] = value;
            return true;
        },
        isDefined : function(name){
            return ownProp.call(constants, prefix + name);
        },
        get : function(name){
            if (this.isDefined(name)){
                return constants[prefix + name];
            }
            return null;
        }
    }
})();

// 定義されているか?
constant.isDefined("maxwidth"); // false
// 定義する
constant.set("maxwidth", 480); // true
// 再検査 c
constant.isDefined("maxwidth"); // true
// 再定義してみる
constant.set("maxwidth", 320); // false
// 値が元のままか?
constant.get("maxwidth"); // 480
