window.onload = function() {
    var now = new Date();
    var dateElement = document.getElementById('date');
    var timeElement = document.getElementById('time');
    dateElement.innerHTML = now.toDateString();
    timeElement.innerHTML = now.toLocaleTimeString();
}