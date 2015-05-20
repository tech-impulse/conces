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
        $("#btnPosventaEjecutivo1-1").click();


    });

    $("#btnPosventaEjecutivo1-1-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Mecánica</li>    </ul>   <div  class="ui-grid-a"><div  class="ui-block-a"><ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Junio</li>    </ul>    <img  src="css/maqueta/56/56_mecanica_mes.jpg"  width="100%">    </div>    <div  class="ui-block-b"><ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Acumulado</li>    </ul><img  src="css/maqueta/56/56_total_mes.jpg"  width="100%">    </div></div>    </center>  ');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#btnPosventaEjecutivo1-1").click();
    });

    $("#btnPosventaEjecutivo1-1-3").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center>    <ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Carrocería</li>    </ul>     <div  class="ui-grid-a">    <div  class="ui-block-a"><ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Junio</li>    </ul><img  src="css/maqueta/56/56_mecanica_mes.jpg"  width="100%">    </div>    <div  class="ui-block-b"><ul  data-role="listview"  style="margin:5px">    <li  data-role="list-divider">Acumulado</li>    </ul><img  src="css/maqueta/56/56_total_mes.jpg"  width="100%">    </div>    </div>    </center>  ');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#btnPosventaEjecutivo1-1").click();
    });

    // MECANICA

    $("#btnPosventaEjecutivo1-2-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/57/57_facturacion_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/57/57_facturacion_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#btnPosventaEjecutivo1-2").click();
    });
    $("#btnPosventaEjecutivo1-2-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/57/57_facturacion_por_paso_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider" id="titulo_2-3">Acumulado</li> </ul><img src="css/maqueta/57/57_facturacion_por_paso_acumulado.jpg" width="100%"> </div> </div>  </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#btnPosventaEjecutivo1-2").click();
    });
    $("#btnPosventaEjecutivo1-2-3").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center><div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/57/57_horas_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/57/57_horas_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#btnPosventaEjecutivo1-2").click();
    });
    $("#btnPosventaEjecutivo1-2-4").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center><div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/57/57_facturacion_por_paso_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider" id="titulo_2-3">Acumulado</li> </ul><img src="css/maqueta/57/57_facturacion_por_paso_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#btnPosventaEjecutivo1-2").click();
    });

    // CARROCERIA

    $("#btnPosventaEjecutivo1-3-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center><div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/58/58_facturacion_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/58/58_facturacion_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#btnPosventaEjecutivo1-3").click();
    });
    
    $("#btnPosventaEjecutivo1-3-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/58/58_paso_de_taller_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider" id="titulo_2-3">Acumulado</li> </ul><img src="css/maqueta/58/58_paso_de_taller_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#btnPosventaEjecutivo1-3").click();
    });
    
    $("#btnPosventaEjecutivo1-3-3").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center><div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/58/58_horas_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/58/58_horas_acumulado.jpg" width="100%"> </div> </div></center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#btnPosventaEjecutivo1-3").click();
    });
    
    $("#btnPosventaEjecutivo1-3-4").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center><div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/58/58_facturacion_por_paso_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider" id="titulo_2-3">Acumulado</li> </ul><img src="css/maqueta/58/58_facturacion_por_paso_acumulado.jpg" width="100%"> </div> </div></center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#btnPosventaEjecutivo1-3").click();
    });

    // FACTURACION

    $("#btnPosventaEjecutivo1-4-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Facturación por canal de Junio</li> </ul><img src="css/maqueta/59/59_facturacion_por_canal_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado de Junio</li> </ul><img src="css/maqueta/59/59_facturacion_por_canal_acumulado.jpg" width="100%"> </div> </div></center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#btnPosventaEjecutivo1-4").click();
    });
    
    $("#btnPosventaEjecutivo1-4-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Facturación externa de Junio</li> </ul> <img src="css/maqueta/59/59_facturacion_externa_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Facturación externa de Junio</li> </ul> <img src="css/maqueta/59/59_facturacion_externa_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
        $("#btnPosventaEjecutivo1-4").click();
    });

    // RATIOS GESTION

    $("#btnPosventaEjecutivo2-1").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html(' <center><div class="ui-grid-a"><div class="ui-block-a"><ul data-role="listview" style="margin:5px"><li data-role="list-divider" id="titulo_2-3">Total</li></ul><img src="css/maqueta/56/56_mecanica_mes.jpg" width="100%"></div><div class="ui-block-b"><ul data-role="listview" style="margin:5px"><li data-role="list-divider" id="titulo_2-3">Acumulado</li></ul><img src="css/maqueta/56/56_total_mes.jpg" width="100%"></div></center>');
        $("#div_ejecutivoPosventa").trigger("create");
    });

    // RATIOS MECANICOS

    $("#btnPosventaEjecutivo2-2").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/61/60_ratios_gestion_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/61/60_ratios_gestion_acumulado.jpg" width="100%"> </div> </div> </center>   ');
        $("#div_ejecutivoPosventa").trigger("create");
    });

    // RATIOS CARROCERIA

    $("#btnPosventaEjecutivo2-3").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/62/62_ratios_gestion_carroceria_mes.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/62/62_ratios_gestion_carroceria_acumulado.jpg" width="100%"> </div> </div> </center>');
        $("#div_ejecutivoPosventa").trigger("create");
    });

    // CALIDAD

    $("#btnPosventaEjecutivo2-4").unbind('click').bind('click', function () {
        $("#div_ejecutivoPosventa").html(' <center><ul data-role="listview" style="margin:5px"><li data-role="list-divider">Calidad</li></ul><img src="css/maqueta/63/63_calidad.jpg" width="50%"></center>');
        $("#div_ejecutivoPosventa").trigger("create");
    });

    /************************** ANALITICO ************************************************
    
    *************************************************************************************/

    // GESTION MECANICA (NO DISPONIBLE)

    $("#btnPosventaAnalitico1-1-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-1").click();
    });
    
    $("#btnPosventaAnalitico1-1-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-1").click();
    });
    
    $("#btnPosventaAnalitico1-1-3").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-1").click();
    });
    
    $("#btnPosventaAnalitico1-1-4").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-1").click();
    });
    
    $("#btnPosventaAnalitico1-1-5").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-1").click();
    });

    // GESTION CARROCERIA (NO DISPONIBLE)

    $("#btnPosventaAnalitico1-2-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-2").click();
    });
    
    $("#btnPosventaAnalitico1-2-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-2").click();
    });
    
    $("#btnPosventaAnalitico1-2-3").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-2").click();
    });
    
    $("#btnPosventaAnalitico1-2-4").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-2").click();
    });
    
    $("#btnPosventaAnalitico1-2-5").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Junio</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/65/.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-2").click();
    });

    // EVOLUCION FACTURACION

    $("#btnPosventaAnalitico1-3-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center>  <div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Facturación  mecánica</li>  </ul><img  src="css/maqueta/72/72_evolucion_facturacion_mecanica_1.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/72/72_evolucion_facturacion_mecanica_acumulado_2.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-3").click();
    });
    
    $("#btnPosventaAnalitico1-3-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center><div  class="ui-grid-a">  <div  class="ui-block-a">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Facturación  carrocería</li>  </ul><img  src="css/maqueta/73/73_evolucion_facturacion_carroceria_1.jpg"  width="100%">  </div>  <div  class="ui-block-b">  <ul  data-role="listview"  style="margin:5px">  <li  data-role="list-divider">Acumulado</li>  </ul><img  src="css/maqueta/73/73_evolucion_facturacion_carroceria_acumulado_2.jpg"  width="100%">  </div>  </div>  </center>  ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-3").click();
    });

    // EVOLUCION MEDIA (NO DISPONIBLE)

    $("#btnPosventaAnalitico1-4-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/74.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado / Evolución</li> </ul><img src="css/maqueta/74" width="100%"> </div> </div> </center> ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-4").click();
    });
    
    $("#btnPosventaAnalitico1-4-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center><ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Pesos</li> </ul><img src="css/maqueta/74.jpg" width="100%"> </center> ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico1-4").click();
    });

    // EVOLUCION HORAS

    $("#btnPosventaAnalitico2-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución horas facturadas en mecánica</li> </ul><img src="css/maqueta/78/78_analitico_horas_facturadas_mecanica_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/78/78_analitico_horas_facturadas_mecanica_acumulado_2.jpg" width="100%"> </div> </div></center> ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico2-1").click();
    });
    
    $("#btnPosventaAnalitico2-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center><div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución horas facturadas en carrocería</li> </ul><img src="css/maqueta/79/79_analitico_horas_facturadas_carroceria_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/79/79_analitico_horas_facturadas_carroceria_acumulado_2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico2-1").click();
    });

    // EVOLUCION EMPLEO

    $("#btnPosventaAnalitico2-2-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución de empleo en mecánica</li> </ul><img src="css/maqueta/81/81_Analitico_Evolucion_Empleo_Mecanica.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/81/81_Analitico_Evolucion_Empleo_Mecanica_acumulado.jpg" width="100%"> </div> </div>');
        $("#div_analiticoPosventa").trigger("create");
        $("#btnPosventaAnalitico2-2").click();
    });
    
     $("#btnPosventaAnalitico2-2-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Evolución de empleo en carrocería</li> </ul><img src="css/maqueta/82/82_Analitico_Evolucion_Empleo_Carroceria_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/82/82_Analitico_Evolucion_Empleo_Carroceria_acumulado_2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_analiticoPosventa").trigger("create");
         $("#btnPosventaAnalitico2-2").click();
    });

    // ASESOR 1

    $("#btnPosventaAnalitico3-1").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/91-92/92_Ficha_Asesor_de_Servicio_mes_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/91-92/92_Ficha_Asesor_de_Servicio_acumulado_2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_analiticoPosventa").trigger("create");
    });

    // ASESOR 2 (NO DISPONIBLE)

    $("#btnPosventaAnalitico3-2").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/91-92/92_Ficha_Asesor_de_Servicio_mes_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/91-92/92_Ficha_Asesor_de_Servicio_acumulado_2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_analiticoPosventa").trigger("create");
    });

    // ASESOR 3 (NO DISPONIBLE)

    $("#btnPosventaAnalitico3-3").unbind('click').bind('click', function () {
        $("#div_analiticoPosventa").html('<center> <div class="ui-grid-a"> <div class="ui-block-a"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Junio</li> </ul><img src="css/maqueta/91-92/92_Ficha_Asesor_de_Servicio_mes_1.jpg" width="100%"> </div> <div class="ui-block-b"> <ul data-role="listview" style="margin:5px"> <li data-role="list-divider">Acumulado</li> </ul><img src="css/maqueta/91-92/92_Ficha_Asesor_de_Servicio_acumulado_2.jpg" width="100%"> </div> </div> </center> ');
        $("#div_analiticoPosventa").trigger("create");
    });

});