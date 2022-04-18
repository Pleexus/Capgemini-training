function Q7() {
    var i = 1;
    var s = "";
    j = 12;
    while (i <= 12) {
        s += j + " X " + i + " = " + i * j + "<br>";
        i++;
    }
    document.getElementById("hello").innerHTML = "<b>" + s + "</b>";
}