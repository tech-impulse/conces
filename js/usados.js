$(document).on('pageinit', '#app', function () {

    // CONSULTIVO
    $("#btnConsultivoUsado1").unbind('click').bind('click', function () {
        $("#div_consultivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/15/15_entregas.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/15/15_acumulado.jpg" width="100%"> </div></div> </center>');

        botonSelccionado(2, this.id);
    });

    $("#btnConsultivoUsado2").unbind('click').bind('click', function () {
        $("#div_consultivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/15/15_cartera.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Stock</li> </ul><img src="css/maqueta/15/15_stock.jpg" width="100%"> </div></div> </center>');

        botonSelccionado(2, this.id);
    });

    /******************************************************EJECUTIVO*********************************************
     ************************************************************************************************************/

    // RESUMEN MENSUAL

    $("#btnUsadosEjecutivo1-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);

    });

    // CANALES ENTREGA
    $("#btnUsadosEjecutivo1-2-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/38/38_canales_entregas_por_canal_1.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/38/38_canales_entregas_por_canal_1.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Canales entrega/ Entregas por canal <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnUsadosEjecutivo1-2").click();
        botonSelccionado(2, this.id);
    });

    $("#btnUsadosEjecutivo1-2-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/38/.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Stock</li> </ul><img src="css/maqueta/38/.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Canales entrega/ Entregas por vendedor <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnUsadosEjecutivo1-2").click();
        botonSelccionado(2, this.id);
    });

    $("#btnUsadosEjecutivo1-2-3").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/39/39_entregas_por_canales_de_compra_1.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Stock</li> </ul><img src="css/maqueta/39/39_entregas_por_canales_de_compra_acumulado_2.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Canales entrega/ Entregas por canales <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnUsadosEjecutivo1-2").click();
        botonSelccionado(2, this.id);
    });

    // EVOLUCIÓN. ENTREGAS

    $("#btnUsadosEjecutivo1-3-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas por Canal</li> </ul> <img src="css/maqueta/40/40_entregas_por_canal_1.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/40/.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Evolución, Entregas, Pedidos, Tráfico / Entregas por canal <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnUsadosEjecutivo1-3").click();
        botonSelccionado(2, this.id);
    });

    $("#btnUsadosEjecutivo1-3-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Pedidos / Cierre</li> </ul> <img src="css/maqueta/40/40_trafico_pedidos_cierre_3.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/40/.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo// Evolución, Entregas, Pedidos, Tráfico/ Tráfico/ Pedidos/ Cierre <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnUsadosEjecutivo1-3").click();
        botonSelccionado(2, this.id);
    });

    // CARTERA

    $("#btnUsadosEjecutivo1-4-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución Cartera</li> </ul> <img src="css/maqueta/41/41_evolucion_de_cartera_1.jpg" width="50%"> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Cartera/ Evolución <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosEjecutivo1-4").click();
    });

    $("#btnUsadosEjecutivo1-4-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera por Vendedor</li> </ul> <img src="css/maqueta/41/41_cartera_vendido_por_2.jpg" width="50%"> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Cartera/ Vendedor <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosEjecutivo1-4").click();
    });

    // STOCK

    $("#btnUsadosEjecutivo2-1-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Antigüedad Stock</li> </ul> <img src="css/maqueta/42/.jpg" width="50%"> <img src="css/maqueta/56/56_total_mes.jpg" width="50%"> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Stock/ Antigüedad Stock <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosEjecutivo2-1").click();
    });

    $("#btnUsadosEjecutivo2-1-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Stock por Canal de Compra</li> </ul> <img src="css/maqueta/42/42_stock_por_canal_de_compra_2.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cobertura</li> </ul><img src="css/maqueta/42/42_cobertura_3.jpg" width="100%"> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Stock/ Por canal de compra <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosEjecutivo2-1").click();
    });

    // CANALES DE COMPRA

    $("#btnUsadosEjecutivo2-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Canales de Compra</li> </ul> <img src="css/maqueta/43/.jpg" width="50%"><img src="css/maqueta/43/.jpg" width="100%"><img src="css/maqueta/43/.jpg" width="100%"> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Compras <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
    });

    // RELACIÓN CON VEHICULOS NUEVOS

    $("#btnUsadosEjecutivo2-3").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Tasaciones / Recompra</li> </ul> <img src="css/maqueta/44/44_Trafico_Tasaciones_Recompra_1.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><div class="ui-grid-a"><div class="ui-block-a"><img src="css/maqueta/44/44_Trafico_Tasaciones_Recompra_3.jpg" width="100%"></div><div class="ui-block-b"><img src="css/maqueta/44/44_Trafico_Tasaciones_Recompra_acumulado_2.jpg" width="100%"></div> </div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Relación de vehiculos nuevos <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
    });

    // CALIDAD

    $("#btnUsadosEjecutivo2-4").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Calidad</li> </ul> <img src="css/maqueta/45/45_calidad.jpg" width="50%"></center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Calidad <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
    });

    // ATIPICOS

    $("#btnUsadosEjecutivo3-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Atípicos</li> </ul> <img src="css/maqueta/46/46_atipicos.jpg" width="50%"></center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Atípicos <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
    });

    // APORTACIÓN POSTVENTA

    $("#btnUsadosEjecutivo3-2-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Facturación</li> </ul> <img src="css/maqueta/47/47_facturacion_1.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/47/47_aportacion_postventa_acumulado_2.jpg" width="100%"></div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Aportación posventa/ Facturación, Acumulado <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosEjecutivo3-2").click();
    });

    $("#btnUsadosEjecutivo3-2-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Mecánica</li> </ul> <img src="css/maqueta/47/47_mecanica_3.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Carrocería</li> </ul><img src="css/maqueta/47/47_carroceria_4.jpg" width="100%"></div></div> </center>');
        $("#div_ejecutivoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Aportación posventa/ Mecánica, Carrocería <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosEjecutivo3-2").click();
    });

    /******************************************************ANALÍTICO*********************************************
     ************************************************************************************************************/

    // TOTAL

    $("#btnUsadosAnalitico1-1-1").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico Total / Origen</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Total/ Tráfico total/ Orígen <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosAnalitico1-1").click();
    });

    $("#btnUsadosAnalitico1-1-2").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución Tráfico Total</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Total/ Evolución <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosAnalitico1-1").click();
    });

    // TOTAL

    $("#btnUsadosAnalitico1-2").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución Tráfico Exposición</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Exposición <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);

    });

    // INTERNET

    $("#btnUsadosAnalitico1-3-1").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución Tráfico Internet</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Internet/ Evolución Tráfico Internet <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosAnalitico1-3").click();
    });

    $("#btnUsadosAnalitico1-3-2").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Llamadas / Tráfico / Pedidos</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Internet/ Llamadas, Tráfico, Pedidos <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosAnalitico1-3").click();
    });

    $("#btnUsadosAnalitico1-3-3").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Páginas Internet</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Internet/ Páginas Internet <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosAnalitico1-3").click();
    });

    // VENDEDOR 1

    $("#btnUsadosAnalitico2-1-1").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Datos Comerciales</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Vendedor 1/ Datos Comerciales <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosAnalitico2-1").click();
    });

    $("#btnUsadosAnalitico2-1-2").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Atípicos</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera y Calidad</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Vendedor 1/ Atípicos <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosAnalitico2-1").click();
    });

    // VENDEDOR 2

    $("#btnUsadosAnalitico2-2-1").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Datos Comerciales</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Vendedor 2/ Datos Comerciales<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosAnalitico2-2").click();
    });

    $("#btnUsadosAnalitico2-2-2").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Atípicos</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera y Calidad</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Vendedor 1/ Atípicos <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosAnalitico2-2").click();
    });

    // VENDEDOR 3

    $("#btnUsadosAnalitico2-3-1").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Datos Comerciales</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Vendedor 2/ Datos Comerciales <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosAnalitico2-3").click();
    });

    $("#btnUsadosAnalitico2-3-2").unbind('click').bind('click', function () {
        $("#div_analiticoUsado").html('<center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Atípicos</li> </ul> <img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"> </div> <div class="ui-block-b"><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera y Calidad</li> </ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"> </div></div> </center>');
        $("#div_analiticoUsado").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Usados/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Vendedor 1/ Atípicos <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(2, this.id);
        $("#btnUsadosAnalitico2-3").click();
    });


});