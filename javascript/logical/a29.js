function Q29() {
    var arr = ["Hello", "World", "in", "a", "frame"];
    var maxlenobj = arr.reduce((a, b) => { return a.length > b.length ? a : b; });
    var maxlen = maxlenobj.length;
    var i = 0;
    var s = "<br>"+"*".repeat(maxlen + 2);
    while (i <= arr.length-1) {
        var l = arr[i].length;
        // console.log(arr[i]+"length is : "+l);
        s += "<br>* " + arr[i] + "&nbsp".repeat(maxlen - l+1)+"*";
        i++;
    }
    document.getElementById("hello").innerHTML = "The Output is : "+s;
}