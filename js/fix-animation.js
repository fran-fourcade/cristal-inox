$(window).on("load", function () {
  let todo = document.getElementById("todo");
  let escaleras = document.getElementById("escaleras");
  let piletas = document.getElementById("piletas");
  let imagenes = document.getElementsByClassName("imagen");

  console.log(escaleras);
  console.log(imagenes);

  escaleras.onclick = function () {
    for (var i = 0; i < imagenes.length; i++) {
      if (imagenes[i].classList.contains("uk-animation-fade")) {
        imagenes[i].classList.remove("uk-animation-fade");
      }
    }
  };

  piletas.onclick = function () {
    for (var i = 0; i < imagenes.length; i++) {
      if (imagenes[i].classList.contains("uk-animation-fade")) {
        imagenes[i].classList.remove("uk-animation-fade");
      }
    }
  };
});
