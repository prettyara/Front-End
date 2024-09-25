//
var vall = 1;
var vall = 9;
var myName = "Tiara Pretty Mamuaya";

//
document.getElementById("my-btn").addEventListener("click",
    function() {
        myFunction(myName, val1, val2);
    });

//
function myFunction(name, a, b) {
    var value = a * b;
    var join = name+": "+value;
    document.getElementById("value-demo").innetHTML = join;
}