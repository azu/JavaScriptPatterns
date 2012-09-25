/**
 * Created by azu.
 * Date: 12/06/26 22:42
 * License: MIT License
 */

var findNodes = function(callback){
    // DOMのノードを順番に辿っていくイテレーター
    var treeWalker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_ELEMENT, {
                acceptNode : function(node){
                    return NodeFilter.FILTER_ACCEPT;
                }
            },
            false
    );

    var found, nodes = [];
    if (typeof callback !== "function"){
        callback = false;
    }
    while (treeWalker.nextNode()){
        // みつけた ということにする
        found = treeWalker.currentNode;

        if (callback){
            callback(found);
        }
        nodes.push(found);
    }
    return nodes;
};

var styleBorder = function(node){
    node.style.border = "1px solid";
};
// コールバックに渡す
findNodes(styleBorder);