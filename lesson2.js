
// 1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - в данном случае присваивается сразу увеличенное значение
d = b++; alert(d);           // 1 - здесь значение сначала присваивается старое значение а потом инкрементное
c = (2 + ++a); alert(c);      // 5 - здесь изначально значение а = 2 и суммируется с увеличенным значением
d = (2 + b++); alert(d);      // 4 - изначальное значение 2, с ним суммируется а после происходит инкрементное увеличение
alert(a);                    // 3 - на предыдущих шагах происходило увеличение
alert(b);                    // 3 - на предыдущих шагах происходило увеличение

// 2 

var a = 2;
var x = 1 + (a *= 2); // x = 5, т.к. a*=2 > a=a*2 > 2*2 

// 3 

var a = -3
var b = 2

if (a >= 0 && b >= 0) {
    alert(a - b)
} else if (a < 0 && b < 0) {
    alert(a * b)
} else {
    alert(a + b)
}

// 4 

var a = 8;

switch (a) {
    case 1: alert(1);
    case 2: alert(2);
    case 3: alert(3);
    case 4: alert(4);
    case 5: alert(5);
    case 6: alert(6);
    case 7: alert(7);
    case 8: alert(8);
    case 9: alert(9);
    case 10: alert(10);
    case 11: alert(11);
    case 12: alert(12);
    case 13: alert(13);
    case 14: alert(14);
    case 15: alert(15);
}

// 5
function summ(a, b) {
    return (a + b);
}

function subt(a, b) {
    return (a - b);
}

function mult(a, b) {
    return (a * b);
}

function div(a, b) {
    return (a / b);
}

// 6 


function mathOperations(a, b, operation) {
    return operation(a, b)
}

function mathOperations2(a, b, operation) {
    switch (operation) {
        case summ: return 'Сумма чисел: ' + operation(a, b)
            break;
        case subt: return 'Разность чисел: ' + operation(a, b)
            break;
        case mult: return 'Произведение чисел: ' + operation(a, b)
            break;
        case div: return 'Частное чисел: ' + operation(a, b)
            break;
    }
}


// 7 

alert(null > 0) // false т.к. null это отсутствие значения
alert(null == 0) // false т.к. null это отсутствие значения
alert(null >= 0) // true т.к. JS  странный

// 8 
function power(val, pow) {
    if (pow == 1) {
        return val
    }
    return power(val, pow - 1) * val
}


alert(power(2, 3))