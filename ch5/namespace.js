/**
 * Created by azu.
 * Date: 12/09/25 22:09
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

//var module2 = MYAPP.namespace('MYAPP.modules.module2');
//module2 === MYAPP.modules.module2;// true

