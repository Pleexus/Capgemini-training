function GetSumofmutiples(v, m) {
    var sum = 0;
    for (var i = 1; i <= v; i++) {
        if (i % m == 0) {
            sum += i;
        }
    }
    return sum;
}
function Q5() {
    var v = parseInt(prompt('Enter The number'));
    document.getElementById("hello").innerHTML = "<b> The Sum Of The Multiples Of 3 Of The Numbers 1 To " + v + " Is : " + GetSumofmutiples(v, 3) + "</b>";
}