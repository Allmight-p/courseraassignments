(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);


MyinfoController.$inject = ["details","LoginServices"];

function MyinfoController(details,LoginServices) {
var myinfoctrl = this;
myinfoctrl.details = details;

}



})();
