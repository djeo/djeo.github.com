//>>built
﻿define(
"esri/nls/ko/jsapi", ({
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