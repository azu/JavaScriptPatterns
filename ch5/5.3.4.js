/**
 * Created by azu.
 * Date: 12/10/09 22:17
 * License: MIT License
 */
var myObj = (function(){
    var name = "my, oh my";
    return  {
        getName : function(){
            return name;
        }
    };
})();

myObj.getName();