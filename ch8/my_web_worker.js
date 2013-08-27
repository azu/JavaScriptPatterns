/**
 * Created by azu on 2013/08/27.
 */

var end = 1e8, tmp = 1;
postMessage("Hello there");

while (end) {
    end -= 1;
    tmp += end;
    if (end == 5e7) {
        postMessage("halfway there");
    }
}
postMessage("all done");
n