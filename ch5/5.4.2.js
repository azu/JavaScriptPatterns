/**
 * Created by azu.
 * Date: 12/10/23 22:37
 * License: MIT License
 */
/**
 * Created by azu.
 * Date: 12/10/23 22:05
 * License: MIT License
 */
var MYAPP = MYAPP || {};
/**
 * create namespace
 * @param ns_string
 * @return {*|Object}
 */
MYAPP.namespace = function(ns_string){
    var parts = ns_string.split('.');
    var parent = MYAPP;
    // MYAPP.hoge.fuga
    // ~~~~~
    if (parts[0] === "MYAPP"){
        parts = parts.slice(1);// ["hoge","fuga"]
    }

    for (var i = 0, len = parts.length; i < len; i++){
        var part = parts[i];
        // MYAPP以下にpartプロパティが無いなら、空のオブジェクトを入れて作る
        if (typeof parent[part] === "undefined"){
            parent[part] = {};
        }
        parent = parent[part];// .毎に階層が深くなる
    }
    return parent;// 返り値は一番最後のプロパティ
};

// inclide namespace.js
MYAPP.namespace('MYAPP.utilities.array');

MYAPP.utilities.array = (function(){
    var uObj = MYAPP.utilities.object,
            uLang = MYAPP.utilities.lang;
    var array_string = "[object Array]", ops = Object.prototype.toString;

    var Constr;

    function isArray(a){
        return ops.call(a) === array_string;
    }

    function indexOf(parameters){
        var needle = parameters.needle;
        var haystack = parameters.haystack;

        for (var i = 0, len = haystack.length; i < len; i++){
            var hay = haystack[i];
            if (hay === needle){
                return true;
            }
        }
    }

    Constr = function(o){
        this.elements = this.toArray(o);
    }
    Constr.prototype.indexOf = indexOf;
    Constr.prototype.isArray = isArray;
    Constr.prototype.constructor = MYAPP.utilities.Array;
    Constr.prototype.toArray = function(obj){
        var result = [];
        for (var i = 0, len = obj.length; i < len; i++){
            result[i] = obj[i];
        }
        return result;
    };
    return Constr;
})();

var aryUtil = new MYAPP.utilities.array([1, 2, 3]);
aryUtil.isArray(aryUtil.elements);// true