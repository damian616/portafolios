// Seccion sitios

let linkedin = document.querySelector('.linkedin');
linkedin.href = 'https://www.linkedin.com/';

// let codePen = document.querySelector('.codepen');
// codePen.href = 'https://codepen.io/';

let github = document.querySelector('.github');
github.href = 'https://github.com/';





let myName = "Ian Andrade Banda"
let bio = "Some bio info here and "
let phone = "  555-555-5555"
let email = "  some@email.com"





// Seccion Portafolio
let project_container = document.querySelector('.project_container')

let project_tittle
let project_img

let projects = [{
    tittle: 'Oportal',
    img_src: '/img/Oportal/Login.jpeg',
  },
  {
    tittle: 'Sube-T',
    img_src: '/img/Sube T/Limpias/Login.PNG',

  },
  {
    tittle: 'Lost Dreams',
    img_src: '/img/Lost_Dreams/ldalpha.png',
  }
]



//  Project card 
projects.forEach(project => {

  project_tittle = project.tittle
  project_img = project.img_src

  let project_card = `
<div class="col-md-4 pb-3">
<div class="card efecto my-3">
  <img class="card-img-top" src="${project_img}" width="500" height="250" />
<div class="card-body project-tile">
<h5 class="project-tile nombreProj">${project_tittle}<i class="fa-solid fa-circle-check"></i>
</h5>
<a class="btn btn-outline-secondary btn-lg btn-block btnProyecto" data-bs-toggle="modal" data-bs-target="#exampleModal" target="_blank" id="profile-link">view</a>
</div>
</div>
</div>`

  $(project_container).append(project_card)

})


var galery_image

$('.btnProyecto').on('click', function (e) {
  var proyecto = $(this).parent().text();
  var x = proyecto.split("\n")[1];


  let modal = ModalParts()
  let galeria


  switch (x) {
    case 'Oportal':

      modal[1].textContent = "opotal"

      galeria = [{

        titulo: "Oportal",
        descripcion: "",
        img_src: [
          "/img/Oportal/Login.jpeg",
          "/img/Oportal/Admin Panel.jpeg",
          "/img/Oportal/Client Editor 1.jpeg",
          "/img/Oportal/Filter Configuration+.PNG",
          "/img/Oportal/New Table Data.PNG",
          "/img/Oportal/New Table Result.PNG",
          "/img/Oportal/Profiles Creator.jpeg",
          "/img/Oportal/Report Data Example.jpeg",
          "/img/Oportal/Report Data Example.PNG",
          "/img/Oportal/Report View.jpeg",
          "/img/Oportal/Table Creator.jpeg",
          "/img/Oportal/User Access Filters Tab For New Report.jpeg",
          "/img/Oportal/User Access Filters Tab.jpeg",

        ]
      }]

      break;
    case 'Sube-T':

      modal[1].textContent = "Subete"

      galeria = [{
        titulo: "Sube-T",
        descripcion: "",
        img_src: [

          "/img/Sube T/Login.PNG",
          "/img/Sube T/Empresa Empleados y Vehiculos.PNG",
          "/img/Sube T/Empresa General.PNG",
          "/img/Sube T/Empresa Rutas.PNG",
          "/img/Sube T/Empresa Tarifas y Ventas.PNG",
          "/img/Sube T/Interfaz Usuario.PNG",
          "/img/Sube T/Modificar Empleados.PNG",
          "/img/Sube T/Modificar Rutas.PNG",
          "/img/Sube T/Modificar Vehiculos.PNG",

        ]

      }]


      break;
    case 'Lost Dreams':

      modal[1].textContent = "Lost Dreams"

      galeria = [{
        titulo: "Lost Dreams",
        descripcion: "Alguna Descripcion Lenguaje C++",
        img_src: [
          "/img/Lost_Dreams/ldalpha.png",
          "/img/Lost_Dreams/Interacciones.PNG",
          "/img/Lost_Dreams/Blender 2.PNG",
          "/img/Lost_Dreams/Blender.PNG",
          "/img/Lost_Dreams/Bosque REM.PNG",
          "/img/Lost_Dreams/Bosque.PNG",
          "/img/Lost_Dreams/Cabaña.PNG",
          "/img/Lost_Dreams/Combate.PNG",
          "/img/Lost_Dreams/FL Studio.PNG",
          "/img/Lost_Dreams/Habitación.PNG",
          "/img/Lost_Dreams/Interacciones Ejemplo.PNG",
          "/img/Lost_Dreams/Interfaz de Interaccion.PNG",
          "/img/Lost_Dreams/Inventario.PNG",
          "/img/Lost_Dreams/Items.PNG",
          "/img/Lost_Dreams/Main Menu.PNG",
          "/img/Lost_Dreams/Mounstro.PNG",
          "/img/Lost_Dreams/Partida Slot.PNG",
          "/img/Lost_Dreams/Partidas Guardadas.PNG",
          "/img/Lost_Dreams/Render Habitacion.PNG",
          "/img/Lost_Dreams/Unity 3D.PNG",
          "/img/Lost_Dreams/Uso de Objeto.PNG",
        ]

      }]

      break;

    default:
      break;

  }

  modal[2].html = displayCarousel(galeria)
  modal[3].textContent = galeria[0].descripcion

})





