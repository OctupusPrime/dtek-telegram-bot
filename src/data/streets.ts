const steets = [
  "36-а лінія",
  "Нова вул.",
  "Лісна вул.",
  "Довга вул.",
  "Єліна вул.",
  "Рясна вул.",
  "Сакко вул.",
  "Ж.Кюрі вул.",
  "Одарія вул.",
  "Садова вул.",
  "Луцька вул.",
  "Соляна вул.",
  "Зелена вул.",
  "Бреуса вул.",
  "Рожева вул.",
  "Газова вул.",
  "Зоряна вул.",
  "С.Палія вул.",
  "тупік Хвиля",
  "Виїздна вул.",
  "Левадна вул.",
  "Головна вул.",
  "Вапняна вул.",
  "Кленова вул.",
  "Курська вул.",
  "Проїзна вул.",
  "Дзвінка вул.",
  "Лиманна вул.",
  "Торгова вул.",
  "Лютнева вул.",
  "Грецька вул.",
  "Вишнева вул.",
  "Дежнєва вул.",
  "Смілий пров.",
  "Мічурина пл.",
  "Мінська вул.",
  "Сонячна вул.",
  "Басейна вул.",
  "Єрмака пров.",
  "Неплія пров.",
  "Тіниста вул.",
  "Зелена гiрка",
  "Ринкова вул.",
  "Посівна вул.",
  "Пісочна вул.",
  "Асєєва пров.",
  "Канатна вул.",
  "Степова вул.",
  "Ракетна вул.",
  "Лінійна вул.",
  "Акордна вул.",
  "Радісна вул.",
  "Шишкіна вул.",
  "Наливна вул.",
  "Яблучна вул.",
  "Бітумна вул.",
  "Онезька вул.",
  "Аграрна вул.",
  "Інглезі вул.",
  "Одеська вул.",
  "Кар'єрна вул.",
  "Кримська вул.",
  "Дорбуду пров.",
  "Горбиста вул.",
  "Новикова вул.",
  "Новікова вул.",
  "Жевахова вул.",
  "Писарева вул.",
  "Нікитіна вул.",
  "Довженка вул.",
  "Садовий пров.",
  "Довженко вул.",
  "Стовпова вул.",
  "Рівності вул.",
  "8 Березня вул.",
  "Північна вул.",
  "Березова вул.",
  "Ванцетті вул.",
  "Хвойний пров.",
  "Мічурина вул.",
  "Щеголєва вул.",
  "Донецька вул.",
  "Світлий пров.",
  "Церковна вул.",
  "Сільська вул.",
  "Качалова вул.",
  "Сурикова вул.",
  "Високий пров.",
  "Левітана вул.",
  "Перемоги вул.",
  "Прокатна вул.",
  "Краснова вул.",
  "Теплична вул.",
  "Флотська вул.",
  "Левкоєва вул.",
  "Рельєфна вул.",
  "Радищева вул.",
  "Катаєва пров.",
  "Горіхова вул.",
  "Желябова вул.",
  "Дружний пров.",
  "Планетна вул.",
  "Світанку вул.",
  "Прорізна вул.",
  "Тульська вул.",
  "Петренко вул.",
  "Костанді вул.",
  "Райдужна вул.",
  "Гранітна вул.",
  "Тополина вул.",
  "Гладкова вул.",
  "ОК Добрий вул.",
  "Ак.Глушко вул.",
  "От.Чепіги вул.",
  "5-а Садова вул.",
  "Макаренко вул.",
  "Складська вул.",
  "ПІЛОТНИЙ Пров.",
  "Товарний пров.",
  "Скворцова вул.",
  "Десантний бул.",
  "Орловська вул.",
  "Лиманний пров.",
  "Місячний пров.",
  "Псковська вул.",
  "Стельмаха вул.",
  "Сегедська вул.",
  "Кавказька вул.",
  "Удільний пров.",
  "Армійська вул.",
  "Ванцетті пров.",
  "Васнецова вул.",
  "Долинська вул.",
  "Глазунова вул.",
  "Матросова вул.",
  "Міцкевича вул.",
  "Мечникова вул.",
  "Жасминова вул.",
  "Платанова вул.",
  "Волзький пров.",
  "Пісочний пров.",
  "Китобійна вул.",
  "Новаторів вул.",
  "Хутірська вул.",
  "Трамвайна вул.",
  "Старосінна пл.",
  "Вишневий пров.",
  "Роздольна вул.",
  "Радищева пров.",
  "Успенська вул.",
  "Кравцова пров.",
  "Литовська вул.",
  "Авіаційна вул.",
  "Генуезька вул.",
  "Ромашкова вул.",
  "Лінійний пров.",
  "2-й Рясний пров.",
  "Жоліо Кюрі вул.",
  "Дем’янова вул.",
  "Д.Ойстраха вул.",
  "4-й Соляний прв.",
  "Тупиковий пров.",
  "Залізнична вул.",
  "Офіцерська вул.",
  "Керченська вул.",
  "Фруктовий пров.",
  "Авіаторів пров.",
  "Ростовська вул.",
  "Березовий пров.",
  "Північний пров.",
  "Балківська вул.",
  "Тепличний пров.",
  "Гагаріна просп.",
  "Ломоносова вул.",
  "Зоопаркова вул.",
  "Болгарська вул.",
  "Глазунова пров.",
  "Килимовий пров.",
  "Запорізька вул.",
  "Матросова пров.",
  "Шевченка просп.",
  "Мельницька вул.",
  "Слєпньова пров.",
  "Полтавська вул.",
  "Тимірязєва вул.",
  "Абрикосова вул.",
  "Варненська вул.",
  "Баркасний пров.",
  "Південний пров.",
  "Пушкінська вул.",
  "Центральна вул.",
  "Прорізний пров.",
  "Курортний пров.",
  "Вронського вул.",
  "Строганова вул.",
  "Висоцького вул.",
  "Академічна вул.",
  "6-й Соляний пров.",
  "7-й Соляной пров.",
  "Ботанічний пров",
  "Бісквітний пров",
  "Героїв Крут вул.",
  "1-й Соляний пров.",
  "Дубовий гай вул.",
  "2-й Соляний пров.",
  "Ак.Сахарова вул.",
  "3-й Соляний пров.",
  "5-й Соляний пров.",
  "Парашутний пров.",
  "Олексіївська пл.",
  "Марсельська вул.",
  "Кишинівська вул.",
  "Бесарабська вул.",
  "Космонавтів вул.",
  "Псковський пров.",
  "Санаторний пров.",
  "Педагогічна вул.",
  "Східчастий пров.",
  "Воронежська вул.",
  "Каркашадзе пров.",
  "Жуковського вул.",
  "Каховський пров.",
  "Сирітський пров.",
  "Полуничний пров.",
  "Дніпровська вул.",
  "Черепанових вул.",
  "Семінарська вул.",
  "Гер.об.Одеси вул.",
  "Локомотивна вул.",
  "Райдужний масив.",
  "ОК Садиба 2020 вул.",
  "Семинарська вул.",
  "Белінського вул.",
  "Тімірязєва пров.",
  "Трамвайний пров.",
  "Пироговська вул.",
  "Тролейбусна вул.",
  "Семафорний пров.",
  "Скрипковий пров.",
  "Яблочкіної пров.",
  "Транспортна вул.",
  "Альпіністів вул.",
  "Шептицького вул.",
  "Вокзальний пров.",
  "Європейська вул.",
  "2-й Лютневий пров.",
  "1-й Сурикова пров.",
  "Іоганна Гена вул.",
  "2-й Сурикова пров.",
  "Миколи Гефта вул.",
  "2-й Сурікова пров.",
  "Семена Палія вул.",
  "1-а Заводська вул.",
  "2-а Заводська вул.",
  "3-я Заводська вул.",
  "Куликове Поле пл.",
  "Ген.Бочарова вул.",
  "4-а Заводська вул.",
  "5-а Заводська вул.",
  "1-а Приміська вул.",
  "2-а Приміська вул.",
  "Ак.Корольова вул.",
  "4-а Приміська вул.",
  "2-й Вапняний пров.",
  "1-й Лютневий пров.",
  "4-й Балтский пров.",
  "3-й Вапняний пров.",
  "Ген.Цвєтаєва вул.",
  "Новгородська вул.",
  "Партизанська вул.",
  "Закарпатська вул.",
  "Миколаївська вул.",
  "Рибальський пров.",
  "Кавказьский пров.",
  "Ширяївський пров.",
  "Головківська вул.",
  "Шампанський пров.",
  "Прохоровська вул.",
  "Старосінна площа.",
  "Рішельєвська вул.",
  "Електричний пров.",
  "Михайлівська вул.",
  "Водопровідна вул.",
  "5-й Балтський пров.",
  "1-й Глазунова пров.",
  "2-й Тупиковий пров.",
  "2-й Флотський пров.",
  "6-й Балтський пров.",
  "1-й Тупиковий пров.",
  "2-й Васнецова пров.",
  "Жевахова гора вул.",
  "Лесі Українки вул.",
  "3-й Флотський пров.",
  "От.Головатого вул.",
  "2-й Глазунова пров.",
  "Слобідський узвіз",
  "7-й Балтський пров.",
  "4-й Флотський пров.",
  "8-й Балтський пров.",
  "1-й Тепличний пров.",
  "Фесенка Юхима вул.",
  "Юхима Фесенка вул.",
  "Кап.Кузнецова вул.",
  "Чорн.козацтва вул.",
  "2-й Тепличний пров.",
  "М'ясоєдовська вул.",
  "Іцхака Рабіна вул.",
  "1-й Балтський пров.",
  "2-й Балтський пров.",
  "3-й Балтський пров.",
  "1-й Флотський пров.",
  "Ульянівський пров.",
  "Спартаківська вул.",
  "Селекціонерів вул.",
  "Матеріальний пров.",
  "Паустовського вул.",
  "Андреєвського вул.",
  "Артилерійська вул.",
  "Андрієвського вул.",
  "Депутатський пров.",
  "Навігаційний пров.",
  "Вертелецького вул.",
  "Лобачевського вул.",
  "Французький бульв.",
  "Жаботинського вул.",
  "Вишневського пров.",
  "Сєрогодського вул.",
  "Зеньковецької вул.",
  "Госпітальний пров.",
  "4-й Східчастий пров.",
  "6-а Пересипська вул.",
  "Вапняне селище вул.",
  "7-а Пересипська вул.",
  "1-й Сиротський пров.",
  "Семена Яхненка вул.",
  "1-й Тимірязєва пров.",
  "5-а Пересипська вул.",
  "Отамана Чепіги вул.",
  "2-й Сиротський пров.",
  "Кармена Романа вул.",
  "8-а Пересипська вул.",
  "М’ясоєдовська вул.",
  "Льва Симиренка вул.",
  "Ак.Заболотного вул.",
  "1-й Нафтовиків пров.",
  "2-й Нафтовиків пров.",
  "3-й Нафтовиків пров.",
  "2-а Пересипська вул.",
  "Небесної Сотні вул.",
  "1-й Орловський пров.",
  "3-й Східчастий пров.",
  "Чернишевського вул.",
  "Кропивницького вул.",
  "Кінноармійська вул.",
  "Більшовицький пров.",
  "Махачкалинська вул.",
  "Мелітопольська вул.",
  "Прохоровський пров.",
  "Вознесенський пров.",
  "Олексіївська площа.",
  "Ільфа і Петрова вул.",
  "Петрашевського вул.",
  "Чорноморський пров.",
  "Новосельського вул.",
  "Люстдорфський пров.",
  "Івана і Юрія Лип вул.",
  "Дальницьке шосе вул.",
  "2-й Воронєжский пров.",
  "3-я Пересипьська вул.",
  "Південна дорога вул.",
  "1-й Офіцерський пров.",
  "2-й Черепанових пров.",
  "2-й Офіцерський пров.",
  "2-й Керченський пров.",
  "Олега Андрійця пров.",
  "1-а лінія 2-й Лиманчик",
  "2-а лінія 2-й Лиманчик",
  "3-я лінія 2-й Лиманчик",
  "Балтська дорога вул.",
  "3-й Аеродромний пров.",
  "Давида Ойстраха вул.",
  "4-а лінія 2-й Лиманчик",
  "Мала Арнаутська вул.",
  "9-а лінія 2-й Лиманчик",
  "1-й Аеродромний пров.",
  "Павла Кравцова пров.",
  "3-й Залізничний пров.",
  "2-й Аеродромний пров.",
  "Спартаківський пров.",
  "Тимірязєва 73-75уч17в/117",
  "Адміральський просп.",
  "Пржевальського пров.",
  "Сімферопольська вул.",
  "1-й Аеродромний тупик",
  "Ліверпульський пров.",
  "Республіканська вул.",
  "Верстатобудівна вул.",
  "Кристаловського вул.",
  "Генерала Петрова вул.",
  "3-й Кандинського пров.",
  "Івана та Юрія Лип вул.",
  "4-й Ульянівський пров.",
  "Ігоря Кисельова пров.",
  "5-й Ульянївський пров.",
  "Маршала Говорова вул.",
  "Дмитра Донського вул.",
  "Академіка Глушка вул.",
  "2-й Куликовський пров.",
  "1-й Локомотивний пров.",
  "Восьмого березня вул.",
  "2-й Локомотивний пров.",
  "Небесної сотні просп.",
  "3-й Локомотивний пров.",
  "2-й Кандинського пров.",
  "Станкобудівельна вул.",
  "Деволанівський узвіз.",
  "5-й Чорноморський пров.",
  "Цвєтаєва генерала вул.",
  "6-й Чорноморський пров.",
  "7-й Чорноморський пров.",
  "8-й Чорноморський пров.",
  "9-й Чорноморський пров.",
  "Олега Стороженка пров.",
  "Фонтанська дорога вул.",
  "Академіка Гамалії вул.",
  "Бориса Кифоренка пров.",
  "2-й Хаджибейський пров.",
  "1-й Чорноморський пров.",
  "3-й Хаджибейський пров.",
  "2-й Чорноморський пров.",
  "Адмірала Лазарева вул.",
  "3-й Чорноморський пров.",
  "4-й Чорноморський пров.",
  "Шкільний аеродром вул.",
  "Генерала Бочарова вул.",
  "Гагарінське плато вул.",
  "Генерала Цвєтаєва вул.",
  "11-й Чорноморський пров.",
  "10-й Чорноморський пров.",
  "Пантелеймонівська вул.",
  "12-й Чорноморський пров.",
  "13-й Чорноморський пров.",
  "Добровольського просп.",
  "2-й Артилерійський пров",
  "Восьмого березня узвіз",
  "Марії Демченко.3-я лінія",
  "Василя Жуковського вул.",
  "Отамана Головатого вул.",
  "Тираспольське шосе вул.",
  "Академіка Філатова вул.",
  "Святослава Ріхтера вул.",
  "Академіка Сахарова вул.",
  "Академіка Вільямса вул.",
  "Старокиївське шосе вул.",
  "Капітана Кузнецова вул.",
  "Єлисаветградський пров.",
  "Середньофонтанська вул.",
  "Інтернаціональний пров.",
  "Черепанових 2-й пров вул.",
  "В'ячеслава Кирилова вул.",
  "Французький бульвар вул.",
  "Люстдорфська дорога вул.",
  "Олександра Довженка вул.",
  "Маршала Бабаджаняна вул.",
  "Олександра Пресича пров.",
  "Академіка Корольова вул.",
  "Космонавта Комарова вул.",
  "Хаджибейська дорога вул.",
  "2-й Восьмого березня пров.",
  "3-й Восьмого березня пров.",
  "Люстдорфська  дорога вул.",
  "4-й Восьмого березня пров.",
  "5-й Восьмого березня пров.",
  "6-й Восьмого березня пров.",
  "7-й Восьмого березня пров.",
  "8-й Восьмого березня пров.",
  "9-й Восьмого березня пров.",
  "1-й Восьмого березня пров.",
  "Героїв оборони Одеси вул.",
  "3-я лінія восьмого березня",
  "4-а лінія восьмого березня",
  "40 років Оборони Одеси вул.",
  "5-а лінія восьмого березня",
  "Петра Каришковського вул.",
  "Олександра Невського вул.",
  "1-а лінія восьмого березня",
  "2-а лінія восьмого березня",
  "Віце-адмірала Жукова пров.",
  "Середньофонтанський пров.",
  "Віце-адмірала Азарова вул.",
  "Метрополітенівський пров.",
  "Маршала Малиновського вул.",
  "Богдана Хмельницького вул.",
  "Академіка Заболотного вул.",
  "Лідерсівський бульвар вул.",
  "Володимира Терещенка пров.",
  "Генерала Вишневського вул.",
  "Овідіопольська дорога 3 вул.",
  "Віктора Діхтієвського пров.",
  "1-й Кандинського Василя пров.",
  "5-й Кандинського Василя пров.",
  "2-а Лінія на житловому масиві",
  "3-я Лінія на житловому масиві",
  "4-а Лінія на житловому масиві",
  "5-а Лінія на житловому масиві",
  "6-а Лінія на житловому масиві",
  "1-а лінія на житловому масиві",
  "7-а Лінія на житловому масиві",
  "8-а Лінія на житловому масиві",
  "9-а лінія на житловому масиві",
  "48-а Лінія на житловому масиві",
  "25-а Лінія на житловому масиві",
  "49-а Лінія на житловому масиві",
  "26-а Лінія на житловому масиві",
  "50-а Лінія на житловому масиві",
  "27-а Лінія на житловому масиві",
  "51-а Лінія на житловому масиві",
  "28-а Лінія на житловому масиві",
  "52-а Лінія на житловому масиві",
  "29-а лінія на житловому масиві",
  "53-а Лінія на житловому масиві",
  "32-а лінія на житловому масиві",
  "54-а Лінія на житловому масиві",
  "30-а лінія на житловому масиві",
  "55-а Лінія на житловому масиві",
  "31-а лінія на житловому масиві",
  "14-а Лінія на житловому масиві",
  "22-а Лінія на житловому масиві",
  "23-я лінія на житловому масиві",
  "12-а лінія на житловому масиві",
  "24-а Лінія на житловому масиві",
  "Чорноморського козацтва вул.",
  "36-а лінія на житловому масиві",
  "37-а Лінія на житловому масиві",
  "38-а Лінія на житловому масиві",
  "39-а лінія на житловому масиві",
  "40-а Лінія на житловому масиві",
  "10-а лінія на житловому масиві",
  "41-а Лінія на житловому масиві",
  "11-а Лінія на житловому масиві",
  "42-а Лінія на житловому масиві",
  "13-а Лінія на житловому масиві",
  "43-а Лінія на житловому масиві",
  "15-а Лінія на житловому масиві",
  "44-а Лінія на житловому масиві",
  "19-а Лінія на житловому масиві",
  "45-а Лінія на житловому масиві",
  "46-а Лінія на житловому масиві",
  "47-а Лінія на житловому масиві",
  "4-й Олександра Невського пров.",
  "1-а лінія 4-ої ст.Люстдорфської дороги",
  "1-а лінія 6-ої ст.Люстдорфської дороги",
  "3-я лінія 6-ої ст. Люстдорфської дороги",
  "4-а лінія  6-ої ст.Люстдорфської дороги",
  "5-а лінія  6-ої ст.Люстдорфської дороги",
  "6-а лінія  6-ої ст.Люстдорфської дороги",
  "7-а лінія  6-ої ст.Люстдорфської дороги",
  "2-а лінія 6-ої ст. Люстдорфської  дороги",
  "8-а  лінія  6-ої ст.Люстдорфської дороги",
  "11-а лінія 6-ої ст. Люстдорфської дороги",
  "12-а лінія 6-ої ст. Люстдорфської дороги",
  "13-а лінія 6-ої ст. Люстдорфської дороги",
  "13-а лінія 6-ої ст. Чорноморської дороги",
  "14-а лінія 6-ої ст. Люстдорфської дороги",
  "1-а Виноградна вул.",
  "1-а лінія 8-го березня вул.",
  "1-а Лінія Вільямса вул.",
  "1-а Пересипська вул.",
  "1-а Ползунова вул.",
  "1-а Проектована вул.",
  "1-а Проектувальна вул.",
  "1-а Садова вул.",
  "1-а Сортувальна вул.",
  "1-а Станційна вул.",
  "1-а Степова вул.",
  "1-й 8-го Березня пров.",
  "1-й Аеропортівський пров.",
  "1-й Академічний пров.",
  "1-й Амурський пров.",
  "1-й Бузковий пров.",
  "1-й Вапняний пров.",
  "1-й Данила Крижанівського пров.",
  "1-й Дачний пров.",
  "1-й Деревообробний пров.",
  "1-й Дунаєвський пров.",
  "1-й Житомирський пров.",
  "1-й Кіпарисний пров.",
  "1-й Керченський пров.",
  "1-й Китобійний пров.",
  "1-й Ключовий пров.",
  "1-й Кришталевий пров.",
  "1-й Кустанайський пров.",
  "1-й Лазурний пров.",
  "1-й Лузанівський пров.",
  "1-й Марата пров.",
  "1-й Моторний пров.",
  "1-й Наявний пров.",
  "1-й Олександра Невського пров.",
  "1-й Пересипський пров.",
  "1-й Першотравневий пров.",
  "1-й Ползунова пров.",
  "1-й Польовий пров.",
  "1-й Рівності пров.",
  "1-й Разумовський пров.",
  "1-й Розумовський пров.",
  "1-й Рясний пров.",
  "1-й Сергія Уточкіна пров.",
  "1-й Скляний пров.",
  "1-й Студентський пров.",
  "1-й Східчастий пров.",
  "1-й Травневий пров.",
  "1-й Український пров.",
  "1-й Химічний пров.",
  "1-й Шишкіна пров.",
  "1-й Ювілейний пров.",
  "1-й Юннатів пров.",
  "10-а вулиця",
  "10-а лінія 6-ої ст. Люстдорфської дороги",
  "10-а Пересипська вул.",
  "10-а Суворівська вул.",
  "10-го Квітня вул.",
  "10-го Квітня площа.",
  "11-а Вулиця",
  "12-а лінія 6-ої ст. Чорноморської дороги",
  "12-а лінія Дачі Ковалевського",
  "15-а лінія 6-ої ст. Люстдорфської дороги",
  "16-а лінія 6-ої ст. Люстдорфської дороги",
  "17-а лінія 6-ої ст. Люстдорфської дороги",
  "18-а лінія 6-ої ст. Люстдорфської дороги",
  "19-а лінія 6-ої ст. Люстдорфської дороги",
  "2-а Виноградна вул.",
  "2-а Лінія Демченко Марії вул.",
  "2-а Лагерна вул.",
  "2-а Ползунова вул.",
  "2-а Проектна вул.",
  "2-а Садова вул.",
  "2-а Станційна вул.",
  "2-а Степова вул.",
  "2-й  Академічний пров.",
  "2-й  Уральський пров.",
  "2-й Аеропортівський пров.",
  "2-й Амундсена пров.",
  "2-й Амурський пров.",
  "2-й Артилерійський пров.",
  "2-й Басейний пров.",
  "2-й Бузковий пров.",
  "2-й Водяний пров.",
  "2-й Дачний пров.",
  "2-й Деревообробний пров.",
  "2-й Другої вулиці пров.",
  "2-й Дунаєвського пров.",
  "2-й Західний пров.",
  "2-й Китобійний пров.",
  "2-й Ключовий пров.",
  "2-й Костанді пров.",
  "2-й Кустанайський пров.",
  "2-й Лазурний пров.",
  "2-й Лермонтовський пров.",
  "2-й Лиманчик",
  "2-й Лиманчик 5-а Лінія",
  "2-й Лузанівський пров.",
  "2-й Магнітогорський пров.",
  "2-й Марії Демченко пров.",
  "2-й Марата пров.",
  "2-й Морський пров.",
  "2-й Моторний пров.",
  "2-й Наявний пров.",
  "2-й Новгородський пров.",
  "2-й Олександра Невського пров.",
  "2-й Пересипьский узвіз",
  "2-й Першотравневий пров.",
  "2-й Ползунова пров.",
  "2-й Польовий пров.",
  "2-й Рівності пров.",
  "2-й Розумовський пров.",
  "2-й Скляний пров.",
  "2-й Стаханівський пров.",
  "2-й Степний пров.",
  "2-й Студентський пров.",
  "2-й Східчастий пров.",
  "2-й Травневий пров.",
  "2-й Український пров.",
  "2-й Хімічний пров.",
  "2-й Чапаївський пров.",
  "2-й Шишкіна пров.",
  "2-й Шостої вулиці пров.",
  "2-й Ювілейний пров.",
  "2-й Юннатів пров.",
  "3-й Аеропортівський пров.",
  "3-й Амундсена пров.",
  "3-й Амурський пров.",
  "3-й Басейний пров.",
  "3-й Водопровідний пров.",
  "3-й Деревообробний пров.",
  "3-й Дунаєвського пров.",
  "3-й Житомирський пров.",
  "3-й Західний пров.",
  "3-й Керченський пров.",
  "3-й Кипарисний пров.",
  "3-й Костанді пров.",
  "3-й Лазурний пров.",
  "3-й Магнітогорський пров.",
  "3-й Моторний пров.",
  "3-й Наявний пров.",
  "3-й Олександра Невського пров.",
  "3-й Проектований пров.",
  "3-й Скляний пров.",
  "3-й Студентський пров.",
  "3-й Тимірязєва пров.",
  "3-й Травневий пров.",
  "3-й Український пров.",
  "3-й Хімічний пров.",
  "3-й Шишкіна пров.",
  "3-й Юннатів пров.",
  "3-я Виноградна вул.",
  "3-я Садова вул.",
  "3-я Станційна вул.",
  "3-я Степова вул.",
  "4-а Вулиця",
  "4-а Лінія Марії Демченко вул.",
  "4-а Садова вул.",
  "4-а ст. Люстдорфської дороги вул.",
  "4-а Степова вул.",
  "4-й Амурський пров.",
  "4-й Басейний пров.",
  "4-й Деревообробний пров.",
  "4-й Житомирський пров.",
  "4-й Західний пров.",
  "4-й Лазурний пров.",
  "4-й Локомотивний пров.",
  "4-й Наявний пров.",
  "4-й Проектований пров.",
  "4-й Стахановський пров.",
  "4-й Студентський пров.",
  "4-й Тимірязєва пров.",
  "4-й Травневий пров.",
  "4-та ст. Люстдорфської дороги",
  "40 років Перемоги вул.",
  "5-а Вулиця",
  "5-й  Проектуємий пров.",
  "5-й Басейний пров.",
  "5-й Деревообробний пров.",
  "5-й Лазурний пров.",
  "5-й Наявний пров.",
  "5-й Студентский пров.",
  "5-й Тимірязєва пров.",
  "5-й Травневий пров.",
  "6-а Вулиця",
  "6-а Садова вул.",
  "6-й Аеропортівський пров.",
  "6-й Басейний пров.",
  "6-й Лазурний пров.",
  "6-й Наявний пров.",
  "7-а Степова вул.",
  "7-й Наявний пров.",
  "8-го Березня вул.",
  "9-а Вулиця",
  "9-а лінія  6-ої ст.Люстдорфськоїдороги",
  "9-а Лінія Дачі Ковалевського вул.",
  "Івана Франка вул.",
  "Єврейська вул.",
  "Єлісаветградський пров.",
  "Єнисейська вул.",
  "Єфімова вул.",
  "Іванівський переїзд",
  "Іванівський проїзд",
  "Івана Мазепи вул.",
  "Івана Франка пров.",
  "Ігоря Іванова вул.",
  "Іллічівська вул.",
  "Іллічівська дорога вул.",
  "Інбер Вери вул.",
  "Індійська вул.",
  "Інститутська вул.",
  "Іподромний пров.",
  "Іспанська вул.",
  "Іспанський пров.",
  "Італійський бульв.",
  "Абрикосовий пров.",
  "Авангардна вул.",
  "Авдєєва-Чорноморського вул.",
  "Агрономічна вул.",
  "Агрономічний пров.",
  "Аеродромна вул.",
  "Аеродромний пров.",
  "Аеропортівська вул.",
  "Аеропортівський пров.",
  "Азарова вул.",
  "Азовський пров.",
  "Академіка Богатського вул.",
  "Академіка Вавілова вул.",
  "Академіка Воробйова вул.",
  "Академіка Гамалея вул.",
  "Академіка Гаркавого вул.",
  "Академіка Глушка просп.",
  "Академіка Панкратової вул.",
  "Академічний пров.",
  "Алмазна вул.",
  "Амвросія Бучми вул.",
  "Амундсена 142, 10 Лінія",
  "Амундсена 142, 11 Лінія",
  "Амундсена 142, 12 Лінія",
  "Амундсена 142, 6 Лінія",
  "Амундсена 142, 7 Лінія",
  "Амундсена 142, 8 Лінія",
  "Амундсена 142, 9 Лінія",
  "Амундсена 142, Горіхова",
  "Амундсена 142, Правди",
  "Амундсена вул.",
  "Амундсена пров.",
  "Амурська вул.",
  "Ананьївська вул.",
  "Ангарська вул.",
  "Аполлона Скальковського пров.",
  "Аркадіївський пров.",
  "Аркадійська алея вул.",
  "Артезіанська вул.",
  "Артилерійський пров.",
  "Архітекторська вул.",
  "Архітектурна вул.",
  "Асташкіна вул.",
  "Асташкіна пров.",
  "Астрономічна вул.",
  "Астрономічний пров.",
  "Ахматової вул.",
  "Ашхабадська вул.",
  "Бібліотечна вул.",
  "Білоруська вул.",
  "Біляївська вул.",
  "Бірюкова вул.",
  "Бісквітний пров.",
  "Бабеля вул.",
  "Багрицького вул.",
  "Бадаєва Павла пров.",
  "Бажана вул.",
  "Базарна вул.",
  "Базова вул.",
  "Байдарочний пров.",
  "Байкальська вул.",
  "Банний пров.",
  "Бахчова вул.",
  "Баштанна вул.",
  "Безіменний пров.",
  "Бернардацці вул.",
  "Бессарабська вул.",
  "Бехтерева вул.",
  "Благовидової пров.",
  "Богатського бульв.",
  "Богданова пров.",
  "Богуна вул.",
  "Болградська вул.",
  "Болградське шосе",
  "Бориса Дерев’янка площа",
  "Бориса Жолкова вул.",
  "Бориса Літвака вул.",
  "Бородінська вул.",
  "Бородінський пров.",
  "Ботанічний пров.",
  "Братів Поджіо вул.",
  "Братська вул.",
  "Брестська вул.",
  "Бригадна вул.",
  "Бугаївська вул.",
  "Будівельна вул.",
  "Будівельний пров.",
  "Бузкова вул.",
  "Бузковий проїзд",
  "Бузковий пров.",
  "Буніна вул.",
  "Бучми Амвросія вул.",
  "Вєтрова вул.",
  "Вєтрогонова вул.",
  "Відважних вул.",
  "Військовий Узвіз",
  "Вільгельма Габсбурга пров.",
  "Віри Холодної площа",
  "Вірського вул.",
  "Вітебська вул.",
  "Вітрогонова вул.",
  "Вітчизняна вул.",
  "Валіховський пров.",
  "Ванний пров.",
  "Варламова вул.",
  "Василя Кандинського вул.",
  "Василя Симоненка вул.",
  "Василя Стуса вул.",
  "Ватутіна вул.",
  "Векслера вул.",
  "Векслера пров.",
  "Велика Арнаутська вул.",
  "Велика Садова вул.",
  "Вершинна вул.",
  "Весіння вул.",
  "Весняна вул.",
  "Ветеранів праці вул.",
  "Виїзна вул.",
  "Винниченка вул.",
  "Виноградний пров.",
  "Висока вул.",
  "Виставочна вул.",
  "Володимира Винниченка вул.",
  "Володимира Сосюри вул.",
  "Володимира Хавкіна вул.",
  "Волоколамська",
  "Волоколамська вул.",
  "Воробйова вул.",
  "Вороного  Миколи вул.",
  "Воронцовський пров.",
  "Врожайна вул.",
  "Вронського вуд.",
  "Вчительська вул.",
  "В’ячеслава Чорновола вул.",
  "Гаванна вул.",
  "Гагаріна вул.",
  "Гагаріна пров.",
  "Гагарінське плато.",
  "Гагарінський пров.",
  "Газовий пров.",
  "Гайова вул.",
  "Гамова парк",
  "Ганни Ахматової вул.",
  "Гаріна вул.",
  "Гаршина вул.",
  "Гаршина пров.",
  "Гастелло вул.",
  "Гвардійська вул.",
  "Генерала Ватутіна вул.",
  "Генерала Вишневського пров.",
  "Генерала Гудовича вул.",
  "Генерала Плієва вул.",
  "Генерала Швигіна вул.",
  "Геологічна вул.",
  "Георгія Гамова сквер",
  "Геранієва вул.",
  "Геранева вул.",
  "Героїв Прикордонників вул.",
  "Герцена вул.",
  "Герцена пров.",
  "Гетьманський пров.",
  "Глиняна вул.",
  "Говорова вул.",
  "Гоголя вул.",
  "Горизонтальна вул.",
  "Городна вул.",
  "Городня вул.",
  "Градоначальницька вул.",
  "Гранатна вул.",
  "Гранатний пров.",
  "Грецька площа",
  "Грибоєдова вул.",
  "Грузинська вул.",
  "Грушевського вул.",
  "Дігтярна вул.",
  "Дідріхсона вул.",
  "Далекосхідна вул.",
  "Дальницька вул.",
  "Дальницьке шосе.",
  "Дальня вул.",
  "Дача Ковалевськго 142, 9 Лінія",
  "Дача Ковалевського",
  "Дача Ковалевського 142 вул. Правди",
  "Дача Ковалевського 142 лінія12",
  "Дача Ковалевського 142, 8 лінія",
  "Дача Ковалевського вул.",
  "Дача Ковалевського.142, 7 лінія",
  "Дача Ковалевського142, 6 лінія",
  "Дачна вул.",
  "Дачний пров.",
  "Дворянська вул.",
  "Деволанівський узвіз",
  "Дегтярна вул.",
  "Декабристів вул.",
  "Деревообробна вул.",
  "Державіна вул.",
  "Державина пров.",
  "Дерибасівська вул.",
  "Десантна вул.",
  "Десантний бульв.",
  "Десятого квітня вул.",
  "Джутовий пров.",
  "Дмитра Донського пров.",
  "Дністровська вул.",
  "Добрянського вул.",
  "Доватора генерала вул.",
  "Докова вул.",
  "Дорожна вул.",
  "Достоєвського вул.",
  "Достоєвського пров.",
  "Друга Набережна вул.",
  "Дружний 1-я лінія",
  "Дружний 2-а лінія",
  "Дружний 3-я лінія",
  "Дружний ж/м",
  "Дубова вул.",
  "Думська площа",
  "Дунаєва пров.",
  "Дунаєвського вул.",
  "Дунайська вул.",
  "Дюківська вул.",
  "Дюковська вул.",
  "Економічний пров.",
  "Елеваторна вул.",
  "Естафетна вул.",
  "Естонська вул.",
  "Естонський пров.",
  "Жванецького бульв.",
  "Жемчужна вул.",
  "Житомирська вул.",
  "Житомирський пров.",
  "Жоліо-Кюрі вул.",
  "Заводська вул.",
  "Задніпровськоговул.",
  "Заньковецької вул.",
  "Зарічна вул.",
  "Заславського вул.",
  "Затишна вул.",
  "Зелений пров.",
  "Зелений просп.",
  "Зернова вул.",
  "Злакова вул.",
  "Зоринська вул.",
  "Йоганна Гєна вул.",
  "Йосипа Тимченка вул.",
  "Кільовий пров.",
  "Кільцева вул.",
  "Кінна вул.",
  "Кавунова вул.",
  "Казанська вул.",
  "Казковий пров.",
  "Каманіна вул.",
  "Каманіна пров.",
  "Канатний пров.",
  "Капітана Гаврікова вул.",
  "Капітана Кравцова вул.",
  "Кар'єрна вул",
  "Карантинна вул.",
  "Карантинний узвіз",
  "Каретний пров.",
  "Каришковського вул.",
  "Карпатська вул.",
  "Картамишевська вул.",
  "Картамишевський пров.",
  "Каспійський пров.",
  "Катерининська вул.",
  "Катерининська площа",
  "Квіткова вул",
  "Квіткова вул.",
  "Квітковий пров.",
  "Квітнева вул.",
  "Кедровий пров.",
  "Київське шосе",
  "Кибальчича вул.",
  "Клименко вул.",
  "Клинова вул.",
  "Ключовий пров.",
  "Книжковий пров.",
  "Князівська вул.",
  "Коблевська вул.",
  "Ковалевська вул.",
  "Ковалевського пров.",
  "Ковалевського узвіз",
  "Ковальська вул.",
  "Ковиловий пров.",
  "Колгоспна вул.",
  "КОЛЕКТИВНИЙ Пров.",
  "Колонічна вул.",
  "Колонтаївська вул.",
  "Комітетська вул.",
  "Компасний пров.",
  "Композитора Глинки вул.",
  "Композитора Глинки пров.",
  "Композитора Ніщинського вул.",
  "Кондрашина вул.",
  "Кондренко вул.",
  "Конструкторський пров.",
  "Контр-адмірала Луніна вул.",
  "Кордонна вул.",
  "Кордонний пров.",
  "Корнюшина вул.",
  "Коровицького вул.",
  "Короткий пров.",
  "Косвена вул.",
  "Косовська вул.",
  "Косовський пров.",
  "Косой пров.",
  "Костеловської пров.",
  "Кострова вул.",
  "Кострова пров.",
  "Котляревського вул.",
  "Коцюбинського вул.",
  "Крайня вул.",
  "Красна вул.",
  "Красний пров.",
  "Краснослобідська вул.",
  "Кренкеля вул.",
  "Кренкеля пров.",
  "Кривобалківська вул.",
  "Крижанівський пров.",
  "Крилова вул.",
  "Кримський пров.",
  "Кришталева вул.",
  "Кришталевий пров.",
  "Кропивницького",
  "Кругова вул.",
  "Круговий пров.",
  "Крушельницького вул.",
  "Крушельницькой пров.",
  "Кузнечна вул.",
  "Куликове Поле",
  "Куніци вул.",
  "Куниці вул.",
  "Купріна вул.",
  "Курганська вул.",
  "Кустанайська вул.",
  "Кутова вул.",
  "Кутузова вул.",
  "Лідерсівський бульв.",
  "Лідерсовський бульв.",
  "Лізи Чайкіної вул.",
  "Літакова вул.",
  "Літературна вул.",
  "Літній пров.",
  "Літня вул.",
  "Лавкова вул.",
  "Лавочна вул.",
  "Ламаний пров.",
  "Ланжеронівська вул.",
  "Ланжеронівський узвіз",
  "Ласточкіна вул.",
  "Латвійський узвіз",
  "Леваневського вул.",
  "Леваневського пров.",
  "Леваневського тупик",
  "Леонова вул.",
  "Леонтовича вул.",
  "Лермонтовський пров.",
  "Леха Качинського вул.",
  "Липнева вул.",
  "Листяна вул.",
  "Локальна вул.",
  "Локомотивний пров.",
  "Ломаний пров.",
  "Луганська вул.",
  "Лугова вул.",
  "Лузанівка пляж",
  "Лузанівська вул.",
  "Львівська вул.",
  "Львівський пров.",
  "Льва Толстого вул.",
  "Любашевський пров.",
  "Людмили Гінзбург пров.",
  "Лютеранський пров.",
  "Лядова вул.",
  "Ляпідєвського вул.",
  "Ляпідевського вул.",
  "Ляпунова пров.",
  "Місячна вул.",
  "Мітракова пров.",
  "Мічуріна вул.",
  "Мічуріна пров.",
  "Мічурина площа",
  "Магістральна вул.",
  "Макаренка вул.",
  "Макарова вул.",
  "Макова вул.",
  "Маковий пров.",
  "Маковського пров.",
  "Мала Садова вул.",
  "Малиновський пров.",
  "Маловського вул.",
  "Манежна вул.",
  "Манежний пров.",
  "Марії Демченко вул.",
  "Марії Демченко, 4-а Лінія",
  "Марії Демченко. 5-а Лінія",
  "Марії Демченко.1-а  Лінія",
  "Марії Демченко.2-а Лінія",
  "Марії Демченко.6-а Лінія",
  "Маріїнська вул.",
  "Маразліївська вул.",
  "Марата вул.",
  "Маринеско узвіз",
  "Маршрутна вул.",
  "Массив 10",
  "Мастерскій пров.",
  "Матроський узвіз",
  "Матюшенка вул.",
  "Матюшенко вул.",
  "Мацієвської вул.",
  "Мацієвської узвіз",
  "Мациєвської вул.",
  "Мачтова вул.",
  "Машинобудівний  пров.",
  "Маяковського пров.",
  "Маячний пров.",
  "Металістів вул.",
  "Миколаївська дорога вул.",
  "Миколи Аркаса вул.",
  "Миколи Боровського вул.",
  "Миколи Воронова вул.",
  "Миколи Гоголя вул.",
  "Миколи Гумільова вул.",
  "Миколи Міхновського вул.",
  "Миколи Огренича вул.",
  "Мирна вул.",
  "Митна площа",
  "Митракова пров.",
  "Михайлівська площа",
  "Михайла Задніпровського вул.",
  "Млинова вул.",
  "Могилівська вул.",
  "Молоді площа",
  "Молодіжна вул.",
  "Молодогвардійська вул.",
  "Молокова пров.",
  "Монгольська вул.",
  "Морехідна вул.",
  "Морехідний пров.",
  "Морська вул.",
  "Морський пров.",
  "Москвіна пров.",
  "Москеті пров.",
  "Мостовий пров.",
  "Моторна вул.",
  "Мукачівський пров.",
  "Мусіна пров.",
  "Ніжинська вул.",
  "Нікітіна вул.",
  "Нафтовиків пров.",
  "Нахімова пров.",
  "Невського вул.",
  "Недєліна вул.",
  "Нежданової вул.",
  "Нежданової пров.",
  "Незалежності площа",
  "Незалежності просп.",
  "Некрасова пров.",
  "Немировича-Данченка вул.",
  "Нерубайская/Училищная",
  "Нерубайська вул.",
  "Нескучна вул.",
  "Нефтяників вул.",
  "Нечипуренка пров.",
  "Нечуя-Левицького вул.",
  "Новгородський пров.",
  "Новий пров.",
  "Новоберегова вул.",
  "Новомосковська дорога вул.",
  "Новоселівська вул.",
  "Новоукраїнський пров.",
  "Новощіпний Ряд вуд.",
  "Новощіпний Ряд вул.",
  "Об'їздна дорога вул.",
  "Обільна вул.",
  "Обнорського вул.",
  "Обривиста вул.",
  "Овідіопольска дорога вул.",
  "Овідіопольська вулиця",
  "Овідіопольська дорога",
  "Овідіопольська дорога вул.",
  "Овідіопольська Дуга вул.",
  "Овідіопольський пров.",
  "Овражний пров.",
  "Огородна вул.",
  "Одеський пров.",
  "Озерна вул.",
  "Окружна вул.",
  "Олексіївська площа",
  "Олексія Косяченка вул.",
  "Олександрівський просп.",
  "Олександра Блока вул.",
  "Олександра Вронського вул.",
  "Олександра Кутузакія вул.",
  "Олександра Матросова пров.",
  "Олександра Стурдзи пров.",
  "Олександра Юрженка пров.",
  "Ольгіївська вул.",
  "Ольгіївський узвіз",
  "Омська вул.",
  "Онілової пров.",
  "Оранжерейний пров.",
  "Осіння вул.",
  "Осипова вул.",
  "Остапа Вишні вул.",
  "Отрадна вул.",
  "Південна вул.",
  "Південно-санаторний пров.",
  "Підйомний пров.",
  "Пілотна вул.",
  "Піонерська вул.",
  "Пішеніна вул.",
  "Пішеніна Федіра вул.",
  "Пішонівська вул.",
  "Павла Шклярука вул.",
  "Павлодарська вул.",
  "Палубна вул.",
  "Палубний пров.",
  "Панаса Мирного вул.",
  "Парашутна вул.",
  "Паркова вул.",
  "Парковий пров.",
  "Пасіонарії вул.",
  "Пастера вул.",
  "Патріотична вул.",
  "Перепечка вул.",
  "Перовської Софії вул.",
  "Перша вул.",
  "Перший 6-ї вулиці пров.",
  "Першотравнева вул.",
  "Пестеля вул.",
  "Пестеля пров.",
  "Петра Івахненка вул.",
  "Петра Колнишевського пров.",
  "Петра Лещенка вул.",
  "Петра Ніщинського вул.",
  "Петренко пров.",
  "Пироговський пров.",
  "Писарєва вул.",
  "Плигуна вул.",
  "Поїздна вул.",
  "Подільська вул.",
  "Покровський пров.",
  "Ползунова вул.",
  "Полунична вул.",
  "Польова вул.",
  "Польська вул.",
  "Польський узвіз",
  "Поперечний пров.",
  "Поселкова вул.",
  "Посмітного вул.",
  "Похила вул.",
  "Поштова вул.",
  "Поштовий пров.",
  "Правди вул.",
  "Преображенська вул.",
  "Привозна вул.",
  "Привокзальна площа",
  "Привокзальний пров.",
  "Приморська вул.",
  "Приморський бульв.",
  "Приморський пров.",
  "Прирейкова вул.",
  "Проїзний пров.",
  "Проектуєма вул.",
  "Пролетарський пров.",
  "Промислова вул.",
  "Промисловий пров.",
  "Просвіти вул.",
  "Просьолочна вул.",
  "Проточний пров.",
  "Професора Коровицького вул.",
  "Профспілкова вул.",
  "Проценка вул.",
  "Проценко вул.",
  "Пугачова вул.",
  "Путьова вул.",
  "Пшенична вул.",
  "Рівний пров.",
  "Різдвяна вул.",
  "Різовська вул.",
  "Рабіна вул.",
  "Радіальна вул.",
  "Радіальний пров.",
  "Радіо вул.",
  "Радісний пров.",
  "Радужна вул.",
  "Радянський пров.",
  "Разумовский пров.",
  "Разумовська вул.",
  "Райдужний масив",
  "Рачкова вул.",
  "Рекордна вул.",
  "Рекордний пров.",
  "Репіна вул.",
  "Рибальська балка вул.",
  "Рибальська вул.",
  "Ризька вул.",
  "Розкидайлівська вул.",
  "Розумовська вул.",
  "Розумовський пров.",
  "Романа Кармена вул.",
  "Романа Шухевича вул.",
  "Романтиків вул.",
  "Сєрова вул.",
  "Сєченова вул.",
  "Сєченова пров.",
  "Сільськогосподарський пров.",
  "Сінна вул.",
  "Січневий пров.",
  "Січневого повстання  пров.",
  "Сабанєєв Міст вул.",
  "Сабанський пров.",
  "Савранский пров.",
  "Савранська вул.",
  "Садиковська вул.",
  "Садова Балка",
  "Салтикова-Щедріна вул.",
  "Самарська  вул.",
  "Самарська вул.",
  "Самодіяльна вул.",
  "Санітарна вул.",
  "Сашка Хорошенка вул.",
  "Світла вул.",
  "Свободи просп.",
  "Севастопольський пров.",
  "Селекційна вул.",
  "Селищна вул.",
  "Селищний пров.",
  "Селянська вул.",
  "Семене Палія вул.",
  "Сергія Ейзенштейна пров.",
  "Сергія Ядова вул.",
  "Серединський сквер",
  "Середня вул.",
  "Серова вул.",
  "Серогодського вул.",
  "Сибірська вул.",
  "Симиренка вул.",
  "Скісна вул.",
  "Скидановська вул.",
  "Скидановський узвіз",
  "Скляна вул.",
  "Слав'янська вул.",
  "Слави пров.",
  "Слобідська вул.",
  "Смоленська вул.",
  "Собінова вул.",
  "Соборна вул.",
  "Соборна пл",
  "Соборна площа",
  "Совхозна вул. (с.Крижанівка)",
  "Сортувальний пров.",
  "Сосюри вул.",
  "Софіївська вул.",
  "Соціальна вул.",
  "Спиридонівська вул.",
  "Спортивна вул.",
  "Спортивний пров.",
  "Средня вул.",
  "Стікольна вул.",
  "Сталепрокатна вул.",
  "Старицького вул.",
  "Старобазарний сквер",
  "Старокінний пров.",
  "Старокиївське шосе",
  "Старопортофранківська вул.",
  "Старорізнична вул.",
  "Старосінна площа",
  "Стеклова вул.",
  "Степана Олійника узвіз",
  "Степана Разіна вул.",
  "Степна вул.",
  "Студена вул.",
  "Суворовська вул.",
  "Суднобудівна вул.",
  "Сумский пров.",
  "Сумська вул.",
  "Суперфосфатна вул.",
  "Супутників вул.",
  "Сурікова вул.",
  "Сьома вул.",
  "Таїрова вул.",
  "Таїровська вул.",
  "Танкістів вул.",
  "Танкерна вул.",
  "Танфільєва вул.",
  "Тарутинська вул.",
  "Творча вул.",
  "Текстильників вул.",
  "Тетяни Тесс вул.",
  "Технічний пров.",
  "Тимошенка Олександра вул.",
  "Тираспольська вул.",
  "Тираспольська площа",
  "Тираспольське шосе",
  "Тиха вул.",
  "Толбухіна вул.",
  "Тополева вул.",
  "Тополевая вул.",
  "Тополиний пров.",
  "Топольського вул.",
  "Топольського пров.",
  "Травневий пров.",
  "Тракторна вул.",
  "Троїцька вул.",
  "Трудова вул.",
  "Трудовий пров.",
  "Трудових резервів вул.",
  "Тургенєва вул.",
  "Туристська вул.",
  "Туристський пров.",
  "Угорська вул.",
  "Ударніков вул.",
  "Українська вул.",
  "Улітіна вул.",
  "Ульянівка ж/м",
  "Уманська вул.",
  "Умова вул.",
  "Університетський пров.",
  "Уральська вул.",
  "Уральський пров.",
  "Урицького вул.",
  "Урожайна вул.",
  "Усатівська вул.",
  "Успенський пров.",
  "Утьосова вул.",
  "Утьосова пров.",
  "Училищна вул.",
  "Учнівська вул.",
  "Ушинського пров.",
  "Уютна вул.",
  "Фігнер Віри вул.",
  "Фабрична вул.",
  "Февральська вул.",
  "Февральський пров.",
  "Флотский пров.",
  "Фурманова вул.",
  "Фурманова пров.",
  "Хімічна вул.",
  "Харьківська вул.",
  "Хвойна вул.",
  "Херсонський сквер",
  "Холмиста вул.",
  "Холодної Віри площа",
  "Художника Федорова вул.",
  "Хутірский пров.",
  "Хуторська вул.",
  "Хуторський пров.",
  "Ціолковського вул.",
  "Цебриковська вул.",
  "Цегельнозаводська вул.",
  "Цегляна вул.",
  "Цементний пров.",
  "Центральний аеропорт",
  "Цимлянська вул.",
  "Чайковського пров.",
  "Чапаєва вул.",
  "Чапаєва пров.",
  "Челюскінців вул.",
  "Червона вул.",
  "Червоний пров.",
  "Червоних Зір пров.",
  "Черкаська вул.",
  "Чернівецький пров.",
  "Чернігівська вул.",
  "Чернігівський пров.",
  "Черняховского вул.",
  "Черняховського вул.",
  "Четверта вул.",
  "Чорноморська вул.",
  "Чорноморців вул.",
  "Чубаївська вул.",
  "Чубаївський пров.",
  "Чумацька вул.",
  "Шахтинский пров.",
  "Шебелінський пров.",
  "Шевченка вул.",
  "Шевченка парк",
  "Шефська вул.",
  "Шилова вул.",
  "Ширшова вул.",
  "Ширяєвський пров.",
  "Шкільна вул.",
  "Шкодова гора вул.",
  "Шовкуненка вул.",
  "Шолохова вул.",
  "Шота Руставелі вул.",
  "Штильова вул.",
  "Штурвальна вул.",
  "Штурманська вул.",
  "Шухевича вул.",
  "Шухевича пров.",
  "Щіпний пров.",
  "Щедріна вул.",
  "Щоглова вул.",
  "Щоголєва вул.",
  "Щукіна вул.",
  "Юрія Олеші вул.",
  "Юхима Геллера вул.",
  "Яблунева вул.",
  "Ядова вул.",
  "Якірний пров.",
  "Якутська вул.",
  "Ялинкова вул.",
  "Ямська вул.",
  "Ямчитського вул.",
  "Янтарний пров.",
  "Ясіновського вул.",
  "Ясна вул.",
  "Яші Гордієнка вул.",
];

export default steets;