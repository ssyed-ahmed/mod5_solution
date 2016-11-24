(function() {
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService', 'MyInfoService'];
  function SignUpController(SignUpService, MyInfoService) {
    var $ctrl = this;
    $ctrl.userInfo = {};

    $ctrl.submit = function() {
      SignUpService.getMenuItems($ctrl.userInfo.menuNumber).then(function(response) {
        $ctrl.submitted = true;
        $ctrl.workedFine = true;
        $ctrl.setMyInfo();
      })
      .catch(function() {
        $ctrl.workedFine = false;
        $ctrl.submitted = false;
      });
    };

    $ctrl.validateMenuNumber = function() {
      SignUpService.getMenuItems($ctrl.userInfo.menuNumber).then(function(response) {
        if (response.menu_items.length === 0) {
          $ctrl.workedFine = false;
        } else {
            $ctrl.workedFine = true;
        }
      })
      .catch(function() {
        $ctrl.workedFine = false;
      });
    };

    $ctrl.setMyInfo = function() {
      MyInfoService.setMyInfo($ctrl.userInfo);
    };
  }
})();
