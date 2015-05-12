$(document).on('pageinit', '#app', function () {

    $("#btnNuevosAnalitico3-2").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Comparativa");
    });
// CONSULTIVO
    $("#btnConsultivoPosventa1").unbind('click').bind('click', function () {
         $("#div_consultivoPosventa").html('<center><img src="css/maqueta/55_pasos_taller.jpg" height="100%"></center>');
    });
     $("#btnConsultivoPosventa2").unbind('click').bind('click', function () {
         $("#div_consultivoPosventa").html('<center><img src="css/maqueta/55_facturacion.jpg" width="50%"><img src="css/maqueta/55_facturacion_2.jpg" width="50%"></center>');
    });
    
});