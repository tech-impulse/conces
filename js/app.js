/*
PROGRAMACION DE LOS EVENTOS DE BOTONES DE LA APLICACIÓN
*/

var paginas = ["mainLogin", "resetPassword", "resetPasswordFinish", "main", "parametros", "nuevosEjecutivo", "alertasNuevos", "alertasUsados", "alertasposventa", "consultivoNuevos", "consultivoUsados", "consultivoposventa", "nuevosEjecutivo", "nuevosAnalitico", "posventaEjecutivo", "usadosEjecutivo", "usadosAnalitico"];

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

    showPage('main');

    $("#tituloSeccion").html("TÍTULO");
    $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");

    /*
        $("#app").on("swiperight", function () {
            $("#navpanel").panel("open");
        });
        */

    $("#btnHeaderParametros").unbind('click').bind('click', function () {
        showPage('parametros');
        $("#tituloSeccion").html('<span class=""> PARÁMETROS DE BÚSQUEDA</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
    });

    $("#btnHeaderMenu").unbind('click').bind('click', function () {
        $("#navpanel").panel("open");
    });

    $("#btnHeaderInicio").unbind('click').bind('click', function () {
        showPage('main');
        $("#tituloSeccion").html('<span class=""> INICIO </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
    });

    $("#btnMenuAlertasNuevos").unbind('click').bind('click', function () {
        showPage('alertasNuevos');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
    });

    $("#btnMenuAlertasUsados").unbind('click').bind('click', function () {
        showPage('alertasUsados');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
    });

    $("#btnMenuAlertasposventa").unbind('click').bind('click', function () {
        showPage('alertasposventa');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
    });

    $("#btnMenuNuevosConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });

    $("#btnMenuUsadosConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoUsados');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });

    $("#btnMenuposventaConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoposventa');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });

    /* VEHICULOS NUEVOS */
    $("#btnMainNuevosConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });
    
    $("#btnMainNuevosEjecutivo").unbind('click').bind('click', function () {
        showPage('nuevosEjecutivo');
        $("#tituloSeccion").html('<span class=""> VEHÍCULOS NUEVOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Ejecutivo");
    });
    
    $("#btnMainNuevosAnalitico").unbind('click').bind('click', function () {
        showPage('nuevosAnalitico');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Analítico");
    });
    
    $("#btnMainNuevosComparativa").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });

    /* VEHICULOS USADOS */
    $("#btnMainUsadosConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoUsados');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });
    
    $("#btnMainUsadosEjecutivo").unbind('click').bind('click', function () {
        showPage('usadosEjecutivo');
        $("#tituloSeccion").html('<span class=""> VEHÍCULOS NUEVOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Ejecutivo");
    });
    
    $("#btnMainUsadosAnalitico").unbind('click').bind('click', function () {
        showPage('usadosAnalitico');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });
    
    $("#btnMainUsadosComparativa").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });

    /* VEHICULOS posventa */
    $("#btnMainposventaConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoposventa');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });

    $("#btnMainposventaEjecutivo").unbind('click').bind('click', function () {
        showPage('posventaEjecutivo');
        $("#tituloSeccion").html('<span class=""> SERVICIO POSVENTA</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Ejecutivo");
    });
    
    $("#btnMainposventaAnalitico").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });
    
    $("#btnMainposventaComparativa").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ <span class='icon-icnotipoanalisis'></span> Consultivo diario");
    });
    //$("#navpanel").panel("close");
});


function showPage(pagina) {
    for (var i = 0; i < paginas.length; i++) {
        if (paginas[i] != pagina) {
            $("#page_" + paginas[i]).hide();
        }
    }
    if (pagina == 'main') {
        $("#divHeaderButtons").hide();
    } else {
        $("#divHeaderButtons").show();
    }
    $("#page_" + pagina).show();
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