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
        var event = evt || window.event;// IE
        var src = event.target || event.srcElement;
        var delimiter = ": ";
        var parts = src.innerHTML.split(delimiter);
        var currentCount = parseInt(parts[1], 10);
        src.innerHTML = parts[0] + delimiter + (currentCount + 1);
        stopEvent(event);
        preventDefaultEvent(event);
    }

    var button = document.getElementById("clickme");
    if (document.addEventListener) {
        button.addEventListener("click", myHandler, false);
    } else if (document.attachEvent) {
        button.attachEvent("onclick", myHandler);
    } else {
        button.onclick = myHandler;
    }
})();