export const LANGUAGE_OPTIONS = [['kk','ҚАЗ','Қазақша'],['ru','РУС','Русский'],['en','ENG','English']];
export const SUPPORTED_LANGUAGES = LANGUAGE_OPTIONS.map(([code])=>code);
export function resolveLanguage(search = '', stored = 'ru') {
  const requested = new URLSearchParams(search).get('lang');
  return SUPPORTED_LANGUAGES.includes(requested) ? requested : SUPPORTED_LANGUAGES.includes(stored) ? stored : 'ru';
}

export const I18N = {
  ru: {
    loadingMap: 'Карта загружается…', loadError: 'Не удалось загрузить карту. Повторите попытку.', retry: 'Повторить',
    searchLoading: 'Ищем помещения…', searchError: 'Не удалось выполнить поиск. Повторите попытку.', routeLoading: 'Строим маршрут…',
    networkError: 'Не удалось связаться с сервером. Проверьте подключение и повторите попытку.',
    routeError: 'Не удалось построить маршрут. Проверьте выбранные точки и повторите попытку.', serverError: 'Сервис временно недоступен. Попробуйте позже.',
    universityShort: 'ХДУ', title: 'ХДУ — Карта кампуса', brand: 'КАРТА КАМПУСА', brandAria: 'ХДУ — карта кампуса', logo: 'Логотип университета',
    searchPlaceholder: 'Найти кабинет, например 211 или 01А', searchAria: 'Поиск по кабинетам', searchHint: 'Номер кабинета или название', results: 'Результаты поиска',
    about: 'О карте', theme: 'Сменить тему', languages: 'Язык интерфейса', buildings: 'Выбор корпуса', five: 'Б корпус', seven: 'А корпус',
    mapAria: 'Интерактивная карта корпуса', floorMap: 'ПОЭТАЖНАЯ КАРТА', floors: 'Выбор этажа', basement: 'Подвал', basementShort: 'П',
    floor: '{n} этаж', floorShort: '{n} эт.', floorCaption: 'Этаж', close: 'Закрыть окно', closeCard: 'Закрыть карточку',
    selectedRoom: 'Выбранное помещение', selectedRoomKicker: 'ПОМЕЩЕНИЕ', plus: 'Увеличить', minus: 'Уменьшить', fit: 'Вписать карту', hint: 'Колёсико мыши — масштаб · перетаскивание — перемещение', mapHint: 'Выберите кабинет на карте или воспользуйтесь поиском',
    rooms: 'Кабинеты', stairs: 'Лестницы', toilets: 'Санузлы', footer: 'По архитектурным планам · ХДУ, Шымкент',
    room: 'Кабинет {n}', planId: 'по плану № {n}', roomShort: 'Кабинет', utilityShort: 'Подсобное', showerShort: 'Душ',
    route: 'Маршрут', routeTitle: 'Откуда → Куда', plannerEyebrow: 'НАВИГАЦИЯ', routeClose: 'Свернуть маршрут', from: 'Откуда', to: 'Куда',
    fromPlaceholder: 'Кабинет или лестница', toPlaceholder: 'Куда хотите попасть?', swap: 'Поменять точки местами',
    build: 'Построить маршрут', clear: 'Очистить', chooseBoth: 'Выберите обе точки: из подсказок или на карте.', chooseFrom: 'Выберите точку старта', chooseTo: 'Выберите пункт назначения',
    endpointHint: 'Начните вводить номер или название. Точку также можно выбрать на карте.', hereFrom: 'Отсюда', hereTo: 'Сюда',
    fromChosen: 'Выбрана точка старта. Укажите, куда идти.', toChosen: 'Выбран пункт назначения. Укажите, откуда идти.',
    samePoint: 'Начало и конец совпадают. Выберите другую точку.', crossBuilding: 'Между корпусами пока нет проверенного маршрута. Выберите две точки в одном корпусе.',
    partial: 'Эта часть пристройки обрезана на исходном чертеже. Для маршрута нужен полный план.',
    routeReady: 'Маршрут построен', oneFloor: 'один этаж', floorCount: '{n} эт.', corridorStep: 'Пройдите по отмеченному коридору.',
    stairsStep: 'Пройдите к лестнице и перейдите на {n}-й этаж.', basementStep: 'Пройдите к лестнице и спуститесь в подвал.',
    routeNote: 'Схематический путь по архитектурному плану. Проходы и действующие номера требуют сверки.',
    noRoute: 'Между выбранными точками не найден непрерывный маршрут. Попробуйте выбрать другую точку старта.', noResults: 'Ничего не найдено. Попробуйте номер кабинета или название помещения.',
    noRouteResults: 'Нет доступных точек. Попробуйте номер кабинета или «лестница».',
    adminPanel: 'Панель администратора',
    aboutTitle: 'Карта ХДУ',
    aboutText: 'А корпус: этажи 1–7. Б корпус: подвал и этажи 1–5. Поиск работает по номеру кабинета и названию помещения на русском, казахском и английском языках. Номера по экспликации сохранены отдельно от номеров кабинетов.',
    aboutLimits: 'Геометрия, двери и маршруты упрощены по архитектурным планам. Обрезанные части пристройки исключены из маршрутов. Перед запуском нужно сверить фактические проходы и нумерацию. Связь между корпусами и внутренняя геолокация пока не добавлены.'
  },
  kk: {
    loadingMap: 'Карта жүктелуде…', loadError: 'Картаны жүктеу мүмкін болмады. Қайталап көріңіз.', retry: 'Қайталау',
    searchLoading: 'Бөлмелер ізделуде…', searchError: 'Іздеу орындалмады. Қайталап көріңіз.', routeLoading: 'Бағыт құрылуда…',
    networkError: 'Серверге қосылу мүмкін болмады. Интернет байланысын тексеріп, қайталап көріңіз.',
    routeError: 'Бағыт құру мүмкін болмады. Таңдалған нүктелерді тексеріп, қайталап көріңіз.', serverError: 'Қызмет уақытша қолжетімсіз. Кейінірек қайталап көріңіз.',
    universityShort: 'ХДУ', title: 'ХДУ — Кампус картасы', brand: 'КАМПУС КАРТАСЫ', brandAria: 'ХДУ — кампус картасы', logo: 'Университет логотипі',
    searchPlaceholder: 'Кабинетті іздеу, мысалы 211 немесе 01А', searchAria: 'Кабинеттерді іздеу', searchHint: 'Кабинет нөмірі немесе бөлме атауы', results: 'Іздеу нәтижелері',
    about: 'Карта туралы', theme: 'Түс режимін ауыстыру', languages: 'Интерфейс тілі', buildings: 'Корпусты таңдау', five: 'Б корпусы', seven: 'А корпусы',
    mapAria: 'Корпустың интерактивті картасы', floorMap: 'ҚАБАТТАР КАРТАСЫ', floors: 'Қабатты таңдау', basement: 'Жертөле', basementShort: 'Ж',
    floor: '{n}-қабат', floorShort: '{n}-қаб.', floorCaption: 'Қабат', close: 'Терезені жабу', closeCard: 'Карточканы жабу',
    selectedRoom: 'Таңдалған бөлме', selectedRoomKicker: 'БӨЛМЕ', plus: 'Үлкейту', minus: 'Кішірейту', fit: 'Картаны толық көрсету', hint: 'Тінтуір дөңгелегі — масштаб · сүйреу — жылжыту', mapHint: 'Кабинетті картадан таңдаңыз немесе іздеуді пайдаланыңыз',
    rooms: 'Кабинеттер', stairs: 'Баспалдақтар', toilets: 'Әжетханалар', footer: 'Сәулет жоспарлары бойынша · ХДУ, Шымкент',
    room: '{n}-кабинет', planId: 'жоспар бойынша № {n}', roomShort: 'Кабинет', utilityShort: 'Қосалқы', showerShort: 'Душ',
    route: 'Бағыт', routeTitle: 'Қайдан → Қайда', plannerEyebrow: 'БАҒЫТ', routeClose: 'Бағыт панелін жию', from: 'Қайдан', to: 'Қайда',
    fromPlaceholder: 'Кабинет немесе баспалдақ', toPlaceholder: 'Қайда барғыңыз келеді?', swap: 'Нүктелерді ауыстыру',
    build: 'Бағыт құру', clear: 'Тазарту', chooseBoth: 'Екі нүктені де ұсыныстардан немесе картадан таңдаңыз.', chooseFrom: 'Бастапқы нүктені таңдаңыз', chooseTo: 'Баратын жерді таңдаңыз',
    endpointHint: 'Нөмірді немесе атауды енгізіңіз. Нүктені картадан да таңдауға болады.', hereFrom: 'Осы жерден', hereTo: 'Осы жерге',
    fromChosen: 'Бастапқы нүкте таңдалды. Баратын жерді көрсетіңіз.', toChosen: 'Баратын жер таңдалды. Қайдан шығатыныңызды көрсетіңіз.',
    samePoint: 'Бастапқы және соңғы нүктелер бірдей. Басқа нүктені таңдаңыз.', crossBuilding: 'Корпустар арасындағы бағыт әлі тексерілмеген. Бір корпустан екі нүкте таңдаңыз.',
    partial: 'Қосымша ғимараттың бұл бөлігі бастапқы сызбада қиылған. Бағыт құру үшін толық жоспар қажет.',
    routeReady: 'Бағыт құрылды', oneFloor: 'бір қабат', floorCount: '{n} қабат', corridorStep: 'Белгіленген дәлізбен жүріңіз.',
    stairsStep: 'Баспалдаққа барып, {n}-қабатқа өтіңіз.', basementStep: 'Баспалдаққа барып, жертөлеге түсіңіз.',
    routeNote: 'Сәулет жоспары бойынша жасалған сызбалық бағыт. Өткелдер мен қазіргі кабинет нөмірлерін тексеру қажет.',
    noRoute: 'Таңдалған нүктелер арасында үздіксіз бағыт табылмады. Басқа бастапқы нүктені таңдап көріңіз.', noResults: 'Ештеңе табылмады. Кабинет нөмірін немесе бөлме атауын енгізіңіз.',
    noRouteResults: 'Қолжетімді нүктелер табылмады. Кабинет нөмірін немесе «баспалдақ» сөзін енгізіңіз.',
    adminPanel: 'Әкімші панелі',
    aboutTitle: 'ХДУ картасы',
    aboutText: 'А корпусы: 1–7-қабаттар. Б корпусы: жертөле және 1–5-қабаттар. Іздеу кабинет нөмірі және бөлменің қазақша, орысша немесе ағылшынша атауы бойынша жұмыс істейді. Экспликация нөмірлері кабинет нөмірлерінен бөлек сақталған.',
    aboutLimits: 'Геометрия, есіктер мен бағыттар сәулет жоспарлары бойынша ықшамдалған. Қосымша ғимараттың қиылған бөліктері бағыттарға қосылмайды. Іске қосар алдында нақты өткелдер мен нөмірлерді тексеру қажет. Корпустар арасындағы жол мен ғимарат ішіндегі геолокация әлі қосылмаған.'
  },
  en: {
    loadingMap: 'Loading the map…', loadError: 'Could not load the map. Please try again.', retry: 'Try again',
    searchLoading: 'Searching for rooms…', searchError: 'Search is unavailable. Please try again.', routeLoading: 'Finding your route…',
    networkError: 'Could not connect to the server. Check your connection and try again.',
    routeError: 'Could not find a route. Check the selected places and try again.', serverError: 'The service is temporarily unavailable. Please try again later.',
    universityShort: 'HDU', title: 'HDU — Campus map', brand: 'CAMPUS MAP', brandAria: 'HDU campus map', logo: 'University logo',
    searchPlaceholder: 'Find a room, e.g. 211 or 01A', searchAria: 'Search rooms', searchHint: 'Room number or name', results: 'Search results',
    about: 'About this map', theme: 'Switch theme', languages: 'Interface language', buildings: 'Choose a building', five: 'Building B', seven: 'Building A',
    mapAria: 'Interactive building map', floorMap: 'FLOOR MAP', floors: 'Choose a floor', basement: 'Basement', basementShort: 'B',
    floor: 'Floor {n}', floorShort: 'Fl. {n}', floorCaption: 'Floor', close: 'Close window', closeCard: 'Close room details',
    selectedRoom: 'Selected room', selectedRoomKicker: 'ROOM', plus: 'Zoom in', minus: 'Zoom out', fit: 'Fit map', hint: 'Scroll to zoom · drag to move', mapHint: 'Choose a room on the map or use the search',
    rooms: 'Rooms', stairs: 'Stairs', toilets: 'Toilets', footer: 'Based on architectural plans · HDU, Shymkent',
    room: 'Room {n}', planId: 'plan ID {n}', roomShort: 'Room', utilityShort: 'Utility', showerShort: 'Shower',
    route: 'Directions', routeTitle: 'From → To', plannerEyebrow: 'DIRECTIONS', routeClose: 'Collapse directions', from: 'From', to: 'To',
    fromPlaceholder: 'Room or staircase', toPlaceholder: 'Where would you like to go?', swap: 'Swap start and destination',
    build: 'Get directions', clear: 'Clear', chooseBoth: 'Choose both places from the suggestions or on the map.', chooseFrom: 'Choose a starting point', chooseTo: 'Choose a destination',
    endpointHint: 'Enter a room number or name. You can also choose a place on the map.', hereFrom: 'Start here', hereTo: 'Go here',
    fromChosen: 'Starting point selected. Choose your destination.', toChosen: 'Destination selected. Choose your starting point.',
    samePoint: 'Start and destination are the same. Choose a different place.', crossBuilding: 'There is no verified route between buildings yet. Choose two places in the same building.',
    partial: 'This part of the annex is cut off in the original drawing. A complete plan is needed to find a route.',
    routeReady: 'Route ready', oneFloor: 'one floor', floorCount: '{n} floors', corridorStep: 'Follow the highlighted corridor.',
    stairsStep: 'Go to the stairs and continue to floor {n}.', basementStep: 'Go to the stairs and down to the basement.',
    routeNote: 'Schematic route based on architectural plans. Passages and current room numbers still need to be verified.',
    noRoute: 'No continuous route was found between these places. Try another starting point.', noResults: 'No rooms found. Try a room number or name.',
    noRouteResults: 'No available places found. Try a room number or “stairs”.',
    adminPanel: 'Admin panel', aboutTitle: 'HDU campus map',
    aboutText: 'Building A: floors 1–7. Building B: basement and floors 1–5. Search by room number or name in English, Kazakh or Russian. Plan IDs are kept separate from room numbers.',
    aboutLimits: 'Geometry, doors and routes are simplified from architectural plans. Incomplete annex areas are excluded from routes. Actual passages and room numbers must be checked before launch. Routes between buildings and indoor positioning are not available yet.'
  }
};
export const ROOM_KK = {
  'Холл': 'Холл', 'Коридор': 'Дәліз', 'Лестница': 'Баспалдақ', 'Санузел': 'Әжетхана',
  'Подсобное помещение': 'Қосалқы бөлме', 'Кабинет': 'Кабинет', 'Помещение': 'Бөлме',
  'Актовый зал': 'Акт залы', 'Терраса': 'Терраса', 'Лаборатория': 'Зертхана', 'Лекционный зал': 'Дәріс залы',
  'Читальный зал': 'Оқу залы', 'Душевая': 'Душ бөлмесі', 'Моечная посуды': 'Ыдыс жуу бөлмесі',
  'Кухня': 'Асүй', 'Столовая': 'Асхана', 'Туалет': 'Әжетхана', 'Вестибюль': 'Вестибюль',
  'Библиотека': 'Кітапхана', 'Музей': 'Мұражай', 'Гостевая комната': 'Қонақ бөлмесі',
  'Приёмная': 'Қабылдау бөлмесі', 'Конференц-зал': 'Конференция залы'
};

