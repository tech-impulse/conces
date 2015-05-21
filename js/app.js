/*
PROGRAMACION DE LOS EVENTOS DE BOTONES DE LA APLICACIÓN
*/

var paginas = ["mainLogin", "resetPassword", "resetPasswordFinish", "main", "parametros", "nuevosEjecutivo", "alertasNuevos", "alertasUsados", "alertasPosventa", "consultivoNuevos", "consultivoUsados", "consultivoPosventa", "nuevosEjecutivo", "nuevosAnalitico", "posventaEjecutivo", "usadosEjecutivo", "usadosAnalitico", "posventaAnalitico", "comparativaNuevos", "comparativaUsados", "comparativaPosventa"];

var botonAnterior;

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
    $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión");

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
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Búsqueda");
    });

    $("#btnHeaderMenu").unbind('click').bind('click', function () {
        $("#navpanel").panel("open");
    });

    $("#btnHeaderInicio").unbind('click').bind('click', function () {
        showPage('main');
        $("#tituloSeccion").html('<span class=""> INICIO </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta' ></span>  Concesión");
    });

    /* VEHICULOS NUEVOS */
    $("#btnMenuNuevosConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        $("#navpanel").panel("close");
    });

    $("#btnMenuNuevosEjecutivo").unbind('click').bind('click', function () {
        showPage('nuevosEjecutivo');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS </span>');
        $("#btnNuevosEjecutivo1-1").click();
        $("#navpanel").panel("close");
    });

    $("#btnMenuNuevosAnalitico").unbind('click').bind('click', function () {
        showPage('nuevosAnalitico');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B0/ Entregas, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#navpanel").panel("close");
    });

    $("#btnMenuNuevosComparativa").unbind('click').bind('click', function () {
        showPage('comparativaNuevos');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Comparativa");
        $("#navpanel").panel("close");
    });

    $("#btnMenuNuevosAlertas").unbind('click').bind('click', function () {
        showPage('alertasNuevos');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ Alertas");
        $("#navpanel").panel("close");
    });
    /* MENÚ LATERAL */
    /* VEHICULOS USADOS */
    $("#btnMenuUsadosConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoUsados');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHICULOS USADOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Consultivo diario");
        $("#navpanel").panel("close");
    });

    $("#btnMenuUsadosEjecutivo").unbind('click').bind('click', function () {
        showPage('usadosEjecutivo');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHÍCULOS USADOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#navpanel").panel("close");
    });

    $("#btnMenuUsadosAnalitico").unbind('click').bind('click', function () {
        showPage('usadosAnalitico');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHÍCULOS USADOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#navpanel").panel("close");
    });

    $("#btnMenuUsadosComparativa").unbind('click').bind('click', function () {
        showPage('comparativaUsados');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHÍCULOS USADOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Comparativa");
        $("#navpanel").panel("close");
    });

    $("#btnMenuUsadosAlertas").unbind('click').bind('click', function () {
        showPage('alertasUsados');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ Alertas");
        $("#navpanel").panel("close");
    });

    /* VEHICULOS POSVENTA */
    $("#btnMenuposventaConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoPosventa');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Posventa/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Consultivo diario");
        $("#navpanel").panel("close");
    });

    $("#btnMenuposventaEjecutivo").unbind('click').bind('click', function () {
        showPage('posventaEjecutivo');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Posventa/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Ejecutivo<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#navpanel").panel("close");
    });

    $("#btnMenuposventaAnalitico").unbind('click').bind('click', function () {
        showPage('posventaAnalitico');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Posventa/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Analítico<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#navpanel").panel("close");
    });

    $("#btnMenuposventaComparativa").unbind('click').bind('click', function () {
        showPage('comparativaPosventa');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Posventa/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Comparativa<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#navpanel").panel("close");
    });

    $("#btnMenuPosventaAlertas").unbind('click').bind('click', function () {
        showPage('alertasPosventa');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Posventa/ Alertas");
        $("#navpanel").panel("close");
    });

    /* VEHICULOS NUEVOS */
    $("#btnMainNuevosConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoNuevos');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
    });

    $("#btnMainNuevosEjecutivo").unbind('click').bind('click', function () {
        showPage('nuevosEjecutivo');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHÍCULOS NUEVOS</span>');
        $("#btnNuevosEjecutivo1-1").click();
    });

    $("#btnMainNuevosAnalitico").unbind('click').bind('click', function () {
        showPage('nuevosAnalitico');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B0/ Entregas, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnMainNuevosComparativa").unbind('click').bind('click', function () {
        showPage('comparativaNuevos');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #66cc00; margin-right:7px;"></span><span class=""> VEHICULOS NUEVOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Comparativa<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
    });

    $("#btnMainAlertasNuevos").unbind('click').bind('click', function () {
        showPage('alertasNuevos');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Nuevos/ Alertas");
    });
    /* MENU PRINCIPAL */
    /* VEHICULOS USADOS */
    $("#btnMainUsadosConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoUsados');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHICULOS USADOS </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Consultivo diario");
    });

    $("#btnMainUsadosEjecutivo").unbind('click').bind('click', function () {
        showPage('usadosEjecutivo');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHÍCULOS USADOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
    });

    $("#btnMainUsadosAnalitico").unbind('click').bind('click', function () {
        showPage('usadosAnalitico');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHÍCULOS USADOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
    });

    $("#btnMainUsadosComparativa").unbind('click').bind('click', function () {
        showPage('comparativaUsados');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #45abc9; margin-right:7px;"></span><span class=""> VEHÍCULOS USADOS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Comparativa<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
    });

    $("#btnMainAlertasUsados").unbind('click').bind('click', function () {
        showPage('alertasUsados');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Usados/ Alertas");
        $("#navpanel").panel("close");
    });

    /* VEHICULOS posventa */
    $("#btnMainposventaConsultivo").unbind('click').bind('click', function () {
        showPage('consultivoPosventa');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Posventa/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Consultivo diario");
    });

    $("#btnMainposventaEjecutivo").unbind('click').bind('click', function () {
        showPage('posventaEjecutivo');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Posventa/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Ejecutivo<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
    });

    $("#btnMainposventaAnalitico").unbind('click').bind('click', function () {
        showPage('posventaAnalitico');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Posventa/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Analítico<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
    });

    $("#btnMainposventaComparativa").unbind('click').bind('click', function () {
        showPage('comparativaPosventa');
        $("#tituloSeccion").html('<span class="icon-icnoseccion" style="font-size:25px; margin:0px; color:  #c28c00; margin-right:7px;"></span><span class=""> SERVICIO POSVENTA </span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Posventa/ <span class='icon-icnotipoanalisis' style='color:#c28c00'></span> Comparativa<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
    });

    $("#btnMainAlertasposventa").unbind('click').bind('click', function () {
        showPage('alertasPosventa');
        $("#tituloSeccion").html('<span class=""> ALERTAS</span>');
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehículos Posventa/ Alertas");
    });
    //$("#navpanel").panel("close");
});


