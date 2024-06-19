window.onload = function(){

let fotos = ["foto1_pase@3x.jpg", "foto2_pase@3x.jpg", "foto3_pase@3x.jpg"];

let description = ["Description de Foto1", "Description de Foto2, Description de Foto3"];


let positionActual = 0;
let descriptionActual = 0;

let botonRetroceder = document.getElementById("retroceder");
let botonAvanzar = document.getElementById("avanzar");
//console.log(botonAvanzar, botonRetroceder);

function pasarFoto() {

    if((positionActual >= fotos.length - 1) &&
        (descriptionActual >= description.length - 1)){

            positionActual = 0;
            descriptionActual = 0;


} else {

    positionActual++;
    descriptionActual++;

}

renderizarImage();

};

function retrocederFoto (){


    if((positionActual <= 0) && (descriptionActual <= 0 )){

        positionActual = fotos.length - 1;
        descriptionActual = description.length - 1;

    }else{

        positionActual--;
        descriptionActual--;

    }

    renderizarImage();

};

function renderizarImage(){

    document.getElementById("main_image").innerHTML = 
    `<img src="img/${fotos[positionActual]}" alt="${description[descriptionActual]}">`;

};


botonAvanzar.addEventListener("click", pasarFoto);
botonRetroceder.addEventListener("click", retrocederFoto );


renderizarImage();

}

