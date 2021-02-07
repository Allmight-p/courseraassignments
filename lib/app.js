(function () {

angular.module("Menulistmodule")
.controller("menulistcontroller", menulistcontroller)
.controller("Itemcategorycontroller", Itemcategorycontroller);

menulistcontroller.$inject = ["MenuDataService"]
function menulistcontroller(MenuDataService) {
  var mlc = this;
  var promise = MenuDataService.getAllCategories();
  promise.then(function(response) {
        mlc.itemlist = response.data;
        MenuDataService.InsertinArray(mlc.itemlist);
      })
      .catch(function(error) {
        console.log(error);
      });
}

// Itemcategorycontroller.$inject = ["item","MenuDataService"]
  function Itemcategorycontroller(item,MenuDataService) {
    var icc = this;
    var promise = MenuDataService.getItemsForCategory();
    promise.then(function(response) {
          icc.iteminlist = response.data;
          MenuDataService.InsertinAns(icc.iteminlist.menu_items,item.short_name);
          icc.itemsfordisplay =  MenuDataService.getansitems();

        })
        .catch(function(error) {
          console.log(error);
        });
        // console.log(icc.iteminlist.menu_items.length);
        // for(var i=0;i<icc.iteminlist.menu_items.length;i++){
        //   if(item.short_name === icc.iteminlist.menu_items.short_name){
        //     icc.name = icc.iteminlist.menu_items.name;
        //     icc.shortname = icc.iteminlist.menu_items.short_name;
        //     icc.desc = icc.iteminlist.menu_items.description;
        //   }
        // }
        // icc.name = item.name;
        // icc.shortname = item.short_name;
        // icc.description = item.description;

  }

})();
