/*
PROGRAMACION DE LOS EVENTOS DE BOTONES DE LA APLICACIÓN
*/

var paginas = ["mainLogin", "resetPassword", "resetPasswordFinish", "main", "parametros", "nuevosEjecutivo", "alertasNuevos", "alertasUsados", "alertasPosventa", "consultivoNuevos", "consultivoUsados", "consultivoPosventa", "nuevosEjecutivo", "nuevosAnalitico", "posventaEjecutivo", "usadosEjecutivo", "usadosAnalitico", "posventaAnalitico"];

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
    showPage('mainLogin');
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
        showPage('resetPassword');
    });
    $('#btnCancelResetPassword').unbind('click').bind('click', function () {
        showPage('mainLogin');
    });






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

    $('#app').on('swipedown', function () {
        alert("swipedown..");
    });
    $('#app').on('swipeup', function () {
        alert("swipeup..");
    });
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
        $("#tituloSeccion2").html("<span class='icon-icnoruta' ></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
    });

    /* VEHICULOS NUEVOS */
    $("#btnMenuNuevosConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        $("#navpanel").panel("close");
    });

    $("#btnMenuNuevosEjecutivo").unbind('click').bind('click', function () {
        showPage('nuevosEjecutivo');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo");
        $("#navpanel").panel("close");
    });

    $("#btnMenuNuevosAnalitico").unbind('click').bind('click', function () {
        showPage('nuevosAnalitico');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico");
        $("#navpanel").panel("close");
    });

    $("#btnMenuNuevosComparativa").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Comparativa");
        $("#navpanel").panel("close");
    });

    $("#btnMenuNuevosAlertas").unbind('click').bind('click', function () {
        showPage('alertasNuevos');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
        $("#navpanel").panel("close");
    });
    /* MENÚ LATERAL */
    /* VEHICULOS USADOS */
    $("#btnMenuUsadosConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoUsados');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHICULOS USADOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Consultivo diario");
        $("#navpanel").panel("close");
    });

    $("#btnMenuUsadosEjecutivo").unbind('click').bind('click', function () {
        showPage('usadosEjecutivo');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHÍCULOS USADOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo");
        $("#navpanel").panel("close");
    });

    $("#btnMenuUsadosAnalitico").unbind('click').bind('click', function () {
        showPage('usadosAnalitico');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHÍCULOS USADOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico");
        $("#navpanel").panel("close");
    });

    $("#btnMenuUsadosComparativa").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHÍCULOS USADOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Comparativa");
        $("#navpanel").panel("close");
    });

    $("#btnMenuUsadosAlertas").unbind('click').bind('click', function () {
        showPage('alertasUsados');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
        $("#navpanel").panel("close");
    });

    /* VEHICULOS POSVENTA */
    $("#btnMenuposventaConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoPosventa');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Consultivo diario");
        $("#navpanel").panel("close");
    });

    $("#btnMenuposventaEjecutivo").unbind('click').bind('click', function () {
        showPage('posventaEjecutivo');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Ejecutivo");
        $("#navpanel").panel("close");
    });

    $("#btnMenuposventaAnalitico").unbind('click').bind('click', function () {
        showPage('posventaAnalitico');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Analítico");
        $("#navpanel").panel("close");
    });

    $("#btnMenuposventaComparativa").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Comparativa");
        $("#navpanel").panel("close");
    });

    $("#btnMenuPosventaAlertas").unbind('click').bind('click', function () {
        showPage('alertasPosventa');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
        $("#navpanel").panel("close");
    });

    /* VEHICULOS NUEVOS */
    $("#btnMainNuevosConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
    });

    $("#btnMainNuevosEjecutivo").unbind('click').bind('click', function () {
        showPage('nuevosEjecutivo');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHÍCULOS NUEVOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo");
    });

    $("#btnMainNuevosAnalitico").unbind('click').bind('click', function () {
        showPage('nuevosAnalitico');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico");
    });

    $("#btnMainNuevosComparativa").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Comparativa");
    });

    $("#btnMainAlertasNuevos").unbind('click').bind('click', function () {
        showPage('alertasNuevos');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
    });
    /* MENU PRINCIPAL */
    /* VEHICULOS USADOS */
    $("#btnMainUsadosConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoUsados');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHICULOS USADOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Consultivo diario");
    });

    $("#btnMainUsadosEjecutivo").unbind('click').bind('click', function () {
        showPage('usadosEjecutivo');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHÍCULOS USADOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo");
    });

    $("#btnMainUsadosAnalitico").unbind('click').bind('click', function () {
        showPage('usadosAnalitico');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHÍCULOS USADOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico");
    });

    $("#btnMainUsadosComparativa").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHÍCULOS USADOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Comparativa");
    });
    
    $("#btnMainAlertasUsados").unbind('click').bind('click', function () {
        showPage('alertasUsados');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
        $("#navpanel").panel("close");
    });

    /* VEHICULOS posventa */
    $("#btnMainposventaConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoPosventa');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Consultivo diario");
    });

    $("#btnMainposventaEjecutivo").unbind('click').bind('click', function () {
        showPage('posventaEjecutivo');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Ejecutivo");
    });

    $("#btnMainposventaAnalitico").unbind('click').bind('click', function () {
        showPage('posventaAnalitico');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Analítico");
    });

    $("#btnMainposventaComparativa").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Comparativa");
    });
    
     $("#btnMainAlertasposventa").unbind('click').bind('click', function () {
        showPage('alertasPosventa');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Instalación/ Departamento/ Nivel de análisis o alerta/ Informe");
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
    // $("#navpanel").panel("close");
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