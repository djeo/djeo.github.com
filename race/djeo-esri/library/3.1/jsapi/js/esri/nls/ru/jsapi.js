//>>built
﻿define(
"esri/nls/ru/jsapi", ({
  io: {
    proxyNotSet:"Не задан параметр esri.config.defaults.io.proxyUrl."
  },
  
  map: {
    deprecateReorderLayerString: "Параметр Map.reorderLayer(/*String*/ id, /*Number*/ index) устарел. Используйте Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",
    deprecateShiftDblClickZoom: "Параметр Map.(enable/disable)ShiftDoubleClickZoom устарел. Изменение масштаба при одновременном нажатии клавиши Shift и двойном щелчке мышью не поддерживается."
  },

  geometry: {
    deprecateToScreenPoint:"Параметр esri.geometry.toScreenPoint устарел. Используйте параметр esri.geometry.toScreenGeometry.",
    deprecateToMapPoint:"Параметр esri.geometry.toMapPoint устарел. Используйте параметр esri.geometry.toMapGeometry."
  },

  layers: {
    tiled: {
      tileError:"Невозможно загрузить мозаику"
    },
    
    dynamic: {
      imageError:"Невозможно загрузить изображение"
    },
    
    graphics: {
      drawingError:"Невозможно создать рисунок "
    },

    agstiled: {
      deprecateRoundrobin:"Параметр конструктора 'roundrobin' устарел. Используйте параметр 'tileServers'."
    },

    imageParameters: {
      deprecateBBox:"Свойство 'bbox' устарело. Используйте свойство 'extent'."
    },
    
    FeatureLayer: {
      noOIDField: "Параметр objectIdField не задан [url: ${url}]",
      fieldNotFound: "невозможно найти поле '${field}' в данных 'fields' слоя [url: ${url}]",
      noGeometryField: "невозможно найти поле типа 'esriFieldTypeGeometry' в данных 'fields' слоя. Если используется слой картографического сервиса, то объекты не будут иметь геометрию [url: ${url}]",
      invalidParams: "в запросе содержится один или несколько неподдерживаемых параметров",
      updateError: "при обновлении слоя произошла ошибка",
      
      createUserSeconds: "Создано ${userId} сек. назад",
      createUserMinute: "Создано ${userId} 1 мин. назад",
      editUserSeconds: "Отредактировано ${userId} сек. назад",
      editUserMinute: "Отредактировано ${userId} 1 мин. назад",
      createSeconds: "Создано сек. назад",
      createMinute: "Создано 1 мин. назад",
      editSeconds: "Отредактировано сек. назад",
      editMinute: "Отредактировано 1 мин. назад",
      
      createUserMinutes: "Создано ${userId} ${minutes}мин. назад",
      createUserHour: "Создано ${userId} 1 час назад",
      createUserHours: "Создано ${userId} ${hours} ч. назад",
      createUserWeekDay: "Создано ${userId} в ${weekDay} в ${formattedTime}",
      createUserFull: "Создано ${userId} ${formattedDate} в ${formattedTime}",
      
      editUserMinutes: "Изменено ${userId} ${minutes} мин. назад",
      editUserHour: "Изменено ${userId} 1 час назад",
      editUserHours: "Изменено ${userId} ${hours} ч. назад",
      editUserWeekDay: "Изменено ${userId} в ${weekDay} в ${formattedTime}",
      editUserFull: "Изменено ${userId} ${formattedDate} в ${formattedTime}",
      
      createUser: "Создано ${userId}",
      editUser: "Изменено ${userId}",
      
      createMinutes: "Создано ${minutes} мин. назад",
      createHour: "Создано 1 час назад",
      createHours: "Создано ${hours} ч. назад",
      createWeekDay: "Создано в ${weekDay} в ${formattedTime}",
      createFull: "Создано ${formattedDate} в ${formattedTime}",
      
      editMinutes: "Изменено ${minutes} мин. назад",
      editHour: "Изменено 1 час назад",
      editHours: "Изменено ${hours} ч. назад",
      editWeekDay: "Изменено в ${weekDay} в ${formattedTime}",
      editFull: "Изменено ${formattedDate} в ${formattedTime}"
    }
  },

  tasks: {
    gp: {
      gpDataTypeNotHandled:"Тип данных GP не обработан."
    },
        
    na: {
      route: {
        routeNameNotSpecified: "Параметр 'RouteName' не задан как минимум для 1 остановки в наборе остановок FeatureSet."
      }
    },
    
    query: {
      invalid: "Невозможно выполнить запрос. Проверьте параметры."
    }
  },

  toolbars: {
    draw: {
      convertAntiClockwisePolygon: "Полигоны, оцифрованные против часовой стрелки, будут сохранены с порядком вершин по часовой стрелке.",
      addPoint: "Щелкните, чтобы добавить точку",
      addShape: "Щелкните, чтобы добавить геометрию",
      addMultipoint: "Щелкните, чтобы начать добавление точек",
      freehand: "Нажмите кнопку, чтобы начать, и отпустите ее, чтобы завершить",
      start: "Щелкните, чтобы начать рисовать",
      resume: "Щелкните, чтобы продолжить рисовать",
      complete: "Дважды щелкните для завершения",
      finish: "Дважды щелкните для завершения",
      invalidType: "Неподдерживаемый тип геометрии"
    },
    edit: {
      invalidType: "Невозможно активировать инструмент. Убедитесь в том, что данный тип геометрии поддерживается этим инструментом.",
      deleteLabel: "Удалить"
    }
  },
  
  virtualearth: {
    // minMaxTokenDuration:"Token duration must be greater than 15 minutes and lesser than 480 minutes (8 hours).",
    
    vetiledlayer: {
      //tokensNotSpecified:"Either clientToken & serverToken must be provided or tokenUrl must be specified."
      bingMapsKeyNotSpecified: "Необходимо задать параметр BingMapsKey."
    },
    
    vegeocode: {
      //tokensNotSpecified:"Either serverToken must be provided or tokenUrl must be specified.",
      bingMapsKeyNotSpecified: "Необходимо задать параметр BingMapsKey.",
      requestQueued: "Токен сервера не получен. Запрос будет выполнен после получения токена сервера."
    }
  },
  widgets: {
    attributeInspector: {
      NLS_first: "Первый",
      NLS_previous: "Назад",
      NLS_next: "Далее",
      NLS_last: "Последний",
      NLS_deleteFeature: "Удалить",
      NLS_title: "Изменить атрибуты",
      NLS_errorInvalid: "Недопустимо",
      NLS_validationInt: "Значение должно быть целым числом.",
      NLS_validationFlt: "Значение должно быть числом с плавающей точкой.",
      NLS_of: "из",
      NLS_noFeaturesSelected: "Объекты не выбраны"
    },
    overviewMap: {
      NLS_drag: "Перетащите, чтобы изменить экстент карты",
      NLS_show: "Показать Обзорную карту",
      NLS_hide: "Скрыть Обзорную карту",
      NLS_maximize: "Развернуть",
      NLS_restore: "Восстановить",
      NLS_noMap: "Параметр 'map' не найден во входных параметрах",
      NLS_noLayer: "в главной карте нет базового слоя",
      NLS_invalidSR: "пространственная привязка выбранного слоя не совместима с главной картой",
      NLS_invalidType: "неподдерживаемый тип слоя. Допустимые типы: 'TiledMapServiceLayer' и 'DynamicMapServiceLayer'"
    },
    timeSlider: {
      NLS_first: "Первый",
      NLS_previous: "Назад",
      NLS_next: "Далее",
      NLS_play: "Воспроизведение/пауза",
      NLS_invalidTimeExtent: "Параметр TimeExtent не задан или имеет неверный формат."
    },
    attachmentEditor: {
      NLS_attachments: "Вложения:",
      NLS_add: "Добавить",
      NLS_none: "Нет"
    },
    editor: {
      tools: {
        NLS_attributesLbl: "Атрибуты",
        NLS_cutLbl: "Вырезать",
        NLS_deleteLbl: "Удалить",
        NLS_extentLbl: "Экстент",
        NLS_freehandPolygonLbl: "Полигон произвольной формы",
        NLS_freehandPolylineLbl: "Линия произвольной формы",
        NLS_pointLbl: "Точка",
        NLS_polygonLbl: "Полигон",
        NLS_polylineLbl: "Линия",
        NLS_reshapeLbl: "Изменить форму",
        NLS_selectionNewLbl: "Новая выборка",
        NLS_selectionAddLbl: "Добавить к выборке",
        NLS_selectionClearLbl: "Очистить выборку",
        NLS_selectionRemoveLbl: "Убрать из выборки",
        NLS_selectionUnionLbl: "Объединение",
        NLS_autoCompleteLbl: "Автозавершение",
        NLS_unionLbl: "Объединение",
        NLS_rectangleLbl: "Прямоугольник",
        NLS_circleLbl: "Круг",
        NLS_ellipseLbl: "Эллипс",
        NLS_triangleLbl: "Треугольник",
        NLS_arrowLbl: "Стрелка",
        NLS_arrowLeftLbl: "Стрелка влево",
        NLS_arrowUpLbl: "Стрелка вверх",
        NLS_arrowDownLbl: "Стрелка вниз",
        NLS_arrowRightLbl: "Стрелка вправо",
        NLS_undoLbl: "Отменить",
        NLS_redoLbl: "Повторить"
      }
    },
    legend: {
      NLS_creatingLegend: "Создание легенды",
      NLS_noLegend: "Без легенды"
    },
    popup: {
      NLS_moreInfo: "Подробнее",
      NLS_searching: "Выполняется поиск",
      NLS_prevFeature: "Предыдущий объект",
      NLS_nextFeature: "Следующий объект",
      NLS_close: "Закрыть",
      NLS_prevMedia: "Предыдущий носитель",
      NLS_nextMedia: "Следующий носитель",
      NLS_noInfo: "Информация недоступна",
      NLS_noAttach: "Вложения не найдены",
      NLS_maximize: "Развернуть",
      NLS_restore: "Восстановить",
      NLS_zoomTo: "Приблизить к",
      NLS_pagingInfo: "(${index} из ${total})",
      NLS_attach: "Вложения"
    },
    measurement: {
      NLS_distance: "Расстояние",
      NLS_area: "Площадь",
      NLS_location: "Местоположение",
      NLS_resultLabel: "Результат измерения",
      NLS_length_miles: "Мили",
      NLS_length_kilometers: "Километры",
      NLS_length_feet: "Футы",
      NLS_length_meters: "Метры",
      NLS_length_yards: "Ярды",
      NLS_area_acres: "Акры",
      NLS_area_sq_miles: "Кв. мили",
      NLS_area_sq_kilometers: "Кв. километры",
      NLS_area_hectares: "гектары",
      NLS_area_sq_yards: "Кв. ярды",
      NLS_area_sq_feet: "Кв. футы",
      NLS_area_sq_meters: "Кв. метры",
      NLS_deg_min_sec: "DMS",
      NLS_decimal_degrees: "Градусы",
      NLS_longitude: "Долгота",
      NLS_latitude: "Широта"
    },
    bookmarks: {
      NLS_add_bookmark: "Добавить закладку",
      NLS_new_bookmark: "Без имени",
      NLS_bookmark_edit: "Правка",
      NLS_bookmark_remove: "У&далить"
    },
    print: {
      NLS_print: "Печать",
      NLS_printing: "Печать",
      NLS_printout: "Распечатать"
    },
    templatePicker: {
      creationDisabled: "Возможность создания объектов отключена для всех слоев.",
      loading: "Загрузка.."
    }
  },
  arcgis: {
    utils: {
      baseLayerError: "Невозможно загрузить базовый слой карты",
      geometryServiceError: "Чтобы открыть веб-карту, обеспечьте доступ к сервису геометрии."
    }
  },
  
  identity: {
    lblItem: "элемент",
    title: "Подключиться",
    info: "Пожалуйста, зарегистрируйтесь для доступа к данным на ${server} ${resource}",
    lblUser: "Имя пользователя:",
    lblPwd: "Пароль:",
    lblOk: "OK",
    lblSigning: "Авторизация...",
    lblCancel: "Отмена",
    errorMsg: "Неверные имя пользователя/пароль.  Попробуйте ещё раз.",
    invalidUser: "Введено неправильное имя пользователя или пароль.",
    forbidden: "Данные учетной записи введены верно, но у вас нет доступа к данному ресурсу.",
    noAuthService: "Не удается получить доступ к службе аутентификации пользователей."
  }
})
);