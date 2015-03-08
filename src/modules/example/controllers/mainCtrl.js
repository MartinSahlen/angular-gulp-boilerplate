(function() {
  'use strict';

  angular
  .module('example')
  .controller('example.controllers.MainController', MainController);

  MainController.$inject = [
  '$scope'
  ];

  function MainController($scope) {
    $scope.message = 'Hello World!';
  }
})();
