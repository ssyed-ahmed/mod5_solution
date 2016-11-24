(function() {
  'use strict';

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MyInfoService'];
  function MyInfoController(MyInfoService) {
    var $ctrl = this;

    $ctrl.myInfo = {};

    $ctrl.isUserRegistered = function() {
      var myInfoObj = MyInfoService.getMyInfo();
      if ($ctrl.isObjectEmpty(myInfoObj)) {
        return false;
      }
      $ctrl.isRegistered = true;
      $ctrl.myInfo.firstName = myInfoObj.firstName;
      $ctrl.myInfo.lastName = myInfoObj.lastName;
      $ctrl.myInfo.email = myInfoObj.email;
      $ctrl.myInfo.phone = myInfoObj.phone;
      $ctrl.myInfo.favouriteMenu = myInfoObj.favouriteMenu;
      return true;
    };

    $ctrl.isObjectEmpty = function(obj) {
      if(Object.getOwnPropertyNames(obj).length > 0) {
        return false;
      }
      return true;
    };
  }
})();
