/**
 * User: azu
 * Date: 2013/07/09
 * License: MIT License
 */

var publisher = {
    subscribers: {
        any: []
    },
    /**
     *
     * @type {{unSubscribe: string, publish: string, any: string}}
     */
    EVENTS: {
        "unSubscribe": "unSubscribe",
        "publish": "publish",
        "any": "any"
    },

    /**
     * Subscriberの型
     * @typedef Subscriber
     * @type {object}
     * @property {function} fn - callback
     * @property {Object} context - context object
     */


    /**
     * Subscriberを追加する
     * @param object
     * @param object.type
     * @param object.fn
     * @param object.context
     * @private
     */
    _addSubscriber: function (object) {

        var subscribers = this._getSubscriber(object.type);
        subscribers.push({
            fn: object.fn,
            context: object.context
        });
    },
    /**
     * 指定したtypeのsubscribersの配列を返す
     * @param type {PubEvent}
     * @returns {Array.<Subscriber>}
     */
    _getSubscriber: function (type) {
        if (typeof this.subscribers[type] === "undefined") {
            this.subscribers[type] = [];
        }
        return this.subscribers[type];
    },
    on: function (type, fn, context) {
        type = type || this.EVENTS.any;
        fn = (typeof  fn === "function") ?
            fn : context[fn];
        this._addSubscriber({
            type: type,
            fn: fn,
            context: context || this
        });
    },
    remove: function (type, fn, context) {
        this.visitSubscribers(this.EVENTS.unSubscribe, type, fn, context);
    },
    fire: function (type, publication) {
        this.visitSubscribers(this.EVENTS.publish, type, publication);
    },
    visitSubscribers: function (action, type, arg, context) {
        var pubType = type || this.EVENTS.any;
        var subscribers = this._getSubscriber(pubType);
        for (var i = 0, len = subscribers.length; i < len; i++) {
            var subscriber = subscribers[i];
            if (action === this.EVENTS.publish) {
                subscriber.fn.call(subscriber.context, arg);
            } else if (subscriber === arg && subscriber.context === context) {
                subscribers.splice(i, 1);
            }
        }
    }
};


var scoreboard = {
    element: document.getElementById('results'),
    update: function (score) {
        var i, msg = '';
        for (i in score) {
            if (score.hasOwnProperty(i)) {
                msg += '<p><strong>' + i + '<\/strong>:';
                msg += score[i];
                msg += '<\/p>';
            }
        }
    }
};

function makePublisher(obj) {
    var i;
    for (i in publisher) {
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
            obj[i] = publisher[i];
        }
    }
    obj.subscribers = {any: []};
}

function Player(name, key) {
    this.points = 0;
    this.name = name;
    this.key = key;
    this.fire('newplayer', this);
}
Player.prototype.play = function () {
    this.points += 1;
    this.fire('play', this);
};
var game = {
    keys: {},
    addPlayer: function (player) {
        var key = player.key.toString().charCodeAt(0);
        this.keys[key] = player;
    },
    handleKeypress: function (e) {
        e = e || window.event;
        if (game.keys[e.which]) {
            game.keys[e.which].play();
        }
    },
    handlePlay: function (player) {
        var i,
            players = this.keys, score = {};
        for (i in players) {
            if (players.hasOwnProperty(i)) {
                score[players[i].name] = players[i].points;
            }
        }
        this.fire('scorechange', score);
    }
};

makePublisher(Player.prototype);
makePublisher(game);

Player.prototype.on("newplayer", "addPlayer", game);
Player.prototype.on("play", "handlePlay", game);
game.on("scorechange", scoreboard.update, scoreboard);
window.onkeypress = game.handleKeypress;
var playername, key;
while (1) {
    playername = prompt("Add player (name)");
    if (!playername) {
        break;
    }
    while (1) {
        key = prompt("Key for " + playername + "?");
        if (key) {
            break;
        }
    }
    new Player(playername, key);
}