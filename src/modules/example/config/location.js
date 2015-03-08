(function() {
  'use strict';

  angular
  .module('example')
  .config(RouterConfig);

  RouterConfig.$inject = [
    '$urlMatcherFactoryProvider',
    '$urlRouterProvider', 
    '$locationProvider'
  ];

  function RouterConfig($urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
    $urlMatcherFactoryProvider.strictMode(false);
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }
})();
