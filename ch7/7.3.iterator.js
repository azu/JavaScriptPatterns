var agg = (function (){
    var index = 0,
        data = [1, 2, 3, 4, 5],
        length = data.length;

    // 外に公開するものをまとめておく
    var api = {
        next: next,
        hasNext: hasNext,
        rewind: rewind,
        current: current
    }

    function next(){
        if (!hasNext()) {
            return null;
        }
        var element = data[index];
        index += 2;
        return element;
    }

    function rewind(){
        index = 0;
    }

    function current(){
        return data[index];
    }

    function hasNext(){
        return index < length;
    }

    return api;
})();

while (agg.hasNext()) {
    // 要素に対して何か処理を行う...
    console.log(agg.next());
}

// 先頭に戻す
agg.rewind();
console.log(agg.current()); // 1