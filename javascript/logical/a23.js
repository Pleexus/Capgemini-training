function Q23() {
    var i = 0;
    var s = "";
    while (i <= 100) {
        s += "<br> Fibonacci(" + i + ") is :" + fib(i);
        i++;
    }
    document.getElementById("hello").innerHTML = "The Fibnocci Series Are :" + s;

}