/**
 * User: azu
 * Date: 2013/06/11
 * License: MIT License
 * http://jsfiddle.net/Ueqsf/1/
 */
var scoreboard = {
    element: document.getElementById("results"),
    update: function update(score){
        var i, msg = '';
        for (i in score) {
            if (score.hasOwnProperty(i)) {
                msg += '<p><strong>' + i + '<\/strong>: ';
                msg += score[i];
                msg += '<\/p>';
            }
        }
        this.element.innerHTML = msg;
    }
};
var mediator = {
    players: {},
    setup: function (){
        var players = this.players;
        players.home = new Player("Home");
        players.guest = new Player("Guest");
    },
    played: function (){
        var players = this.players;
        var score = {
            home: players.home.points,
            guest: players.guest.points
        };
        scoreboard.update(score);
    },
    keypress: function (evt){
        evt = evt || window.event;// old IE...
        if (evt.which === 49) {// "1"
            mediator.players.home.play();
        } else if (evt.which === 48) {
            mediator.players.guest.play();
        }
    }
}

function Player(name){
    this.points = 0;
    this.name = name;
}
Player.prototype.play = function (){
    this.points += 1;
    mediator.played();
}

function main(){
    mediator.setup();
    window.onkeypress = mediator.keypress;
    setTimeout(function gameOver(){
        window.onkeypress = null;
        alert("Game Over!");
    }, 30 * 1000)
}

window.onload = function (){
    main();
}
