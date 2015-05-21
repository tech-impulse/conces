$(document).on('pageinit', '#app', function () {

    // CONSULTIVO
    $("#btnConsultivoPosventa1").unbind('click').bind('click', function () {
        $("#div_consultivoPosventa").html('<center><img src="css/maqueta/55/55_pasos_taller.jpg" width="50%"><img src="css/maqueta/55/55_acumulado.jpg" width="50%"><img src="css/maqueta/55/55_media_dia.jpg" width="50%"></center>');
    });

    $("#btnConsultivoPosventa2").unbind('click').bind('click', function () {
        $("#div_consultivoPosventa").html('<center><img src="css/maqueta/55/55_facturacion.jpg" width="50%"><img src="css/maqueta/55/55_facturacion_2.jpg" width="50%"></center>');
    });

    /************************** EJECUTIVO ************************************************
    
    *************************************************************************************/

    // FACTURACION
    $("#btnPosventaEjecutivo1-1-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Total</li>    </ul> <div  class="ui-grid-a">    <div  class="ui-block-a">    <ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Junio</li>    </ul><img  src="css/maqueta/56/56_mecanica_mes.jpg"  width="100%"></div>    <div  class="ui-block-b">    <ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider"  id="titulo_2-3">Acumulado</li>    </ul><img  src="css/maqueta/56/56_total_mes.jpg"  width="100%"></div></div></center>  ');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Facturación/ Total<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-1").click();
        botonSelccionado(3, this.id);


    });

    $("#btnPosventaEjecutivo1-1-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Mecánica</li>    </ul>   <div  class="ui-grid-a"><div  class="ui-block-a"><ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Junio</li>    </ul>    <img  src="css/maqueta/56/56_mecanica_mes.jpg"  width="100%">    </div>    <div  class="ui-block-b"><ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Acumulado</li>    </ul><img  src="css/maqueta/56/56_total_mes.jpg"  width="100%">    </div></div>    </center>  ');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Facturación/ Mecánica<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-1").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaEjecutivo1-1-3").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center>    <ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Carrocería</li>    </ul>     <div  class="ui-grid-a">    <div  class="ui-block-a"><ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Junio</li>    </ul><img  src="css/maqueta/56/56_mecanica_mes.jpg"  width="100%">    </div>    <div  class="ui-block-b"><ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Acumulado</li>    </ul><img  src="css/maqueta/56/56_total_mes.jpg"  width="100%">    </div>    </div>    </center>  ');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Facturación/ Carrocería<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-1").click();
        botonSelccionado(3, this.id);
    });

    // MECANICA

    $("#btnPosventaEjecutivo1-2-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/57/57_facturacion_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/57/57_facturacion_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Mecánica análisis canales/ Facturación<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-2").click();
        botonSelccionado(3, this.id);
    });
    $("#btnPosventaEjecutivo1-2-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/57/57_facturacion_por_paso_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider" id="titulo_2-3">Acumulado</li> </ul><img src="css/maqueta/57/57_facturacion_por_paso_acumulado.jpg" width="100%"> </div> </div>  </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Mecánica análisis canales/ Pasos de taller<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-2").click();
        botonSelccionado(3, this.id);
    });
    $("#btnPosventaEjecutivo1-2-3").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center><div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/57/57_horas_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/57/57_horas_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Mecánica análisis canales/ Horas<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-2").click();
        botonSelccionado(3, this.id);
    });
    $("#btnPosventaEjecutivo1-2-4").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center><div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/57/57_facturacion_por_paso_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider" id="titulo_2-3">Acumulado</li> </ul><img src="css/maqueta/57/57_facturacion_por_paso_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Mecánica análisis canales/ Facturación por paso<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-2").click();
        botonSelccionado(3, this.id);
    });

    // CARROCERIA

    $("#btnPosventaEjecutivo1-3-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center><div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/58/58_facturacion_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/58/58_facturacion_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Mecánica análisis canales/ Facturación<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-3").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaEjecutivo1-3-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/58/58_paso_de_taller_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider" id="titulo_2-3">Acumulado</li> </ul><img src="css/maqueta/58/58_paso_de_taller_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Mecánica análisis canales/ Pasos de taller<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-3").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaEjecutivo1-3-3").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center><div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/58/58_horas_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/58/58_horas_acumulado.jpg" width="100%"> </div> </div></center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Mecánica análisis canales/ Horas<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-3").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaEjecutivo1-3-4").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center><div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/58/58_facturacion_por_paso_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider" id="titulo_2-3">Acumulado</li> </ul><img src="css/maqueta/58/58_facturacion_por_paso_acumulado.jpg" width="100%"> </div> </div></center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Mecánica análisis canales/ Facturación por paso<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-3").click();
        botonSelccionado(3, this.id);
    });

    // FACTURACION

    $("#btnPosventaEjecutivo1-4-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Facturación por canal de Junio</li> </ul><img src="css/maqueta/59/59_facturacion_por_canal_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado de Junio</li> </ul><img src="css/maqueta/59/59_facturacion_por_canal_acumulado.jpg" width="100%"> </div> </div></center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Facturación recambio/ Facturación por canal<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-4").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaEjecutivo1-4-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Facturación externa de Junio</li> </ul> <img src="css/maqueta/59/59_facturacion_externa_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Facturación externa de Junio</li> </ul> <img src="css/maqueta/59/59_facturacion_externa_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Facturación recambio/ Facturación externa<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaEjecutivo1-4").click();
        botonSelccionado(3, this.id);
    });

    // RATIOS GESTION

    $("#btnPosventaEjecutivo2-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html(' <center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"><li data-role="list-divider" id="titulo_2-3">Total</li></ul><img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"></div><div class="ui-block-b"><ul data-role="listview" style="margin:5px"><li data-role="list-divider" id="titulo_2-3">Acumulado</li></ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"></div></center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Ratios de gestión<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(3, this.id);
    });

    // RATIOS MECANICOS

    $("#btnPosventaEjecutivo2-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/61/60_ratios_gestion_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/61/60_ratios_gestion_acumulado.jpg" width="100%"> </div> </div> </center>   ');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Ratios de gestión mecánic<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>a");
        botonSelccionado(3, this.id);
    });

    // RATIOS CARROCERIA

    $("#btnPosventaEjecutivo2-3").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/62/62_ratios_gestion_carroceria_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/62/62_ratios_gestion_carroceria_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Ratios de gestion carrocería<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(3, this.id);
    });

    // CALIDAD

    $("#btnPosventaEjecutivo2-4").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html(' <center><ul data-role="listview" style="margin:5px"><li data-role="list-divider">Calidad</li></ul><img src="css/maqueta/63/63_calidad.jpg" width="50%"></center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Calidad<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(3, this.id);
    });

    /************************** ANALITICO ************************************************
    
    *************************************************************************************/

    // GESTION MECANICA (NO DISPONIBLE)

    $("#btnPosventaAnalitico1-1-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Gestión de canales mecánica/ Cliente <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-1").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaAnalitico1-1-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Gestión de canales mecánica/ Garantía<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-1").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaAnalitico1-1-3").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Gestión de canales mecánica/ InternasGestión de canales mecánica/ Renting 1<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-1").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaAnalitico1-1-4").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Gestión de canales mecánica/ Renting 1<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-1").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaAnalitico1-1-5").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Gestión de canales mecánica/ Renting 2<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-1").click();
        botonSelccionado(3, this.id);
    });

    // GESTION CARROCERIA (NO DISPONIBLE)

    $("#btnPosventaAnalitico1-2-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Gestión de canales mecánica/ Cliente<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-2").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaAnalitico1-2-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Gestión de canales mecánica/ Garantía<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-2").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaAnalitico1-2-3").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Gestión de canales mecánica/ Internas<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-2").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaAnalitico1-2-4").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Gestión de canales mecánica/ Renting 1<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-2").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaAnalitico1-2-5").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Gestión de canales mecánica/ Renting 2<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-2").click();
        botonSelccionado(3, this.id);
    });

    // EVOLUCION FACTURACION

    $("#btnPosventaAnalitico1-3-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Facturación  mecánica</li>  </ul><img  src="css/maqueta/72/72_evolucion_facturacion_mecanica_1.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/72/72_evolucion_facturacion_mecanica_acumulado_2.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Evolución facturación/ Facturación mecánica<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-3").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaAnalitico1-3-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center><div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Facturación  carrocería</li>  </ul><img  src="css/maqueta/73/73_evolucion_facturacion_carroceria_1.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/73/73_evolucion_facturacion_carroceria_acumulado_2.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Evolución facturación/ Facturación carrocería");
        $("#btnPosventaAnalitico1-3").click();
        botonSelccionado(3, this.id);
    });

    // EVOLUCION MEDIA (NO DISPONIBLE)

    $("#btnPosventaAnalitico1-4-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/74.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado / Evolución</li> </ul><img src="css/maqueta/74" width="100%"> </div> </div> </center> ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Evolución media, pasos díarios/ Mes, Acumulado / Evolución<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-4").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaAnalitico1-4-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Pesos</li> </ul><img src="css/maqueta/74.jpg" width="100%"> </center> ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Evolución media, pasos díarios/ Pesos<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico1-4").click();
        botonSelccionado(3, this.id);
    });

    // EVOLUCION HORAS

    $("#btnPosventaAnalitico2-1-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución horas facturadas en mecánica</li> </ul><img src="css/maqueta/78/78_analitico_horas_facturadas_mecanica_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/78/78_analitico_horas_facturadas_mecanica_acumulado_2.jpg" width="100%"> </div> </div></center> ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Evolución horas/ Mecánica<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico2-1").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaAnalitico2-1-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center><div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución horas facturadas en carrocería</li> </ul><img src="css/maqueta/79/79_analitico_horas_facturadas_carroceria_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/79/79_analitico_horas_facturadas_carroceria_acumulado_2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Evolución horas/ Carrocería<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico2-1").click();
        botonSelccionado(3, this.id);
    });

    // EVOLUCION EMPLEO

    $("#btnPosventaAnalitico2-2-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución de empleo en mecánica</li> </ul><img src="css/maqueta/81/81_Analitico_Evolucion_Empleo_Mecanica.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/81/81_Analitico_Evolucion_Empleo_Mecanica_acumulado.jpg" width="100%"> </div> </div>');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Evolución empleo/ Mecánica<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico2-2").click();
        botonSelccionado(3, this.id);
    });

    $("#btnPosventaAnalitico2-2-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución de empleo en carrocería</li> </ul><img src="css/maqueta/82/82_Analitico_Evolucion_Empleo_Carroceria_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/82/82_Analitico_Evolucion_Empleo_Carroceria_acumulado_2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Evolución empleo/ Carrocería<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        $("#btnPosventaAnalitico2-2").click();
        botonSelccionado(3, this.id);
    });

    // ASESOR 1

    $("#btnPosventaAnalitico3-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/91-92/92_Ficha_Asesor_de_Servicio_mes_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/91-92/92_Ficha_Asesor_de_Servicio_acumulado_2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Asesor 1<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(3, this.id);
    });

    // ASESOR 2 (NO DISPONIBLE)

    $("#btnPosventaAnalitico3-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/91-92/92_Ficha_Asesor_de_Servicio_mes_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/91-92/92_Ficha_Asesor_de_Servicio_acumulado_2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Asesor 2<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(3, this.id);
    });

    // ASESOR 3 (NO DISPONIBLE)

    $("#btnPosventaAnalitico3-3").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/91-92/92_Ficha_Asesor_de_Servicio_mes_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/91-92/92_Ficha_Asesor_de_Servicio_acumulado_2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_analiticoPosventa").trigger("create");
        $("#tituloSeccion2").html("<span class='icon-icnoruta'></span>  Concesión/ Servicio Posventa/ <span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Analítico/ Asesor 3<span class='icon-icnotipoanalisis' style='color:#45abc9'></span> Ejecutivo/ Resumen Mensual <span id='btnMostrar'><a style='float:right' onclick='mostrarMenu(0)' class='ui-btn ui-corner-all ui-icon-carat-u ui-btn-icon-notext'></a></span>");
        botonSelccionado(3, this.id);
    });

});