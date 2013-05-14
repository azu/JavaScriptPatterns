/**
 * User: azu
 * Date: 2013/05/14
 * License: MIT License
 */
function Sale(price){
    this.price = price > 0 || 100;
    this.decorators_list = [];
}
Sale.decorators = {};
Sale.decorators.fedtax = {
    getPrice: function getPrice(price){
        return price + price * 5 / 100;
    }
};

Sale.decorators.quebec = {
    getPrice: function getPrice(price){
        return price + price * 7.5 / 100;
    }
};

Sale.decorators.fedtax = {
    getPrice: function getPrice(price){
        return price + price * 5 / 100;
    }
};
Sale.decorators.money = {
    getPrice: function getPrice(price){
        return "$" + price.toFixed(2);
    }
};
// add decorate
Sale.prototype.decorate = function (decorator){
    this.decorators_list.push(decorator);
};
Sale.prototype.getPrice = function (){
    var price = this.price;
    for (var i = 0, len = this.decorators_list.length; i < len; i++) {
        var name = this.decorators_list[i];
        price = Sale.decorators[name].getPrice(price);
    }
    return price;
}

var sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('quebec');
sale.decorate('money');
sale.getPrice();