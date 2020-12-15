// создать объкт корзины
// создать объекты товаров
// реализовать подсчет корзины
// реализовать изменение вида корзины
// добавление товара при нажатии на кнопку

var basket = {
    sum: 0,
    count: 0,
    id_goods: [],
    selector: '.basket',


    add_good: function (good, quan) {
        this.sum += good.price * quan;
        this.count += quan;
        this.id_goods.push([good.id, quan]);
        alert("Товар добавлен!");
    },

    render: function () {
        let obj = document.querySelector(this.selector);
        obj.innerHTML = `В корзине ${this.count} товаров на сумму ${this.sum} рублей`;
    }
}

var good1 = {
    id: 1,
    price: 100,
    selector: '#good1',
}
var good2 = {
    id: 2,
    price: 1000,
    selector: '#good2',
}

var good3 = {
    id: 3,
    price: 500,
    selector: '#good3',
}



function addlisten(good) {
    let obj = document.querySelector(good.selector);
    obj.addEventListener('click', () => {
        basket.add_good(good, 1);
        basket.render();
    });
}

listen1 = addlisten(good1);
listen2 = addlisten(good2);
listen3 = addlisten(good3);

console.log(basket)
console.log(listen1)