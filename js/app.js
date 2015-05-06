/*
PROGRAMACION DE LOS EVENTOS DE BOTONES DE LA APLICACIÓN
*/


$(document).bind("mobileinit", function () {

    $.support.touchOverflow = false;
    $.mobile.touchOverflowEnabled = false;

    $.ajaxSetup({
        timeout: 10000, //Time in milliseconds
        crossDomain: true
    });

});

$(document).ajaxStart(function () {
    /*
        if (pantallaApp == "creditosPaquetes") {
            $.mobile.loading('show', {
                text: 'Espere por favor...',
                textVisible: true,
                theme: 'a',
                html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='lib/jquerymobile/images/ajax-loader.gif' />Procesando...</span>"

            });

        } else if (pantallaApp == "nuevoAnuncio9") {
            $.mobile.loading('show', {
                text: 'Espere por favor...',
                textVisible: true,
                theme: 'a',
                html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='lib/jquerymobile/images/ajax-loader.gif' /><h2><br>Youtteando...</h2></span>"

            });
            $("#footer_comun").show();

        } else if (pantallaApp == "mainMenu") {

        } else {
            $.mobile.loading('show', {
                textVisible: false,
                theme: 'a',
                html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='lib/jquerymobile/images/ajax-loader.gif' /></span>"
            });
        }
        */

});

$(document).ajaxStop(function () {

});

$(document).on('pageshow', '#app', function () {

});


$(document).on('pageinit', '#loginModule', function () {

    if (isAndroidDevice()) {
        var element = '<script type="text/javascript" src="cordova.js"></script>';
        $('head').append(element);

    } else {
        console.log("No es Android");
    }

    if (typeof (Storage) !== "undefined") {
        console.log("Soporta");
    } else {
        console.log("No soporta");
    }

    $('#btnLogIn').unbind('click').bind('click', function () {
        $.mobile.changePage("#app");
    });
    $('#loginForgotPassword').unbind('click').bind('click', function () {
        $("#resetPassword").show();
        $("#mainLogin").hide();
    });


    $("#resetPassword").hide();
    $("#resetPasswordFinish").hide();


});

