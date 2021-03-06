$(document).on('pageinit', '#app', function () {

    // BOTONES CONSULTIVO
    $("#btnConsultivoNuevos1").unbind('click').bind('click', function () {
        $("#div_nuevos_consultivo").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/14/14_consultivo.jpg" width="60%"> </center>');
        $("#div_nuevos_consultivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");

    });

    $("#btnConsultivoNuevos2").unbind('click').bind('click', function () {
        $("#div_nuevos_consultivo").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul> <img src="css/maqueta/14/14_analisis.jpg" width="55%"> </center>');
        $("#div_nuevos_consultivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
    });

    // BOTONES EJECUTIVO

    // RESUMEN
    $("#btnNuevosEjecutivo1-1").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/18/18_resumen_mensual_mes_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/18/18_resumen_mensual_acumulado_2.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(1, this.id);
    });

    // ENTREGAS. MIX
    $("#btnNuevosEjecutivo1-2-1").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <div class="ui-grid-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Mix</li> </ul> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/19/19_mix_mes_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/19/19_mix_acumulado_2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo/ Entregas / Mix<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosEjecutivo1-2").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosEjecutivo1-2-2").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center>  <div class="ui-grid-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Canales</li> </ul> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/19/19_canales_mes_3.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/19/19_canales_acumulado_4.jpg" width="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo/ Entregas / Canales<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosEjecutivo1-2").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosEjecutivo1-2-3").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <div class="ui-grid-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Vendedor</li> </ul> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/19/19_vendedor_mes_5.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/19/19_vendedor_acumulado_6.jpg" width="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo/ Entregas / Vendedor<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosEjecutivo1-2").click();
        botonSelccionado(1, this.id);
    });

    // ATIPICOS
    $("#btnNuevosEjecutivo1-3").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html(' <center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/24/24_atipicos_mes_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/24/24_atipicos_acumulado_2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo/ Atípicos<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        botonSelccionado(1, this.id);
    });

    // EVOLUCION, ENTREGAS
    $("#btnNuevosEjecutivo1-4").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Pedidos / %Cierre</li> </ul> <img src="css/maqueta/20/20_trafico_pedidos_cierre_3.jpg" width="50%"> </center>');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo/ Evolución. Entregas. Pedidos<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        botonSelccionado(1, this.id);
    });
    
    // CARTERA
    $("#btnNuevosEjecutivo2-1-1").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Mix Cartera</li> </ul><img src="css/maqueta/21/21_mix_cartera_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución cartera</li> </ul><img src="css/maqueta/21/21_evolucion_de_cartera_2.jpg" width="100%"> </div> </div>  </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo/ Cartera/ Mix. Evolución<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosEjecutivo2-1").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosEjecutivo2-1-2").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera por canal</li> </ul><img src="css/maqueta/21/21_cartera_por_canal_3.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera por vendedor</li> </ul><img src="css/maqueta/21/21_cartera_por_vendedor_4.jpg" width="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo/ Cartera/ Canal, Vendedor<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosEjecutivo2-1").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosEjecutivo2-2-1").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center>  <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Stock Físico</li> </ul><img src="css/maqueta/22/22_stock_fisico_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Antigüedad Stock</li> </ul><img src="css/maqueta/22/22_antiguedad_stock__2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo/ Stock/ Stock<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosEjecutivo2-2").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosEjecutivo2-2-2").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Saldos</li> </ul><img src="css/maqueta/22/22_saldos_3.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Total Stock + Saldos</li> </ul><img src="css/maqueta/22/22_total_stock__4.jpg" width="100%"> </div> </div> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo/ Stock/ Saldos<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosEjecutivo2-2").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosEjecutivo2-3").unbind('click').bind('click', function () {
        $("#div_nuevos_ejecutivo").html('<center> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Calidad</li> </ul><img src="css/maqueta/23/23_calidad.jpg" width="50%"> </center> ');
        $("#div_nuevos_ejecutivo").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Ejecutivo/ Calidad<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        botonSelccionado(1, this.id);
    });

    // BOTONES ANALITICO

    //B0

    $("#btnNuevosAnalitico1-1-1").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas</li> </ul><img src="css/maqueta/26/26_entregas.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado, Cartera/Cobertura</li> </ul><img src="css/maqueta/26/26_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B0/ Entregas, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico1-1").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosAnalitico1-1-2").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Canales Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Instalaciones</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B0/ Canales entregas, Instalaciones<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico1-1").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosAnalitico1-1-3").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Pedidos / %Cierre</li> </ul><img src="css/maqueta/26/26_trafico_pedidos.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado/ %Cierre / Evolución</li> </ul><img src="css/maqueta/26/26_acumulado_trafico.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B0/ Tráfico/ Pedido/ %Cierre, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico1-1").click();
        botonSelccionado(1, this.id);
    });

    //B1

    $("#btnNuevosAnalitico1-2-1").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado, Cartera/Cobertura</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_1();
        $("#btnNuevosAnalitico1-2").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B1/ Entregas, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnNuevosAnalitico1-2-2").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Canales Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Instalaciones</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_2();
        $("#btnNuevosAnalitico1-2").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B1/ Canales entregas, Instalaciones<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnNuevosAnalitico1-2-3").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Pedidos / %Cierre</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado/ %Cierre / Evolución</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_3();
        $("#btnNuevosAnalitico1-2").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B1/ Tráfico/ Pedido/ %Cierre, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    //B2

    $("#btnNuevosAnalitico1-3-1").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado, Cartera/Cobertura</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_1();
        $("#btnNuevosAnalitico1-3").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B2/ Entregas, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnNuevosAnalitico1-3-2").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Canales Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Instalaciones</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_2();
        $("#btnNuevosAnalitico1-3").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B2/ Canales entregas, Instalaciones<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnNuevosAnalitico1-3-3").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Pedidos / %Cierre</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado/ %Cierre / Evolución</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_3();
        $("#btnNuevosAnalitico1-3").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analisis/ B2/ Tráfico/ Pedido/ %Cierre, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    //B3

    $("#btnNuevosAnalitico1-4-1").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado, Cartera/Cobertura</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_1();
        $("#btnNuevosAnalitico1-4").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B3/ Entregas, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnNuevosAnalitico1-4-2").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Canales Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Instalaciones</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_2();
        $("#btnNuevosAnalitico1-4").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B3/ Canales entregas, Instalaciones<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnNuevosAnalitico1-4-3").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Pedidos / %Cierre</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado/ %Cierre / Evolución</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_3();
        $("#btnNuevosAnalitico1-4").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B3/ Tráfico/ Pedido/ %Cierre, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    //B4

    $("#btnNuevosAnalitico1-5-1").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado, Cartera/Cobertura</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_1();
        $("#btnNuevosAnalitico1-5").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B4/ Entregas, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnNuevosAnalitico1-5-2").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Canales Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Instalaciones</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_2();
        $("#btnNuevosAnalitico1-5").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B4/ Canales entregas, Instalaciones<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnNuevosAnalitico1-5-3").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Pedidos / %Cierre</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado/ %Cierre / Evolución</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_3();
        $("#btnNuevosAnalitico1-5").click();
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B4/ Tráfico/ Pedido/ %Cierre, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    //B5

    $("#btnNuevosAnalitico1-6-1").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado, Cartera/Cobertura</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_1();
        $("#btnNuevosAnalitico1-6").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B5/ Entregas, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnNuevosAnalitico1-6-2").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Canales Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Instalaciones</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_2();
        $("#btnNuevosAnalitico1-6").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B5/ Canales entregas, Instalaciones<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnNuevosAnalitico1-6-3").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Pedidos / %Cierre</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado/ %Cierre / Evolución</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_3();
        $("#btnNuevosAnalitico1-6").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B5/ Tráfico/ Pedido/ %Cierre, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    //B6

    $("#btnNuevosAnalitico1-7-1").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado, Cartera/Cobertura</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_1();
        $("#btnNuevosAnalitico1-7").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B6/ Entregas, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnNuevosAnalitico1-7-2").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Canales Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Instalaciones</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_2();
        $("#btnNuevosAnalitico1-7").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B6/ Canales entregas, Instalaciones<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    $("#btnNuevosAnalitico1-7-3").unbind('click').bind('click', function () {
        /*
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Pedidos / %Cierre</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado/ %Cierre / Evolución</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create"); $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario");
        */
        B0_3();
        $("#btnNuevosAnalitico1-7").click();
        botonSelccionado(1, this.id);
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ B6/ Tráfico/ Pedido/ %Cierre, Acumulado<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
    });

    //VENDEDOR 1


    $("#btnNuevosAnalitico2-1-1").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-b"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Ventas</li> </ul><img src="css/maqueta/27/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas Mix</li> </ul><img src="css/maqueta/27/.jpg" width="100%"> </div> <div class="ui-block-c"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera</li> </ul><img src="css/maqueta/27/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ Vendedor 1/ Ventas, Entregas Mix, Cartera<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span ");
        $("#btnNuevosAnalitico2-1").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosAnalitico2-1-2").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Atípicos</li> </ul><img src="css/maqueta/27/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Calidad</li> </ul><img src="css/maqueta/27/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Analítico/ Vendedor 1/ Atípicos, Calidad<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico2-1").click();
        botonSelccionado(1, this.id);
    });

    //VENDEDOR 2

    $("#btnNuevosAnalitico2-2-1").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-b"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Ventas</li> </ul><img src="css/maqueta/27/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas Mix</li> </ul><img src="css/maqueta/28/.jpg" width="100%"> </div> <div class="ui-block-c"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera</li> </ul><img src="css/maqueta/28/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Vendedor 2/ Ventas, Entregas Mix, Cartera<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico2-2").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosAnalitico2-2-2").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Atípicos</li> </ul><img src="css/maqueta/28/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Calidad</li> </ul><img src="css/maqueta/28/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Vendedor 2/ Atípicos, Calidad<span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico2-2").click();
        botonSelccionado(1, this.id);
    });

    //VENDEDOR 3

    $("#btnNuevosAnalitico2-3-1").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-b"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Ventas</li> </ul><img src="css/maqueta/27/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas Mix</li> </ul><img src="css/maqueta/28/.jpg" width="100%"> </div> <div class="ui-block-c"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera</li> </ul><img src="css/maqueta/28/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Vendedor 3/ Ventas, Entregas Mix, Cartera <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico2-3").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosAnalitico2-3-2").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Atípicos</li> </ul><img src="css/maqueta/28/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Calidad</li> </ul><img src="css/maqueta/28/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Vendedor 3/ Atípicos, Calidad <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico2-3").click();
        botonSelccionado(1, this.id);
    });

    //VENDEDOR 4

    $("#btnNuevosAnalitico2-4-1").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-b"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Ventas</li> </ul><img src="css/maqueta/27/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas Mix</li> </ul><img src="css/maqueta/28/.jpg" width="100%"> </div> <div class="ui-block-c"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera</li> </ul><img src="css/maqueta/28/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Vendedor 3/ Ventas, Entregas Mix, Cartera <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico2-4").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosAnalitico2-4-2").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Atípicos</li> </ul><img src="css/maqueta/28/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Calidad</li> </ul><img src="css/maqueta/28/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Vendedor 3/ Atípicos, Calidad <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico2-4").click();
        botonSelccionado(1, this.id);
    });

    // FINANCIERA

    $("#btnNuevosAnalitico3-1-1").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Total Financiera</li> </ul><img src="css/maqueta/32/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/32/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico3-1").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosAnalitico3-1-2").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Select</li> </ul><img src="css/maqueta/32/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Financiación</li> </ul><img src="css/maqueta/32/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico3-1").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosAnalitico3-1-3").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Facturación</li> </ul><img src="css/maqueta/33/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/33/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico3-1").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosAnalitico3-1-4").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Mecánica</li> </ul><img src="css/maqueta/33/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Carrocería</li> </ul><img src="css/maqueta/33/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico3-1").click();
        botonSelccionado(1, this.id);
    });

    // RENTING

    $("#btnNuevosAnalitico3-2-1").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<<center> <div class="ui-grid-b"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Pedidos / Entregas</li> </ul><img src="css/maqueta/30/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Pedidos Acumulado</li> </ul><img src="css/maqueta/30/.jpg" width="100%"> </div><div class="ui-block-c"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Total Pedidos Acumulado</li> </ul><img src="css/maqueta/30/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico3-2").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosAnalitico3-2-2").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<<center> <div class="ui-grid-b"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas Acumulado</li> </ul><img src="css/maqueta/30/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas Mix</li> </ul><img src="css/maqueta/30/.jpg" width="100%"> </div><div class="ui-block-c"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Cartera</li> </ul><img src="css/maqueta/30/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico3-2").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosAnalitico3-2-3").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Facturación</li> </ul><img src="css/maqueta/31/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/31/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico3-2").click();
        botonSelccionado(1, this.id);
    });

    $("#btnNuevosAnalitico3-2-4").unbind('click').bind('click', function () {
        $("#div_nuevos_analitico").html('<<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Mecánica</li> </ul><img src="css/maqueta/31/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Carrocería</li> </ul><img src="css/maqueta/31/.jpg" width="100%"> </div></div> </center>');
        $("#div_nuevos_analitico").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Vehiculos Nuevos/ <span class='icon-icnotipoanalisis' style='color:#66cc00'></span> Consultivo diario <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span");
        $("#btnNuevosAnalitico3-2").click();
        botonSelccionado(1, this.id);
    });

    function B0_1() {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado, Cartera/Cobertura</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create");
    }

    function B0_2() {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Canales Entregas</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Instalaciones</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create");
    }

    function B0_3() {
        $("#div_nuevos_analitico").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Tráfico / Pedidos / %Cierre</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado/ %Cierre / Evolución</li> </ul><img src="css/maqueta/26/.jpg" width="100%"> </div> </div> </center>');
        $("#div_nuevos_analitico").trigger("create");
    }

});