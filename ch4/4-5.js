/**
 * Created by azu.
 * Date: 12/07/24 22:18
 * License: MIT License
 */
(function(){
    alert("watch out!");
})();

(function(){
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            today = new Date(),
            msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();
    alert(msg);
})();

