//>>built
﻿define(
"esri/nls/ja/jsapi", ({
  io: {
    proxyNotSet:"esri.config.defaults.io.proxyUrl が設定されていません。"
  },
  
  map: {
    deprecateReorderLayerString: "Map.reorderLayer(/*String*/ id, /*Number*/ index) はサポートされていません。Map.reorderLayer(/*Layer*/ layer, /*Number*/ index)を使用してください。",
    deprecateShiftDblClickZoom: "Map.(enable/disable)ShiftDoubleClickZoom はサポートされていません。Shift キーを押しながらダブルクリックでのズームの動作はサポートされていません。"
  },

  geometry: {
    deprecateToScreenPoint:"esri.geometry.toScreenPoint はサポートされていません。esri.geometry.toScreenGeometry を使用してください。",
    deprecateToMapPoint:"esri.geometry.toMapPoint はサポートされていません。esri.geometry.toMapGeometry を使用してください。"
  },

  layers: {
    tiled: {
      tileError:"タイルを読み込めません"
    },
    
    dynamic: {
      imageError:"イメージを読み込めません"
    },
    
    graphics: {
      drawingError:"グラフィックスを描画できません "
    },

    agstiled: {
      deprecateRoundrobin:"コンストラクタ オプション 'roundrobin' はサポートされていません。オプション 'tileServers' を使用してください。"
    },

    imageParameters: {
      deprecateBBox:"プロパティ 'bbox' はサポートされていません。プロパティ 'extent' を使用してください。"
    },
    
    FeatureLayer: {
      noOIDField: "objectIdField が設定されていません [url: ${url}]",
      fieldNotFound: "レイヤの 'fields' 情報に '${field}' フィールドが見つかりません [url: ${url}]",
      noGeometryField: "レイヤの 'fields' 情報に 'esriFieldTypeGeometry' 型のフィールドが見つかりません。マップ サービス レイヤを使用しているのであれば、フィーチャにジオメトリがありません [url: ${url}]",
      invalidParams: "クエリに 1 つ以上のサポートされていないパラメータが含まれています",
      updateError: "レイヤの更新中にエラーが発生しました",
      
      createUserSeconds: "数秒前に ${userId} によって作成されました",
      createUserMinute: "一分前に ${userId} によって作成されました",
      editUserSeconds: "数秒前に ${userId} によって編集されました",
      editUserMinute: "一分前に ${userId} によって編集されました",
      createSeconds: "数秒前に作成されました",
      createMinute: "一分前に作成されました",
      editSeconds: "数秒前に編集されました",
      editMinute: "一分前に編集されました",
      
      createUserMinutes: "${userId} が ${minutes} 分前に作成",
      createUserHour: "${userId} が 1 時間前に作成",
      createUserHours: "${userId} が ${hours} 時間前に作成",
      createUserWeekDay: "${userId} が ${weekDay} の ${formattedTime} に作成",
      createUserFull: "${userId} が ${formattedDate} の ${formattedTime} に作成",
      
      editUserMinutes: "${userId} が ${minutes} 分前に編集",
      editUserHour: "${userId} が 1 時間前に編集",
      editUserHours: "${userId} が ${hours} 時間前に編集",
      editUserWeekDay: "${userId} が ${weekDay} の ${formattedTime} に編集",
      editUserFull: "${userId} が ${formattedDate} の ${formattedTime} に編集",
      
      createUser: "${userId} が作成",
      editUser: "${userId} が編集",
      
      createMinutes: "${minutes} 分前に作成",
      createHour: "1 時間前に作成",
      createHours: "${hours} 時間前に作成",
      createWeekDay: "${weekDay} の ${formattedTime} に作成",
      createFull: "${formattedDate} の ${formattedTime} に作成",
      
      editMinutes: "${minutes} 分前に編集",
      editHour: "1 時間前に編集",
      editHours: "${hours} 時間前に編集",
      editWeekDay: "${weekDay} の ${formattedTime} に編集",
      editFull: "${formattedDate} の ${formattedTime} に編集"
    }
  },

  tasks: {
    gp: {
      gpDataTypeNotHandled:"GP データ タイプは処理されません。"
    },
        
    na: {
      route: {
        routeNameNotSpecified: "ストップ FeatureSet の中で、少なくとも 1 つのストップに対して 'RouteName' が指定されていません。"
      }
    },
    
    query: {
      invalid: "クエリを実行できません。パラメータを確認してください。"
    }
  },

  toolbars: {
    draw: {
      convertAntiClockwisePolygon: "反時計回りの方向で描画されたポリゴンは、時計回りに反転されます。",
      addPoint: "クリックしてポイントを追加します",
      addShape: "クリックして図形を追加します",
      addMultipoint: "クリックしてポイントの追加を開始します",
      freehand: "ドラッグしてください",
      start: "クリックして描画を開始します",
      resume: "クリックして描画を続行します",
      complete: "ダブルクリックして完了します",
      finish: "ダブルクリックして終了します",
      invalidType: "サポートされていないジオメトリ タイプ"
    },
    edit: {
      invalidType: "ツールを有効にすることができません。指定したジオメトリ タイプに対してツールが有効であることを確認してください。",
      deleteLabel: "削除"
    }
  },
  
  virtualearth: {
    // minMaxTokenDuration:"Token duration must be greater than 15 minutes and lesser than 480 minutes (8 hours).",
    
    vetiledlayer: {
      //tokensNotSpecified:"Either clientToken & serverToken must be provided or tokenUrl must be specified."
      bingMapsKeyNotSpecified: "BingMapsKey を指定する必要があります。"
    },
    
    vegeocode: {
      //tokensNotSpecified:"Either serverToken must be provided or tokenUrl must be specified.",
      bingMapsKeyNotSpecified: "BingMapsKey を指定する必要があります。",
      requestQueued: "サーバのトークンを取得できません。サーバのトークンが取得されるまでリクエストを待機させます。"
    }
  },
  widgets: {
    attributeInspector: {
      NLS_first: "最初",
      NLS_previous: "前へ",
      NLS_next: "次へ",
      NLS_last: "最後",
      NLS_deleteFeature: "削除",
      NLS_title: "属性編集",
      NLS_errorInvalid: "無効",
      NLS_validationInt: "値は整数でなければなりません。",
      NLS_validationFlt: "値は浮動小数点型でなければなりません。",
      NLS_of: "/",
      NLS_noFeaturesSelected: "フィーチャは選択されていません"
    },
    overviewMap: {
      NLS_drag: "ドラッグしてマップ範囲を変更",
      NLS_show: "概観図の表示",
      NLS_hide: "概観図の非表示",
      NLS_maximize: "最大化",
      NLS_restore: "元に戻す",
      NLS_noMap: "入力パラメータに 'map' が見つかりません",
      NLS_noLayer: "マップにベース レイヤがありません",
      NLS_invalidSR: "指定したレイヤの空間参照はマップの空間参照と一致していません",
      NLS_invalidType: "サポートされていないレイヤ タイプです。有効なタイプは 'TiledMapServiceLayer' および 'DynamicMapServiceLayer' です"
    },
    timeSlider: {
      NLS_first: "最初",
      NLS_previous: "前へ",
      NLS_next: "次へ",
      NLS_play: "再生/一時停止",
      NLS_invalidTimeExtent: "TimeExtent が指定されていないか、形式が正しくありません。"
    },
    attachmentEditor: {
      NLS_attachments: "添付ファイル:",
      NLS_add: "追加",
      NLS_none: "なし"
    },
    editor: {
      tools: {
        NLS_attributesLbl: "属性",
        NLS_cutLbl: "切り取り",
        NLS_deleteLbl: "削除",
        NLS_extentLbl: "範囲",
        NLS_freehandPolygonLbl: "フリーハンド ポリゴン",
        NLS_freehandPolylineLbl: "フリーハンド ポリライン",
        NLS_pointLbl: "ポイント",
        NLS_polygonLbl: "ポリゴン",
        NLS_polylineLbl: "ポリライン",
        NLS_reshapeLbl: "形状変更",
        NLS_selectionNewLbl: "新規選択",
        NLS_selectionAddLbl: "選択に追加",
        NLS_selectionClearLbl: "選択の解除",
        NLS_selectionRemoveLbl: "選択から削除",
        NLS_selectionUnionLbl: "ユニオン",
        NLS_autoCompleteLbl: "自動完成ポリゴン",
        NLS_unionLbl: "ユニオン",
        NLS_rectangleLbl: "四角形",
        NLS_circleLbl: "円",
        NLS_ellipseLbl: "楕円",
        NLS_triangleLbl: "三角形",
        NLS_arrowLbl: "矢印",
        NLS_arrowLeftLbl: "左矢印",
        NLS_arrowUpLbl: "上矢印",
        NLS_arrowDownLbl: "下矢印",
        NLS_arrowRightLbl: "右矢印",
        NLS_undoLbl: "元に戻す",
        NLS_redoLbl: "やり直し"
      }
    },
    legend: {
      NLS_creatingLegend: "凡例を作成しています",
      NLS_noLegend: "凡例がありません"
    },
    popup: {
      NLS_moreInfo: "詳細",
      NLS_searching: "検索しています",
      NLS_prevFeature: "前のフィーチャ",
      NLS_nextFeature: "次のフィーチャ",
      NLS_close: "閉じる",
      NLS_prevMedia: "前のメディア",
      NLS_nextMedia: "次のメディア",
      NLS_noInfo: "利用できる情報がありません",
      NLS_noAttach: "添付ファイルがありません",
      NLS_maximize: "最大化",
      NLS_restore: "元に戻す",
      NLS_zoomTo: "ズーム",
      NLS_pagingInfo: "(${index} / ${total})",
      NLS_attach: "添付ファイル"
    },
    measurement: {
      NLS_distance: "距離",
      NLS_area: "面積",
      NLS_location: "位置",
      NLS_resultLabel: "計測結果",
      NLS_length_miles: "マイル",
      NLS_length_kilometers: "キロメートル",
      NLS_length_feet: "フィート",
      NLS_length_meters: "メートル",
      NLS_length_yards: "ヤード",
      NLS_area_acres: "エーカー",
      NLS_area_sq_miles: "平方マイル",
      NLS_area_sq_kilometers: "平方キロメートル",
      NLS_area_hectares: "ヘクタール",
      NLS_area_sq_yards: "平方ヤード",
      NLS_area_sq_feet: "平方フィート",
      NLS_area_sq_meters: "平方メートル",
      NLS_deg_min_sec: "度分秒",
      NLS_decimal_degrees: "度",
      NLS_longitude: "経度",
      NLS_latitude: "緯度"
    },
    bookmarks: {
      NLS_add_bookmark: "ブックマークの追加",
      NLS_new_bookmark: "無題",
      NLS_bookmark_edit: "編集",
      NLS_bookmark_remove: "削除"
    },
    print: {
      NLS_print: "印刷",
      NLS_printing: "印刷中",
      NLS_printout: "印刷出力"
    },
    templatePicker: {
      creationDisabled: "すべてのレイヤでフィーチャの作成が無効に設定されています。",
      loading: "読み込み中.."
    }
  },
  arcgis: {
    utils: {
      baseLayerError: "ベース マップ レイヤを読み込めません",
      geometryServiceError: "ジオメトリ サービスを指定して Web マップを開きます。"
    }
  },
  
  identity: {
    lblItem: "アイテム",
    title: "サインイン",
    info: "${server} ${resource} のアイテムにアクセスするにはサインインしてください",
    lblUser: "ユーザ名:",
    lblPwd: "パスワード:",
    lblOk: "OK",
    lblSigning: "サインインしています...",
    lblCancel: "キャンセル",
    errorMsg: "ユーザ名またはパスワードが無効です。もう一度やり直してください。",
    invalidUser: "入力したユーザ名またはパスワードが正しくありません。",
    forbidden: "ユーザ名とパスワードは有効ですが、このリソースへのアクセス権がありません。",
    noAuthService: "認証サービスにアクセスできません。"
  }
})
);