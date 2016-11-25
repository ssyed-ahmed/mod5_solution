(function() {
  'use strict';

  angular.module('public')
    .directive('myInfo', MyInfo);

  //MyInfo.$inject = ['MyInfoController'];
  function MyInfo() {
    var ddo = {
      templateUrl: 'src/public/my-info/my-info.template.html'
    };

    return ddo;
  }
})();
