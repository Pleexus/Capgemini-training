function Q16() {
    var x = prompt("Enter The String To Check");
    document.getElementById("hello").innerHTML = "The String To Check Is : " + x + "<br>The String Is A Palindrome : " + x.split("").reverse().join("") === x;
}