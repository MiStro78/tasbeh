let count=0;
function increase() {
    document.getElementById("display").innerHTML=++count;
    if (count>=33) {
        alert("change the word")
    }
}
function reset() {
    count=0;
    document.getElementById("display").innerHTML=count;
}
