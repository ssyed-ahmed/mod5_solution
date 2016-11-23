(function() {
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService'];
  function SignUpController(SignUpService) {
    var $ctrl = this;
    $ctrl.userInfo = {};

    $ctrl.submit = function() {
      SignUpService.getMenuItems($ctrl.userInfo.menuNumber).then(function(response) {
        $ctrl.submitted = true;
      })
      .catch(function() {

      });
    }
  }
})();
