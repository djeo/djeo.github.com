//>>built
﻿define(
"esri/nls/pt-br/jsapi", ({
  io: {
    proxyNotSet:"esri.config.defaults.io.proxyUrl não está definido."
  },
  
  map: {
    deprecateReorderLayerString: "Map.reorderLayer(/*String*/ id, /*Number*/ index) está obsoleto. Use Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",
    deprecateShiftDblClickZoom: "Map.(enable/disable)ShiftDoubleClickZoom está obsoleto. O comportamento de zoom Shift-Double-Click não será suportado."
  },

  geometry: {
    deprecateToScreenPoint:"esri.geometry.toScreenPoint está obsoleto. Use esri.geometry.toScreenGeometry.",
    deprecateToMapPoint:"esri.geometry.toMapPoint está obsoleto. Use esri.geometry.toMapGeometry."
  },

  layers: {
    tiled: {
      tileError:"Não foi possível carregar o mosaico"
    },
    
    dynamic: {
      imageError:"Não foi possível carregar a imagem"
    },
    
    graphics: {
      drawingError:"Não foi possível desenhar o gráfico "
    },

    agstiled: {
      deprecateRoundrobin:"A opção de construtor 'roundrobin' está obsoleta. Use a opção 'tileServers'."
    },

    imageParameters: {
      deprecateBBox:"A propriedade 'bbox' está obsoleta. Use a propriedade 'extent'."
    },
    
    FeatureLayer: {
      noOIDField: "objectIdField não definido [url: ${url}]",
      fieldNotFound: "não foi possível encontrar o campo '${field}' nas informações da camada 'fields' [url: ${url}]",
      noGeometryField: "não foi possível encontrar um campo do tipo 'esriFieldTypeGeometry' nas informações da camada 'fields'. Se estiver usando uma camada de serviços de mapa, as feições não terão geometria [url: ${url}]",
      invalidParams: "a solicitação contém um ou mais parâmetros suportados",
      updateError: "ocorreu um erro ao atualizar a camada",
      
      createUserSeconds: "Criado por ${userId} segundos atrás",
      createUserMinute: "Criado por ${userId} um minuto atrás",
      editUserSeconds: "Editado por ${userId} segundos atrás",
      editUserMinute: "Editado por ${userId} um minuto atrás",
      createSeconds: "Criado segundos atrás",
      createMinute: "Criado um minuto atrás",
      editSeconds: "Editado segundos atrás",
      editMinute: "Editado um minuto atrás",
      
      createUserMinutes: "Criado por ${userId} ${minutes} minutos atrás",
      createUserHour: "Criado por ${userId} uma hora atrás",
      createUserHours: "Criado por ${userId} ${hours} horas atrás",
      createUserWeekDay: "Criado por ${userId} no ${weekDay} às ${formattedTime}",
      createUserFull: "Criado por ${userId} em ${formattedDate} às ${formattedTime}",
      
      editUserMinutes: "Editado por ${userId} ${minutes} minutos atrás",
      editUserHour: "Editado por ${userId} uma hora atrás",
      editUserHours: "Editado por ${userId} ${hours} horas atrás",
      editUserWeekDay: "Editado por ${userId} no ${weekDay} às ${formattedTime}",
      editUserFull: "Editado por ${userId} em ${formattedDate} às ${formattedTime}",
      
      createUser: "Criado por ${userId}",
      editUser: "Editado por ${userId}",
      
      createMinutes: "Criado ${minutes} minutos atrás",
      createHour: "Criado uma hora atrás",
      createHours: "Criado ${hours} horas atrás",
      createWeekDay: "Criado no ${weekDay} às ${formattedTime}",
      createFull: "Criado em ${formattedDate} às ${formattedTime}",
      
      editMinutes: "Editado ${minutes} minutos atrás",
      editHour: "Editado uma hora atrás",
      editHours: "Editado ${hours} horas atrás",
      editWeekDay: "Editado no ${weekDay} às ${formattedTime}",
      editFull: "Editado em ${formattedDate} às ${formattedTime}"
    }
  },

  tasks: {
    gp: {
      gpDataTypeNotHandled:"O tipo de Dados GP não foi alterado."
    },
        
    na: {
      route: {
        routeNameNotSpecified: "'RouteName' não especificado para pelo menos 1 parada no FeatureSet de paradas."
      }
    },
    
    query: {
      invalid: "Não foi possível realizar a solicitação. Verifique os seus parâmetros."
    }
  },

  toolbars: {
    draw: {
      convertAntiClockwisePolygon: "Os polígonos desenhados no sentido anti-horário serão invertidos para o sentido horário.",
      addPoint: "Clique para adicionar um ponto",
      addShape: "Clique para adicionar uma forma",
      addMultipoint: "Clique para começar a adicionar pontos",
      freehand: "Pressione para começar e solte para finalizar",
      start: "Clique para começar a desenhar",
      resume: "Clique para continuar desenhando",
      complete: "Clique duas vezes para concluir",
      finish: "Clique duas vezes para finalizar",
      invalidType: "Tipo de geometria não suportado"
    },
    edit: {
      invalidType: "Não foi possível ativar a ferramenta. Verifique se a ferramenta é válida para o tipo de geometria.",
      deleteLabel: "Excluir"
    }
  },
  
  virtualearth: {
    // minMaxTokenDuration:"Token duration must be greater than 15 minutes and lesser than 480 minutes (8 hours).",
    
    vetiledlayer: {
      //tokensNotSpecified:"Either clientToken & serverToken must be provided or tokenUrl must be specified."
      bingMapsKeyNotSpecified: "Um BingMapsKey deve ser fornecido."
    },
    
    vegeocode: {
      //tokensNotSpecified:"Either serverToken must be provided or tokenUrl must be specified.",
      bingMapsKeyNotSpecified: "Um BingMapsKey deve ser fornecido.",
      requestQueued: "O token do servidor não foi recuperado. A solicitação será executada depois que o token do servidor for recuperado."
    }
  },
  widgets: {
    attributeInspector: {
      NLS_first: "Primeiro",
      NLS_previous: "Anterior",
      NLS_next: "Próximo",
      NLS_last: "Último",
      NLS_deleteFeature: "Excluir",
      NLS_title: "Editar Atributos",
      NLS_errorInvalid: "Inválido",
      NLS_validationInt: "O valor deve ser inteiro.",
      NLS_validationFlt: "O valor deve ser real.",
      NLS_of: "de",
      NLS_noFeaturesSelected: "Nenhuma feição selecionada"
    },
    overviewMap: {
      NLS_drag: "Arraste para Alterar a Extensão do Mapa",
      NLS_show: "Exibir Visão Geral do Mapa",
      NLS_hide: "Ocultar Visão Geral do Mapa",
      NLS_maximize: "Maximizar",
      NLS_restore: "Restaurar",
      NLS_noMap: "'map' não encontrado nos parâmetros de entrada",
      NLS_noLayer: "o mapa principal não possui uma camada base",
      NLS_invalidSR: "a referência espacial da camada não é compatível com o mapa principal",
      NLS_invalidType: "tipo de camada não suportado. Os tipos de camada válidos são 'TiledMapServiceLayer' e 'DynamicMapServiceLayer'"
    },
    timeSlider: {
      NLS_first: "Primeiro",
      NLS_previous: "Anterior",
      NLS_next: "Próximo",
      NLS_play: "Reproduzir/Pausar",
      NLS_invalidTimeExtent: "TimeExtent não especificado ou em formato incorreto."
    },
    attachmentEditor: {
      NLS_attachments: "Anexos:",
      NLS_add: "Adicionar",
      NLS_none: "Nenhum"
    },
    editor: {
      tools: {
        NLS_attributesLbl: "Atributos",
        NLS_cutLbl: "Cortar",
        NLS_deleteLbl: "Excluir",
        NLS_extentLbl: "Estender",
        NLS_freehandPolygonLbl: "Polígono À Mão Livre",
        NLS_freehandPolylineLbl: "Polilinha À Mão Livre",
        NLS_pointLbl: "Ponto",
        NLS_polygonLbl: "Polígono",
        NLS_polylineLbl: "Polilinha",
        NLS_reshapeLbl: "Redefinir",
        NLS_selectionNewLbl: "Nova seleção",
        NLS_selectionAddLbl: "Adicionar à seleção",
        NLS_selectionClearLbl: "Limpar seleção",
        NLS_selectionRemoveLbl: "Subtrair da seleção",
        NLS_selectionUnionLbl: "União",
        NLS_autoCompleteLbl: "Auto-completar",
        NLS_unionLbl: "União",
        NLS_rectangleLbl: "Retângulo",
        NLS_circleLbl: "Círculo",
        NLS_ellipseLbl: "Elipse",
        NLS_triangleLbl: "Triângulo",
        NLS_arrowLbl: "Seta",
        NLS_arrowLeftLbl: "Seta para a Esquerda",
        NLS_arrowUpLbl: "Seta para Cima",
        NLS_arrowDownLbl: "Seta para Baixo",
        NLS_arrowRightLbl: "Seta para a Direita",
        NLS_undoLbl: "Desfazer",
        NLS_redoLbl: "Refazer"
      }
    },
    legend: {
      NLS_creatingLegend: "Criando legendas",
      NLS_noLegend: "Sem legendas"
    },
    popup: {
      NLS_moreInfo: "Mais info",
      NLS_searching: "Pesquisando",
      NLS_prevFeature: "Feição anterior",
      NLS_nextFeature: "Próxima feição",
      NLS_close: "Fechar",
      NLS_prevMedia: "Mídia anterior",
      NLS_nextMedia: "Próxima mídia",
      NLS_noInfo: "Nenhuma informação disponível",
      NLS_noAttach: "Nenhum anexo encontrado",
      NLS_maximize: "Maximizar",
      NLS_restore: "Restaurar",
      NLS_zoomTo: "Aplicar zoom a",
      NLS_pagingInfo: "(${index} de ${total})",
      NLS_attach: "Anexos"
    },
    measurement: {
      NLS_distance: "Distância",
      NLS_area: "Área",
      NLS_location: "Localização",
      NLS_resultLabel: "Resultado da Medida",
      NLS_length_miles: "Milhas",
      NLS_length_kilometers: "Quilômetros",
      NLS_length_feet: "Pés",
      NLS_length_meters: "Metros",
      NLS_length_yards: "Jardas",
      NLS_area_acres: "Acres",
      NLS_area_sq_miles: "Milhas Quadradas",
      NLS_area_sq_kilometers: "Quilômetros Quadrados",
      NLS_area_hectares: "Hectares",
      NLS_area_sq_yards: "Jardas Quadradas",
      NLS_area_sq_feet: "Pés Quadrados",
      NLS_area_sq_meters: "Metros Quadrados",
      NLS_deg_min_sec: "DMS",
      NLS_decimal_degrees: "Graus",
      NLS_longitude: "Longitude",
      NLS_latitude: "Latitude"
    },
    bookmarks: {
      NLS_add_bookmark: "Adicionar Marcações",
      NLS_new_bookmark: "Sem título",
      NLS_bookmark_edit: "Editar",
      NLS_bookmark_remove: "Remover"
    },
    print: {
      NLS_print: "Imprimir",
      NLS_printing: "Imprimindo",
      NLS_printout: "Impressão"
    },
    templatePicker: {
      creationDisabled: "A criação de feições está desativada para todas as camadas.",
      loading: "Carregando..."
    }
  },
  arcgis: {
    utils: {
      baseLayerError: "Não foi possível carregar a camada base do mapa",
      geometryServiceError: "Forneça um serviço de geometria para abrir o Mapa da Web."
    }
  },
  
  identity: {
    lblItem: "item",
    title: "Registrar",
    info: "Registre-se para acessar o item em ${server} ${resource}",
    lblUser: "Nome de Usuário:",
    lblPwd: "Senha:",
    lblOk: "OK",
    lblSigning: "Acessando…",
    lblCancel: "Cancelar",
    errorMsg: "Nome de usuário / senha inválidos. Tente novamente.",
    invalidUser: "O nome de usuário ou senha que você digitou está incorreto.",
    forbidden: "O nome de usuário e senha são válidos, mas você não tem acesso para este recurso.",
    noAuthService: "Não foi possível acessar o serviço de autenticação."
  }
})
);