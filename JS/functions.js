function mostrarImg(id){
    disp = document.getElementById('img');
    disp.innerHTML = "";
    if (id === '0001'){
        for (i=1; i<4; i++){
            img = new Image();
            img.setAttribute("class","w3-card-4");
            src = "Imgs/playaHermosa" + i + ".JPG";
            img.src = src;
            img.style.width = '50%';
            disp.appendChild(img);
        }
    }
    else if (id === '0002'){
        for (i=1; i<4; i++){
            img = new Image();
            img.setAttribute("class","w3-card-4");
            src = "Imgs/nicaragua" + i + ".jpg";
            img.src = src;
            img.style.width = '50%';
            disp.appendChild(img);
        }
    }else{
        for (i=1; i<4; i++){
            img = new Image();
            img.setAttribute("class","w3-card-4");
            src = "Imgs/limon" + i + ".jpg";
            img.src = src;
            img.style.width = '50%';
            disp.appendChild(img);
        }
    }
    $(document).ready(function(){
        $("#img").fadeIn("slow");
    });
}

function mostrar(){
    document.getElementById("tabla").style.display = 'block';
}