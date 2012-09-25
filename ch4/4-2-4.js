/**
 * Created by azu.
 * Date: 12/07/10 22:42
 * License: MIT License
 */
var thePlotThickens = function(){
    console.log('After 500ms');
}
setTimeout(function(){
    thePlotThickens();
}, 500);


var setup = function(){
    alert(1);
    return function(){
        alert(2);
    }();// その場で呼ぶ(即時実行関数とか)
};
setup();
