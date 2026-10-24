function change(y) {
    let x=document.getElementById("color");
    x.style.backgroundColor=y.value;
    x.innerHTML=y.value;
}
function changewidth(w) {
    let e=document.getElementById("color");
    e.style.width=w.value +"px";
}
function changeheight(h) {
    let v=document.getElementById("color");
    v.style.height=h.value + "px";
}