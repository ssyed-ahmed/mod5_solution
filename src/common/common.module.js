(function() {
  'use strict';

  angular.module('common', [])
    .constant('ApiPath', 'https://ssyed-ahmed-course5-new.herokuapp.com')
    .config(config);

  config.$inject = ['$httpProvider'];

  function config($httpProvider) {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }
})();
