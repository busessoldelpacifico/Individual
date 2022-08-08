var d = new Date();
function mostrarFecha(){ var d = new Date()};


alert("Hoy dia es  " + d.getDay() + "  ,  " + d.getDate() + "  de  " + d.getMonth()  + "  de  " + d.getFullYear() + "  y son las  " + d.getHours() + "  horas  " + d.getMinutes() + "minutos  " + d.getSeconds() + "segundos");// muestra en pantalla la fecha y la hora actuales
    



// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="tiemporestante"
  document.getElementById("tiemporestante").innerHTML = ("Faltan" + days + "  Dias " + hours + "  horas   "
  + minutes + "  minutos " + seconds + "  segundos  "+ "para fin de año");

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("tiemporestante").innerHTML = "Feliz Fin de Año";
  }
}, 1000);


const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
  on: {
    createSlide: (carousel, slide) => {
      slide.Panzoom = new Panzoom(slide.$el.querySelector(".panzoom"), {
        panOnlyZoomed: true,
        resizeParent: true,
      });
    },
    deleteSlide: (carousel, slide) => {
      if (slide.Panzoom) {
        slide.Panzoom.destroy();
        slide.Panzoom = null;
      }
    },
  },
});

const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
  Sync: {
    target: mainCarousel,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  infinite: false,
});