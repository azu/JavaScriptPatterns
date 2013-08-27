/**
 *
 * Created by azu on 2013/08/27.
 */
var xhr, activeXids = [
    'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'
];
if (typeof  XMLHttpRequest === "function") {
    xhr = new XMLHttpRequest();
} else {
    for (var i = 0; i < activeXids.length; i++) {
        var activeX = activeXids[i];
        try {
            xhr = new ActiveXObject(activeX);
            break;
        } catch (e) {
        }
    }
}
xhr.onreadystatechange = readyStateChange;
function readyStateChange() {
    if (xhr.readyState !== 4) {
        return false;
    }
    if (xhr.status !== 200) {
        alert("Error, status code: " + xhr.status);
        return false;
    }
    document.body.innerHTML += "<pre>" + xhr.responseText + "</pre>";
}
xhr.open("GET", "page.html", true);
xhr.send();

