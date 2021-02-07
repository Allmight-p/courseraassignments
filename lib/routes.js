(function() {
'use strict';
  angular.module('Menulistmodule',['ui.router']);
  // .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  // .controller('Menuappcontroller', MenuAppController)
  // .service('MenuDataService',MenuDataService);

  angular.module('Menulistmodule')
  .config(RoutesConfig)
//routes.js
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');


 $stateProvider
 .state('mainpage', {
   url: '/',
   templateUrl: 'frontendtemplates/mainpage.html'
 })
 .state('home', {
   url: '/categories',
   templateUrl: 'frontendtemplates/home.html',
   resolve:{
     item:['MenuDataService',function (MenuDataService) {
            return MenuDataService.getItems();
     }]
   }
 })

 .state('itemcategory', {
   url: '/itemcategory/{itemId}',
   templateUrl: 'frontendtemplates/itemcategory.html',
   controller:'Itemcategorycontroller as icc',
   resolve:{
     item:['$stateParams','MenuDataService',function ($stateParams,MenuDataService) {
            return MenuDataService.getItems().then(function(items) {
                    return items[$stateParams.itemId];
            });
     }]
   }
 });

}



})();
