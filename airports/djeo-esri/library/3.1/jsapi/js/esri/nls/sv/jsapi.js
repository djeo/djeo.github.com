//>>built
﻿define(
"esri/nls/sv/jsapi", ({
  io: {
    proxyNotSet:"esri.config.defaults.io.proxyUrl är inte inställd."
  },
  
  map: {
    deprecateReorderLayerString: "Map.reorderLayer(/*String*/ id, /*Number*/ index) deprecated. Use Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",
    deprecateShiftDblClickZoom: "Map.(enable/disable)ShiftDoubleClickZoom stöds inte längre. Zoomning med skift+dubbelklick stöds inte."
  },

  geometry: {
    deprecateToScreenPoint:"esri.geometry.toScreenPoint stöds inte längre. Använd esri.geometry.toScreenGeometry.",
    deprecateToMapPoint:"esri.geometry.toMapPoint stöds inte längre. Använd esri.geometry.toMapGeometry."
  },

  layers: {
    tiled: {
      tileError:"Det gick inte att ladda rutan"
    },
    
    dynamic: {
      imageError:"Det gick inte att ladda bilden"
    },
    
    graphics: {
      drawingError:"Det gick inte att rita diagrammet "
    },

    agstiled: {
      deprecateRoundrobin:"Konstrueraralternativet roundrobin är inaktuellt. Använd alternativet tileServers."
    },

    imageParameters: {
      deprecateBBox:"Egenskapen bbox är inaktuell. Använd egenskapen extent."
    },
    
    FeatureLayer: {
      noOIDField: "objectIdField är inte angivet [url: ${url}]",
      fieldNotFound: "det går inte att hitta fältet ${field} i fields-informationen för lagret [url: ${url}]",
      noGeometryField: "det går inte att hitta ett fält av typen esriFieldTypeGeometry i fields-informationen för lagret. Om du använder ett karttjänstlager har geoobjekten inte geometri [url: ${url}]",
      invalidParams: "frågan innehåller en eller flera parametrar som inte stöds",
      updateError: "ett fel uppstod när lagret uppdaterades",
      
      createUserSeconds: "Skapades av ${userId} för några sekunder sedan",
      createUserMinute: "Skapades av ${userId} för någon minut sedan",
      editUserSeconds: "Redigerades av ${userId} för några sekunder sedan",
      editUserMinute: "Redigerades av ${userId} för någon minut sedan",
      createSeconds: "Skapades för några sekunder sedan",
      createMinute: "Skapades för någon minut sedan",
      editSeconds: "Redigerades för några sekunder sedan",
      editMinute: "Redigerades för någon minut sedan",
      
      createUserMinutes: "Skapades av ${userId} för ${minutes} minuter sedan",
      createUserHour: "Skapades av ${userId} för en timme sedan",
      createUserHours: "Skapades av ${userId} för ${hours} timmar sedan",
      createUserWeekDay: "Skapades av ${userId} på ${weekDay} kl. ${formattedTime}",
      createUserFull: "Skapades av ${userId} den ${formattedDate} kl. ${formattedTime}",
      
      editUserMinutes: "Redigerades av ${userId} för ${minutes} minuter sedan",
      editUserHour: "Redigerades av ${userId} för en timme sedan",
      editUserHours: "Redigerades av ${userId} för ${hours} timmar sedan",
      editUserWeekDay: "Redigerades av ${userId} på ${weekDay} kl. ${formattedTime}",
      editUserFull: "Redigerades av ${userId} den ${formattedDate} kl. ${formattedTime}",
      
      createUser: "Skapades av ${userId}",
      editUser: "Redigerades av ${userId}",
      
      createMinutes: "Skapades för ${minutes} minuter sedan",
      createHour: "Skapades för en timme sedan",
      createHours: "Skapades för ${hours} timmar sedan",
      createWeekDay: "Skapades på ${weekDay} kl. ${formattedTime}",
      createFull: "Skapades den ${formattedDate} kl. ${formattedTime}",
      
      editMinutes: "Redigerades för ${minutes} minuter sedan",
      editHour: "Redigerades för en timme sedan",
      editHours: "Redigerades för ${hours} timmar sedan",
      editWeekDay: "Redigerades på ${weekDay} kl. ${formattedTime}",
      editFull: "Redigerades den ${formattedDate} kl. ${formattedTime}"
    }
  },

  tasks: {
    gp: {
      gpDataTypeNotHandled:"GP-datatyp hanteras inte."
    },
        
    na: {
      route: {
        routeNameNotSpecified: "RouteName specificeras inte för minst 1 stopp i FeatureSet stops."
      }
    },
    
    query: {
      invalid: "Det går inte att köra frågan. Kontrollera parametrarna."
    }
  },

  toolbars: {
    draw: {
      convertAntiClockwisePolygon: "Polygoner som ritas i moturs riktning vänds till medurs.",
      addPoint: "Klicka om du vill lägga till en punkt",
      addShape: "Klicka om du vill lägga till en form",
      addMultipoint: "Klicka om du vill börja lägga till punkter",
      freehand: "Tryck ned för att starta och släpp för att avsluta",
      start: "Klicka för att börja rita",
      resume: "Klicka för att fortsätta rita",
      complete: "Dubbelklicka för att slutföra",
      finish: "Dubbelklicka för att avsluta",
      invalidType: "Geometritypen stöds inte"
    },
    edit: {
      invalidType: "Det går inte att aktivera verktyget. Kontrollera om verktyget är giltigt för den givna geometritypen.",
      deleteLabel: "Ta bort"
    }
  },
  
  virtualearth: {
    // minMaxTokenDuration:"Token duration must be greater than 15 minutes and lesser than 480 minutes (8 hours).",
    
    vetiledlayer: {
      //tokensNotSpecified:"Either clientToken & serverToken must be provided or tokenUrl must be specified."
      bingMapsKeyNotSpecified: "BingMapsKey måste anges."
    },
    
    vegeocode: {
      //tokensNotSpecified:"Either serverToken must be provided or tokenUrl must be specified.",
      bingMapsKeyNotSpecified: "BingMapsKey måste anges.",
      requestQueued: "Servertoken hämtades inte. Begäran läggs i kö för att köras efter att servertoken har hämtats."
    }
  },
  widgets: {
    attributeInspector: {
      NLS_first: "Första",
      NLS_previous: "Föregående",
      NLS_next: "Nästa",
      NLS_last: "Sista",
      NLS_deleteFeature: "Ta bort",
      NLS_title: "Redigera attribut",
      NLS_errorInvalid: "Ogiltig",
      NLS_validationInt: "Värdet måste vara ett heltal.",
      NLS_validationFlt: "Värdet måste vara ett flyttal.",
      NLS_of: "av",
      NLS_noFeaturesSelected: "Inga geoobjekt valda"
    },
    overviewMap: {
      NLS_drag: "Dra för att ändra kartutbredningen",
      NLS_show: "Visa kartöversikt",
      NLS_hide: "Dölj kartöversikt",
      NLS_maximize: "Maximera",
      NLS_restore: "Återställ",
      NLS_noMap: "map hittades inte i indataparametrarna",
      NLS_noLayer: "huvudkartan har inget baslager",
      NLS_invalidSR: "den geografiska referensen för det givna lagret är inte kompatibel med huvudkartan",
      NLS_invalidType: "Lagertypen stöds inte. Giltiga typer är TiledMapServiceLayer och DynamicMapServiceLayer"
    },
    timeSlider: {
      NLS_first: "Första",
      NLS_previous: "Föregående",
      NLS_next: "Nästa",
      NLS_play: "Spela upp/pausa",
      NLS_invalidTimeExtent: "TimeExtent är inte angiven eller i felaktigt format."
    },
    attachmentEditor: {
      NLS_attachments: "Bilagor:",
      NLS_add: "Lägg till",
      NLS_none: "Ingen"
    },
    editor: {
      tools: {
        NLS_attributesLbl: "Attribut",
        NLS_cutLbl: "Beskär",
        NLS_deleteLbl: "Ta bort",
        NLS_extentLbl: "Utbredning",
        NLS_freehandPolygonLbl: "Frihandspolygon",
        NLS_freehandPolylineLbl: "Frihandspolylinje",
        NLS_pointLbl: "Punkt",
        NLS_polygonLbl: "Polygon",
        NLS_polylineLbl: "Polylinje",
        NLS_reshapeLbl: "Omforma",
        NLS_selectionNewLbl: "Nytt urval",
        NLS_selectionAddLbl: "Lägg till i urval",
        NLS_selectionClearLbl: "Rensa urval",
        NLS_selectionRemoveLbl: "Ta bort från urval",
        NLS_selectionUnionLbl: "Slå samman",
        NLS_autoCompleteLbl: "Slutför automatiskt",
        NLS_unionLbl: "Slå samman",
        NLS_rectangleLbl: "Rektangel",
        NLS_circleLbl: "Cirkel",
        NLS_ellipseLbl: "Ellips",
        NLS_triangleLbl: "Triangel",
        NLS_arrowLbl: "Pil",
        NLS_arrowLeftLbl: "Vänsterpil",
        NLS_arrowUpLbl: "Uppåtpil",
        NLS_arrowDownLbl: "Nedåtpil",
        NLS_arrowRightLbl: "Högerpil",
        NLS_undoLbl: "Ångra",
        NLS_redoLbl: "Upprepa"
      }
    },
    legend: {
      NLS_creatingLegend: "Teckenförklaring skapas",
      NLS_noLegend: "Ingen teckenförklaring"
    },
    popup: {
      NLS_moreInfo: "Mer information",
      NLS_searching: "Söker",
      NLS_prevFeature: "Föregående geoobjekt",
      NLS_nextFeature: "Nästa geoobjekt",
      NLS_close: "Stäng",
      NLS_prevMedia: "Föregående media",
      NLS_nextMedia: "Nästa media",
      NLS_noInfo: "Det finns ingen information tillgänglig",
      NLS_noAttach: "Inga bilagor hittades",
      NLS_maximize: "Maximera",
      NLS_restore: "Återställ",
      NLS_zoomTo: "Zooma till",
      NLS_pagingInfo: "(${index} av ${total})",
      NLS_attach: "Bilagor"
    },
    measurement: {
      NLS_distance: "Avstånd",
      NLS_area: "Area",
      NLS_location: "Plats",
      NLS_resultLabel: "Mätningsresultat",
      NLS_length_miles: "Engelska mil",
      NLS_length_kilometers: "Kilometer",
      NLS_length_feet: "Fot",
      NLS_length_meters: "Meter",
      NLS_length_yards: "Yard",
      NLS_area_acres: "Tunnland",
      NLS_area_sq_miles: "Engelska kvadratmil",
      NLS_area_sq_kilometers: "Kvadratkilometer",
      NLS_area_hectares: "Hektar",
      NLS_area_sq_yards: "Kvadratyard",
      NLS_area_sq_feet: "Kvadratfot",
      NLS_area_sq_meters: "Kvadratmeter",
      NLS_deg_min_sec: "DMS",
      NLS_decimal_degrees: "Grader",
      NLS_longitude: "Longitud",
      NLS_latitude: "Latitud"
    },
    bookmarks: {
      NLS_add_bookmark: "Lägg till bokmärke",
      NLS_new_bookmark: "Namnlös",
      NLS_bookmark_edit: "Redigera",
      NLS_bookmark_remove: "Ta bort"
    },
    print: {
      NLS_print: "Skriv ut",
      NLS_printing: "Skriver ut",
      NLS_printout: "Utskrift"
    },
    templatePicker: {
      creationDisabled: "Skapande av geoobjekt är inaktiverat för alla lager.",
      loading: "Läser in..."
    }
  },
  arcgis: {
    utils: {
      baseLayerError: "Det går inte att ladda baskartslagret",
      geometryServiceError: "Ange en geometritjänst för att öppna webbkarta."
    }
  },
  
  identity: {
    lblItem: "objekt",
    title: "Logga in",
    info: "Logga in för att komma åt objektet på ${server} ${resource}",
    lblUser: "Användarnamn:",
    lblPwd: "Lösenord:",
    lblOk: "OK",
    lblSigning: "Loggar in...",
    lblCancel: "Avbryt",
    errorMsg: "Ogiltigt användarnamn/lösenord. Försök igen.",
    invalidUser: "Det användarnamn eller lösenord du har angett är felaktigt.",
    forbidden: "Användarnamnet och lösenordet är giltiga, men du har inte behörighet till den här resursen.",
    noAuthService: "Det gick inte att komma åt autentiseringstjänsten."
  }
})
);