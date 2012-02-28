/**
 * Created by azu.
 * Date: 12/02/28 22:50
 * License: MIT License
 */
var man = {
    hands : 2,
    legs : 2,
    heads : 1
};
if (typeof Object.prototype.clone === 'undefined'){
    Object.prototype.clone = function(){
    }
}


// 2. // アンチパターン: // hasOwnProerty()でチェックしていないfor-inループ
for (var i in man){
    console.log(i, ":", man[i]);
}

// Object.keys
var keys = Object.keys(man);
for (var i = 0, len = keys.length; i < len; i++){
    var key = keys[i];
    console.log(i, ":", key);
}