(function() {
  'use strict';

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MyInfoService'];
  function MyInfoController(MyInfoService) {
    var $ctrl = this;

    $ctrl.myInfo = {};

    var myInfoObj = MyInfoService.getMyInfo();
    $ctrl.myInfo.firstName = myInfoObj.firstName;
    $ctrl.myInfo.lastName = myInfoObj.lastName;
    $ctrl.myInfo.email = myInfoObj.email;
    $ctrl.myInfo.phone = myInfoObj.phone;
    $ctrl.myInfo.favouriteMenu = myInfoObj.favouriteMenu;
  }
})();
