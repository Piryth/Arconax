
    var fl_g = document.querySelector("#c1");
    var fl_d = document.querySelector("#c2");
    var container = document.getElementById("container");
    var current_image = 0;
    var nb = 5;


    carousel.style.width = 156*nb + "px";
    carousel.style.height = "156px";

    img1 = document.createElement("img");
    img1.classname ="cover";
    img1.style.borderRadius = "8px";
    img1.setAttribute('src', '../img/covers/N7.jpg');
    img1.setAttribute('width', '156');
    container.appendChild(img1);

    img2 = document.createElement("img");
    img2.classname ="cover";
    img2.style.borderRadius = "8px";
    img2.setAttribute('src', '../img/covers/coruscant_ep.jpg');
    img2.setAttribute('width', '156');
    container.appendChild(img2);

    img3 = document.createElement("img");
    img3.classname ="cover";
    img3.style.borderRadius = "8px";
    img3.setAttribute('src', '../img/covers/the_wise.png');
    img3.setAttribute('width', '156');
    container.appendChild(img3);

    img4 = document.createElement("img");
    img4.classname ="cover";
    img4.style.borderRadius = "8px";
    img4.setAttribute('src', '../img/covers/indomitable.png');
    img4.setAttribute('width', '156');
    container.appendChild(img4);

    img5 = document.createElement("img");
    img5.classname ="cover";
    img5.style.borderRadius = "8px";
    img5.setAttribute('src', '../img/covers/great_hunt_ep.png');
    img5.setAttribute('width', '156');
    container.appendChild(img5);








    

fl_g.onclick = function(e) {
    if(current_image > 0) {
        current_image--;
        container.style.transform= 'translateY(' + current_image*156 +'px)';
        container.style.transition = 'all 0.2s ease';
    }

}

fl_d.onclick = function(e) {
    if(current_image < nb) {
        current_image++;
        container.style.transform= 'translateY(' + current_image*156 +'px)';
        container.style.transition = 'all 0.2s ease';

    }
}