function showPage(pagina) {
    for (var i = 0; i < paginas.length; i++) {
        if (paginas[i] != pagina) {
            $("#page_" + paginas[i]).hide();
            $("#head_nuevosEjecutivo").show();
            $("#head_nuevosAnalitico").show();
            $("#head_usadosEjecutivo").show();
            $("#head_usadosAnalitico").show();
            $("#head_posventaEjecutivo").show();
            $("#head_posventaAnalitico").show();
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

function mostrarMenu(tipo) {
    if (tipo == 0) {
        $("#btnMostrar").html("<a style='float:right' onclick='mostrarMenu(1)' class='ui-btn ui-corner-all ui-icon-carat-d ui-btn-icon-notext'></a>");
        $("#head_nuevosEjecutivo").hide();
        $("#head_nuevosAnalitico").hide();
        $("#head_usadosEjecutivo").hide();
        $("#head_usadosAnalitico").hide();
        $("#head_posventaEjecutivo").hide();
        $("#head_posventaAnalitico").hide();
    } else {
        $("#btnMostrar").html("<a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a>");
        $("#head_nuevosEjecutivo").show();
        $("#head_nuevosAnalitico").show();
        $("#head_usadosEjecutivo").show();
        $("#head_usadosAnalitico").show();
        $("#head_posventaEjecutivo").show();
        $("#head_posventaAnalitico").show();
    }
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

function botonSelccionado(tipo, boton) {
    console.log(boton);
    if (tipo == 1) {
        document.getElementById(boton).style.background = "#4C9900";
        document.getElementById(boton).style.color = "#FFFFFF";
    }
    if (tipo == 2) {
        document.getElementById(boton).style.background = "#3A8CA4";
        document.getElementById(boton).style.color = "#FFFFFF";
    }
    if (tipo == 3) {
        document.getElementById(boton).style.background = "#c28c00";
        document.getElementById(boton).style.color = "#FFFFFF";
    }
    if (botonAnterior == undefined) {
        botonAnterior = boton;
    } else {
        if (boton != botonAnterior) {
            document.getElementById(botonAnterior).style.background = "";
            if (botonAnterior.length < 23) {
                document.getElementById(botonAnterior).style.color = "#000000";
            }
            botonAnterior = boton;
            console.log("boton anterior desmarcado");
            console.log(botonAnterior);
        }
    }

}