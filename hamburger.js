var hamburger = document.querySelector("#hamburger");
var hmenu = document.getElementById("hmenu");
var hamburgerclose = document.getElementById("hamburgerclose");

hamburger.onclick = function() {
    hamburger.style.display = "none";
    hmenu.style.transform = "translateX(0vw)";
    hmenu.style.transition = "0.4s ease";
    document.querySelector("html").style.overflowY = "hidden";

}

hamburgerclose.onclick = function() {
    hmenu.style.transform = "translateX(-100vw)";
    hmenu.style.transition = "0.4s ease";
    document.querySelector("html").style.overflowY = "auto";
    hamburger.style.display = "block";
}