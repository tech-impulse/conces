$(document).on('pageinit', '#app', function () {

    // BOTONES EJECUTIVO

    // RESUMEN
    $("#btnNuevosEjecutivo1-1").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/18/18_resumen_mensual_mes_1.jpg" height="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/18/18_resumen_mensual_acumulado_2.jpg" height="100%"> </div> </div> </center>');
        $("#div_nuevos_ejecutivo").trigger("create");
    });

    // ENTREGGAS. MIX
    $("#btnNuevosEjecutivo1-2-1").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <div class="ui-grid-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Mix</li> </ul> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/19/19_mix_mes_1.jpg" height="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/19/19_mix_acumulado_2.jpg" height="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#btnNuevosEjecutivo1-2").click();
    });
    
    $("#btnNuevosEjecutivo1-2-2").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center>  <div class="ui-grid-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Canales</li> </ul> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/19/19_canales_mes_3.jpg" height="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/19/19_canales_acumulado_4.jpg" height="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#btnNuevosEjecutivo1-2").click();
    });
    
    $("#btnNuevosEjecutivo1-2-3").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <div class="ui-grid-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Vendedor</li> </ul> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/19/19_vendedor_mes_5.jpg" height="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/19/19_vendedor_acumulado_6.jpg" height="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#btnNuevosEjecutivo1-2").click();
    });

    // ATIPICOS
    $("#btnNuevosEjecutivo1-3").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html(' <center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/24/24_atipicos_mes_1.jpg" height="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/24/24_atipicos_acumulado_2.jpg" height="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
    });

    // EVOLUCION, ENTREGAS
    $("#btnNuevosEjecutivo1-4").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Pedidos / %Cierre</li> </ul> <img src="css/maqueta/20/20_trafico_pedidos_cierre_3.jpg" height="100%"> </center>');
        $("#div_nuevos_ejecutivo").trigger("create");
    });

    $("#btnNuevosEjecutivo2-1").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Mix Cartera</li> </ul><img src="css/maqueta/21/21_mix_cartera_1.jpg" height="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución cartera</li> </ul><img src="css/maqueta/21/21_evolucion_de_cartera_2.jpg" height="100%"> </div> </div> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera por canal</li> </ul><img src="css/maqueta/21/21_cartera_por_canal_3.jpg" height="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera por vendedor</li> </ul><img src="css/maqueta/21/21_cartera_por_vendedor_4.jpg" height="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
    });

    $("#btnNuevosEjecutivo2-2-1").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center>  <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Stock Físico</li> </ul><img src="css/maqueta/22/22_stock_fisico_1.jpg" height="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Antigüedad Stock</li> </ul><img src="css/maqueta/22/22_antiguedad_stock__2.jpg" height="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#btnNuevosEjecutivo2-2").click();
    });
    
    $("#btnNuevosEjecutivo2-2-2").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Saldos</li> </ul><img src="css/maqueta/22/22_saldos_3.jpg" height="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Total Stock + Saldos</li> </ul><img src="css/maqueta/22/22_total_stock__4.jpg" height="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#btnNuevosEjecutivo2-2").click();
    });

    $("#btnNuevosEjecutivo2-3").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Calidad</li> </ul><img src="css/maqueta/23/23_calidad.jpg" height="100%"> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
    });

    // BOTONES ANALITICO

    $("#btnNuevosAnalitico1-1").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Analitico_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });

    $("#btnNuevosAnalitico1-2").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Analitico_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });

    $("#btnNuevosAnalitico1-3").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Analitico_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });

    $("#btnNuevosAnalitico1-4").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Analitico_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });

    $("#btnNuevosAnalitico1-5").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Analitico_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });

    $("#btnNuevosAnalitico1-6").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Analitico_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });

    $("#btnNuevosAnalitico1-7").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Analitico_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });

    $("#btnNuevosAnalitico2-1").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Ejecutivo_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });

    $("#btnNuevosAnalitico2-2").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Ejecutivo_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });

    $("#btnNuevosAnalitico2-3").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Ejecutivo_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });

    $("#btnNuevosAnalitico2-4").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Ejecutivo_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });
    
    $("#btnNuevosAnalitico3-1").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Ejecutivo_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });
    
    $("#btnNuevosAnalitico3-2").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<img src="css/maqueta/vehiculosNuevos_Ejecutivo_1.jpg">');
        $("#div_nuevos_analitico").trigger("create");
    });

});