(function() {
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  function SignUpController() {
    var ctrl = this;

    var userInfo = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      menuNumber: ''
    };

    ctrl.submitUserInfo = function() {
      
    }
  }
})();
