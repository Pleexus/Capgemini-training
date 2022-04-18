function Q20() {
    var arr2 = [];
    var i = 0;
    var c = 0;
    while (c <= arr.length + arr1.length) {
        arr2.push(arr[i]);
        arr2.push(arr1[i]);
        i++;
        c++;
    }
    document.getElementById("hello").innerHTML = "The Concatenated Array Is : " + arr2;
}