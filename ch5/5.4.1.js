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

    var isArray = function(a){
        return ops.call(a) === array_string;
    };
    var inArray = function(needle, haystack){
        for (var i = 0, len = haystack.length; i < len; i++){
            var hay = haystack[i];
            if (hay === needle){
                return true;
            }
        }
    };
    return {
        inArray : inArray,
        isArray : isArray
    };
})();

MYAPP.utilities.array.isArray([1,2,3]);// 配列化どうか?
MYAPP.utilities.array.inArray(1, [1,2,3]);// 第一引数が第二匹数の配列に含まれてるかどうか