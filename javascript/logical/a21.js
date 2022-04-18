function Q21() {
    var arr = [1, 2, 3, 4, 5]
    var arr1 = [6, 7, 8, 9, 10]
    var arr2 = arr.concat(arr1).sort(function (a, b) { return a > b });
    document.getElementById("hello").innerHTML = "The Concatenated Array Is : " + arr2;
}