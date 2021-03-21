(function () {
"use strict";

angular.module('public')
.service('LoginServices', LoginServices);

LoginServices.$inject = ['$rootScope'];
function LoginServices($rootScope) {
  var logservice = this;
  var name;var lastname;var emailid;var phoneno;var favitem;
  var shortname;var fulldet;

  logservice.SaveSignupdetails = function(username,lastnme,mail,phne,dish) {
        name = username;
        lastname = lastnme;
        emailid = mail;
        phoneno = phne;
        favitem = dish;
        fulldet = dish;
        shortname = favitem.split('-');
        favitem = shortname[0].trim();

        return "Your information has been saved";
  }

  logservice.GetSignupdetails = function() {
    console.log(name);
      return {name,lastname,emailid,phoneno,favitem,fulldet};
  }


}


})();
