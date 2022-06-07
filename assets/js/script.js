// Activación Tooltip



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function () {


// Alerta Correo Enviado

    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente");
    });

// Cambio Propiedades CSS

    $("h3").on("dblclick", function(){
        $(this).css("color", "red");
      });

// Propiedad Toggle

      $(".otras-recetas-titulo").click(function() {
        $(".cuerpo-receta").toggle("slow");
      });

});


