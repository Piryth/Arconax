var scroller = document.getElementById("scroller");
scroller.style.transition = "0.2s ease"

scroller.onclick = function(e) {

    if(scroller.style.transform == 'rotate(270deg)') {
        scroller.style.transform = "rotate(90deg)";
        scroller.setAttribute('href', '#');

    } else {
        
        scroller.style.transform = 'rotate(270deg)';
        scroller.setAttribute('href', '#sectionpremiere');


    }
}