/**
 * Created by azu.
 * Date: 12/12/11 22:32
 * License: MIT License
 */


var obj = {
    value : 1,
    increment : function(){
        this.value += 1;
        return this;
    },
    add : function(v){
        this.value += v;
        return this;
    },
    shout : function(){
        alert(this.value);
    }
}
obj.increment().add(3).shout(); // 5