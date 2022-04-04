var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navlinks").style.top = "0";
    } else {
        document.getElementById("navlinks").style.top = "-400px";
    }
    prevScrollpos = currentScrollPos;
}