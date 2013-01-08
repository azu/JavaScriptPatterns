/**
 * Created by azu.
 * Date: 13/01/08 22:08
 * License: MIT License
 */

    // 親コンストラクタ
function Parent(name){
    this.name = name || "Adam";
}
Parent.prototype.say = function(){
    return this.name;
}
// 空の子
function Child(name){
    Parent.apply(this, arguments);
}

function Article(){
    this.tags = ["js", "css"];
}
var article = new Article();
// Classic pattern 1 的に継承
function BlogPost(){
}
BlogPost.prototype = article;

var blog = new BlogPost();

function StaticPage(con){
    Article.call(con);
}
var page = new StaticPage();
/*
 page   ---->   blog __proto__  ---->  article
  |- tags*2                             |- tags*1
  *1 と *2は別のオブジェクト
 */


var kid = newCHild("Patrick");
kid.name;
typeof  kid.say;// "undefine