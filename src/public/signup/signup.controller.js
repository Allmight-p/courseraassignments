(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);


SignUpController.$inject = ["favcategories","LoginServices"];

function SignUpController(favcategories,LoginServices) {
var signupctrl = this;
signupctrl.savedetails = function() {

  signupctrl.result = LoginServices.SaveSignupdetails(signupctrl.username,signupctrl.lastname,signupctrl.email,signupctrl.phoneno,signupctrl.favdish);

}

signupctrl.favcategories = favcategories;


}



})();
