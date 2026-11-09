/* ========== СПИСОК РЕГИОНОВ РФ ==========
   flag — имя файла в папке flags/ (без расширения)
   Пример: flags/tat.png, flags/msk.png
========================================== */
var REGIONS = [
  {name:'Республика Адыгея',code:'ADY',flag:'ady'},
  {name:'Республика Алтай',code:'ALT',flag:'alt'},
  {name:'Республика Башкортостан',code:'BSH',flag:'bsh'},
  {name:'Республика Бурятия',code:'BUR',flag:'bur'},
  {name:'Республика Дагестан',code:'DAG',flag:'dag'},
  {name:'Донецкая Народная Республика',code:'DNR',flag:'dnr'},
  {name:'Республика Ингушетия',code:'ING',flag:'ing'},
  {name:'Кабардино-Балкарская Республика',code:'KBR',flag:'kbr'},
  {name:'Республика Калмыкия',code:'KLM',flag:'klm'},
  {name:'Карачаево-Черкесская Республика',code:'KCH',flag:'kch'},
  {name:'Республика Карелия',code:'KAR',flag:'kar'},
  {name:'Республика Коми',code:'KOM',flag:'kom'},
  {name:'Республика Крым',code:'KRM',flag:'krm'},
  {name:'Луганская Народная Республика',code:'LNR',flag:'lnr'},
  {name:'Республика Марий Эл',code:'MRL',flag:'mrl'},
  {name:'Республика Мордовия',code:'MRD',flag:'mrd'},
  {name:'Республика Саха (Якутия)',code:'YAK',flag:'yak'},
  {name:'Республика Северная Осетия — Алания',code:'SOA',flag:'soa'},
  {name:'Республика Татарстан',code:'TAT',flag:'tat'},
  {name:'Республика Тыва',code:'TUV',flag:'tuv'},
  {name:'Удмуртская Республика',code:'UDM',flag:'udm'},
  {name:'Республика Хакасия',code:'KHK',flag:'khk'},
  {name:'Чеченская Республика',code:'CHE',flag:'che'},
  {name:'Чувашская Республика',code:'CHV',flag:'chv'},
  {name:'Алтайский край',code:'ALK',flag:'alk'},
  {name:'Забайкальский край',code:'ZAB',flag:'zab'},
  {name:'Камчатский край',code:'KAM',flag:'kam'},
  {name:'Краснодарский край',code:'KRD',flag:'krd'},
  {name:'Красноярский край',code:'KRY',flag:'kry'},
  {name:'Пермский край',code:'PRM',flag:'prm'},
  {name:'Приморский край',code:'PRK',flag:'prk'},
  {name:'Ставропольский край',code:'STA',flag:'sta'},
  {name:'Хабаровский край',code:'KHB',flag:'khb'},
  {name:'Амурская область',code:'AMU',flag:'amu'},
  {name:'Архангельская область',code:'ARK',flag:'ark'},
  {name:'Астраханская область',code:'AST',flag:'ast'},
  {name:'Белгородская область',code:'BEL',flag:'bel'},
  {name:'Брянская область',code:'BRY',flag:'bry'},
  {name:'Владимирская область',code:'VLA',flag:'vla'},
  {name:'Волгоградская область',code:'VGG',flag:'vgg'},
  {name:'Вологодская область',code:'VLG',flag:'vlg'},
  {name:'Воронежская область',code:'VOR',flag:'vor'},
  {name:'Запорожская область',code:'ZAP',flag:'zap'},
  {name:'Ивановская область',code:'IVA',flag:'iva'},
  {name:'Иркутская область',code:'IRK',flag:'irk'},
  {name:'Калининградская область',code:'KGD',flag:'kgd'},
  {name:'Калужская область',code:'KLU',flag:'klu'},
  {name:'Кемеровская область',code:'KEM',flag:'kem'},
  {name:'Кировская область',code:'KIR',flag:'kir'},
  {name:'Костромская область',code:'KOS',flag:'kos'},
  {name:'Курганская область',code:'KUR',flag:'kur'},
  {name:'Курская область',code:'KRS',flag:'krs'},
  {name:'Ленинградская область',code:'LEN',flag:'len'},
  {name:'Липецкая область',code:'LIP',flag:'lip'},
  {name:'Магаданская область',code:'MAG',flag:'mag'},
  {name:'Московская область',code:'MOS',flag:'mos'},
  {name:'Мурманская область',code:'MUR',flag:'mur'},
  {name:'Нижегородская область',code:'NIZ',flag:'niz'},
  {name:'Новгородская область',code:'NGR',flag:'ngr'},
  {name:'Новосибирская область',code:'NVS',flag:'nvs'},
  {name:'Омская область',code:'OMS',flag:'oms'},
  {name:'Оренбургская область',code:'ORE',flag:'ore'},
  {name:'Орловская область',code:'ORL',flag:'orl'},
  {name:'Пензенская область',code:'PEN',flag:'pen'},
  {name:'Псковская область',code:'PSK',flag:'psk'},
  {name:'Ростовская область',code:'ROS',flag:'ros'},
  {name:'Рязанская область',code:'RYA',flag:'rya'},
  {name:'Самарская область',code:'SAM',flag:'sam'},
  {name:'Саратовская область',code:'SAR',flag:'sar'},
  {name:'Сахалинская область',code:'SAK',flag:'sak'},
  {name:'Свердловская область',code:'SVE',flag:'sve'},
  {name:'Смоленская область',code:'SMO',flag:'smo'},
  {name:'Тамбовская область',code:'TAM',flag:'tam'},
  {name:'Тверская область',code:'TVE',flag:'tve'},
  {name:'Томская область',code:'TOM',flag:'tom'},
  {name:'Тульская область',code:'TUL',flag:'tul'},
  {name:'Тюменская область',code:'TYU',flag:'tyu'},
  {name:'Ульяновская область',code:'ULY',flag:'uly'},
  {name:'Херсонская область',code:'KHE',flag:'khe'},
  {name:'Челябинская область',code:'CHL',flag:'chl'},
  {name:'Ярославская область',code:'YAR',flag:'yar'},
  {name:'Москва',code:'MSK',flag:'msk'},
  {name:'Санкт-Петербург',code:'SPB',flag:'spb'},
  {name:'Еврейская автономная область',code:'YEV',flag:'yev'},
  {name:'Ненецкий автономный округ',code:'NEN',flag:'nen'},
  {name:'Ханты-Мансийский автономный округ — Югра',code:'KHM',flag:'khm'},
  {name:'Чукотский автономный округ',code:'CHU',flag:'chu'},
  {name:'Ямало-Ненецкий автономный округ',code:'YAN',flag:'yan'}
];

/* Путь к PNG флага региона */
function getFlagUrl(flag) {
  if (!flag) return '';
  return 'flags/' + String(flag).toLowerCase() + '.png';
}

/* Поиск региона по части названия или коду */
function findRegion(query) {
  if (!query) return null;
  var s = String(query).toLowerCase().trim();
  for (var i = 0; i < REGIONS.length; i++) {
    var r = REGIONS[i];
    if (r.name.toLowerCase().indexOf(s) !== -1 || r.code.toLowerCase() === s) return r;
  }
  return null;
}

/* Все совпадения (для автокомплита) */
function searchRegions(query, limit) {
  if (!query) return [];
  var s = String(query).toLowerCase().trim();
  var out = [];
  for (var i = 0; i < REGIONS.length; i++) {
    if (REGIONS[i].name.toLowerCase().indexOf(s) !== -1) out.push(REGIONS[i]);
    if (limit && out.length >= limit) break;
  }
  return out;
}
