(function() {
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService'];
  function SignUpController(SignUpService) {
    var ctrl = this;

    ctrl.userInfo = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      menuNumber: ''
    };

    ctrl.submitUserInfo = function(shortName) {
      SignUpService.getMenuItem(shortName)
    };

    ctrl.checkCondition = function(field) {
      debugger;
    };
  }
})();
