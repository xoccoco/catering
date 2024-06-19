
let botonMenu;


botonMenu = document.getElementById("boton");


function mostrarMenu() {


  let navMenu = document.getElementById("ham_area");


  if(navMenu.style.display === "block"){


      navMenu.style.display = "none";

  } else {

      navMenu.style.display = "block";
  };
};

botonMenu.addEventListener("click", mostrarMenu);


