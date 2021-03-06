(function () {
  'use strict';

  angular.module('public')
    .service('SignUpService', SignUpService);

  SignUpService.$inject = ['$http', 'ApiPath'];
  function SignUpService($http, ApiPath) {
    var service = this;

    service.getMenuItems = function(shortName) {
      var config = {};
      if (shortName) {
        config.params = {'category': shortName};
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    }
  }
})();
