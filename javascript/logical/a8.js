const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}
function Q8() {
    var i = 1;
    var s = "";
    var c = 0;
    while (i <= 100) {
        if (isPrime(i)) {
            c += 1;
            s += i + "<br>";
        }
        i++;
    }
    document.getElementById("hello").innerHTML = "<b>" + s + "</b>";
}