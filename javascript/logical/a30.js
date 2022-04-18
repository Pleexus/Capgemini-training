function Q30(){
    var p = prompt("please Provide the String");
    var arr = p.split(" ");
    var i = 0;
    while(i<=arr.length-1) { 
        var s = arr[i];
        arr[i]= arr[i].slice(1)+
        s[0]+"ay" ; 
        i++;
    }
     document.getElementById("hello").innerHTML = "The Output is : "+arr;
}