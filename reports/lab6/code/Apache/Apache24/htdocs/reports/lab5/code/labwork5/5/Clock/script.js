function fulltime() {
    var time = new Date();
    var timeout_ = time.toLocaleString();
    document.getElementById("time").innerHTML = '<h1>' + timeout_ + '</h1>';
    setTimeout('fulltime()', 500)
}

fulltime();
