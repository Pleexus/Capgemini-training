function checkLeapYear(year) {
    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    } else {
        return false;
    }
}
function Q10() {
    var i = new Date().getFullYear();
    var s = "";
    var c = 0;
    while (c <= 20) {
        if (checkLeapYear(i)) {
            c += 1;
            s += i + "<br>";
        }
        i++;
    }
    document.getElementById("hello").innerHTML = "<b>" + s + "</b>";
}