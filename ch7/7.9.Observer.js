/**
 * User: azu
 * Date: 2013/06/11
 * License: MIT License
 */
"use strict";
var publisher = {
    subscribers: {
        any: []
    },
    // Constants
    _EVENTS: {
        unsubscribe: "unsubscribe",
        publish: "publish",
        any: "any"
    },
    /**
     * 指定したtypeにイベントを追加する
     * @param fn
     * @param type
     */
    _addSubscriber: function (fn, type){
        var subscribers = this._getSubscriber(type);
        subscribers.push(fn);
    },
    /**
     * 指定したtypeのsubscribersの配列を返す
     * @param type
     * @returns {Array}
     */
    _getSubscriber: function (type){
        if (typeof this.subscribers[type] === "undefined") {
            this.subscribers[type] = [];
        }
        return this.subscribers[type];
    },
    /**
     * 購読者の配列に追加
     * @param fn
     * @param [type="any"]
     */
    subscribe: function (fn, type){
        var pubType = type || publisher._EVENTS.any;
        this._addSubscriber(fn, pubType);
    },
    /**
     * 購読者の配列から削除
     * @param fn
     * @param type
     */
    unSubscribe: function (fn, type){
        this.visitSubscribers(publisher._EVENTS.unsubscribe, fn, type);
    },
    /**
     * 指定したtypeのイベントを購読者に通知する
     * @param publication
     * @param type
     */
    publish: function (publication, type){
        this.visitSubscribers(publisher._EVENTS.publish, publication, type)
    },
    visitSubscribers: function (action, args, type){
        var pubType = type || publisher._EVENTS.any;
        var subscribers = this._getSubscriber(pubType);
        for (var i = 0, len = subscribers.length; i < len; i++) {
            var subscriber = subscribers[i];
            if (action === publisher._EVENTS.publish) {
                subscriber(args);
            } else {
                if (subscriber === args) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

function makePublisher(obj){
    var i;
    for (i in publisher) {
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
            obj[i] = publisher[i];
        }
    }
    obj.subscribers = {any: []};
}

(function subscribe(){
    var paper = {
        daily: function (){
            this.publish("big news today");
        },
        monthly: function (){
            this.publish("interesting analysis", "monthly");
        }
    };

    makePublisher(paper);

    var joe = {
        drinkCoffee: function (paper){
            console.log('Just read ' + paper);
        },
        sundayPreNap: function (monthly){
            console.log('About to fall asleep reading this ' + monthly);
        }
    };

    paper.subscribe(joe.drinkCoffee);
    paper.subscribe(joe.sundayPreNap, 'monthly');

    // Publish
    paper.daily();
    paper.daily();

    paper.monthly();
})();
