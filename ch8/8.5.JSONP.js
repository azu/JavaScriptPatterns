/**
 * Created by azu on 2013/09/10.
 */


var ttt = {
    // cells played so far
    played: [],
    // handle clicks
    setup: function () {
        document.getElementById('new').onclick = this.newGame;
        document.getElementById('server').onclick = this.remoteRequest;
    },

    // clean the board
    newGame: function () {
        var tds = document.getElementsByTagName("td"), max = tds.length;
        for (var i = 0; i < max; i += 1) {
            tds[i].innerHTML = "&nbsp;";
        }
        ttt.played = [];
    },

    // make a request
    remoteRequest: function () {
        var scriptTag = document.createElement("script");
        scriptTag.src = "http://www.jspatterns.com/book/8/server.php?callback=ttt.serverPlay&played=" + ttt.played.join(',');
        document.body.appendChild(scriptTag);
    },

    // callback, server's turn to play
    serverPlay: function (data) {
        if (data.error) {
            alert(data.error);
            return;
        }
        var number = parseInt(data, 10);
        this.played.push(number);

        document.getElementById('cell-' + number).innerHTML = '<span class="server">X<\/span>';

        setTimeout(function () {
            ttt.clientPlay();
        }, 300); // as if thinking hard

    },

    // client's turn to play
    clientPlay: function () {
        var data = 5;

        if (this.played.length === 9) {
            alert("Game over");
            return;
        }

        // keep coming up with random numbers 1-9
        // until one not taken cell is found
        while (document.getElementById('cell-' + data).innerHTML !== "&nbsp;") {
            data = Math.ceil(Math.random() * 9);
        }
        document.getElementById('cell-' + data).innerHTML = 'O';
        this.played.push(data);

    }

};

ttt.setup();