function displayCarousel(obj) {

  let carousel_container = $(".carousel-inner")

  try {
    const images = document.querySelectorAll('.carousel-item');

    images.forEach(img => {
      img.remove();
    });


  } catch (error) {

  }


  galery_image = obj[0].img_src

  for (i = 0; i < galery_image.length; i++) {

    let src = galery_image[i]
    console.log(src)

    let item = `<div class="carousel-item">
  <img src="${src}" class="d-block w-100" alt="...">
  </div>`

    carousel_container.append(item)

  }


  var childNodes = carousel_container[0].childNodes;

  for (var i = 1; i < childNodes.length; i++) {
    if (childNodes[i].nodeType !== 0) { // nodeType 3 is a text node
      childNodes[i].classList.add('active'); // <a>
      break;
    }
  }


}





//Controlador Nav
$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})



let portafolio_name = document.querySelector('.portafolio_name')
let portafolio_bio = document.querySelector('.portafolio_bio')

let mail_contacto = document.querySelector('.contact_mail')
let tel_contacto = document.querySelector('.fa-phone')


portafolio_name.innerHTML = myName
portafolio_bio.innerHTML = bio

mail_contacto.innerHTML = email
tel_contacto.innerHTML = phone


let port_name = document.querySelector('.em')
let followers = document.getElementById('follower_number');
let following = document.getElementById('following_number');
let repos = document.getElementById('repos');


port_name.innerHTML = myName

followers.innerHTML = "1"
following.innerHTML = "1"
repos.innerHTML = "1"







// Seccion Habilidades
let progress_bars = document.querySelector('.progress_bars')
let progress_col_a = document.querySelector('.progress_col_a')
let progress_col_b = document.querySelector('.progress_col_b')

let bar_tittle
let progress_value


let habilities_a = [
  {
    tittle: 'HTML &amp; CSS',
    value: 80
  },
  {
    tittle: 'Bootstrap, Bulma, materializecss ...',
    value: 80
  },

  {
    tittle: 'Javascript',
    value: 80
  },

]


createBar(habilities_a,progress_col_a);


let habilities_b = [
  {
    tittle: 'Photoshop',
    value: 80
  },

  {
    tittle: 'Ilustrator',
    value: 80
  },

  {
    tittle: 'Indesing',
    value: 80
  },

]

createBar(habilities_b,progress_col_b);


function createBar(arr,el) {
  arr.forEach(hability => {

    bar_tittle = hability.tittle;
    progress_value = hability.value;

    let hability_bar = `<p class="mb-0">${bar_tittle}</p><div class="progress mb-3"><div class="progress-bar progress-bar-striped bg-secondary" role="progressbar" style="width:${progress_value}%" aria-valuenow="${progress_value}" aria-valuemin="0" aria-valuemax="100"></div>
  </div>`;

    $(el).prepend(hability_bar);

  });
}


//Modal
function ModalParts() {

  let modal_size = document.querySelector('.modal-dialog')
  let modal_title = document.querySelector('.modal-title');
  let modal_body = document.querySelector('.modal-body');
  let modal_footer = document.querySelector('.modal-footer');


  return [modal_size, modal_title, modal_body, modal_footer]

}
