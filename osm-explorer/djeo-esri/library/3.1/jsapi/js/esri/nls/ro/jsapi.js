//>>built
﻿define(
"esri/nls/ro/jsapi", ({
  io: {
    proxyNotSet:"esri.config.defaults.io.proxyUrl nu este setat."
  },
  
  map: {
    deprecateReorderLayerString: "Map.reorderLayer(/*String*/ id, /*Number*/ index) deprecated. Use Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",
    deprecateShiftDblClickZoom: "Map.(enable/disable)ShiftDoubleClickZoom dezaprobat. Nu va fi acceptat zoomul la shift + dublu clic."
  },

  geometry: {
    deprecateToScreenPoint:"esri.geometry.toScreenPoint dezaprobat. Utilizaţi esri.geometry.toScreenGeometry.",
    deprecateToMapPoint:"esri.geometry.toMapPoint dezaprobat. Utilizaţi esri.geometry.toMapGeometry."
  },

  layers: {
    tiled: {
      tileError:"Imposibil de încărcat titlul"
    },
    
    dynamic: {
      imageError:"Imposibil de încărcat imaginea"
    },
    
    graphics: {
      drawingError:"Imposibil de trasat graficul "
    },

    agstiled: {
      deprecateRoundrobin:"Opţiunea de constructor „roundrobin” este perimată. Utilizaţi opţiunea „tileServers”."
    },

    imageParameters: {
      deprecateBBox:"Proprietate „bbox” este perimată. Utilizaţi proprietatea „extent”."
    },
    
    FeatureLayer: {
      noOIDField: "objectIdField nu este setat [url: ${url}]",
      fieldNotFound: "nu se poate găsi câmpul „${field}” în informaţiile stratului tematic „fields” [url: ${url}]",
      noGeometryField: "nu se poate găsi un câmp de tipul „esriFieldTypeGeometry” în informaţiile stratului tematic „fields”. Dacă utilizaţi un strat tematic de serviciu de hartă, obiectele spaţiale nu vor avea geometrie [url: ${url}]",
      invalidParams: "interogarea conţine unul sau mai mulţi parametri neacceptaţi",
      updateError: "a survenit o eroare în timpul actualizării stratului tematic",
      
      createUserSeconds: "Creat de ${userId} acum câteva secunde",
      createUserMinute: "Creat de ${userId} acum un minut",
      editUserSeconds: "Editat de ${userId} acum câteva secunde",
      editUserMinute: "Editat de ${userId} acum un minut",
      createSeconds: "Creat acum câteva secunde",
      createMinute: "Creat acum un minut",
      editSeconds: "Editat acum câteva secunde",
      editMinute: "Editat acum un minut",
      
      createUserMinutes: "Creat de ${userId} cu ${minutes} minute în urmă",
      createUserHour: "Creat de ${userId} cu o oră în urmă",
      createUserHours: "Creat de ${userId} cu ${hours} ore în urmă",
      createUserWeekDay: "Creat de ${userId}, ${weekDay} la ${formattedTime}",
      createUserFull: "Creat de ${userId} în data de ${formattedDate} la ora ${formattedTime}",
      
      editUserMinutes: "Editat de ${userId} cu ${minutes} minute în urmă",
      editUserHour: "Editat de ${userId} cu o oră în urmă",
      editUserHours: "Editat de ${userId} cu ${hours} ore în urmă",
      editUserWeekDay: "Editat de ${userId}, ${weekDay} la ${formattedTime}",
      editUserFull: "Editat de ${userId} în data de ${formattedDate} la ora ${formattedTime}",
      
      createUser: "Creat de ${userId}",
      editUser: "Editat de ${userId}",
      
      createMinutes: "Creat cu ${minutes} minute în urmă",
      createHour: "Creat cu o oră în urmă",
      createHours: "Creat cu ${hours} ore în urmă",
      createWeekDay: "Creat ${weekDay} la ora ${formattedTime}",
      createFull: "Creat în data de ${formattedDate} la ${formattedTime}",
      
      editMinutes: "Editat cu ${minutes} minute în urmă",
      editHour: "Editat cu o oră în urmă",
      editHours: "Editat cu ${hours} ore în urmă",
      editWeekDay: "Editat ${weekDay} la ${formattedTime}",
      editFull: "Editat în data de ${formattedDate} la ora ${formattedTime}"
    }
  },

  tasks: {
    gp: {
      gpDataTypeNotHandled:"Tipul datelor GP nu este tratat."
    },
        
    na: {
      route: {
        routeNameNotSpecified: "„RouteName” nu este specificat pentru cel puţin 1 oprire în parametrul FeatureSet pentru opriri."
      }
    },
    
    query: {
      invalid: "Imposibil de efectuat interogarea. Verificaţi parametrii."
    }
  },

  toolbars: {
    draw: {
      convertAntiClockwisePolygon: "Poligoanele trasate în sens invers acelor de ceasornic vor fi inversate în sensul acelor de ceasornic.",
      addPoint: "Faceţi clic pentru a adăuga un punct",
      addShape: "Faceţi clic pentru a adăuga o formă",
      addMultipoint: "Faceţi clic pentru a începe să adăugaţi puncte",
      freehand: "Apăsaţi în jos pentru a începe şi eliberaţi pentru finalizare",
      start: "Faceţi clic pentru a începe trasarea",
      resume: "Faceţi clic pentru a continua trasarea",
      complete: "Faceţi dublu clic pentru finalizare",
      finish: "Faceţi dublu clic pentru terminare",
      invalidType: "Tip de geometrie neacceptat"
    },
    edit: {
      invalidType: "Imposibil de activat instrumentul. Verificaţi dacă instrumentul este valid pentru tipul de geometrie dat.",
      deleteLabel: "Ştergere"
    }
  },
  
  virtualearth: {
    // minMaxTokenDuration:"Token duration must be greater than 15 minutes and lesser than 480 minutes (8 hours).",
    
    vetiledlayer: {
      //tokensNotSpecified:"Either clientToken & serverToken must be provided or tokenUrl must be specified."
      bingMapsKeyNotSpecified: "Parametrul BingMapsKey trebuie furnizat."
    },
    
    vegeocode: {
      //tokensNotSpecified:"Either serverToken must be provided or tokenUrl must be specified.",
      bingMapsKeyNotSpecified: "Parametrul BingMapsKey trebuie furnizat.",
      requestQueued: "Tokenul serverului nu a fost preluat. Solicitarea este în aşteptare şi va fi executată după obţinerea tokenului serverului."
    }
  },
  widgets: {
    attributeInspector: {
      NLS_first: "Primul",
      NLS_previous: "Anterior",
      NLS_next: "Următor",
      NLS_last: "Ultimul",
      NLS_deleteFeature: "Ştergere",
      NLS_title: "Editare atribute",
      NLS_errorInvalid: "Nevalid",
      NLS_validationInt: "Valoarea trebuie să fie un număr întreg.",
      NLS_validationFlt: "Valoarea trebuie să fie un număr cu virgulă mobilă.",
      NLS_of: "din",
      NLS_noFeaturesSelected: "Niciun obiect spaţial selectat"
    },
    overviewMap: {
      NLS_drag: "Tragere pentru modificarea extinderii hărţii",
      NLS_show: "Afişare prezentare generală hartă",
      NLS_hide: "Ascundere prezentare generală hartă",
      NLS_maximize: "Maximizare",
      NLS_restore: "Restabilire",
      NLS_noMap: "„map” negăsit în parametrii de intrare",
      NLS_noLayer: "harta principală nu are un strat tematic de bază",
      NLS_invalidSR: "referinţa spaţială a stratului tematic dat nu este compatibilă cu harta principală",
      NLS_invalidType: "tip strat tematic neacceptat. Tipurile valide sunt „TiledMapServiceLayer” şi „DynamicMapServiceLayer”"
    },
    timeSlider: {
      NLS_first: "Primul",
      NLS_previous: "Anterior",
      NLS_next: "Următor",
      NLS_play: "Redare/Pauză",
      NLS_invalidTimeExtent: "TimeExtent nespecificat sau în format incorect."
    },
    attachmentEditor: {
      NLS_attachments: "Fişiere ataşate:",
      NLS_add: "Adăugare",
      NLS_none: "Niciunul"
    },
    editor: {
      tools: {
        NLS_attributesLbl: "Atribute",
        NLS_cutLbl: "Decupare",
        NLS_deleteLbl: "Ştergere",
        NLS_extentLbl: "Extindere",
        NLS_freehandPolygonLbl: "Poligon liber",
        NLS_freehandPolylineLbl: "Linie poligonală liberă",
        NLS_pointLbl: "Punct",
        NLS_polygonLbl: "Poligon",
        NLS_polylineLbl: "Linie poligonală",
        NLS_reshapeLbl: "Remodelare",
        NLS_selectionNewLbl: "Selecţie nouă",
        NLS_selectionAddLbl: "Adăugare la selecţie",
        NLS_selectionClearLbl: "Ştergere selecţie",
        NLS_selectionRemoveLbl: "Extragere din selecţie",
        NLS_selectionUnionLbl: "Reuniune",
        NLS_autoCompleteLbl: "Finalizare automată",
        NLS_unionLbl: "Reuniune",
        NLS_rectangleLbl: "Dreptunghi",
        NLS_circleLbl: "Cerc",
        NLS_ellipseLbl: "Elipsă",
        NLS_triangleLbl: "Triunghi",
        NLS_arrowLbl: "Săgeată",
        NLS_arrowLeftLbl: "Săgeată stânga",
        NLS_arrowUpLbl: "Săgeată sus",
        NLS_arrowDownLbl: "Săgeată jos",
        NLS_arrowRightLbl: "Săgeată dreapta",
        NLS_undoLbl: "Anulare",
        NLS_redoLbl: "Refacere"
      }
    },
    legend: {
      NLS_creatingLegend: "Creare legendă",
      NLS_noLegend: "Nicio legendă"
    },
    popup: {
      NLS_moreInfo: "Informaţii suplimentare",
      NLS_searching: "Se caută",
      NLS_prevFeature: "Obiectul spaţial anterior",
      NLS_nextFeature: "Obiectul spaţial următor",
      NLS_close: "Închidere",
      NLS_prevMedia: "Obiectul media anterior",
      NLS_nextMedia: "Obiectul media următor",
      NLS_noInfo: "Nicio informaţie disponibilă",
      NLS_noAttach: "Nicio ataşare găsită",
      NLS_maximize: "Maximizare",
      NLS_restore: "Restabilire",
      NLS_zoomTo: "Transfocare la",
      NLS_pagingInfo: "(${index} din ${total})",
      NLS_attach: "Fişiere ataşate"
    },
    measurement: {
      NLS_distance: "Distanţă",
      NLS_area: "Suprafaţă",
      NLS_location: "Locaţie",
      NLS_resultLabel: "Rezultat măsurare",
      NLS_length_miles: "Mile",
      NLS_length_kilometers: "Kilometri",
      NLS_length_feet: "Ft",
      NLS_length_meters: "Metri",
      NLS_length_yards: "Yarzi",
      NLS_area_acres: "Acri",
      NLS_area_sq_miles: "Mile pătrate",
      NLS_area_sq_kilometers: "Kilometri pătraţi",
      NLS_area_hectares: "Hectare",
      NLS_area_sq_yards: "Yarzi pătraţi",
      NLS_area_sq_feet: "Ft pătraţi",
      NLS_area_sq_meters: "Metri pătraţi",
      NLS_deg_min_sec: "DMS",
      NLS_decimal_degrees: "Grade",
      NLS_longitude: "Longitudine",
      NLS_latitude: "Latitudine"
    },
    bookmarks: {
      NLS_add_bookmark: "Adăugare semn de carte",
      NLS_new_bookmark: "Fără titlu",
      NLS_bookmark_edit: "Editare",
      NLS_bookmark_remove: "Eliminare"
    },
    print: {
      NLS_print: "Imprimare",
      NLS_printing: "Se imprimă",
      NLS_printout: "Material imprimat"
    },
    templatePicker: {
      creationDisabled: "Crearea de obiecte spaţiale este dezactivată pentru toate straturile tematice.",
      loading: "Se încarcă.."
    }
  },
  arcgis: {
    utils: {
      baseLayerError: "Imposibil de încărcat stratul tematic al hărţii de bază",
      geometryServiceError: "Furnizaţi un serviciu de geometrie pentru deschiderea hărţii web."
    }
  },
  
  identity: {
    lblItem: "element",
    title: "Autentificaţi-vă",
    info: "Autentificaţi-vă pentru a accesa elementul din ${server} ${resource}",
    lblUser: "Nume utilizator:",
    lblPwd: "Parolă:",
    lblOk: "OK",
    lblSigning: "Autentificare...",
    lblCancel: "Anulare",
    errorMsg: "Nume de utilizator/Parolă nevalidă. Încercaţi din nou.",
    invalidUser: "Numele de utilizator sau parola introdusă este incorectă.",
    forbidden: "Numele de utilizator şi parola sunt valide, însă nu aveţi acces la această resursă.",
    noAuthService: "Nu se poate accesa serviciul de autentificare."
  }
})
);