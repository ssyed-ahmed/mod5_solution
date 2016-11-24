(function () {
  'use strict';

  angular.module('public')
    .service('MyInfoService', MyInfoService);

  function MyInfoService() {
    var service = this;

    service.myInfo = {};

    service.setMyInfo = function(userInfo) {
      service.myInfo.firstName = userInfo.firstName;
      service.myInfo.lastName = userInfo.lastName;
      service.myInfo.email = userInfo.email;
      service.myInfo.phone = userInfo.phone;
      service.myInfo.favouriteMenu = userInfo.menuNumber;
    };

    service.getMyInfo = function() {
      return service.myInfo;
    };
  }
})();
