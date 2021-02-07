(
function() {
angular.module('Menulistmodule')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuDataService',MenuDataService);

MenuDataService.$inject = ["$http","ApiBasePath","$rootScope","$q","$timeout"];
function MenuDataService($http,ApiBasePath,$rootScope,$q,$timeout) {
  var service = this;
  var items = [];
  var ansvalue = [];
  service.getAllCategories = function() {
        var response = $http({
          url : (ApiBasePath + "/categories.json")
        });
        return response;
      };

      service.getItemsForCategory = function(categoryShortName) {
            var response = $http({
              url : (ApiBasePath + "/menu_items.json?category=")
            });
            return response;
          };

      service.getItems = function () {
      var deferred = $q.defer();

      // Wait 2 seconds before returning
      $timeout(function () {
        // deferred.reject(items);
        deferred.resolve(items);
      }, 100);

      return deferred.promise;
    };

    service.InsertinArray = function (values) {
      items = [];
      for(var i=0;i<values.length;i++){
        items.push(values[i]);
      }
    };
    service.InsertinAns = function (values,shortname) {
      var i=0;
      ansvalue = [];
      for(i=0;i<values.length;i++){
        if(values[i].short_name.includes(shortname)){
          ansvalue.push(values[i]);
        }

      }
      return ansvalue;
    };
    service.getansitems = function () {
      return ansvalue;
    }


}
}
)();
