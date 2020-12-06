// 1 задание

function digitDescr(digit) {
    var obj = {
        'единицы': digit % 10,
        'десятки': parseInt((digit % 100) / 10),
        'сотни': parseInt(digit / 100)
    }
    return obj
}

f = digitDescr(423);
console.log(f);

// 2 задание в прошлый урок делал на объектах

