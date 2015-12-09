//>>built
﻿define(
"esri/nls/it/jsapi", ({
  io: {
    proxyNotSet:"esri.config.defaults.io.proxyUrl non impostato."
  },
  
  map: {
    deprecateReorderLayerString: "Map.reorderLayer(/*String*/ id, /*Number*/ index) deprecato. Utilizzare Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",
    deprecateShiftDblClickZoom: "Map.(enable/disable)ShiftDoubleClickZoom deprecato. Shift-Double-Click zoom behavior non sarà supportato."
  },

  geometry: {
    deprecateToScreenPoint:"esri.geometry.toScreenPoint deprecato. Utilizzare esri.geometry.toScreenGeometry.",
    deprecateToMapPoint:"esri.geometry.toMapPoint deprecato. Utilizzare esri.geometry.toMapGeometry."
  },

  layers: {
    tiled: {
      tileError:"Impossibile caricare la tessera"
    },
    
    dynamic: {
      imageError:"Impossibile caricare l'immagine"
    },
    
    graphics: {
      drawingError:"Impossibile disegnare l'elemento grafico "
    },

    agstiled: {
      deprecateRoundrobin:"Opzione costruttore 'roundrobin' deprecata. Usare l'opzione 'tileServers'."
    },

    imageParameters: {
      deprecateBBox:"Proprietà 'bbox' deprecata. Usare la proprietà 'extent'."
    },
    
    FeatureLayer: {
      noOIDField: "objectIdField non impostato [url: ${url}]",
      fieldNotFound: "Impossibile trovare il campo '${field}' nelle informazioni 'fields' del livello [url: ${url}]",
      noGeometryField: "Impossibile trovare un campo di tipo 'esriFieldTypeGeometry' nelle informazioni 'fields' del livello. Se si utilizza un livello di servizio mappa, le feature non avranno geometria [url: ${url}]",
      invalidParams: "La query contiene uno o più parametri non supportati",
      updateError: "Errore durante l'aggiornamento del livello",
      
      createUserSeconds: "Creato da ${userId} qualche secondo fa",
      createUserMinute: "Creato da ${userId} un minuto fa",
      editUserSeconds: "Modificato da ${userId} qualche secondo fa",
      editUserMinute: "Modificato da ${userId} un minuto fa",
      createSeconds: "Creato qualche secondo fa",
      createMinute: "Creato un minuto fa",
      editSeconds: "Modificato qualche secondo fa",
      editMinute: "Modificato un minuto fa",
      
      createUserMinutes: "Creato da ${userId} ${minutes} minuti fa",
      createUserHour: "Creato da ${userId} un'ora fa",
      createUserHours: "Creato da ${userId} ${hours} ore fa",
      createUserWeekDay: "Creato da ${userId} ${weekDay} alle ore ${formattedTime}",
      createUserFull: "Creato da ${userId} il giorno ${formattedDate} alle ore ${formattedTime}",
      
      editUserMinutes: "Modificato da ${userId} ${minutes} minuti fa",
      editUserHour: "Modificato da ${userId} un'ora fa",
      editUserHours: "Modificato da ${userId} ${hours} ore fa",
      editUserWeekDay: "Modificato da ${userId} ${weekDay} alle ore ${formattedTime}",
      editUserFull: "Modificato da ${userId} il giorno ${formattedDate} alle ore ${formattedTime}",
      
      createUser: "Creato da ${userId}",
      editUser: "Modificato da ${userId}",
      
      createMinutes: "Creato ${minutes} minuti fa",
      createHour: "Creato un'ora fa",
      createHours: "Creato ${hours} ore fa",
      createWeekDay: "Creato il giorno ${weekDay} alle ore ${formattedTime}",
      createFull: "Creato il giorno ${formattedDate} alle ore ${formattedTime}",
      
      editMinutes: "Modificato ${minutes} minuti fa",
      editHour: "Modificato un'ora fa",
      editHours: "Modificato ${hours} ore fa",
      editWeekDay: "Modificato il giorno ${weekDay} alle ore ${formattedTime}",
      editFull: "Modificato il giorno ${formattedDate} alle ore ${formattedTime}"
    }
  },

  tasks: {
    gp: {
      gpDataTypeNotHandled:"Tipo di dati GP non gestito."
    },
        
    na: {
      route: {
        routeNameNotSpecified: "'RouteName' non specificato per almeno 1 fermata nel FeatureSet delle fermate."
      }
    },
    
    query: {
      invalid: "Impossibile eseguire la query. Verificare i parametri."
    }
  },

  toolbars: {
    draw: {
      convertAntiClockwisePolygon: "I poligoni tracciati in senso antiorario verranno ridisegnati in senso orario.",
      addPoint: "Fare clic per aggiungere un punto",
      addShape: "Fare clic per aggiungere una forma",
      addMultipoint: "Fare clic per iniziare ad aggiungere punti",
      freehand: "Premere per iniziare e rilasciare per terminare",
      start: "Fare clic per iniziare a disegnare",
      resume: "Fare clic per continuare a disegnare",
      complete: "Fare doppio clic per completare",
      finish: "Fare doppio clic per terminare",
      invalidType: "Tipo di geometria non supportato"
    },
    edit: {
      invalidType: "Impossibile attivare lo strumento. Verificare che lo strumento sia valido per il tipo di geometria dato.",
      deleteLabel: "Elimina"
    }
  },
  
  virtualearth: {
    // minMaxTokenDuration:"Token duration must be greater than 15 minutes and lesser than 480 minutes (8 hours).",
    
    vetiledlayer: {
      //tokensNotSpecified:"Either clientToken & serverToken must be provided or tokenUrl must be specified."
      bingMapsKeyNotSpecified: "BingMapsKey deve essere specificato."
    },
    
    vegeocode: {
      //tokensNotSpecified:"Either serverToken must be provided or tokenUrl must be specified.",
      bingMapsKeyNotSpecified: "BingMapsKey deve essere specificato.",
      requestQueued: "Token server non recuperato. La richiesta di accodamento verrà eseguita dopo il recupero del token del server."
    }
  },
  widgets: {
    attributeInspector: {
      NLS_first: "Primo",
      NLS_previous: "Precedente",
      NLS_next: "Seguente",
      NLS_last: "Ultimo",
      NLS_deleteFeature: "Elimina",
      NLS_title: "Modifica attributi",
      NLS_errorInvalid: "Non valido",
      NLS_validationInt: "Il valore deve essere un numero intero.",
      NLS_validationFlt: "Il valore deve essere mobile.",
      NLS_of: "di",
      NLS_noFeaturesSelected: "Nessuna feature selezionata"
    },
    overviewMap: {
      NLS_drag: "Trascinare per modificare i limiti della mappa",
      NLS_show: "Mostra anteprima mappa",
      NLS_hide: "Nascondi anteprima mappa",
      NLS_maximize: "Ingrandisci",
      NLS_restore: "Ripristina",
      NLS_noMap: "'map' non trovato nei parametri di input",
      NLS_noLayer: "La mappa principale non dispone di un livello di base",
      NLS_invalidSR: "Riferimento spaziale del livello dato non compatibile con la mappa principale",
      NLS_invalidType: "Tipo di livello non supportato. I tipi validi sono 'TiledMapServiceLayer' e 'DynamicMapServiceLayer'"
    },
    timeSlider: {
      NLS_first: "Primo",
      NLS_previous: "Precedente",
      NLS_next: "Seguente",
      NLS_play: "Riproduci/Pausa",
      NLS_invalidTimeExtent: "TimeExtent non specificato o in un formato non corretto."
    },
    attachmentEditor: {
      NLS_attachments: "Allegati:",
      NLS_add: "Aggiungi",
      NLS_none: "Nessuno"
    },
    editor: {
      tools: {
        NLS_attributesLbl: "Attributi",
        NLS_cutLbl: "Taglia",
        NLS_deleteLbl: "Elimina",
        NLS_extentLbl: "Limiti",
        NLS_freehandPolygonLbl: "Poligono a mano libera",
        NLS_freehandPolylineLbl: "Polilinea a mano libera",
        NLS_pointLbl: "Punto",
        NLS_polygonLbl: "Poligono",
        NLS_polylineLbl: "Polilinea",
        NLS_reshapeLbl: "Modifica forma",
        NLS_selectionNewLbl: "Nuova selezione",
        NLS_selectionAddLbl: "Aggiungi a selezione",
        NLS_selectionClearLbl: "Cancella selezione",
        NLS_selectionRemoveLbl: "Elimina da selezione",
        NLS_selectionUnionLbl: "Unione",
        NLS_autoCompleteLbl: "Completamento automatico",
        NLS_unionLbl: "Unione",
        NLS_rectangleLbl: "Rettangolo",
        NLS_circleLbl: "Cerchio",
        NLS_ellipseLbl: "Ellisse",
        NLS_triangleLbl: "Triangolo",
        NLS_arrowLbl: "Freccia",
        NLS_arrowLeftLbl: "Freccia sinistra",
        NLS_arrowUpLbl: "Freccia su",
        NLS_arrowDownLbl: "Freccia giù",
        NLS_arrowRightLbl: "Freccia destra",
        NLS_undoLbl: "Annulla",
        NLS_redoLbl: "Ripeti"
      }
    },
    legend: {
      NLS_creatingLegend: "Creazione legenda",
      NLS_noLegend: "Nessuna legenda"
    },
    popup: {
      NLS_moreInfo: "Altre informazioni",
      NLS_searching: "Ricerca in corso",
      NLS_prevFeature: "Oggetto feature precedente",
      NLS_nextFeature: "Oggetto feature seguente",
      NLS_close: "Chiudi",
      NLS_prevMedia: "Media precedente",
      NLS_nextMedia: "Media seguente",
      NLS_noInfo: "Nessuna informazione disponibile",
      NLS_noAttach: "Nessun allegato trovato",
      NLS_maximize: "Ingrandisci",
      NLS_restore: "Ripristina",
      NLS_zoomTo: "Zoom a",
      NLS_pagingInfo: "(${index} di ${total})",
      NLS_attach: "Allegati"
    },
    measurement: {
      NLS_distance: "Distanza",
      NLS_area: "Area",
      NLS_location: "Posizione",
      NLS_resultLabel: "Risultato misurazione",
      NLS_length_miles: "Miglia",
      NLS_length_kilometers: "Chilometri",
      NLS_length_feet: "Piedi",
      NLS_length_meters: "Metri",
      NLS_length_yards: "Iarde",
      NLS_area_acres: "Acri",
      NLS_area_sq_miles: "Miglia quadre",
      NLS_area_sq_kilometers: "Chilometri quadri",
      NLS_area_hectares: "Ettari",
      NLS_area_sq_yards: "Iarde quadre",
      NLS_area_sq_feet: "Piedi quadri",
      NLS_area_sq_meters: "Metri quadri",
      NLS_deg_min_sec: "DMS",
      NLS_decimal_degrees: "Gradi",
      NLS_longitude: "Longitudine",
      NLS_latitude: "Latitudine"
    },
    bookmarks: {
      NLS_add_bookmark: "Aggiungi segnalibro",
      NLS_new_bookmark: "Senza titolo",
      NLS_bookmark_edit: "Modifica",
      NLS_bookmark_remove: "Rimuovi"
    },
    print: {
      NLS_print: "Stampa",
      NLS_printing: "Stampa in corso",
      NLS_printout: "Stampa"
    },
    templatePicker: {
      creationDisabled: "La creazione delle feature è disabilitata per tutti i layer.",
      loading: "Caricamento in corso..."
    }
  },
  arcgis: {
    utils: {
      baseLayerError: "Impossibile caricare il livello della mappa di base",
      geometryServiceError: "Specificare un servizio di geometria per aprire la mappa Web."
    }
  },
  
  identity: {
    lblItem: "elemento",
    title: "Accesso",
    info: "Effettuare l'accesso per accedere all'elemento su ${server} ${resource}",
    lblUser: "Nome Utente:",
    lblPwd: "Password:",
    lblOk: "OK",
    lblSigning: "Accesso in corso...",
    lblCancel: "Annulla",
    errorMsg: "Nome utente/password non validi. Riprovare.",
    invalidUser: "Il nome utente o la password immessi non sono validi.",
    forbidden: "Il nome utente e la password sono validi, ma non si dispone di accesso alla risorsa.",
    noAuthService: "Impossibile accedere al servizio di autenticazione."
  }
})
);