$(document).on('pageinit', '#app', function () {

    $("#resetPassword").hide();
    $("#resetPasswordFinish").hide();
    $("#parametros").hide();
    $("#alertasNuevos").hide();
    $("#alertasUsados").hide();
    $("#alertasPostventa").hide();
    $("#consultivoNuevos").hide();
    $("#consultivoUsados").hide();
    $("#consultivoPostventa").hide();

    $("#tituloSeccion").html("TÍTULO");
    $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");


    $("#app").on("swiperight", function () {
        $("#navpanel").panel("open");
    });

    $("#btnHeaderParametros").unbind('click').bind('click', function () {
        $("#parametros").show();
        $("#mainMenu").hide();
        $("#alertasNuevos").hide();
        $("#alertasUsados").hide();
        $("#alertasPostventa").hide();
        $("#consultivoNuevos").hide();
        $("#consultivoUsados").hide();
        $("#consultivoPostventa").hide();
        $("#tituloSeccion").html('<span class=""> PARÁMETROS DE BÚSQUEDA</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
    });

    $("#btnHeaderInicio").unbind('click').bind('click', function () {
        $("#parametros").hide();
        $("#mainMenu").show();
        $("#alertasNuevos").hide();
        $("#alertasUsados").hide();
        $("#alertasPostventa").hide();
        $("#consultivoNuevos").hide();
        $("#consultivoUsados").hide();
        $("#consultivoPostventa").hide();
        $("#tituloSeccion").html('<span class=""> INICIO </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
    });

    $("#btnMenuAlertasNuevos").unbind('click').bind('click', function () {
        $("#alertasNuevos").show();
        $("#alertasUsados").hide();
        $("#alertasPostventa").hide();
        $("#mainMenu").hide();
        $("#parametros").hide();
        $("#consultivoNuevos").hide();
        $("#consultivoUsados").hide();
        $("#consultivoPostventa").hide();
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
    });

    $("#btnMenuAlertasUsados").unbind('click').bind('click', function () {
        $("#alertasNuevos").hide();
        $("#alertasUsados").show();
        $("#alertasPostventa").hide();
        $("#mainMenu").hide();
        $("#parametros").hide();
        $("#consultivoNuevos").hide();
        $("#consultivoUsados").hide();
        $("#consultivoPostventa").hide();
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
    });

    $("#btnMenuAlertasPostventa").unbind('click').bind('click', function () {
        $("#alertasNuevos").hide();
        $("#alertasUsados").hide();
        $("#alertasPostventa").show();
        $("#mainMenu").hide();
        $("#parametros").hide();
        $("#consultivoNuevos").hide();
        $("#consultivoUsados").hide();
        $("#consultivoPostventa").hide();
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
    });

    $("#btnMenuNuevosConsultivo").unbind('click').bind('click', function () {
        $("#alertasNuevos").hide();
        $("#alertasUsados").hide();
        $("#alertasPostventa").hide();
        $("#mainMenu").hide();
        $("#parametros").hide();
        $("#consultivoNuevos").show();
        $("#consultivoUsados").hide();
        $("#consultivoPostventa").hide();
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });

    $("#btnMenuUsadosConsultivo").unbind('click').bind('click', function () {
        $("#alertasNuevos").hide();
        $("#alertasUsados").hide();
        $("#alertasPostventa").hide();
        $("#mainMenu").hide();
        $("#parametros").hide();
        $("#consultivoNuevos").show();
        $("#consultivoUsados").hide();
        $("#consultivoPostventa").hide();
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });

    $("#btnMenuPostventaConsultivo").unbind('click').bind('click', function () {
        $("#alertasNuevos").hide();
        $("#alertasUsados").hide();
        $("#alertasPostventa").hide();
        $("#mainMenu").hide();
        $("#parametros").hide();
        $("#consultivoNuevos").hide();
        $("#consultivoUsados").show();
        $("#consultivoPostventa").show();
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });

    $("#btnMainNuevosConsultivo").unbind('click').bind('click', function () {
        $("#alertasNuevos").hide();
        $("#alertasUsados").hide();
        $("#alertasPostventa").hide();
        $("#mainMenu").hide();
        $("#parametros").hide();
        $("#consultivoNuevos").show();
        $("#consultivoUsados").hide();
        $("#consultivoPostventa").hide();
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });

    $("#btnMainUsadosConsultivo").unbind('click').bind('click', function () {
        $("#alertasNuevos").hide();
        $("#alertasUsados").hide();
        $("#alertasPostventa").hide();
        $("#mainMenu").hide();
        $("#parametros").hide();
        $("#consultivoNuevos").show();
        $("#consultivoUsados").hide();
        $("#consultivoPostventa").hide();
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });

    $("#btnMainPostventaConsultivo").unbind('click').bind('click', function () {
        $("#alertasNuevos").hide();
        $("#alertasUsados").hide();
        $("#alertasPostventa").hide();
        $("#mainMenu").hide();
        $("#parametros").hide();
        $("#consultivoNuevos").hide();
        $("#consultivoUsados").hide();
        $("#consultivoPostventa").show();
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });




    //$("#navpanel").panel("close");
});

function graficasNuevos() {
    $("#alertasNuevos").hide();
    $("#alertasUsados").hide();
    $("#alertasPostventa").hide();
    $("#mainMenu").hide();
    $("#parametros").hide();
    $("#consultivoNuevos").show();
    $("#consultivoUsados").hide();
    $("#consultivoPostventa").hide();
    $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
    $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
}

function graficasUsados() {
    $("#alertasNuevos").hide();
    $("#alertasUsados").hide();
    $("#alertasPostventa").hide();
    $("#mainMenu").hide();
    $("#parametros").hide();
    $("#consultivoNuevos").hide();
    $("#consultivoUsados").show();
    $("#consultivoPostventa").hide();
    $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
    $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
}

function graficasPostventa() {
    $("#alertasNuevos").hide();
    $("#alertasUsados").hide();
    $("#alertasPostventa").hide();
    $("#mainMenu").hide();
    $("#parametros").hide();
    $("#consultivoNuevos").hide();
    $("#consultivoUsados").hide();
    $("#consultivoPostventa").show();
    $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
    $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
}

function isAndroidDevice() {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if (isAndroid) {
        return true;
    } else {
        return false;
    }
}