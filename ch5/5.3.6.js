/**
 * Created by azu.
 * Date: 12/10/09 22:51
 * License: MIT License
 */

var myArray = [];
(function(){
    var astr = '[object Array]',
            toString = Object.prototype.toString;

    function isArray(a){
        return toString.call(e) === astr;
    }

    function indexOf(haystack, needle){
        var i = 0,
                max = haystack.length;
        for (; i < max; i += 1){
            if (haystack[i] === needle){
                return i;
            }
        }
        return -1;
    }

    return {
        "isArray" : isArray,
        "indexOf" : indexOf,
        "inArray" : indexOf
    }
})();

myArray.indexOf = null;
// こうなるのはmyArray.indexOfが参照してる先がnullになる ≠ indexOfという関数がnullになる
typeof myArray.indexOf === "function";
// なのでinArrayはindexOfを参照してるので、そのまま使える

// 普通のオブジェクトで考えると
var replaced = {}
var obj = {
    "test" : replaced
}
obj.test = "hoge";
console.log(replaced); // {}
