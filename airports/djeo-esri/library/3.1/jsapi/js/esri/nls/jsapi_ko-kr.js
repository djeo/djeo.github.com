require({cache:{
'esri/nls/ko/jsapi':function(){
﻿define(
({
  io: {
    proxyNotSet:"esri.config.defaults.io.proxyUrl이 설정되지 않았습니다."
  },
  
  map: {
    deprecateReorderLayerString: "Map.reorderLayer(/*String*/ id, /*Number*/ index)는 더 이상 사용되지 않습니다. Map.reorderLayer(/*Layer*/ layer, /*Number*/ index)을 사용하세요.",
    deprecateShiftDblClickZoom: "Map.(enable/disable)ShiftDoubleClickZoom은 더 이상 사용되지 않습니다. Shift-Double-Click zoom behavior는 지원되지 않습니다."
  },

  geometry: {
    deprecateToScreenPoint:"esri.geometry.toScreenPoint는 더 이상 사용되지 않습니다. esri.geometry.toScreenGeometry를 사용하세요.",
    deprecateToMapPoint:"esri.geometry.toMapPoint는 더 이상 사용되지 않습니다. esri.geometry.toMapGeometry를 사용하세요."
  },

  layers: {
    tiled: {
      tileError:"타일을 로드할 수 없음"
    },
    
    dynamic: {
      imageError:"이미지를 로드할 수 없음"
    },
    
    graphics: {
      drawingError:"그래픽을 그릴 수 없음 "
    },

    agstiled: {
      deprecateRoundrobin:"생성자 옵션 'roundrobin'이 사용 중단되었습니다. 옵션 'tileServers'를 사용하십시오."
    },

    imageParameters: {
      deprecateBBox:"등록정보 'bbox'가 사용 중단되었습니다. 등록정보 'extent'를 사용하십시오."
    },
    
    FeatureLayer: {
      noOIDField: "objectIdField가 설정되지 않음 [url: ${url}]",
      fieldNotFound: "레이어 '필드' 정보에서 '${field}' 필드를 찾을 수 없음 [url: ${url}]",
      noGeometryField: "레이어 '필드' 정보에서 'esriFieldTypeGeometry' 유형의 필드를 찾을 수 없습니다. 맵 서비스 레이어를 사용한다면 피처는 지오메트리를 갖지 않습니다. [url: ${url}]",
      invalidParams: "쿼리에 한 개 이상의 지원하지 않는 매개변수 포함",
      updateError: "레이어 업데이트하는 동안 오류 발생",
      
      createUserSeconds: "몇 초 전에 ${userId}에 의해 생성됨",
      createUserMinute: "1분 전에 ${userId}에 의해 생성됨",
      editUserSeconds: "몇 초 전에 ${userId}에 의해 편집됨",
      editUserMinute: "1분 전에 ${userId}에 의해 편집됨",
      createSeconds: "몇 초 전에 생성됨",
      createMinute: "1분 전에 생성됨",
      editSeconds: "몇 초 전에 편집됨",
      editMinute: "1분 전에 편집됨",
      
      createUserMinutes: "${userId}에 의해 ${minutes}분 전에 생성됨",
      createUserHour: "${userId}에 의해 1시간 전에 생성됨",
      createUserHours: "${userId}에 의해 ${hours}시간 전에 생성됨",
      createUserWeekDay: "${userId}에 의해 ${weekDay} ${formattedTime}에 생성됨",
      createUserFull: "${userId}에 의해 ${formattedDate} ${formattedTime}에 생성됨",
      
      editUserMinutes: "${userId}에 의해 ${minutes}분 전에 편집됨",
      editUserHour: "${userId}에 의해 1시간 전에 편집됨",
      editUserHours: "${userId}에 의해 ${hours}시간 전에 편집됨",
      editUserWeekDay: "${userId}에 의해 ${weekDay} ${formattedTime}에 편집됨",
      editUserFull: "${userId}에 의해 ${formattedDate} ${formattedTime}에 편집됨",
      
      createUser: "${userId}에 의해 생성됨",
      editUser: "${userId}에 의해 편집됨",
      
      createMinutes: "${minutes}분 전에 생성됨",
      createHour: "1시간 전에 생성됨",
      createHours: "${hours}시간 전에 생성됨",
      createWeekDay: "${weekDay} ${formattedTime}에 생성됨",
      createFull: "${formattedDate} ${formattedTime}에 생성됨",
      
      editMinutes: "${minutes}분 전에 편집됨",
      editHour: "1시간 전에 편집됨",
      editHours: "${hours}시간 전에 편집됨",
      editWeekDay: "${weekDay} ${formattedTime}에 편집됨",
      editFull: "${formattedDate} ${formattedTime}에 편집됨"
    }
  },

  tasks: {
    gp: {
      gpDataTypeNotHandled:"GP 데이터 유형이 처리되지 않았습니다."
    },
        
    na: {
      route: {
        routeNameNotSpecified: "Stops 피처 설정에서 적어도 1개 이상의 경유지에 'RouteName'이 지정되지 않았습니다."
      }
    },
    
    query: {
      invalid: "쿼리를 수행할 수 없습니다. 매개변수를 확인하십시오."
    }
  },

  toolbars: {
    draw: {
      convertAntiClockwisePolygon: "반시계 방향으로 그려진 폴리곤은 시계 방향으로 반전됩니다.",
      addPoint: "포인트를 추가하려면 클릭",
      addShape: "쉐이프를 추가하려면 클릭",
      addMultipoint: "포인트 추가를 시작하려면 클릭",
      freehand: "시작에서 종료까지 가려면 아래 화살표 키",
      start: "그리기를 시작하려면 클릭",
      resume: "그리기를 계속하려면 클릭",
      complete: "완료하려면 더블 클릭",
      finish: "종료하려면 더블 클릭",
      invalidType: "지원하지 않는 지오메트리 유형"
    },
    edit: {
      invalidType: "도구를 활성화할 수 없습니다. 툴이 해당 지오메트리 유형에 유효한지 확인하십시오.",
      deleteLabel: "삭제"
    }
  },
  
  virtualearth: {
    // minMaxTokenDuration:"Token duration must be greater than 15 minutes and lesser than 480 minutes (8 hours).",
    
    vetiledlayer: {
      //tokensNotSpecified:"Either clientToken & serverToken must be provided or tokenUrl must be specified."
      bingMapsKeyNotSpecified: "BingMapsKey가 제공되어야 합니다."
    },
    
    vegeocode: {
      //tokensNotSpecified:"Either serverToken must be provided or tokenUrl must be specified.",
      bingMapsKeyNotSpecified: "BingMapsKey가 제공되어야 합니다.",
      requestQueued: "서버 토큰이 회수되지 않았습니다. 서버 토큰이 회수된 후 쿼리중인 요청이 실행됩니다."
    }
  },
  widgets: {
    attributeInspector: {
      NLS_first: "처음",
      NLS_previous: "이전",
      NLS_next: "다음",
      NLS_last: "마지막",
      NLS_deleteFeature: "삭제",
      NLS_title: "속성 편집",
      NLS_errorInvalid: "유효하지 않음",
      NLS_validationInt: "값은 정수여야 합니다.",
      NLS_validationFlt: "값은 플로트여야 합니다.",
      NLS_of: "의",
      NLS_noFeaturesSelected: "선택된 피처 없음"
    },
    overviewMap: {
      NLS_drag: "맵 범위를 바꾸려면 드래그",
      NLS_show: "맵 미리보기 표시",
      NLS_hide: "맵 미리보기 숨김",
      NLS_maximize: "최대",
      NLS_restore: "복구",
      NLS_noMap: "입력 매개변수에서 '맵'을 찾을 수 없음",
      NLS_noLayer: "주 맵에 베이스 레이어 없음",
      NLS_invalidSR: "해당 레이어의 공간 참조가 주 맵과 일치하지 않음",
      NLS_invalidType: "지원하지 않는 레이어 유형입니다. 유효한 유형은 'TiledMapServiceLayer' 및 'DynamicMapServiceLayer'입니다."
    },
    timeSlider: {
      NLS_first: "처음",
      NLS_previous: "이전",
      NLS_next: "다음",
      NLS_play: "재생/일시정지",
      NLS_invalidTimeExtent: "시간 범위가 지정되지 않았거나 정확하지 않은 형식입니다."
    },
    attachmentEditor: {
      NLS_attachments: "첨부:",
      NLS_add: "추가",
      NLS_none: "없음"
    },
    editor: {
      tools: {
        NLS_attributesLbl: "속성",
        NLS_cutLbl: "잘라내기",
        NLS_deleteLbl: "삭제",
        NLS_extentLbl: "범위",
        NLS_freehandPolygonLbl: "자유곡선 폴리곤",
        NLS_freehandPolylineLbl: "자유곡선 폴리라인",
        NLS_pointLbl: "포인트",
        NLS_polygonLbl: "폴리곤",
        NLS_polylineLbl: "폴리라인",
        NLS_reshapeLbl: "재변형",
        NLS_selectionNewLbl: "새로운 선택",
        NLS_selectionAddLbl: "선택에 추가",
        NLS_selectionClearLbl: "선택 해제",
        NLS_selectionRemoveLbl: "선택에서 빼기",
        NLS_selectionUnionLbl: "유니온",
        NLS_autoCompleteLbl: "자동 완료",
        NLS_unionLbl: "유니온",
        NLS_rectangleLbl: "직사각형",
        NLS_circleLbl: "원",
        NLS_ellipseLbl: "타원",
        NLS_triangleLbl: "삼각형",
        NLS_arrowLbl: "화살표",
        NLS_arrowLeftLbl: "왼쪽 화살표",
        NLS_arrowUpLbl: "위쪽 화살표",
        NLS_arrowDownLbl: "아래쪽 화살표",
        NLS_arrowRightLbl: "오른쪽 화살표",
        NLS_undoLbl: "실행 취소",
        NLS_redoLbl: "다시 실행"
      }
    },
    legend: {
      NLS_creatingLegend: "범례 생성",
      NLS_noLegend: "범례 없음"
    },
    popup: {
      NLS_moreInfo: "추가 정보",
      NLS_searching: "검색중",
      NLS_prevFeature: "이전 피처",
      NLS_nextFeature: "다음 피처",
      NLS_close: "닫기",
      NLS_prevMedia: "이전 미디어",
      NLS_nextMedia: "다음 미디어",
      NLS_noInfo: "사용 가능한 정보 없음",
      NLS_noAttach: "발견된 첨부 없음",
      NLS_maximize: "최대",
      NLS_restore: "복구",
      NLS_zoomTo: "확대",
      NLS_pagingInfo: "${total})의 (${index}",
      NLS_attach: "첨부"
    },
    measurement: {
      NLS_distance: "거리",
      NLS_area: "면적",
      NLS_location: "위치",
      NLS_resultLabel: "측정결과",
      NLS_length_miles: "마일",
      NLS_length_kilometers: "킬로미터",
      NLS_length_feet: "피트",
      NLS_length_meters: "미터",
      NLS_length_yards: "야드",
      NLS_area_acres: "에이커",
      NLS_area_sq_miles: "평방마일",
      NLS_area_sq_kilometers: "평방킬로미터",
      NLS_area_hectares: "헥타르",
      NLS_area_sq_yards: "평방야드",
      NLS_area_sq_feet: "평방피트",
      NLS_area_sq_meters: "평방미터",
      NLS_deg_min_sec: "DMS",
      NLS_decimal_degrees: "도",
      NLS_longitude: "경도",
      NLS_latitude: "위도"
    },
    bookmarks: {
      NLS_add_bookmark: "책갈피 추가",
      NLS_new_bookmark: "제목 없음",
      NLS_bookmark_edit: "편집",
      NLS_bookmark_remove: "제거"
    },
    print: {
      NLS_print: "인쇄",
      NLS_printing: "인쇄 중",
      NLS_printout: "인쇄물"
    },
    templatePicker: {
      creationDisabled: "모든 레이어에서 피처 생성을 사용할 수 없습니다.",
      loading: "로드 중.."
    }
  },
  arcgis: {
    utils: {
      baseLayerError: "베이스맵 레이어를 로드할 수 없음",
      geometryServiceError: "웹 맵을 열기 위한 지오메트리 서비스를 공급합니다."
    }
  },
  
  identity: {
    lblItem: "항목",
    title: "로그인",
    info: "${server} ${resource}의 항목에 액세스하려면 로그인하십시오.",
    lblUser: "사용자 이름:",
    lblPwd: "암호:",
    lblOk: "확인",
    lblSigning: "로그인...",
    lblCancel: "취소",
    errorMsg: "사용자 이름/암호가 유효하지 않습니다. 다시 시도하십시오.",
    invalidUser: "입력한 사용자 이름 또는 암호가 올바르지 않습니다.",
    forbidden: "사용자 이름과 암호가 올바르지만 이 리소스에 액세스할 수 있는 권한이 없습니다.",
    noAuthService: "인증 서비스에 액세스할 수 없습니다."
  }
})
);
},
'esri/nls/ko-kr/jsapi':function(){
define('esri/nls/ko-kr/jsapi',{});
},
'dojo/cldr/nls/ko/gregorian':function(){
define(
//begin v1.x content
{
	"months-format-narrow": [
		"1월",
		"2월",
		"3월",
		"4월",
		"5월",
		"6월",
		"7월",
		"8월",
		"9월",
		"10월",
		"11월",
		"12월"
	],
	"field-weekday": "요일",
	"dateFormatItem-yQQQ": "y년 QQQ",
	"dateFormatItem-yMEd": "yyyy. M. d. EEE",
	"dateFormatItem-MMMEd": "MMM d일 (E)",
	"eraNarrow": [
		"기원전",
		"서기"
	],
	"dateFormat-long": "y년 M월 d일",
	"months-format-wide": [
		"1월",
		"2월",
		"3월",
		"4월",
		"5월",
		"6월",
		"7월",
		"8월",
		"9월",
		"10월",
		"11월",
		"12월"
	],
	"dateTimeFormat-medium": "{1} {0}",
	"dateFormatItem-EEEd": "d일 EEE",
	"dayPeriods-format-wide-pm": "오후",
	"dateFormat-full": "y년 M월 d일 EEEE",
	"dateFormatItem-Md": "M. d.",
	"field-era": "연호",
	"dateFormatItem-yM": "yyyy. M.",
	"months-standAlone-wide": [
		"1월",
		"2월",
		"3월",
		"4월",
		"5월",
		"6월",
		"7월",
		"8월",
		"9월",
		"10월",
		"11월",
		"12월"
	],
	"timeFormat-short": "a h:mm",
	"quarters-format-wide": [
		"제 1/4분기",
		"제 2/4분기",
		"제 3/4분기",
		"제 4/4분기"
	],
	"timeFormat-long": "a h시 m분 s초 z",
	"field-year": "년",
	"dateFormatItem-yMMM": "y년 MMM",
	"dateFormatItem-yQ": "y년 Q분기",
	"field-hour": "시",
	"dateFormatItem-MMdd": "MM. dd",
	"months-format-abbr": [
		"1월",
		"2월",
		"3월",
		"4월",
		"5월",
		"6월",
		"7월",
		"8월",
		"9월",
		"10월",
		"11월",
		"12월"
	],
	"dateFormatItem-yyQ": "yy년 Q분기",
	"timeFormat-full": "a h시 m분 s초 zzzz",
	"field-day-relative+0": "오늘",
	"field-day-relative+1": "내일",
	"field-day-relative+2": "모레",
	"dateFormatItem-H": "H시",
	"field-day-relative+3": "3일후",
	"months-standAlone-abbr": [
		"1월",
		"2월",
		"3월",
		"4월",
		"5월",
		"6월",
		"7월",
		"8월",
		"9월",
		"10월",
		"11월",
		"12월"
	],
	"quarters-format-abbr": [
		"1분기",
		"2분기",
		"3분기",
		"4분기"
	],
	"quarters-standAlone-wide": [
		"제 1/4분기",
		"제 2/4분기",
		"제 3/4분기",
		"제 4/4분기"
	],
	"dateFormatItem-HHmmss": "HH:mm:ss",
	"dateFormatItem-M": "M월",
	"days-standAlone-wide": [
		"일요일",
		"월요일",
		"화요일",
		"수요일",
		"목요일",
		"금요일",
		"토요일"
	],
	"dateFormatItem-yyMMM": "yy년 MMM",
	"timeFormat-medium": "a h:mm:ss",
	"dateFormatItem-Hm": "HH:mm",
	"quarters-standAlone-abbr": [
		"1분기",
		"2분기",
		"3분기",
		"4분기"
	],
	"eraAbbr": [
		"기원전",
		"서기"
	],
	"field-minute": "분",
	"field-dayperiod": "오전/오후",
	"days-standAlone-abbr": [
		"일",
		"월",
		"화",
		"수",
		"목",
		"금",
		"토"
	],
	"dateFormatItem-d": "d일",
	"dateFormatItem-ms": "mm:ss",
	"field-day-relative+-1": "어제",
	"dateFormatItem-h": "a h시",
	"dateTimeFormat-long": "{1} {0}",
	"field-day-relative+-2": "그저께",
	"field-day-relative+-3": "그끄제",
	"dateFormatItem-MMMd": "MMM d일",
	"dateFormatItem-MEd": "M. d. (E)",
	"dateTimeFormat-full": "{1} {0}",
	"field-day": "일",
	"days-format-wide": [
		"일요일",
		"월요일",
		"화요일",
		"수요일",
		"목요일",
		"금요일",
		"토요일"
	],
	"field-zone": "시간대",
	"dateFormatItem-yyyyMM": "yyyy. MM",
	"dateFormatItem-y": "y년",
	"months-standAlone-narrow": [
		"1월",
		"2월",
		"3월",
		"4월",
		"5월",
		"6월",
		"7월",
		"8월",
		"9월",
		"10월",
		"11월",
		"12월"
	],
	"dateFormatItem-yyMM": "YY. M.",
	"dateFormatItem-hm": "a h:mm",
	"days-format-abbr": [
		"일",
		"월",
		"화",
		"수",
		"목",
		"금",
		"토"
	],
	"dateFormatItem-yMMMd": "y년 MMM d일",
	"eraNames": [
		"서력기원전",
		"서력기원"
	],
	"days-format-narrow": [
		"일",
		"월",
		"화",
		"수",
		"목",
		"금",
		"토"
	],
	"field-month": "월",
	"days-standAlone-narrow": [
		"일",
		"월",
		"화",
		"수",
		"목",
		"금",
		"토"
	],
	"dateFormatItem-MMM": "LLL",
	"dayPeriods-format-wide-am": "오전",
	"dateFormat-short": "yy. M. d.",
	"field-second": "초",
	"dateFormatItem-yMMMEd": "y년 MMM d일 EEE",
	"dateFormatItem-Ed": "d일 (E)",
	"field-week": "주",
	"dateFormat-medium": "yyyy. M. d.",
	"dateFormatItem-mmss": "mm:ss",
	"dateTimeFormat-short": "{1} {0}",
	"dateFormatItem-Hms": "H시 m분 s초",
	"dateFormatItem-hms": "a h:mm:ss"
}
//end v1.x content
);
},
'dojo/cldr/nls/ko-kr/gregorian':function(){
define('dojo/cldr/nls/ko-kr/gregorian',{});
},
'dojo/cldr/nls/ko/number':function(){
define(
//begin v1.x content
{
	"group": ",",
	"percentSign": "%",
	"exponential": "E",
	"scientificFormat": "#E0",
	"percentFormat": "#,##0%",
	"list": ";",
	"infinity": "∞",
	"patternDigit": "#",
	"minusSign": "-",
	"decimal": ".",
	"nan": "NaN",
	"nativeZeroDigit": "0",
	"perMille": "‰",
	"decimalFormat": "#,##0.###",
	"currencyFormat": "¤#,##0.00",
	"plusSign": "+"
}
//end v1.x content
);
},
'dojo/cldr/nls/ko-kr/number':function(){
define('dojo/cldr/nls/ko-kr/number',{});
},
'*noref':1}});
define("esri/nls/jsapi_ko-kr", [], 1);
