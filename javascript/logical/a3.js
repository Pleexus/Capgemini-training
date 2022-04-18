function Q3() {
    var v = prompt('Enter The Name');
    (v.includes("Alice") || v.includes("Bob")) ? alert(greeting(v)) : alert("Hello");
}