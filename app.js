(function() {
  'use strict';

  angular.module('Shoppinglistapp',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var buy = this;

      buy.items = ShoppingListCheckOffService.displayallitems();
      buy.boughtmessage = ShoppingListCheckOffService.msg();
      buy.additem = function (itemindex) {
        ShoppingListCheckOffService.additem(buy.items[itemindex].name,buy.items[itemindex].quantity,itemindex)
        buy.errormessage = ShoppingListCheckOffService.checkallitemstobuy(buy.items.length);
        buy.boughtmessage = ShoppingListCheckOffService.msg();
      };

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var bought = this;
      bought.items = ShoppingListCheckOffService.displayallboughtitems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var tobuy = [
          {
            name : "Milk",
            quantity : "2"
          },
          {
            name : "Donuts",
            quantity : "2"
          },
          {
            name : "Cookies",
            quantity : "3"
          },
          {
            name : "Chocolates",
            quantity : "10"
          },
          {
            name : "Chips",
            quantity : "8"
          }
        ];
        var bought = [];


        service.additem = function (itemname,itemquantity,itemindex) {
          var items = {
            name : itemname,
            quantity : itemquantity
          };
          bought.push(tobuy[itemindex]);
          tobuy.splice(itemindex, 1);
          // console.log(bought.length);
        };

        service.displayallitems = function() {
      return tobuy;
    };

    service.displayallboughtitems = function() {
  return bought;
};
service.checkallitemstobuy = function (maxvalue) {
  if(maxvalue == 0){
    return "Everything is bought!";
  }
};
service.msg = function () {
  if(bought.length == 0){
      return "Nothing bought yet.";
  }
};
}

}

)();
