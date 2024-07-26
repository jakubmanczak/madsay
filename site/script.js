const part1 = [
    "Kocham Kaczmarskiego",
    "Kupiłem makbuka",
    "Jula wyjdź z pokoju",
    "Nie mogę pójść na kebaba",
    "Nie piję alkoholu",
    "Uczyłem się dużo na maturę z matematyki",
    "Moim hobbi jest robienie zdjęć",
    "Co chcesz",
    "Nie pamiętam co było zadane do rabendy",
    "Słuchałem o tym podkast",
    "Taki zakup to jest okazja",
    "Liczyłem że jeszcze ktoś z klasy pójdzie na to ejaj",
    "Serio progi spadną w tym roku",
    "Miałem odczytane ale nie widziałem tego",
    "Nie używam Instagrama",
    "Odwiózłbym cię ale szkoda mi paliwa",
    "Umieram generalnie",
    "Spojrzę potem",
    "Profesor Kocik złamał nogę",
    "Homoseksualizm powinien zginąć po prostu",
    "Ja bym z chęcią pogadał o menelach",
    "Jestem wzorowym rasistą",
    "Tutaj widać motyw wsiura",
    "Ja ci powiem tak:",
    "Miałem kolegę co się nazywał beton",
    "Widzę że masz myszkę od Googla",
];

const part2 = [
    "i muszę kupić nowe słuchawki",
    "i muszę wejść na gorący strzał na xkomie",
    "i muszę przegrać sobie flaki",
    "i niedawno kupiłem zestaw płyt winylowych",
    "i mój nowy aparat jest już stary",
    "i wydałem na to piętnaście tysięcy",
    "i muszę wrócić odrobić zadanie z matmy",
    "i to nie są korki, tylko kurs maturalny",
    "i wiedz, że bez tego nie dostałbyś dobrej pracy potem",
    "i mi z tym bardzo dobrze",
    "i zaraz powiem ile to wyjdzie",
    "i już się mnie nie pozbędą",
    "no bo w pracy byłem",
    "i stało się to o czym mówiłem",
    "i nie mówi się \"szczym\"",
    "i pół roku waliło barszczem",
    "i to zadanie ktoś wredny układał",
    "i pani Sandra nas chyba pogryzie",
    "i to jest ten moment kiedy przeżuwasz bułkę",
    "i ja miałem kolegę co się nazywał beton",
    "i cała klasa przez to heiluje",
    "yy SHUSHHUSJUSJUHSUAJSDHSUHUSJUSDHSDHUS",
    "i ja to szanuję",
    "i to za 500zł",
    "i to za 5000zł",
];

const part3 = [
    "bo ja słuchałem o tym podkast.",
    "bo tak mi czat dżipiti powiedział.",
    "bo tak to jest i tyle.",
    "bo ostatnio jakoś dziwnie się zachowujesz.",
    "bo muszę dobrze zdać maturę z matematyki.",
    "bo ja się dostałem na ejaj na polibudzie.",
    "bo ja właśnie idę spać cycu.",
    "bo to jest bardzo szkodliwe.",
    "tylko z kibla zejdę.",
    "ale pewności nie mam.",
    "bo musiałem doliczyć opłatę amortyzacyjną.",
    "huehuehuheu.",
    "ale wierzę ci na słowo.",
    "aż mi się przypomniało jak srałem na Małysza na lotnisku w Turcji.",
    "bo stało się to o czym mówiłem.",
    "kekw.",
    "bo poszedłem na płatny event Maturalnych.",
    "no bo kobiety nie myślą.",
    "bo ktoś zapłodnił Jonasza.",
    "i koniec tematu.",
    "bo ja mam to w dupie.",
    "a ja mam to w dupie i koniec tematu.",
    "bo 3 nie jest równe 1 paradoksalnie.",
    "paradoksalnie.",
    "bo była burza a my nie mamy falochronu.",
    "O! Pizza 3D!",
    "bo ja miałem kolegę co się nazywał beton.",
    "bo jestem spowolniony.",
    "bo ja muszę złożyć ofiarę z siostry pod routerem.",
    "bo cobblestone to takie drewno.",
];

function generate() {
    let text = "";
    text += part1[Math.floor(Math.random() * part1.length)] + " ";
    text += part2[Math.floor(Math.random() * part1.length)] + " ";
    text += part3[Math.floor(Math.random() * part1.length)];

    document.getElementById("madtext").innerText = text;
}

window.onload = generate;

document.getElementById('madgenerate').addEventListener('click', generate);