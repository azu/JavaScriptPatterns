/**
 * User: azu
 * Date: 2013/04/23
 * License: MIT License
 */
function Sale(price){
    this.price = price || 100; // デフォルト値
}
Sale.prototype.getPrice = function (){
    return this.price;
}
Sale.prototype.decorate = function (decorator){
    var F = function (){
        },
        overrides = this.constructor.decorators[decorator],
        i, newobj;
    F.prototype = this;
    newobj = new F();
    newobj.displayName = decorator;
    newobj.uber = F.prototype;
    for (i in overrides) {
        if (overrides.hasOwnProperty(i)) {
            newobj[i] = overrides[i];
        }
    }
    return newobj;
}

Sale.decorators = {};
Sale.decorators.fetax = {
    getPrice: function getPrice(){
        var price = this.uber.getPrice();
        price += price * (5 / 100);
        return price;
    }
};
Sale.decorators.quebec = {
    getPrice: function getPrice(){
        var price = this.uber.getPrice();
        price += price * (7.5 / 100);
        return price;
    }
}

Sale.decorators.money = {
    getPrice: function getPrice(){
        return "$" + this.uber.getPrice().toFixed(2);
    }
}

Sale.decorators.cd = {
    getPrice: function getPrice(){
        return "CDN$" + this.uber.getPrice().toFixed(2);
    }
}

var sale = new Sale(100);
sale = sale.decorate('fedtax');
sale = sale.decorate('quebec');
sale = sale.decorate('money');
sale.uber.getPrice();