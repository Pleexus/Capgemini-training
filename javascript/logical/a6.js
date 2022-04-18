function mul(v) {
    var mul = 1;
    for (var i = 1; i <= v; i++) {
        mul *= i;
    }
    return mul;
}
function GetSum(v) {
    var sum = 0;
    for (var i = 1; i <= v; i++) {
        sum += i;
    }
    return sum;
}
function Q6() {
    var v = parseInt(prompt('Enter The number'));
    var s = prompt('Enter The String' + "\n" + "For Sum : \"sum\" or \"+\" " + "\n" + "2.Product : \"product\" or *");
    if (s == "sum" || s == "+") {
        document.getElementById("hello").innerHTML = "<b> The Sum Of The Numbers 1 To " + v + " Is : " + GetSum(v) + "</b>";
    }
    else if (s == "product" || s == "*") {
        document.getElementById("hello").innerHTML = "<b> The Product Of The Numbers 1 To " + v + " Is : " + mul(v) + "</b>";
    }
}