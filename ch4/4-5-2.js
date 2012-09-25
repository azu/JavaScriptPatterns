/**
 * Created by azu.
 * Date: 12/07/24 22:32
 * License: MIT License
 */
var result = (function(){
    return 2 + 2;
})();

var getResult = (function(){
    var res = 2 + 2;
    return function(){
        return res;
    }
})();

var o = {
    message : (function(){
        var who = "me",
                what = "call";
        return what + " " + who;
    })(),
    getMsg : function(){
        return this.message;
    }
};
