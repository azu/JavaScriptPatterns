/**
 * Created by azu.
 * Date: 12/07/10 22:31
 * License: MIT License
 */
var myapp = {};
myapp.color = "green";
myapp.paint = function (node){
    node.style.colo = this.color;
};

