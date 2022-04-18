function Q15() {
    document.getElementById("hello").innerHTML = "The Running Total Of The List Is : " + arr1.reduce(function (a, b) {
        return a + b;
    });
}