function leftRotatebyOne(arr) {
    var i, temp;
    temp = arr[0];
    for (i = 0; i < (arr.length - 1); i++)
        arr[i] = arr[i + 1];
    arr[arr.length - 1] = temp;
}
function Q22() {
    var arr = [1, 2, 3, 4, 5];
    var rotation = parseInt(prompt("Enter the Number oF rotations"));
    var i = 0;
    while (i <= rotation - 1) {
        leftRotatebyOne(arr);
        i++;
    }
    document.getElementById("hello").innerHTML = "The Array after " + rotation + " rotations  is: " + arr;

}