function Q24() {
    var num = prompt("Enter the Number ");
    var arr = num.split("");
    document.getElementById("hello").innerHTML = "The Array with digits in number " + num + "  is: [" + arr + "]";
}