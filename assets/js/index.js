const propiedades = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://www.duna.cl/media/2016/04/Mansion-Playboy.jpg",
    rooms: 5,
    m: 500
  }
];

let html = "";
let template = "";

function templateInicial(d) {

  let container = document.querySelector(".propiedades")

  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("section");
  let h5 = document.createElement("h5");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let btn = document.createElement("button");

  div1.className = "propiedad";
  div2.className = "img";
  div2.style.backgroundImage = `url(${d.src})`;
  div3.className = "d-flex justify-content-between";
  btn.className = "btn btn-info";

  h5.innerHTML = d.name;
  p1.innerHTML = "Cuartos: " + d.rooms;
  p2.innerHTML = "Metros: " + d.m;
  p3.innerHTML = d.description;
  btn.textContent = "Ver mas";

  container.appendChild(div1);
  div1.appendChild(div2);
  div1.appendChild(div4);
  div4.appendChild(h5);
  div4.appendChild(div3);
  div3.appendChild(p1);
  div3.appendChild(p2);
  div4.appendChild(p3);
  div4.appendChild(btn);
};

for (let d of propiedades) {
  templateInicial(d);
}

let total = propiedades.length
document.getElementById("total").innerHTML = `Total: ${propiedades.length}`;

/*Se reinicia el template*/
template = "";




function search() {
  //Variables
  let a = document.getElementById("croom").value;
  let b = document.getElementById("from").value;
  let c = document.getElementById("to").value;
  let total = 0;
  let elem = document.querySelector(".propiedades");

  elem.innerHTML = html;

  if (isNaN(a) || isNaN(b)) {
    alert("Los inputs deben ser de tipo numerico")
    return;
  }


  if (a == "" || b == "" || c == "") {
    alert("No es posible hacer la busqueda, rellena todas las casillas para completar la busqueda");
    return;
  } else {
    html = "";
    for (let d of propiedades) {
      if ((d.rooms >= a) && (d.m >= b) && (d.m <= c)) {
        templateInicial(d);
        total++;

      }
    }
    document.getElementById("total").innerHTML = "Total: " + total;
  }
}


// Esperar a que el HTML este cargado en el DOM

document.addEventListener('DOMContentLoaded', (event) => {
  let btnBuscar = document.querySelector(".btn-warning");
  // Eventos
  btnBuscar.addEventListener('click', search)
});