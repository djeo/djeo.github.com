//>>built
﻿define(
"esri/nls/es/jsapi", ({
  io: {
    proxyNotSet:"esri.config.defaults.io.proxyUrl no está configurado."
  },
  
  map: {
    deprecateReorderLayerString: "Map.reorderLayer(/*String*/ id, /*Number*/ index) depreciada. Utilice Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",
    deprecateShiftDblClickZoom: "Map.(enable/disable)ShiftDoubleClickZoom depreciado. No se admitirá el comportamiento Shift-Double-Click zoom."
  },

  geometry: {
    deprecateToScreenPoint:"esri.geometry.toScreenPoint depreciado. Utilice esri.geometry.toScreenGeometry.",
    deprecateToMapPoint:"esri.geometry.toMapPoint depreciado. Utilice esri.geometry.toMapGeometry."
  },

  layers: {
    tiled: {
      tileError:"No se puede cargar la tesela"
    },
    
    dynamic: {
      imageError:"No se puede cargar la imagen"
    },
    
    graphics: {
      drawingError:"No se puede dibujar el gráfico "
    },

    agstiled: {
      deprecateRoundrobin:"Opción de constructor 'roundrobin' depreciada. Utilice la opción 'tileServers'."
    },

    imageParameters: {
      deprecateBBox:"Propiedad 'bbox' depreciada. Utilice la propiedad 'extensión'."
    },
    
    FeatureLayer: {
      noOIDField: "objectIdField no está configurado [url: ${url}]",
      fieldNotFound: "no se pudo encontrar el campo '${field}' en la información de 'campos' de la capa [url: ${url}]",
      noGeometryField: "no se pudo encontrar un campo de tipo 'esriFieldTypeGeometry' en la información de 'campos' de la capa. Si está utilizando una capa de servicio de mapas, las entidades no tendrán geometría [url: ${url}]",
      invalidParams: "la consulta contiene uno o más parámetros no admitidos",
      updateError: "se encontró un error durante la actualización de la capa",
      
      createUserSeconds: "Creado por ${userId} hace unos segundos",
      createUserMinute: "Creado por ${userId} hace un minuto",
      editUserSeconds: "Editado por ${userId} hace unos segundos",
      editUserMinute: "Editado por ${userId} hace un minuto",
      createSeconds: "Creado hace unos segundos",
      createMinute: "Creado hace un minuto",
      editSeconds: "Editado hace unos segundos",
      editMinute: "Editado hace un minuto",
      
      createUserMinutes: "Creado por ${userId} hace ${minutes} minutos",
      createUserHour: "Creado por ${userId} hace una hora",
      createUserHours: "Creado por ${userId} hace ${hours} horas",
      createUserWeekDay: "Creado por ${userId} el ${weekDay} a las ${formattedTime}",
      createUserFull: "Creado por ${userId} el ${formattedDate} a las ${formattedTime}",
      
      editUserMinutes: "Editado por ${userId} hace ${minutes} minutos",
      editUserHour: "Editado por ${userId} hace una hora",
      editUserHours: "Editado por ${userId} hace ${hours} horas",
      editUserWeekDay: "Editado por ${userId} el ${weekDay} a las ${formattedTime}",
      editUserFull: "Editado por ${userId} el ${formattedDate} a las ${formattedTime}",
      
      createUser: "Creado por ${userId}",
      editUser: "Editado por ${userId}",
      
      createMinutes: "Creado hace ${minutes} minutos",
      createHour: "Creado hace una hora",
      createHours: "Creado hace ${hours} horas",
      createWeekDay: "Creado el ${weekDay} a las ${formattedTime}",
      createFull: "Creado el ${formattedDate} a las ${formattedTime}",
      
      editMinutes: "Editado hace ${minutes} minutos",
      editHour: "Editado hace una hora",
      editHours: "Editado hace ${hours} horas",
      editWeekDay: "Editado el ${weekDay} a las ${formattedTime}",
      editFull: "Editado el ${formattedDate} a las ${formattedTime}"
    }
  },

  tasks: {
    gp: {
      gpDataTypeNotHandled:"No se maneja el tipo de datos GP."
    },
        
    na: {
      route: {
        routeNameNotSpecified: "No se especificó 'RouteName' para al menos 1 parada en FeatureSet de paradas."
      }
    },
    
    query: {
      invalid: "No se pudo realizar la consulta. Verifique los parámetros."
    }
  },

  toolbars: {
    draw: {
      convertAntiClockwisePolygon: "Los polígonos dibujados en sentido contrario a las agujas del reloj se invertirán al sentido de las agujas del reloj.",
      addPoint: "Haga clic para agregar un punto",
      addShape: "Haga clic para agregar una forma",
      addMultipoint: "Haga clic para comenzar a agregar puntos",
      freehand: "Mantenga presionado el botón izquierdo del ratón para comenzar y suelte para finalizar",
      start: "Haga clic para comenzar a dibujar",
      resume: "Haga clic para seguir dibujando",
      complete: "Haga doble clic para completar",
      finish: "Haga doble clic para finalizar",
      invalidType: "Tipo de geometría no admitido"
    },
    edit: {
      invalidType: "No se pudo activar la herramienta. Verifique si la herramienta es válida para el tipo de geometría utilizado.",
      deleteLabel: "Eliminar"
    }
  },
  
  virtualearth: {
    // minMaxTokenDuration:"Token duration must be greater than 15 minutes and lesser than 480 minutes (8 hours).",
    
    vetiledlayer: {
      //tokensNotSpecified:"Either clientToken & serverToken must be provided or tokenUrl must be specified."
      bingMapsKeyNotSpecified: "Debe introducir la BingMapsKey."
    },
    
    vegeocode: {
      //tokensNotSpecified:"Either serverToken must be provided or tokenUrl must be specified.",
      bingMapsKeyNotSpecified: "Debe introducir la BingMapsKey.",
      requestQueued: "No se obtuvo el token del servidor. Colocando la solicitud en espera para ser ejecutada después de obtener el token del servidor."
    }
  },
  widgets: {
    attributeInspector: {
      NLS_first: "Primera",
      NLS_previous: "Anterior",
      NLS_next: "Siguiente",
      NLS_last: "Última",
      NLS_deleteFeature: "Eliminar",
      NLS_title: "Editar atributos",
      NLS_errorInvalid: "No válido",
      NLS_validationInt: "El valor debe ser un entero.",
      NLS_validationFlt: "El valor debe ser flotante.",
      NLS_of: "de",
      NLS_noFeaturesSelected: "No se seleccionaron entidades"
    },
    overviewMap: {
      NLS_drag: "Arrastre para cambiar la extensión del mapa",
      NLS_show: "Mostrar vista general de mapa",
      NLS_hide: "Ocultar vista general de mapa",
      NLS_maximize: "Maximizar",
      NLS_restore: "Restaurar",
      NLS_noMap: "no se encontró 'mapa' en los parámetros de entrada",
      NLS_noLayer: "el mapa principal no tiene una capa base",
      NLS_invalidSR: "la referencia espacial de la capa utilizada no es compatible con el mapa principal",
      NLS_invalidType: "tipo de capa no admitido. Los tipos válidos son 'TiledMapServiceLayer' y 'DynamicMapServiceLayer'"
    },
    timeSlider: {
      NLS_first: "Primera",
      NLS_previous: "Anterior",
      NLS_next: "Siguiente",
      NLS_play: "Reproducir/Pausa",
      NLS_invalidTimeExtent: "No se especificó la TimeExtent, o bien tiene un formato incorrecto."
    },
    attachmentEditor: {
      NLS_attachments: "Adjuntos:",
      NLS_add: "Agregar",
      NLS_none: "Ninguno"
    },
    editor: {
      tools: {
        NLS_attributesLbl: "Atributos",
        NLS_cutLbl: "Cortar",
        NLS_deleteLbl: "Eliminar",
        NLS_extentLbl: "Extensión",
        NLS_freehandPolygonLbl: "Polígono a mano alzada",
        NLS_freehandPolylineLbl: "Polilínea a mano alzada",
        NLS_pointLbl: "Punto",
        NLS_polygonLbl: "Polígono",
        NLS_polylineLbl: "Polilínea",
        NLS_reshapeLbl: "Cambiar de forma",
        NLS_selectionNewLbl: "Nueva selección",
        NLS_selectionAddLbl: "Agregar a la selección",
        NLS_selectionClearLbl: "Borrar selección",
        NLS_selectionRemoveLbl: "Sustraer de la selección",
        NLS_selectionUnionLbl: "Combinación",
        NLS_autoCompleteLbl: "Completar automáticamente",
        NLS_unionLbl: "Combinación",
        NLS_rectangleLbl: "Rectángulo",
        NLS_circleLbl: "Círculo",
        NLS_ellipseLbl: "Elipse",
        NLS_triangleLbl: "Triángulo",
        NLS_arrowLbl: "Flecha",
        NLS_arrowLeftLbl: "Flecha de desplazamiento hacia la izquierda",
        NLS_arrowUpLbl: "Flecha de desplazamiento hacia arriba",
        NLS_arrowDownLbl: "Flecha de desplazamiento hacia abajo",
        NLS_arrowRightLbl: "Flecha de desplazamiento hacia la derecha",
        NLS_undoLbl: "Deshacer",
        NLS_redoLbl: "Rehacer"
      }
    },
    legend: {
      NLS_creatingLegend: "Creando leyenda",
      NLS_noLegend: "No hay leyenda"
    },
    popup: {
      NLS_moreInfo: "Más información",
      NLS_searching: "Buscando",
      NLS_prevFeature: "Entidad anterior",
      NLS_nextFeature: "Entidad siguiente",
      NLS_close: "Cerrar",
      NLS_prevMedia: "Elemento anterior",
      NLS_nextMedia: "Elemento siguiente",
      NLS_noInfo: "No hay información disponible",
      NLS_noAttach: "No se encontraron adjuntos",
      NLS_maximize: "Maximizar",
      NLS_restore: "Restaurar",
      NLS_zoomTo: "Acercar a",
      NLS_pagingInfo: "(${index} de ${total})",
      NLS_attach: "Adjuntos"
    },
    measurement: {
      NLS_distance: "Distancia",
      NLS_area: "Área",
      NLS_location: "Ubicación",
      NLS_resultLabel: "Resultado de la medición",
      NLS_length_miles: "Millas",
      NLS_length_kilometers: "Kilómetros",
      NLS_length_feet: "Pies",
      NLS_length_meters: "Metros",
      NLS_length_yards: "Yardas",
      NLS_area_acres: "Acres",
      NLS_area_sq_miles: "Millas cuadradas",
      NLS_area_sq_kilometers: "Kilómetros cuadrados",
      NLS_area_hectares: "Hectáreas",
      NLS_area_sq_yards: "Yardas cuadradas",
      NLS_area_sq_feet: "Pies cuadrados",
      NLS_area_sq_meters: "Metros cuadrados",
      NLS_deg_min_sec: "DMS",
      NLS_decimal_degrees: "Grados",
      NLS_longitude: "Longitud",
      NLS_latitude: "Latitud"
    },
    bookmarks: {
      NLS_add_bookmark: "Agregar marcador",
      NLS_new_bookmark: "Sin título",
      NLS_bookmark_edit: "Editar",
      NLS_bookmark_remove: "Eliminar"
    },
    print: {
      NLS_print: "Imprimir",
      NLS_printing: "Imprimiendo",
      NLS_printout: "Impresión"
    },
    templatePicker: {
      creationDisabled: "La creación de entidades está deshabilitada para todas las capas.",
      loading: "Cargando.."
    }
  },
  arcgis: {
    utils: {
      baseLayerError: "No se pudo cargar la capa del mapa base",
      geometryServiceError: "Proporcionar un servicio de geometría para abrir el mapa Web."
    }
  },
  
  identity: {
    lblItem: "elemento",
    title: "Iniciar sesión",
    info: "Inicie sesión para acceder al elemento en ${server} ${resource}",
    lblUser: "Nombre de usuario:",
    lblPwd: "Contraseña:",
    lblOk: "Aceptar",
    lblSigning: "Ingresando...",
    lblCancel: "Cancelar",
    errorMsg: "Usuario/contraseña no válido. Por favor intente nuevamente.",
    invalidUser: "El nombre de usuario o la contraseña que ha introducido son incorrectos.",
    forbidden: "El nombre de usuario y la contraseña son válidos, pero no dispone de acceso a este recurso.",
    noAuthService: "No se pudo acceder al servicio de autenticación."
  }
})
);