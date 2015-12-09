require({cache:{
'esri/nls/pl/jsapi':function(){
﻿define(
({
  io: {
    proxyNotSet:"esri.config.defaults.io.proxyUrl is not set."
  },
  
  map: {
    deprecateReorderLayerString: "Map.reorderLayer(/*String*/ id, /*Number*/ index) nie jest zalecana. Użyj Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",
    deprecateShiftDblClickZoom: "Map.(enable/disable)ShiftDoubleClickZoom nie jest zalacana. Shift+ Podwójne kliknięcie nie będzie obsługiwane."
  },

  geometry: {
    deprecateToScreenPoint:"esri.geometry.toScreenPoint nie jest zalecana. Użyj esri.geometry.toScreenGeometry.",
    deprecateToMapPoint:"esri.geometry.toMapPoint nie jest zalecana. Użyj esri.geometry.toMapGeometry."
  },

  layers: {
    tiled: {
      tileError:"Nie można wczytać tytułu"
    },
    
    dynamic: {
      imageError:"Nie można wczytać obrazu"
    },
    
    graphics: {
      drawingError:"Nie można narysować grafiki "
    },

    agstiled: {
      deprecateRoundrobin:"Opcja konstruktora \'roundrobin\' nie jest zalecana. Należy użyć opcji \'tileServers\'."
    },

    imageParameters: {
      deprecateBBox:"Właściwość \'bbox\' nie jest zalecana. Należy użyć właściwości \'extent\'."
    },
    
    FeatureLayer: {
      noOIDField: "objectIdField nie jest ustawiony [url: ${url}]",
      fieldNotFound: "nie można znaleźć pola \'${field}\' w informacji warstwy \'fields\' [url: ${url}]",
      noGeometryField: "nie można znaleźć pola typu \'esriFieldTypeGeometry\' w informacji warstwy \'fields\'. Przy użyciu warstwy serwisu mapowego,  obiekty nie będą miały geometrii [url: ${url}]",
      invalidParams: "zapytanie zawiera jeden lub więcej nieobsługiwanych parametrów",
      updateError: "podczas aktualizowania warstwy wystąpił błąd",
      
      createUserSeconds: "Utworzony przez ${userId} kilka sekund temu",
      createUserMinute: "Utworzony przez ${userId} minutę temu",
      editUserSeconds: "Zmodyfikowany przez ${userId} kilka sekund temu",
      editUserMinute: "Zmodyfikowany przez ${userId} minutę temu",
      createSeconds: "Utworzony kilka sekund temu",
      createMinute: "Utworzony minutę temu",
      editSeconds: "Zmodyfikowany kilka sekund temu",
      editMinute: "Zmodyfikowany minutę temu",
      
      createUserMinutes: "Utworzony przez ${userId} ${minutes} minut temu",
      createUserHour: "Utworzony przez ${userId} godzinę temu",
      createUserHours: "Utworzony przez ${userId} ${hours} godzin temu",
      createUserWeekDay: "Utworzony przez ${userId} w dniu ${weekDay} o ${formattedTime}",
      createUserFull: "Utworzony przez ${userId} w dniu ${formattedDate} o ${formattedTime}",
      
      editUserMinutes: "Edytowany przez ${userId} ${minutes} minut temu",
      editUserHour: "Edytowany przez ${userId} godzinę temu",
      editUserHours: "Edytowany przez ${userId} ${hours} godzin temu",
      editUserWeekDay: "Edytowany przez ${userId} w dniu ${weekDay} o ${formattedTime}",
      editUserFull: "Edytowany przez ${userId} w dniu ${formattedDate} o ${formattedTime}",
      
      createUser: "Utworzony przez ${userId}",
      editUser: "Edytowany przez ${userId}",
      
      createMinutes: "Utworzony ${minutes} minut temu",
      createHour: "Utworzony godzinę temu",
      createHours: "Utworzony ${hours} godzin temu",
      createWeekDay: "Utworzony w dniu ${weekDay} o ${formattedTime}",
      createFull: "Utworzony w dniu ${formattedDate} o ${formattedTime}",
      
      editMinutes: "Edytowany ${minutes} minut temu",
      editHour: "Edytowany godzinę temu",
      editHours: "Edytowany ${hours} godzin temu",
      editWeekDay: "Edytowany w dniu ${weekDay} o ${formattedTime}",
      editFull: "Edytowany w dniu ${formattedDate} o ${formattedTime}"
    }
  },

  tasks: {
    gp: {
      gpDataTypeNotHandled:"Typ danych GP nie jest obsługiwany."
    },
        
    na: {
      route: {
        routeNameNotSpecified: "\'RouteName\'  nie jest określona dla co najmniej 1 przystanku w przystankach  FeatureSet."
      }
    },
    
    query: {
      invalid: "Nie można wykonać zapytania. Sprawdź parametry."
    }
  },

  toolbars: {
    draw: {
      convertAntiClockwisePolygon: "Poligony rysowane w kierunku przeciwnym do ruchu wskazówek zegara będą odwracane zgodnie z ruchem wskazówek zegara.",
      addPoint: "Kliknij, aby dodać punkt",
      addShape: "Kliknij, aby dodać kształt",
      addMultipoint: "Kliknij, aby zacząć dodawać punkty",
      freehand: "Naciśnij, aby zacząć i zwolnij, aby zakończyć",
      start: "Kliknij, aby zacząć rysowanie",
      resume: "Kliknij, aby kontynuować rysowanie",
      complete: "Kliknij dwukrotnie, aby zakończyć",
      finish: "Kliknij dwukrotnie, aby zakończyć",
      invalidType: "Nieobsługiwany typ geometrii"
    },
    edit: {
      invalidType: "Nie można aktywować narzędzia. Sprawdź, czy narzędzie jest odpowiednie dla danego typu geometrii.",
      deleteLabel: "Usuń"
    }
  },
  
  virtualearth: {
    // minMaxTokenDuration:"Token duration must be greater than 15 minutes and lesser than 480 minutes (8 hours).",
    
    vetiledlayer: {
      //tokensNotSpecified:"Either clientToken & serverToken must be provided or tokenUrl must be specified."
      bingMapsKeyNotSpecified: "BingMapsKey musi zostać dostarczony."
    },
    
    vegeocode: {
      //tokensNotSpecified:"Either serverToken must be provided or tokenUrl must be specified.",
      bingMapsKeyNotSpecified: "BingMapsKey musi zostać dostarczony.",
      requestQueued: "Token serwera nie został pobrany. Żądanie zostanie zrealizowane po pobraniu tokena."
    }
  },
  widgets: {
    attributeInspector: {
      NLS_first: "Pierwszy",
      NLS_previous: "Poprzedni",
      NLS_next: "Następny",
      NLS_last: "Ostatni",
      NLS_deleteFeature: "Usuń",
      NLS_title: "Edytuj atrybuty",
      NLS_errorInvalid: "Niepoprawny",
      NLS_validationInt: "Wartość musi być całkowita.",
      NLS_validationFlt: "Wartość musi być zmiennoprzecinkowa.",
      NLS_of: "z",
      NLS_noFeaturesSelected: "Brak wybranych obiektów"
    },
    overviewMap: {
      NLS_drag: "Przeciągnij, aby zmienić zasięg mapy",
      NLS_show: "Pokaż przegląd mapy",
      NLS_hide: "Ukryj przegląd mapy",
      NLS_maximize: "Maksymalizuj",
      NLS_restore: "Przywróć",
      NLS_noMap: "\'map\' nie znaleziona w parametrach wejściowych",
      NLS_noLayer: "główna mapa nie posiada warstwy mapy bazowej",
      NLS_invalidSR: "odniesienie przestrzenne danej warstwy nie jest zgodne z główną mapą",
      NLS_invalidType: "nieobsługiwany typ warstwy.  Poprawnymi typami są \'TiledMapServiceLayer\' i \'DynamicMapServiceLayer\'"
    },
    timeSlider: {
      NLS_first: "Pierwszy",
      NLS_previous: "Poprzedni",
      NLS_next: "Następny",
      NLS_play: "Odtwarzanie/Pauza",
      NLS_invalidTimeExtent: "TimeExtent nie określony lub w niepoprawnym formacie."
    },
    attachmentEditor: {
      NLS_attachments: "Załączniki:",
      NLS_add: "Dodaj",
      NLS_none: "Brak"
    },
    editor: {
      tools: {
        NLS_attributesLbl: "Atrybuty",
        NLS_cutLbl: "Wytnij",
        NLS_deleteLbl: "Usuń",
        NLS_extentLbl: "Zasięg",
        NLS_freehandPolygonLbl: "Dowolny poligon",
        NLS_freehandPolylineLbl: "Dowolna polilinia",
        NLS_pointLbl: "Punkt",
        NLS_polygonLbl: "Poligon",
        NLS_polylineLbl: "Polilinia",
        NLS_reshapeLbl: "Przekształć",
        NLS_selectionNewLbl: "Nowa selekcja",
        NLS_selectionAddLbl: "Dodaj do selekcji",
        NLS_selectionClearLbl: "Wyczyść selekcję",
        NLS_selectionRemoveLbl: "Usuń z selekcji",
        NLS_selectionUnionLbl: "Sumuj",
        NLS_autoCompleteLbl: "Auto uzupełnienie",
        NLS_unionLbl: "Sumuj",
        NLS_rectangleLbl: "Prostokąt",
        NLS_circleLbl: "Koło",
        NLS_ellipseLbl: "Elipsa",
        NLS_triangleLbl: "Trójkąt",
        NLS_arrowLbl: "Strzałka",
        NLS_arrowLeftLbl: "Strzałka w lewo",
        NLS_arrowUpLbl: "Strzałka w górę",
        NLS_arrowDownLbl: "Strzałka w dół",
        NLS_arrowRightLbl: "Strzałka w prawo",
        NLS_undoLbl: "Cofnij",
        NLS_redoLbl: "Ponów"
      }
    },
    legend: {
      NLS_creatingLegend: "Tworzenie legendy",
      NLS_noLegend: "Brak legendy"
    },
    popup: {
      NLS_moreInfo: "Więcej informacji",
      NLS_searching: "Wyszukiwanie",
      NLS_prevFeature: "Poprzedni obiekt",
      NLS_nextFeature: "Następny obiekt",
      NLS_close: "Zamknij",
      NLS_prevMedia: "Poprzednie media",
      NLS_nextMedia: "Następne media",
      NLS_noInfo: "Brak dostępnych informacji",
      NLS_noAttach: "Brak znalezionych załączników",
      NLS_maximize: "Maksymalizuj",
      NLS_restore: "Przywróć",
      NLS_zoomTo: "Powiększ do",
      NLS_pagingInfo: "(${index} z ${total})",
      NLS_attach: "Załączniki"
    },
    measurement: {
      NLS_distance: "Odległość",
      NLS_area: "Obszar",
      NLS_location: "Lokalizacja",
      NLS_resultLabel: "Wynik pomiaru",
      NLS_length_miles: "Mile",
      NLS_length_kilometers: "Kilometry",
      NLS_length_feet: "Stopy",
      NLS_length_meters: "Metry",
      NLS_length_yards: "Jardy",
      NLS_area_acres: "Akry",
      NLS_area_sq_miles: "Mile kw.",
      NLS_area_sq_kilometers: "Kilometry kw.",
      NLS_area_hectares: "Hektary",
      NLS_area_sq_yards: "Jardy kw.",
      NLS_area_sq_feet: "Stopy kw.",
      NLS_area_sq_meters: "Metry kw.",
      NLS_deg_min_sec: "DMS",
      NLS_decimal_degrees: "Stopnie",
      NLS_longitude: "Długość",
      NLS_latitude: "Szerokość"
    },
    bookmarks: {
      NLS_add_bookmark: "Dodaj zakładkę",
      NLS_new_bookmark: "Bez tytułu",
      NLS_bookmark_edit: "Edytuj",
      NLS_bookmark_remove: "Usuń"
    },
    print: {
      NLS_print: "Drukuj",
      NLS_printing: "Drukowanie",
      NLS_printout: "Wydruk"
    },
    templatePicker: {
      creationDisabled: "Tworzenie obiektu jest wyłączone dla wszystkich warstw.",
      loading: "Wczytywanie..."
    }
  },
  arcgis: {
    utils: {
      baseLayerError: "Nie można wczytać warstwy mapy bazowej",
      geometryServiceError: "Dostarczenie usługi geometrii w celu otwarcia Mapy Internetowej."
    }
  },
  
  identity: {
    lblItem: "element",
    title: "Zaloguj się",
    info: "Zaloguj się, aby uzyskać dostęp do ${server} ${resource}",
    lblUser: "Nazwa użytkownika:",
    lblPwd: "Hasło:",
    lblOk: "OK",
    lblSigning: "Logowanie...",
    lblCancel: "Anuluj",
    errorMsg: "Nieprawidłowa nazwa użytkownika/hasło. Spróbuj jeszcze raz.",
    invalidUser: "Wprowadzone hasło lub nazwa użytkownika są nieprawidłowe.",
    forbidden: "Nazwa użytkownika i hasło są prawidłowe, jednak nie masz dostępu do tego zasobu.",
    noAuthService: "Nie można uzyskać dostępu do usługi uwierzytelniania."
  }
})
);
},
'dojo/cldr/nls/pl/gregorian':function(){
define(
//begin v1.x content
{
	"months-format-narrow": [
		"s",
		"l",
		"m",
		"k",
		"m",
		"c",
		"l",
		"s",
		"w",
		"p",
		"l",
		"g"
	],
	"field-weekday": "Dzień tygodnia",
	"dateFormatItem-yQQQ": "y QQQ",
	"dateFormatItem-yMEd": "EEE, d.MM.yyyy",
	"dateFormatItem-MMMEd": "E, d MMM",
	"eraNarrow": [
		"p.n.e.",
		"n.e."
	],
	"dayPeriods-format-wide-earlyMorning": "nad ranem",
	"dayPeriods-format-wide-morning": "rano",
	"dateFormat-long": "d MMMM y",
	"months-format-wide": [
		"stycznia",
		"lutego",
		"marca",
		"kwietnia",
		"maja",
		"czerwca",
		"lipca",
		"sierpnia",
		"września",
		"października",
		"listopada",
		"grudnia"
	],
	"dayPeriods-format-wide-evening": "wieczorem",
	"dayPeriods-format-wide-pm": "PM",
	"dateFormat-full": "EEEE, d MMMM y",
	"dateFormatItem-Md": "d.MM",
	"dayPeriods-format-wide-noon": "w południe",
	"field-era": "Era",
	"dateFormatItem-yM": "MM.yyyy",
	"months-standAlone-wide": [
		"styczeń",
		"luty",
		"marzec",
		"kwiecień",
		"maj",
		"czerwiec",
		"lipiec",
		"sierpień",
		"wrzesień",
		"październik",
		"listopad",
		"grudzień"
	],
	"timeFormat-short": "HH:mm",
	"quarters-format-wide": [
		"I kwartał",
		"II kwartał",
		"III kwartał",
		"IV kwartał"
	],
	"timeFormat-long": "HH:mm:ss z",
	"field-year": "Rok",
	"dateFormatItem-yQ": "yyyy Q",
	"dateFormatItem-yyyyMMMM": "LLLL y",
	"field-hour": "Godzina",
	"dateFormatItem-MMdd": "d.MM",
	"months-format-abbr": [
		"sty",
		"lut",
		"mar",
		"kwi",
		"maj",
		"cze",
		"lip",
		"sie",
		"wrz",
		"paź",
		"lis",
		"gru"
	],
	"dateFormatItem-yyQ": "Q yy",
	"timeFormat-full": "HH:mm:ss zzzz",
	"field-day-relative+0": "Dzisiaj",
	"field-day-relative+1": "Jutro",
	"field-day-relative+2": "Pojutrze",
	"field-day-relative+3": "Za trzy dni",
	"months-standAlone-abbr": [
		"sty",
		"lut",
		"mar",
		"kwi",
		"maj",
		"cze",
		"lip",
		"sie",
		"wrz",
		"paź",
		"lis",
		"gru"
	],
	"quarters-format-abbr": [
		"K1",
		"K2",
		"K3",
		"K4"
	],
	"quarters-standAlone-wide": [
		"I kwartał",
		"II kwartał",
		"III kwartał",
		"IV kwartał"
	],
	"dateFormatItem-M": "L",
	"days-standAlone-wide": [
		"niedziela",
		"poniedziałek",
		"wtorek",
		"środa",
		"czwartek",
		"piątek",
		"sobota"
	],
	"dateFormatItem-MMMMd": "d MMMM",
	"dateFormatItem-yyMMM": "MMM yy",
	"timeFormat-medium": "HH:mm:ss",
	"dateFormatItem-Hm": "HH:mm",
	"quarters-standAlone-abbr": [
		"1 kw.",
		"2 kw.",
		"3 kw.",
		"4 kw."
	],
	"eraAbbr": [
		"p.n.e.",
		"n.e."
	],
	"field-minute": "Minuta",
	"field-dayperiod": "Dayperiod",
	"days-standAlone-abbr": [
		"niedz.",
		"pon.",
		"wt.",
		"śr.",
		"czw.",
		"pt.",
		"sob."
	],
	"dayPeriods-format-wide-night": "w nocy",
	"dateFormatItem-d": "d",
	"dateFormatItem-ms": "mm:ss",
	"field-day-relative+-1": "Wczoraj",
	"dateFormatItem-h": "hh a",
	"field-day-relative+-2": "Przedwczoraj",
	"field-day-relative+-3": "Trzy dni temu",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MEd": "E, d.MM",
	"dayPeriods-format-wide-lateMorning": "przed południem",
	"dateFormatItem-yMMMM": "LLLL y",
	"field-day": "Dzień",
	"days-format-wide": [
		"niedziela",
		"poniedziałek",
		"wtorek",
		"środa",
		"czwartek",
		"piątek",
		"sobota"
	],
	"field-zone": "Strefa",
	"dateFormatItem-yyyyMM": "MM.yyyy",
	"dateFormatItem-y": "y",
	"months-standAlone-narrow": [
		"s",
		"l",
		"m",
		"k",
		"m",
		"c",
		"l",
		"s",
		"w",
		"p",
		"l",
		"g"
	],
	"dateFormatItem-hm": "hh:mm a",
	"days-format-abbr": [
		"niedz.",
		"pon.",
		"wt.",
		"śr.",
		"czw.",
		"pt.",
		"sob."
	],
	"eraNames": [
		"p.n.e.",
		"n.e."
	],
	"days-format-narrow": [
		"N",
		"P",
		"W",
		"Ś",
		"C",
		"P",
		"S"
	],
	"field-month": "Miesiąc",
	"days-standAlone-narrow": [
		"N",
		"P",
		"W",
		"Ś",
		"C",
		"P",
		"S"
	],
	"dateFormatItem-MMM": "LLL",
	"dayPeriods-format-wide-am": "AM",
	"dateFormat-short": "dd.MM.yyyy",
	"dayPeriods-format-wide-afternoon": "po południu",
	"field-second": "Sekunda",
	"dateFormatItem-yMMMEd": "EEE, d MMM y",
	"dateFormatItem-Ed": "E, d",
	"field-week": "Tydzień",
	"dateFormat-medium": "d MMM y",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-hms": "hh:mm:ss a"
}
//end v1.x content
);
},
'dojo/cldr/nls/pl/number':function(){
define(
//begin v1.x content
{
	"group": " ",
	"percentSign": "%",
	"exponential": "E",
	"scientificFormat": "#E0",
	"percentFormat": "#,##0%",
	"list": ";",
	"infinity": "∞",
	"patternDigit": "#",
	"minusSign": "-",
	"decimal": ",",
	"nan": "NaN",
	"nativeZeroDigit": "0",
	"perMille": "‰",
	"decimalFormat": "#,##0.###",
	"currencyFormat": "#,##0.00 ¤",
	"plusSign": "+"
}
//end v1.x content
);
},
'*noref':1}});
define("esri/nls/jsapi_pl", [], 1);
