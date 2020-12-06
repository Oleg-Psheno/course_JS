var letters = ["A", "B", "C", "D", "E", "F", "G", "H"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8]
desk = document.querySelector("#desk");
desk.setAttribute("border", "1px solid black");



var str_count = 0;
for (let num of numbers) {
    if (num % 2 == 0) { var col = "white" } else { col = "black" };
    var new_str = document.createElement("div");
    new_str.style.display = "flex";
    var first_div = document.createElement("div");
    first_div.innerHTML = num;
    first_div.style.lineHeight = "50px";
    new_str.appendChild(first_div);
    for (let letter of letters) {
        id = letter + num;
        var new_div = document.createElement("div");
        new_div.id = id;
        // new_div.innerHTML = id; // - проверка нумерации
        new_div.style.width = "50px";
        new_div.style.height = "50px";
        new_div.style.textAlign = "center";
        new_div.style.color = "red";
        new_div.style.lineHeight = "50px";
        new_div.style.backgroundColor = col;
        new_str.append(new_div);
        if (col == "black") { col = "white" } else { col = "black" };
    }

    desk.prepend(new_str)
}

var last_str = document.createElement("div");
last_str.style.display = "flex";
last_str.style.paddingLeft = "8px";
for (let buk of letters) {
    var nd = document.createElement('div');
    nd.style.textAlign = "center";
    nd.style.width = "50px";
    nd.innerHTML = buk;
    last_str.append(nd)
}

desk.appendChild(last_str);


var figures = {
    "A1": "Л", "B1": "К", "C1": "С", "D1": "Ф", "E1": "К", "F1": "С", "G1": "К", "H1": "Л",
    "A2": "П", "B2": "П", "C2": "П", "D2": "П", "E2": "П", "F2": "П", "G2": "П", "H2": "П",
    "A8": "Л", "B8": "К", "C8": "С", "D8": "Ф", "E8": "К", "F8": "С", "G8": "К", "H8": "Л",
    "A7": "П", "B7": "П", "C7": "П", "D7": "П", "E7": "П", "F7": "П", "G7": "П", "H7": "П",
} // объект, содержащий расстановку фигур

for (var key in figures) {
    el = document.getElementById(key);
    el.innerHTML = figures[key];
}

