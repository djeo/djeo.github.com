//>>built
﻿define(
"esri/nls/de/jsapi", ({
  io: {
    proxyNotSet:"esri.config.defaults.io.proxyUrl wurde nicht festgelegt."
  },
  
  map: {
    deprecateReorderLayerString: "Map.reorderLayer(/*String*/ id, /*Number*/ index) veraltet. Verwenden Sie Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",
    deprecateShiftDblClickZoom: "Map.(enable/ddisable)ShiftDoubleClickZoom veraltet. Zoomverhalten durch Doppelklicken mit Umschalttaste wird nicht unterstützt."
  },

  geometry: {
    deprecateToScreenPoint:"esri.geometry.toScreenPoint veraltet. Verwenden Sie esri.geometry.toScreenGeometry.",
    deprecateToMapPoint:"esri.geometry.toMapPoint veraltet. Verwenden Sie esri.geometry.toMapGeometry."
  },

  layers: {
    tiled: {
      tileError:"Kachel kann nicht geladen werden"
    },
    
    dynamic: {
      imageError:"Bild kann nicht geladen werden"
    },
    
    graphics: {
      drawingError:"Grafik kann nicht dargestellt werden "
    },

    agstiled: {
      deprecateRoundrobin:"Konstruktoroption 'roundrobin' ist veraltet. Verwenden Sie die Option 'tileServers'."
    },

    imageParameters: {
      deprecateBBox:"Eigenschaft 'bbox' ist veraltet. Verwenden Sie die Eigenschaft 'extent'."
    },
    
    FeatureLayer: {
      noOIDField: "objectIdField ist nicht festgelegt [url: ${url}]",
      fieldNotFound: "Feld '${field}' kann nicht in den 'fields'-Informationen des Layers gefunden werden [url: ${url}]",
      noGeometryField: "Feld vom Typ 'esriFieldTypeGeometry' kann nicht in den 'fields'-Informationen des Layers gefunden werden. Wenn Sie einen Karten-Service-Layer verwenden, haben Features keine Geometrie [url: ${url}]",
      invalidParams: "Abfrage enthält einen oder mehrere nicht unterstützte Parameter",
      updateError: "Fehler beim Aktualisieren des Layers",
      
      createUserSeconds: "Von ${userId} kurz zuvor erstellt",
      createUserMinute: "Von ${userId} vor 1 Minute erstellt",
      editUserSeconds: "Von ${userId} kurz zuvor bearbeitet",
      editUserMinute: "Von ${userId} vor 1 Minute bearbeitet",
      createSeconds: "Kurz zuvor erstellt",
      createMinute: "Vor 1 Minute erstellt",
      editSeconds: "Kurz zuvor bearbeitet",
      editMinute: "Vor 1 Minute bearbeitet",
      
      createUserMinutes: "Vor ${minutes} Minuten von ${userId} erstellt",
      createUserHour: "Vor einer Stunde von ${userId} erstellt",
      createUserHours: "Vor ${hours} Stunden von ${userId} erstellt",
      createUserWeekDay: "Am ${weekDay} um ${formattedTime} von ${userId} erstellt",
      createUserFull: "Am ${formattedDate} um ${formattedTime} von ${userId} erstellt",
      
      editUserMinutes: "Vor ${minutes} Minuten von ${userId} bearbeitet",
      editUserHour: "Vor einer Stunde von ${userId} bearbeitet",
      editUserHours: "Vor ${hours} Stunden von ${userId} bearbeitet",
      editUserWeekDay: "Am ${weekDay} um ${formattedTime} von ${userId} bearbeitet",
      editUserFull: "Am ${formattedDate} um ${formattedTime} von ${userId} bearbeitet",
      
      createUser: "Von ${userId} erstellt",
      editUser: "Von ${userId} bearbeitet",
      
      createMinutes: "Vor ${minutes} Minuten erstellt",
      createHour: "Vor einer Stunde erstellt",
      createHours: "Vor ${hours} Stunden erstellt",
      createWeekDay: "Am ${weekDay} um ${formattedTime} erstellt",
      createFull: "Am ${formattedDate} um ${formattedTime} erstellt",
      
      editMinutes: "Vor ${minutes} Minuten bearbeitet",
      editHour: "Vor einer Stunde bearbeitet",
      editHours: "Vor ${hours} Stunden bearbeitet",
      editWeekDay: "Am ${weekDay} um ${formattedTime} bearbeitet",
      editFull: "Am ${formattedDate} um ${formattedTime} bearbeitet"
    }
  },

  tasks: {
    gp: {
      gpDataTypeNotHandled:"GP-Datentyp wurde nicht verarbeitet."
    },
        
    na: {
      route: {
        routeNameNotSpecified: "'RouteName' wurde für mindestens 1 Stopp im Feature-Set 'stops' nicht festgelegt."
      }
    },
    
    query: {
      invalid: "Die Abfrage kann nicht ausgeführt werden. Prüfen Sie die Parameter."
    }
  },

  toolbars: {
    draw: {
      convertAntiClockwisePolygon: "Polygone, die gegen den Uhrzeigersinn gezeichnet wurden, werden in den Uhrzeigersinn umgekehrt.",
      addPoint: "Klicken, um einen Punkt hinzuzufügen",
      addShape: "Klicken, um ein Shape hinzuzufügen",
      addMultipoint: "Klicken, um mit dem Hinzufügen von Punkten zu beginnen",
      freehand: "Zum Starten drücken und zum Beenden loslassen",
      start: "Klicken, um mit dem Zeichnen zu beginnen",
      resume: "Klicken, um das Zeichnen fortzusetzen",
      complete: "Doppelklicken, um abzuschließen",
      finish: "Doppelklicken, um zu beenden",
      invalidType: "Nicht unterstützter Geometrietyp"
    },
    edit: {
      invalidType: "Das Werkzeug kann nicht aktiviert werden. Prüfen Sie, ob das Werkzeug für den angegebenen Geometrietyp zulässig ist.",
      deleteLabel: "Löschen"
    }
  },
  
  virtualearth: {
    // minMaxTokenDuration:"Token duration must be greater than 15 minutes and lesser than 480 minutes (8 hours).",
    
    vetiledlayer: {
      //tokensNotSpecified:"Either clientToken & serverToken must be provided or tokenUrl must be specified."
      bingMapsKeyNotSpecified: "BingMapsKey muss angegeben werden."
    },
    
    vegeocode: {
      //tokensNotSpecified:"Either serverToken must be provided or tokenUrl must be specified.",
      bingMapsKeyNotSpecified: "BingMapsKey muss angegeben werden.",
      requestQueued: "Server-Token wurde nicht abgerufen. Anforderung, die nach dem Abrufen des Server-Tokens ausgeführt werden soll, wird in Warteschlange gestellt."
    }
  },
  widgets: {
    attributeInspector: {
      NLS_first: "Erste(r)",
      NLS_previous: "Vorherige",
      NLS_next: "Nächste",
      NLS_last: "Letzte(r)",
      NLS_deleteFeature: "Löschen",
      NLS_title: "Attribute editieren",
      NLS_errorInvalid: "Ungültig",
      NLS_validationInt: "Wert muss eine Ganzzahl sein.",
      NLS_validationFlt: "Wert muss eine Gleitkommazahl sein.",
      NLS_of: "von",
      NLS_noFeaturesSelected: "Keine Features selektiert"
    },
    overviewMap: {
      NLS_drag: "Ziehen, um Kartenausdehnung zu ändern",
      NLS_show: "Übersichtskarte anzeigen",
      NLS_hide: "Übersichtskarte ausblenden",
      NLS_maximize: "Maximieren",
      NLS_restore: "Wiederherstellen",
      NLS_noMap: "'map' wurde in Eingabeparametern nicht gefunden",
      NLS_noLayer: "Hauptkarte hat keinen Basis-Layer",
      NLS_invalidSR: "Raumbezug des angegebenen Layers ist nicht mit der Hauptkarte kompatibel",
      NLS_invalidType: "Nicht unterstützter Layer-Typ. Zulässige Typen sind 'TiledMapServiceLayer' und 'DynamicMapServiceLayer'"
    },
    timeSlider: {
      NLS_first: "Erste(r)",
      NLS_previous: "Vorherige",
      NLS_next: "Nächste",
      NLS_play: "Wiedergabe/Pause",
      NLS_invalidTimeExtent: "TimeExtent nicht oder in falschem Format angegeben."
    },
    attachmentEditor: {
      NLS_attachments: "Anlagen:",
      NLS_add: "Hinzufügen",
      NLS_none: "Keine"
    },
    editor: {
      tools: {
        NLS_attributesLbl: "Attribute",
        NLS_cutLbl: "Ausschneiden",
        NLS_deleteLbl: "Löschen",
        NLS_extentLbl: "Ausdehnung",
        NLS_freehandPolygonLbl: "Freihand-Polygon",
        NLS_freehandPolylineLbl: "Freihand-Polylinie",
        NLS_pointLbl: "Punkt",
        NLS_polygonLbl: "Polygon",
        NLS_polylineLbl: "Polylinie",
        NLS_reshapeLbl: "Umformen",
        NLS_selectionNewLbl: "Neue Auswahl",
        NLS_selectionAddLbl: "Zur Auswahl hinzufügen",
        NLS_selectionClearLbl: "Auswahl aufheben",
        NLS_selectionRemoveLbl: "Aus Auswahl entfernen",
        NLS_selectionUnionLbl: "Vereinigen",
        NLS_autoCompleteLbl: "Automatisch (an)schließen",
        NLS_unionLbl: "Vereinigen",
        NLS_rectangleLbl: "Rechteck",
        NLS_circleLbl: "Kreis",
        NLS_ellipseLbl: "Ellipse",
        NLS_triangleLbl: "Dreieck",
        NLS_arrowLbl: "Pfeil",
        NLS_arrowLeftLbl: "Pfeil nach links",
        NLS_arrowUpLbl: "Pfeil nach oben",
        NLS_arrowDownLbl: "Pfeil nach unten",
        NLS_arrowRightLbl: "Pfeil nach rechts",
        NLS_undoLbl: "Rückgängig",
        NLS_redoLbl: "Wiederholen"
      }
    },
    legend: {
      NLS_creatingLegend: "Legende wird erstellt",
      NLS_noLegend: "Keine Legende vorhanden"
    },
    popup: {
      NLS_moreInfo: "Weitere Informationen",
      NLS_searching: "Suchen",
      NLS_prevFeature: "Vorheriges Feature",
      NLS_nextFeature: "Nächstes Feature",
      NLS_close: "Schließen",
      NLS_prevMedia: "Vorheriges Medium",
      NLS_nextMedia: "Nächstes Medium",
      NLS_noInfo: "Keine Informationen verfügbar",
      NLS_noAttach: "Keine Anlagen gefunden",
      NLS_maximize: "Maximieren",
      NLS_restore: "Wiederherstellen",
      NLS_zoomTo: "Zoomen auf",
      NLS_pagingInfo: "(${index} von ${total})",
      NLS_attach: "Anlagen"
    },
    measurement: {
      NLS_distance: "Entfernung",
      NLS_area: "Fläche",
      NLS_location: "Position",
      NLS_resultLabel: "Messergebnis",
      NLS_length_miles: "Meilen",
      NLS_length_kilometers: "Kilometer",
      NLS_length_feet: "Fuß",
      NLS_length_meters: "Meter",
      NLS_length_yards: "Yard",
      NLS_area_acres: "Acres",
      NLS_area_sq_miles: "Quadratmeilen",
      NLS_area_sq_kilometers: "Quadratkilometer",
      NLS_area_hectares: "Hektar",
      NLS_area_sq_yards: "Quadratyard",
      NLS_area_sq_feet: "Quadratfuß",
      NLS_area_sq_meters: "Quadratmeter",
      NLS_deg_min_sec: "DMS",
      NLS_decimal_degrees: "Grad",
      NLS_longitude: "Längengrad",
      NLS_latitude: "Breitengrad"
    },
    bookmarks: {
      NLS_add_bookmark: "Lesezeichen hinzufügen",
      NLS_new_bookmark: "Unbenannt",
      NLS_bookmark_edit: "Bearbeiten",
      NLS_bookmark_remove: "Entfernen"
    },
    print: {
      NLS_print: "Drucken",
      NLS_printing: "Drucken",
      NLS_printout: "Druck"
    },
    templatePicker: {
      creationDisabled: "Feature-Erstellung für alle Layer deaktiviert",
      loading: "Wird geladen.."
    }
  },
  arcgis: {
    utils: {
      baseLayerError: "Grundkarten-Layer kann nicht geladen werden",
      geometryServiceError: "Geben Sie zum Öffnen der Webkarte einen Geometrie-Service an."
    }
  },
  
  identity: {
    lblItem: "Element",
    title: "Anmelden",
    info: "Melden Sie sich an, um auf das Element unter ${server} ${resource} zuzugreifen.",
    lblUser: "Benutzername:",
    lblPwd: "Kennwort:",
    lblOk: "OK",
    lblSigning: "Anmelden...",
    lblCancel: "Abbrechen",
    errorMsg: "Benutzername/Kennwort ungültig. Versuchen Sie es erneut.",
    invalidUser: "Der eingegebene Benutzername oder das eingegebene Kennwort ist falsch.",
    forbidden: "Der Benutzername und das Kennwort sind gültig, aber Sie haben keinen Zugriff auf diese Ressource.",
    noAuthService: "Zugriff auf Authentifizierungsservice nicht möglich."
  }
})
);