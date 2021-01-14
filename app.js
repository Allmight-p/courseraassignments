(function() {
  'use strict';
  angular.module("LunchCheck", [])
  .controller("LunchCheckController", Lunchcheckcontrol);
  Lunchcheckcontrol.$inject = ['$scope'];
  function Lunchcheckcontrol($scope) {
      $scope.name = "";
      $scope.msg = "";
      $scope.msgcolor = "";

      $scope.clickme = function() {
        if($scope.name == ""){
        $scope.msg = Sendmessage($scope.name);
      }
      else {
        var dishes = $scope.name;
        var commas = dishes.split(",");
        var count = 0;
        for(var i=0;i<commas.length;i++){
          count++;
        }
        $scope.msg = Sendmessage(count);
      }
      }
      function Sendmessage(string) {
        if(string == 0){
          $scope.msgcolor = "danger";
          return "Please enter the data";
        }
        else if (string <= 3) {
          $scope.msgcolor = "success";
          return "Enjoy!";
        }
        else if (string > 3) {
          $scope.msgcolor = "success";
          return "Too much!";
        }
      }
  };
})()
