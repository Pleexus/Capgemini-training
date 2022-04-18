function Q14() {
    document.getElementById("hello").innerHTML = "The Elements On Odd Positions In The List Are : " + arr.filter(function (item, index) {
        return index % 2 !== 0;
    });
}