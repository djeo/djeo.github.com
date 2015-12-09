require({cache:{
'esri/nls/ar/jsapi':function(){
﻿define(
({
  io: {
    proxyNotSet:"لم يتم تعيين esri.config.defaults.io.proxyUrl"
  },
  
  map: {
    deprecateReorderLayerString: "تم إهمال Map.reorderLayer (/*السلسلة*/الرقم التعريفي، /*الرقم*/الفهرس). استخدم Map.reorderLayer(/*الطبقة*/الطبقة، /*الرقم*/الفهرس).",
    deprecateShiftDblClickZoom: "تم إهمال Map.(تمكين/تعطيل)ShiftDoubleClickZoom. لن يتم دعم سلوك التكبير باستخدام Shift مع النقر مرتين."
  },

  geometry: {
    deprecateToScreenPoint:"تم إهمال esri.geometry.toScreenPoint. استخدم esri.geometry.toScreenGeometry.",
    deprecateToMapPoint:"تم إهمال esri.geometry.toMapPoint. استخدم esri.geometry.toMapGeometry."
  },

  layers: {
    tiled: {
      tileError:"تعذر تحميل العنوان"
    },
    
    dynamic: {
      imageError:"تعذر تحميل الصورة"
    },
    
    graphics: {
      drawingError:"تعذر رسم الرسم "
    },

    agstiled: {
      deprecateRoundrobin:"خيار الباني 'roundrobin' أصبح قديمًا، استخدم الخيار  'tileServers'."
    },

    imageParameters: {
      deprecateBBox:"الخاصية 'bbox' أصبحت قديمة، استخدم الخاصية 'extent'."
    },
    
    FeatureLayer: {
      noOIDField: "لم يتم إعداد objectIdField على [url: ${url}]",
      fieldNotFound: "تعذر العثور على '${field}' في معلومات 'fields' للطبقة [url: ${url}]",
      noGeometryField: "تعذر العثور على حقل من النوع 'esriFieldTypeGeometry' في معلومات 'fields' للطبقة. إذا كنت تستخدم طبقة خدمة المخطط، فلن تشتمل المعالم على رسم هندسي [url: ${url}]",
      invalidParams: "الاستعلام يشتمل على واحد أو أكثر من المعاملات غير المدعومة",
      updateError: "حدث خطأ أثناء عملية تحديث الطبقة",
      
      createUserSeconds: "تم الإنشاء بواسطة ${userId} منذ ثوانٍ",
      createUserMinute: "تم الإنشاء بواسطة ${userId} منذ دقيقة",
      editUserSeconds: "تم التحرير بواسطة ${userId} منذ ثوانٍ",
      editUserMinute: "تم التحرير بواسطة ${userId} منذ دقيقة",
      createSeconds: "تم الإنشاء منذ ثوانٍ",
      createMinute: "تم الإنشاء منذ دقيقة",
      editSeconds: "تم التحرير منذ ثوانٍ",
      editMinute: "تم التحرير منذ دقيقة",
      
      createUserMinutes: "تم الإنشاء بواسطة ${userId} منذ ${minutes} دقيقة",
      createUserHour: "تم الإنشاء بواسطة ${userId} منذ ساعة",
      createUserHours: "تم الإنشاء بواسطة ${userId} منذ ${hours} ساعة",
      createUserWeekDay: "تم الإنشاء بواسطة ${userId} بتاريخ ${weekDay} في ${formattedTime}",
      createUserFull: "تم الإنشاء بواسطة ${userId} بتاريخ ${formattedDate} في ${formattedTime}",
      
      editUserMinutes: "تم التحرير بواسطة ${userId} منذ ${minutes} دقيقة",
      editUserHour: "تم التحرير بواسطة ${userId} منذ ساعة",
      editUserHours: "تم التحرير بواسطة ${userId} منذ  ${hours} ساعة",
      editUserWeekDay: "تم التحرير بواسطة ${userId} بتاريخ ${weekDay} في ${formattedTime}",
      editUserFull: "تم التحرير بواسطة ${userId} بتاريخ ${formattedDate} في ${formattedTime}",
      
      createUser: "تم الإنشاء بواسطة ${userId}",
      editUser: "تم التحرير بواسطة ${userId}",
      
      createMinutes: "تم الإنشاء منذ ${minutes} دقيقة",
      createHour: "تم الإنشاء منذ ساعة",
      createHours: "تم الإنشاء منذ ${hours} ساعة",
      createWeekDay: "تم الإنشاء بتاريخ ${weekDay} في ${formattedTime}",
      createFull: "تم الإنشاء بتاريخ ${formattedDate} في ${formattedTime}",
      
      editMinutes: "تم التحرير منذ ${minutes} دقيقة",
      editHour: "تم التحرير منذ ساعة",
      editHours: "تم التحرير منذ ${hours} ساعة",
      editWeekDay: "تم التحرير بتاريخ ${weekDay} في ${formattedTime}",
      editFull: "تم التحرير بتاريخ ${formattedDate} في ${formattedTime}"
    }
  },

  tasks: {
    gp: {
      gpDataTypeNotHandled:"لم تتم معالجة نوع بيانات GP."
    },
        
    na: {
      route: {
        routeNameNotSpecified: "لم يتم تحديد 'RouteName' لنقطة توقف واحدة على الأقل في FeatureSet gkrh لنقاط التوقف."
      }
    },
    
    query: {
      invalid: "تعذر تنفيذ الاستعلام. رجاء التحقق من المعاملات."
    }
  },

  toolbars: {
    draw: {
      convertAntiClockwisePolygon: "سيتم عكس اتجاه المضلعات التي تم رسمها عكس اتجاه عقارب الساعة لتصبح في اتجاه عقارب الساعة.",
      addPoint: "انقر لإضافة نقطة.",
      addShape: "انقر لإضافة شكل",
      addMultipoint: "انقر لبدء إضافة نقاط",
      freehand: "اضغط لأسفل للبدء والتقدم للإنهاء",
      start: "انقر لبدء الرسم",
      resume: "انقر للاستمرار في الرسم",
      complete: "انقر نقرًا مزدوجًا للإتمام",
      finish: "انقر نقرًا مزدوجًا للإنهاء",
      invalidType: "نوع الرسم الهندسي غير مدعوم"
    },
    edit: {
      invalidType: "تعذر تنشيط الأداة. تحقق مما إذا كانت الأداة صالحة للعمل مع نوع الرسم الهندسي المحدد أم لا.",
      deleteLabel: "حذف"
    }
  },
  
  virtualearth: {
    // minMaxTokenDuration:"Token duration must be greater than 15 minutes and lesser than 480 minutes (8 hours).",
    
    vetiledlayer: {
      //tokensNotSpecified:"Either clientToken & serverToken must be provided or tokenUrl must be specified."
      bingMapsKeyNotSpecified: "يجب إدخال قيمة BingMapsKey."
    },
    
    vegeocode: {
      //tokensNotSpecified:"Either serverToken must be provided or tokenUrl must be specified.",
      bingMapsKeyNotSpecified: "يجب إدخال قيمة BingMapsKey.",
      requestQueued: "لم تتم استعادة رمز الخادم. يتم تنفيذ طلب الاستعلام بعد استعادة رمز الخادم."
    }
  },
  widgets: {
    attributeInspector: {
      NLS_first: "أولاً",
      NLS_previous: "السابق",
      NLS_next: "التالي",
      NLS_last: "الأخير",
      NLS_deleteFeature: "حذف",
      NLS_title: "تحرير البيانات الجدولية",
      NLS_errorInvalid: "غير صالح",
      NLS_validationInt: "يجب أن تكون القيمة رقمًا صحيحًا.",
      NLS_validationFlt: "يجب أن تكون القيمة عائمة.",
      NLS_of: "من",
      NLS_noFeaturesSelected: "لم اختيار معالم"
    },
    overviewMap: {
      NLS_drag: "اسحب لتغيير امتداد الخريطة",
      NLS_show: "إظهار نظرة عامة على الخريطة",
      NLS_hide: "إخفاء نظرة عامة على الخريطة",
      NLS_maximize: "تكبير",
      NLS_restore: "استعادة",
      NLS_noMap: "لم يتم العثور على 'map' في معاملات المدخلات",
      NLS_noLayer: "الخريطة الرئيسية لا تتضمن طبقة أساس",
      NLS_invalidSR: "الإسناد المكاني للطبقة المعطاة غير متوافق مع الخريطة الرئيسية",
      NLS_invalidType: "نوع الطبقة غير مدعوم. الأنواع الصالحة هي 'TiledMapServiceLayer' و 'DynamicMapServiceLayer'"
    },
    timeSlider: {
      NLS_first: "أولاً",
      NLS_previous: "السابق",
      NLS_next: "التالي",
      NLS_play: "تشغيل/إيقاف مؤقت",
      NLS_invalidTimeExtent: "لم يتم تحديد TimeExtent، أو أن التنسيق غير صحيح."
    },
    attachmentEditor: {
      NLS_attachments: "المرفقات:",
      NLS_add: "إضافة",
      NLS_none: "لا شيء"
    },
    editor: {
      tools: {
        NLS_attributesLbl: "السمات",
        NLS_cutLbl: "قص",
        NLS_deleteLbl: "حذف",
        NLS_extentLbl: "الامتداد",
        NLS_freehandPolygonLbl: "مضلع بواسطة Freehand",
        NLS_freehandPolylineLbl: "شكل متعدد الخطوط بواسطة Freehand",
        NLS_pointLbl: "نقطة",
        NLS_polygonLbl: "مضلع",
        NLS_polylineLbl: "شكل متعدد الخطوط",
        NLS_reshapeLbl: "إعادة تشكيل",
        NLS_selectionNewLbl: "اختيار جديد",
        NLS_selectionAddLbl: "إضافة للاختيارات",
        NLS_selectionClearLbl: "مسح الاختيارات",
        NLS_selectionRemoveLbl: "طرح من الاختيارات",
        NLS_selectionUnionLbl: "اتحاد",
        NLS_autoCompleteLbl: "إتمام تلقائي",
        NLS_unionLbl: "اتحاد",
        NLS_rectangleLbl: "مستطيل",
        NLS_circleLbl: "دائرة",
        NLS_ellipseLbl: "قطع ناقص",
        NLS_triangleLbl: "مثلث",
        NLS_arrowLbl: "سهم",
        NLS_arrowLeftLbl: "سهم إلى اليسار",
        NLS_arrowUpLbl: "سهم إلى الأعلى",
        NLS_arrowDownLbl: "سهم إلى الأسفل",
        NLS_arrowRightLbl: "سهم إلى اليمين",
        NLS_undoLbl: "تراجع",
        NLS_redoLbl: "إعادة"
      }
    },
    legend: {
      NLS_creatingLegend: "إنشاء وسيلة إيضاح",
      NLS_noLegend: "بدون وسيلة إيضاح"
    },
    popup: {
      NLS_moreInfo: "مزيد من المعلومات",
      NLS_searching: "جارِ البحث",
      NLS_prevFeature: "المعلم السابق",
      NLS_nextFeature: "المعلم التالي",
      NLS_close: "إغلاق",
      NLS_prevMedia: "الوسائط السابقة",
      NLS_nextMedia: "الوسائط التالية",
      NLS_noInfo: "لا توجد معلومات متوفرة.",
      NLS_noAttach: "لا توجد مرفقات.",
      NLS_maximize: "تكبير",
      NLS_restore: "استعادة",
      NLS_zoomTo: "تقريب إلى",
      NLS_pagingInfo: "(${index} من ${total})",
      NLS_attach: "المرفقات"
    },
    measurement: {
      NLS_distance: "المسافة",
      NLS_area: "المنطقة",
      NLS_location: "الموقع",
      NLS_resultLabel: "نتيجة القياس",
      NLS_length_miles: "أميال",
      NLS_length_kilometers: "كيلومترات",
      NLS_length_feet: "قدم",
      NLS_length_meters: "أمتار",
      NLS_length_yards: "ياردة",
      NLS_area_acres: "فدان",
      NLS_area_sq_miles: "أميال مربعة",
      NLS_area_sq_kilometers: "كيلومترات مربعة",
      NLS_area_hectares: "هكتار",
      NLS_area_sq_yards: "ياردات مربعة",
      NLS_area_sq_feet: "قدم مربع",
      NLS_area_sq_meters: "أمتار مربعة",
      NLS_deg_min_sec: "درجة دقيقة ثانية",
      NLS_decimal_degrees: "درجات",
      NLS_longitude: "خط الطول",
      NLS_latitude: "خط العرض"
    },
    bookmarks: {
      NLS_add_bookmark: "إضافة إشارة مرجعية",
      NLS_new_bookmark: "بلا عنوان",
      NLS_bookmark_edit: "تحرير",
      NLS_bookmark_remove: "إزالة"
    },
    print: {
      NLS_print: "طباعة",
      NLS_printing: "طباعة",
      NLS_printout: "نسخة مطبوعة"
    },
    templatePicker: {
      creationDisabled: "تم تعطيل إنشاء المعالم لجميع الطبقات.",
      loading: "جارِ التحميل..."
    }
  },
  arcgis: {
    utils: {
      baseLayerError: "يتعذر تحميل طبقة الخريطة الأساس",
      geometryServiceError: "يجب توفير خدمة الرسم الهندسي لفتح خدمة خريطة ويب (Web Map)."
    }
  },
  
  identity: {
    lblItem: "عنصر",
    title: "تسجيل الدخول",
    info: "الرجاء تسجيل الدخول للوصول إلى العنصر على ${server} ${resource}",
    lblUser: "اسم المستخدم:",
    lblPwd: "كلمة المرور:",
    lblOk: "موافق",
    lblSigning: "جار تسجيل الدخول",
    lblCancel: "إلغاء",
    errorMsg: "اسم المستخدم/كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى",
    invalidUser: "اسم المستخدم أو كلمة المرور اللذان أدخلتهما غير صحيح.",
    forbidden: "اسم المستخدم وكلمة المرور صحيحين، ولكن لا يمكنك الوصول  إلى هذا المورد.",
    noAuthService: "يتعذر الوصول إلى خدمة المصادقة."
  }
})
);
},
'dojo/cldr/nls/ar/gregorian':function(){
define(
//begin v1.x content
{
	"dateFormatItem-yM": "M‏/yyyy",
	"field-dayperiod": "ص/م",
	"dateFormatItem-yQ": "yyyy Q",
	"dayPeriods-format-wide-pm": "م",
	"field-minute": "الدقائق",
	"eraNames": [
		"قبل الميلاد",
		"ميلادي"
	],
	"dateFormatItem-MMMEd": "E d MMM",
	"field-day-relative+-1": "أمس",
	"field-weekday": "اليوم",
	"dateFormatItem-yQQQ": "y QQQ",
	"dateFormatItem-MMdd": "dd‏/MM",
	"days-standAlone-wide": [
		"الأحد",
		"الإثنين",
		"الثلاثاء",
		"الأربعاء",
		"الخميس",
		"الجمعة",
		"السبت"
	],
	"dateFormatItem-MMM": "LLL",
	"months-standAlone-narrow": [
		"ي",
		"ف",
		"م",
		"أ",
		"و",
		"ن",
		"ل",
		"غ",
		"س",
		"ك",
		"ب",
		"د"
	],
	"field-era": "العصر",
	"field-hour": "الساعات",
	"dayPeriods-format-wide-am": "ص",
	"quarters-standAlone-abbr": [
		"الربع الأول",
		"الربع الثاني",
		"الربع الثالث",
		"الربع الرابع"
	],
	"dateFormatItem-y": "y",
	"timeFormat-full": "zzzz h:mm:ss a",
	"months-standAlone-abbr": [
		"يناير",
		"فبراير",
		"مارس",
		"أبريل",
		"مايو",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	],
	"dateFormatItem-Ed": "E، d",
	"dateFormatItem-yMMM": "MMM y",
	"field-day-relative+0": "اليوم",
	"field-day-relative+1": "غدًا",
	"days-standAlone-narrow": [
		"ح",
		"ن",
		"ث",
		"ر",
		"خ",
		"ج",
		"س"
	],
	"eraAbbr": [
		"ق.م",
		"م"
	],
	"field-day-relative+2": "بعد الغد",
	"dateFormatItem-yyyyMM": "MM‏/yyyy",
	"dateFormatItem-yyyyMMMM": "MMMM، y",
	"dateFormat-long": "d MMMM، y",
	"timeFormat-medium": "h:mm:ss a",
	"field-zone": "التوقيت",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormat-medium": "dd‏/MM‏/yyyy",
	"quarters-standAlone-wide": [
		"الربع الأول",
		"الربع الثاني",
		"الربع الثالث",
		"الربع الرابع"
	],
	"dateFormatItem-yMMMM": "MMMM y",
	"dateFormatItem-ms": "mm:ss",
	"field-year": "السنة",
	"quarters-standAlone-narrow": [
		"١",
		"٢",
		"٣",
		"٤"
	],
	"field-week": "الأسبوع",
	"months-standAlone-wide": [
		"يناير",
		"فبراير",
		"مارس",
		"أبريل",
		"مايو",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	],
	"dateFormatItem-MMMMEd": "E d MMMM",
	"dateFormatItem-MMMd": "d MMM",
	"quarters-format-narrow": [
		"١",
		"٢",
		"٣",
		"٤"
	],
	"dateFormatItem-yyQ": "Q yy",
	"timeFormat-long": "z h:mm:ss a",
	"months-format-abbr": [
		"يناير",
		"فبراير",
		"مارس",
		"أبريل",
		"مايو",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	],
	"timeFormat-short": "h:mm a",
	"field-month": "الشهر",
	"dateFormatItem-MMMMd": "d MMMM",
	"quarters-format-abbr": [
		"الربع الأول",
		"الربع الثاني",
		"الربع الثالث",
		"الربع الرابع"
	],
	"days-format-abbr": [
		"أحد",
		"إثنين",
		"ثلاثاء",
		"أربعاء",
		"خميس",
		"جمعة",
		"سبت"
	],
	"dateFormatItem-M": "L",
	"days-format-narrow": [
		"ح",
		"ن",
		"ث",
		"ر",
		"خ",
		"ج",
		"س"
	],
	"field-second": "الثواني",
	"field-day": "يوم",
	"months-format-narrow": [
		"ي",
		"ف",
		"م",
		"أ",
		"و",
		"ن",
		"ل",
		"غ",
		"س",
		"ك",
		"ب",
		"د"
	],
	"days-standAlone-abbr": [
		"أحد",
		"إثنين",
		"ثلاثاء",
		"أربعاء",
		"خميس",
		"جمعة",
		"سبت"
	],
	"dateFormat-short": "d‏/M‏/yyyy",
	"dateFormatItem-yMMMEd": "EEE، d MMMM y",
	"dateFormat-full": "EEEE، d MMMM، y",
	"dateFormatItem-Md": "d/‏M",
	"dateFormatItem-yMEd": "EEE، d/‏M/‏yyyy",
	"months-format-wide": [
		"يناير",
		"فبراير",
		"مارس",
		"أبريل",
		"مايو",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	],
	"dateFormatItem-d": "d",
	"quarters-format-wide": [
		"الربع الأول",
		"الربع الثاني",
		"الربع الثالث",
		"الربع الرابع"
	],
	"days-format-wide": [
		"الأحد",
		"الإثنين",
		"الثلاثاء",
		"الأربعاء",
		"الخميس",
		"الجمعة",
		"السبت"
	],
	"eraNarrow": [
		"ق.م",
		"م"
	]
}
//end v1.x content
);
},
'dojo/cldr/nls/ar/number':function(){
define(
//begin v1.x content
{
	"group": "٬",
	"percentSign": "٪",
	"exponential": "اس",
	"list": "؛",
	"infinity": "∞",
	"minusSign": "-",
	"decimal": "٫",
	"nan": "ليس رقم",
	"perMille": "؉",
	"decimalFormat": "#,##0.###;#,##0.###-",
	"currencyFormat": "¤ #,##0.00;¤ #,##0.00-",
	"plusSign": "+"
}
//end v1.x content
);
},
'*noref':1}});
define("esri/nls/jsapi_ar", [], 1);
