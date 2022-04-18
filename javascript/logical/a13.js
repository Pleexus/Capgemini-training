function Q13() {
    var x = prompt("Enter the Element To Check");
    document.getElementById("hello").innerHTML = "The Element To Check Is : " + x + "<br>The Element Is Present In The List : " + arr.includes(x);
}