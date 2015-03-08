(function() {
  'use strict';

  angular
  .module('example')
  .config(Router);

  Router.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ];

  function Router($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('index', {
      url: '/',
      controller: 'example.controllers.MainController',
      templateUrl: 'modules/example/templates/example.html'
    });
  }
})();
