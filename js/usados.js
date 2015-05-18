$(document).on('pageinit', '#app', function () {

    // CONSULTIVO
    $("#btnConsultivoUsado1").unbind('click').bind('click', function () {
        $("#div_consultivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/15/15_entregas.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/15/15_acumulado.jpg" width="100%"> </div></div> </center>');
        $("#div_consultivoUsado").trigger("create");
    });

    $("#btnConsultivoUsado2").unbind('click').bind('click', function () {
        $("#div_consultivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/15/15_cartera.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Stock</li> </ul><img src="css/maqueta/15/15_stock.jpg" width="100%"> </div></div> </center>');
        $("#div_consultivoUsado").trigger("create");
    });
    
    /******************************************************EJECUTIVO*********************************************
    ************************************************************************************************************/
    
    // RESUMEN MENSUAL
    
    $("#btnUsadosEjecutivo1-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
    });
    
    // CANALES ENTREGA
    $("#btnUsadosEjecutivo1-2-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#btnUsadosEjecutivo1-2").click();
    });
    
    $("#btnUsadosEjecutivo1-2-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Stock</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#btnUsadosEjecutivo1-2").click();
    });
    
    $("#btnUsadosEjecutivo1-2-3").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Stock</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#btnUsadosEjecutivo1-2").click();
    });
    
    // EVOLUCIÓN. ENTREGAS
    
      $("#btnUsadosEjecutivo1-3-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas por Canal</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#btnUsadosEjecutivo1-3").click();
    });
    
    $("#btnUsadosEjecutivo1-3-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Pedidos / Cierre</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#btnUsadosEjecutivo1-3").click();
    });
    
    // CARTERA
    
    $("#btnUsadosEjecutivo1-4-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución Cartera</li> </ul> <img src="css/maqueta/41/41_cartera_vendido_por_2.jpg" width="50%"> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#btnUsadosEjecutivo1-4").click();
    });
    
    $("#btnUsadosEjecutivo1-4-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera por Vendedor</li> </ul> <img src="css/maqueta/41/41_evolucion_de_cartera_1.jpg" width="50%"> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#btnUsadosEjecutivo1-4").click();
    });
    
     // STOCK
    
    $("#btnUsadosEjecutivo2-1-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Antigüedad Stock</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="50%"> <img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#btnUsadosEjecutivo2-1").click();
    });
    
    $("#btnUsadosEjecutivo2-1-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Stock por Canal de Compra</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cobertura</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#btnUsadosEjecutivo2-1").click();
    });
    
    // CANALES DE COMPRA
    
    $("#btnUsadosEjecutivo2-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Canales de Compra</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="50%"><img src="css/maqueta/56/56_total_mes.jpg" width="100%"><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </center>');
        $("#div_ejecutivoUsado").trigger("create");
    });
    
    // RELACIÓN CON VEHICULOS NUEVOS
    
    $("#btnUsadosEjecutivo2-3").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Tasaciones / Recompra</li> </ul> <img src="css/maqueta/44/44_Trafico_Tasaciones_Recompra_1.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><div class="ui-grid-a"><div class="ui-block-a"><img src="css/maqueta/44/44_Trafico_Tasaciones_Recompra_3.jpg" width="100%"></div><div class="ui-block-b"><img src="css/maqueta/44/44_Trafico_Tasaciones_Recompra_acumulado_2.jpg" width="100%"></div> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
    });
    
    // CALIDAD
    
    $("#btnUsadosEjecutivo2-4").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Calidad</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="50%"><img src="css/maqueta/56/56_total_mes.jpg" width="100%"><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </center>');
        $("#div_ejecutivoUsado").trigger("create");
    });
    
    // ATIPICOS
    
    $("#btnUsadosEjecutivo3-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Atípicos</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="50%"><img src="css/maqueta/56/56_total_mes.jpg" width="100%"><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </center>');
        $("#div_ejecutivoUsado").trigger("create");
    });
    
    // APORTACIÓN POSTVENTA
    
    $("#btnUsadosEjecutivo3-2-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Facturación</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#btnUsadosEjecutivo3-2").click();
    });
    
    $("#btnUsadosEjecutivo3-2-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Mecánica</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Carrocería</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#btnUsadosEjecutivo3-2").click();
    });
    
    /******************************************************ANALÍTICO*********************************************
    ************************************************************************************************************/
    
    // TOTAL
    
    $("#btnUsadosAnalitico1-1-1").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico Total / Origen</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#btnUsadosAnalitico1-1").click();
    });
    
    $("#btnUsadosAnalitico1-1-2").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución Tráfico Total</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#btnUsadosAnalitico1-1").click();
    });
    
    // TOTAL
    
    $("#btnUsadosAnalitico1-2").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución Tráfico Exposición</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        
    });
    
    // INTERNET
    
    $("#btnUsadosAnalitico1-3-1").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución Tráfico Internet</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#btnUsadosAnalitico1-3").click();
    });
    
    $("#btnUsadosAnalitico1-3-2").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Llamadas / Tráfico / Pedidos</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#btnUsadosAnalitico1-3").click();
    });
    
    $("#btnUsadosAnalitico1-3-3").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Páginas Internet</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#btnUsadosAnalitico1-3").click();
    });   
    
    // VENDEDOR 1
    
    $("#btnUsadosAnalitico2-1-1").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Datos Comerciales</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#btnUsadosAnalitico2-1").click();
    });
    
    $("#btnUsadosAnalitico2-1-2").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Atípicos</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera y Calidad</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#btnUsadosAnalitico2-1").click();
    });
    
    // VENDEDOR 2
    
    $("#btnUsadosAnalitico2-2-1").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Datos Comerciales</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#btnUsadosAnalitico2-2").click();
    });
    
    $("#btnUsadosAnalitico2-2-2").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Atípicos</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera y Calidad</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#btnUsadosAnalitico2-2").click();
    });
    
    // VENDEDOR 3
    
    $("#btnUsadosAnalitico2-3-1").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Datos Comerciales</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#btnUsadosAnalitico2-3").click();
    });
    
    $("#btnUsadosAnalitico2-3-2").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Atípicos</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera y Calidad</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#btnUsadosAnalitico2-3").click();
    });
    

});