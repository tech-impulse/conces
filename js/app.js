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

        alert("entra");
    });
    
    $("#resetPassword").hide();
    $("#resetPasswordFinish").hide();
    

});

function isAndroidDevice() {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if (isAndroid) {
        return true;
    } else {
        return false;
    }
}