export const ROOM_EN = {
  'Холл':'Hall', 'Коридор':'Corridor', 'Лестница':'Staircase', 'Санузел':'Toilets',
  'Подсобное помещение':'Utility room', 'Кабинет':'Room', 'Помещение':'Room',
  'Актовый зал':'Assembly hall', 'Терраса':'Terrace', 'Лаборатория':'Laboratory', 'Лекционный зал':'Lecture hall',
  'Читальный зал':'Reading room', 'Душевая':'Shower room', 'Моечная посуды':'Dishwashing room',
  'Кухня':'Kitchen', 'Столовая':'Cafeteria', 'Туалет':'Toilets', 'Вестибюль':'Lobby',
  'Библиотека':'Library', 'Музей':'Museum', 'Гостевая комната':'Guest room',
  'Приёмная':'Reception', 'Конференц-зал':'Conference room'
};

export function localizedRoomLabel(room, language = 'ru') {
  const source = room.labelRu || room.label;
  if (language === 'en') return room.labelEn || ROOM_EN[source] || ROOM_EN[room.label] || source;
  if (language === 'kk') return room.labelKk || ROOM_KK[source] || ROOM_KK[room.label] || source;
  return source;
}


export function makeTranslator(language = 'ru') {
  const messages = SUPPORTED_LANGUAGES.includes(language) ? I18N[language] : I18N.ru;
  return (key, values = {}) => {
    const template = Object.prototype.hasOwnProperty.call(messages, key)
      ? messages[key]
      : Object.prototype.hasOwnProperty.call(I18N.ru, key) ? I18N.ru[key] : String(key);
    return template.replace(/\{(\w+)\}/g, (_, token) => String(values?.[token] ?? ''));
  };
}
