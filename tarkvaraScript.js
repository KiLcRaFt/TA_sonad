// masiiv eesti sõnadega
const sonad=[
    'teostus',
    'algorütm',
    'kavand',
    'kasutajaliides',
    'mudel',
    'andmebaasi skeem',
    'standart',
    'tsükkel',
    'andmetöötlus',
    'andmestruktuur',
    'arenduskeskkond',
    'projektihaldus tööriist',
    'kavandamine',
    'iteratsioon',
    'parandus',
    'koskmudel',
    'agiilne mudel',
    'spiraalne mudel',
    'inkrementaalne mudel',
    'nõudmised',
    'realiseerimine',
    'testimine',
    'integreerimine',
    'kasutamine',
    'hooldus',
    'eelised',
    'puudused',
    'elutsükkel',
    'arendamine',
    'valideerimine'
];


// masiiv vene sõnadega
const venesonad=[
    'реализация',
    'алгоритм',
    'план',
    'пользовательский интерфейс',
    'модель',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектами',
    'планирование',
    'итерация',
    'исправление',
    'каскадная модель',
    'агильная модель',
    'спиральная модель',
    'инкрементальная модель',
    'требования',
    'реализация',
    'тестирование',
    'интеграция',
    'использование',
    'обслуживание',
    'преимущиства',
    'недостатки',
    'жизненный цикл',
    'разработка',
    'валидрование'
];
function randomSonad(){

    //random sõnad - arv
    const juhuslikSona = Math.floor(Math.random()*sonad.length);

    //võtme random sõna massivist
    const sona = sonad[juhuslikSona];

    //lisame HTML lehele

    document.getElementById("random-sona").innerHTML=sona;
}

function kontrollima() {
    // võtme HTML lehele elementid
    const sona = document.getElementById("random-sona").innerText;
    const venesona = document.getElementById("kontroll").value;

    // saime indeksid nendest elemendi
    const indEesti = sonad.indexOf(sona);
    const indVene = venesonad.indexOf(venesona);

    // Valideerimine
    if (indEesti === indVene && indEesti !== -1 && indVene !== -1) {
        document.getElementById("vastus").innerHTML = "Õige vastus!";
    } else {
        document.getElementById("vastus").innerHTML = "Vale vastus(((";
    }
}


function randomSonadvene(){

    //random sõnad - arv
    const juhuslikSona = Math.floor(Math.random()*venesonad.length);

    //võtme random sõna massivist
    const sona = venesonad[juhuslikSona];

    //lisame HTML lehele

    document.getElementById("random-sonavene").innerHTML=sona;
}

function kontrollimavene() {
    // võtme HTML lehele elementid
    const sona = document.getElementById("random-sonavene").innerText;
    const eestisona = document.getElementById("kontrollvene").value;

    // saime indeksid nendest elemendi
    const indVene = venesonad.indexOf(sona);
    const indEesti = sonad.indexOf(eestisona);

    // Valideerimine
    if (indVene === indEesti && indVene !== -1 && indEesti !== -1) {
        document.getElementById("vastusvene").innerHTML = "Õige vastus!";
    } else {
        document.getElementById("vastusvene").innerHTML = "Vale vastus(((";
    }
}