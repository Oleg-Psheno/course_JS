// 1 задание

var x = [];
var i = 1;
while (i <= 100) {
    let count_div = 0;
    for (let k = 1; k <= i; k++) {
        if (i % k === 0) {
            count_div++
        }
    }
    if (count_div <= 2) {
        x.push(i)
    }
    i++
}

console.log(x)

// 2 задание

var good_1 = { name: "Стол", price: 5000 }
var good_2 = { name: "Кровать", price: 12000 }

cart = [[good_1, 1], [good_2, 2]] // параметр 1 и 2 указывают на количество
// console.log(cart)
function total_cart(cart) {
    let result = 0;
    for (let i = 0; i < cart.length; i++) {
        result += cart[i][0].price * cart[i][1]
    }
    return result
};
console.log(total_cart(cart));

// 3 задание

for (let i = 0; i < 10; console.log(i++)) { }

// 4 задание

let j = 1;
while (j <= 20) {
    let str = '';
    for (let k = 0; k <= j; k++) {
        str += "*"
    }
    console.log(str);
    j++
}