(function () {
    // デフォルト動作の抑制
    function preventDefaultEvent(evt) {
        if (typeof evt.preventDefault === "function") {
            evt.preventDefault();
        }
        if (typeof evt.returnValue !== "undefined") {
            evt.returnValue = false;
        }
    }

    // 伝播の抑制
    function stopEvent(evt) {
        if (typeof e.stopPropagation === "function") {
            e.stopPropagation();
        }
        if (typeof e.cancelBubble !== "undefined") {
            e.cancelBubble = true;
        }
    }

    function myHandler(evt) {
        var src = evt.currentTarget;
        var delimiter = ": ";
        var parts = src.get("innerHTML").split(delimiter);
        var currentCount = parseInt(parts[1], 10);
        src.set('innerHTML', parts[0] + ": " + (currentCount + 1));
        evt.halt();
    }

    YUI().use("event-delegate", function (Y) {
        Y.delegate('click', myHandler, "#click-wrap", "button");
    });
})();